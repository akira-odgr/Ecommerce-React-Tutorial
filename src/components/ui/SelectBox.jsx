import { cn } from "@/utils/cn";
import { GoChevronDown } from "react-icons/go";

export const SelectBox = ({ label, items }) => {
    return (
        <div className="relative">
            <select
                className={cn(
                    "appearance-none border-gray-300 rounded px-4 pr-10 py-2 bg-white text-sm cursor-pointer",
                    "focus:outline-none"
                )}
                defaultValue=""
            >
                <option value="" disabled>
                    {label}
                </option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <GoChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-event-none" />
        </div>
    );
};
