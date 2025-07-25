import { cn } from "@/utils/cn";
import { useEffect } from "react";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

export const ShoppingCart = ({ isOpen, onClose }) => {
    const cartRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 transition-all duration-300",
                isOpen ? "pointer-events-auto" : "pointer-events-none"
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 bg-black transition-opacity duration-300",
                    isOpen ? "opacity-40" : "opacity-0"
                )}
            />
            <div
                ref={cartRef}
                className={cn(
                    "absolute top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transition-transform duration-300",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button
                        onClick={onClose}
                        className="flex items-center px-2 py-1 border text-black rounded border-gray-400 cursor-pointer"
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>
                <p className="text-sm text-gray-500">0 items</p>
                <p className="text-sm text-gray-500 my-4">
                    Free shipping for all orders over $1000.00!
                </p>
                <p className="text-sm text-gray-600 text-center">
                    Your car is empty
                </p>
                <button
                    className={cn(
                        "mt-8 bg-indigo-600 text-white px-4 py-3 rounded w-full uppercase font-semibold cursor-pointer transition",
                        "hover:bg-indigo-700 "
                    )}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
