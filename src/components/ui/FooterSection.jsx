import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { cn } from "@/utils/cn";

export const FooterSection = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cn("w-full mb-6", "md:w-auto md:mb-0")}>
            <div
                className={cn(
                    "flex justify-between items-center cursor-pointer",
                    "md:block"
                )}
            >
                <h3
                    className={cn(
                        "text-white font-semibold uppercase tracking-wide text-sm mb-2",
                        "md:mb-4"
                    )}
                >
                    {title}
                </h3>
                <span
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiMinus /> : <GoPlus />}
                </span>
            </div>
            <ul
                className={cn(
                    "text-sm text-gray-400 space-y-2",
                    "md:block",
                    isOpen ? "block" : "hidden"
                )}
            >
                {links.map((link, index) => (
                    <li
                        key={index}
                        className={cn("cursor-pointer", "hover:text-white")}
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};
