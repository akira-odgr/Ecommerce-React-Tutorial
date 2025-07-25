import { useState } from "react";

import { cn } from "@/utils/cn";
import { products } from "@/data/productData";
import { GoChevronDown } from "react-icons/go";

export const ProductGrid = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [loadMore, setLoadMore] = useState(false);

    const visibleProducts = products.slice(0, visibleCount);

    const handleLoadMore = () => {
        setLoadMore(true);
        setTimeout(() => {
            setLoadMore(false);
            setVisibleCount((prev) => prev + 4);
        }, 2000);
    };

    return (
        <section className="px-4 py-10 max-w-7xl mx-auto relative">
            <div className="relative mb-3 w-fit ml-auto">
                <select
                    className={cn(
                        "appearance-none border border-gray-300 rounded px-4 pr-10 py-2 bg-white text-sm cursor-pointer",
                        "focus:outline-none"
                    )}
                    defaultValue={"Featured"}
                >
                    <option value="" disabled>
                        Featured
                    </option>
                    <option value={"newest"}>Newest</option>
                    <option value="price-low-high">Price: Low to Hight</option>
                    <option value="price-hight-low">Price: High to Low</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="top-rated">Top Rated</option>
                    <option value="most-popular">Most Popular</option>
                </select>
                <GoChevronDown className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 pointer-events-none" />
            </div>

            {/* グリッドプロダクト */}
            <div
                className={cn(
                    "grid grid-cols-1 gap-8",
                    "sm:grid-cols-2",
                    "md:grid-cols-3",
                    "lg:grid-cols-4"
                )}
            >
                {visibleProducts.map((product, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative bg-white shadow transition-all duration-300 rounded overflow-hidden group",
                            "hover:shadow-lg"
                        )}
                    >
                        {product.saleTag && (
                            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 z-10">
                                {product.saleTag}
                            </div>
                        )}

                        {!product.available && (
                            <div className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-2 py-1 z-10">
                                Sold out
                            </div>
                        )}
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 opacity-0 z-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={product.image}
                                alt={product.name}
                                className={cn(
                                    "w-full h-[400px] object-cover transition-transform duration-700",
                                    "group-hover:scale-110"
                                )}
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-gray-700 font-bold uppercase text-sm">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {product.description}
                            </p>
                            <div className="mt-3">
                                {product.originalPrice && (
                                    <span className="text-gray-400 line-through mr-2">
                                        {product.originalPrice}
                                    </span>
                                )}
                                <span className="text-red-500 font-bold">
                                    {product.salePrice}
                                </span>
                            </div>
                            <button
                                className={cn(
                                    "absolute bottom-56 left-1/2 transform -translate-x-1/2 translate-y-20 w-1/2 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded transition duration-500 opacity-0 z-100",
                                    "hover:bg-gray-700",
                                    "group-hover:opacity-100 group-hover:translate-y-0"
                                )}
                            >
                                {product.available
                                    ? "Add to Cart"
                                    : "Notify Me"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < products.length ? (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        className={cn(
                            "px-20 py-2 bg-transparent text-gray-700 border cursor-pointer uppercase transition duration-300",
                            "hover:bg-indigo-700 hover:text-white"
                        )}
                    >
                        {loadMore ? "Loading..." : "Load More"}
                    </button>
                </div>
            ) : (
                <div className="mt-10 text-center">
                    <p className="text-gray-500">No More products to display</p>
                </div>
            )}
        </section>
    );
};
