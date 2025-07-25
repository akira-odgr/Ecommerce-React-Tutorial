import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaYoutube,
    FaTiktok,
    FaGooglePlusG,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FooterSection } from "@/components/ui/FooterSection";
import { links1, links2, links3 } from "@/data/footerData.js";
import { cn } from "@/utils/cn";
import VisaIcon from "@/assets/icons/visa.svg?react";
import MasterCard from "@/assets/icons/mastercard.svg?react";
import Maestro from "@/assets/icons/maestro.svg?react";
import AppleCard from "@/assets/icons/appleCard.svg?react";
import BitCoin from "@/assets/icons/bitCoin.svg?react";

const socialMedia = [
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaYoutube,
    FaTiktok,
    FaTimes,
    FaGooglePlusG,
];

export const Footer = () => {
    return (
        <footer className="bg-black text-white text-sm px-6 py-12 mt-36">
            <div className="max-w-screen-xl mx-auto">
                <div
                    className={cn(
                        "flex flex-col justify-between gap-8",
                        "md:flex-row"
                    )}
                >
                    <FooterSection title={"Show"} links={links1} />
                    <FooterSection title={"Customer Service"} links={links2} />
                    <FooterSection title={"Information"} links={links3} />
                    <div className="text-gray-400 mb-4">
                        <h3
                            className={cn(
                                "text-white font-semibold uppercase tracking-wide text-sm mb-2",
                                "mb-4"
                            )}
                        >
                            Newsletter Sign Up
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Sign up for exclusive updates, new arrivals &
                            insider only discount
                        </p>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="enter your email address"
                                className="px-4 py-2 flex-1 border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none"
                            />
                            <button className="bg-white text-black font-semibold px-4 cursor-pointer">
                                SUBMIT
                            </button>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            {socialMedia.map((Icon) => (
                                <Icon
                                    key={Icon}
                                    className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        "mt-10 border-t border-gray-700 pt-6 flex flex-col justify-between items-center",
                        "md:flex-row"
                    )}
                >
                    <p>
                        &copy; {new Date().getFullYear()}, Website Demo. All
                        Rights Reserved. Theme By U-GINE MEDIA
                    </p>
                    <div className="flex gap-x-2">
                        {/* Visa Card */}
                        <VisaIcon />
                        {/* Mastercard */}
                        <MasterCard />
                        <Maestro />
                        {/* Apple Card */}
                        <AppleCard />
                        {/* Bitcoin */}
                        <BitCoin />
                    </div>
                </div>
            </div>
        </footer>
    );
};
