import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import {
    MdArrowCircleDown,
    MdChevronRight,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { cn } from "@/utils/cn";
import { ShoppingCart } from "@/components/ui/ShoppingCart";
import { Button } from "@/components/ui/Button";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

    return (
        <>
            <header className="flex justify-between items-center px-6 py-4 bg-transparent">
                <a href="" className="text-2xl font-bold">
                    FabrikFit
                </a>

                {/* モバイルメニューボタン */}
                <button
                    onClick={() => toggleMenu("mobile")}
                    className="lg:hidden flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer"
                >
                    <IoIosMenu className="text-3xl" />
                </button>

                {/* デスクトップナビゲーション */}
                <nav className="hidden lg:block relative">
                    <ul className="flex gap-6 font-medium">
                        <li className="cursor-pointer hover:text-indigo-700">
                            Home
                        </li>

                        {/* ショップドロップダウン */}
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center gap-1 hover:text-indigo-700">
                                <span>Shop</span>

                                <MdOutlineKeyboardArrowDown className="group-hover:rotate-180 transition-transform duration-100" />
                            </div>

                            <ul
                                className={cn(
                                    "absolute left-0 top-full mt-2 w-48 opacity-0 invisible bg-white text-black rounded-md shadow-lg transition-all duration-300 z-50",
                                    "group-hover:opacity-100 group-hover:visible"
                                )}
                            >
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 rounded-t-md">
                                    Men
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">
                                    Women
                                </li>

                                {/* サブメニュー */}
                                <li className="relative group/submenu">
                                    <span className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 flex items-center justify-between  rounded-b-md">
                                        Accessories
                                        <MdChevronRight />
                                    </span>
                                    <ul
                                        className={cn(
                                            "absolute left-full top-0 ml-1 w-44 opacity-0 invisible bg-white text-black rounded-md shadow-lg transition-all duration-300 z-50",
                                            "group-hover/submenu:opacity-100 group-hover/submenu:visible"
                                        )}
                                    >
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 rounded-t-md">
                                            Chargers
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">
                                            Cables
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700 rounded-b-md">
                                            Headphones
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* コレクションズドロップダウン */}
                        <li className="group relative cursor-pointer">
                            <div className="flex items-center gap-1 hover:text-indigo-700">
                                <span>Collections</span>
                                <MdOutlineKeyboardArrowDown className="group-hover:rotate-180 transition-transform duration-100" />
                            </div>

                            <ul
                                className={cn(
                                    "absolute top-full left-0 w-56 bg-white text-black shadow-lg rounded-md opacity-0 invisible transition-opacity duration-300 z-50",
                                    "group-hover:opacity-100 group-hover:visible"
                                )}
                            >
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">
                                    Essentials
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">
                                    StreetWear
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-700">
                                    WorkWear
                                </li>
                            </ul>
                        </li>
                        <li>LookBook</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                {/* モバイルナビ */}
                {openMenu === "mobile" && (
                    <nav className="fixed lg:hidden inset-0 bg-gray-950 backdrop-blur-lg z-50 flex flex-col">
                        <div className="bg-white w-3/4 max-w-xs h-full p-6 shadow-lg overflow-y-auto">
                            <button
                                className="flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer mb-6"
                                onClick={() => setOpenMenu(null)}
                            >
                                <IoMdClose className="text-3xl" />
                            </button>

                            <ul className="flex flex-col gap-4 font-medium">
                                <li className="cursor-pointer hover:text-indigo-700">
                                    Home
                                </li>

                                {/* ショップドロップダウン */}
                                <li>
                                    <details>
                                        <summary className="cursor-pointer hover:text-indigo-700">
                                            Shop
                                        </summary>
                                        <ul className="ml-4 mt-2 space-y-2">
                                            <li className="hover:text-indigo-700 cursor-pointer">
                                                Men
                                            </li>
                                            <li className="hover:text-indigo-700 cursor-pointer">
                                                Women
                                            </li>
                                            <li>
                                                <details>
                                                    <summary className="hover:text-indigo-700 cursor-pointer">
                                                        Accessories
                                                    </summary>
                                                    <ul className="ml-4 mt-1 space-y-2">
                                                        <li className="hover:text-indigo-700 cursor-pointer">
                                                            Chargers
                                                        </li>
                                                        <li className="hover:text-indigo-700 cursor-pointer">
                                                            Cables
                                                        </li>
                                                        <li className="hover:text-indigo-700 cursor-pointer">
                                                            Headphones
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>

                                {/* コレクションドロップダウン */}
                                <li>
                                    <details>
                                        <summary className="hover:text-indigo-700 cursor-pointer">
                                            Collections
                                        </summary>
                                        <ul className="ml-4 mt-1 space-y-2">
                                            <li className="hover:text-indigo-700 cursor-pointer">
                                                Essentials
                                            </li>
                                            <li className="hover:text-indigo-700 cursor-pointer">
                                                StreetWear
                                            </li>
                                            <li className="hover:text-indigo-700 cursor-pointer">
                                                WorkWear
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="hover:text-indigo-700 cursor-pointer">
                                    LookBook
                                </li>
                                <li className="hover:text-indigo-700 cursor-pointer">
                                    Contact
                                </li>
                            </ul>
                            <div className="mt-8 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-700"
                                />
                                <button className="px-6 py-3 bg-indigo-700 cursor-pointer text-white rounded-full font-semibold hover:bg-indigo-800 transition-colors duration-300">
                                    Create an Account
                                </button>
                            </div>
                        </div>
                    </nav>
                )}

                <div className="hidden lg:flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search...."
                        className="px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-700"
                    />
                    <span
                        className="text-xl cursor-pointer"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <IoCartOutline className="text-gray-900 hover:text-indigo-700 text-2xl" />
                    </span>
                    <Button className="text-sm font-semibold">
                        Create an Account
                    </Button>
                </div>
            </header>
            <ShoppingCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    );
};

export default Header;
