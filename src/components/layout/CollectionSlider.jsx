import { collections } from "@/data/colectionSliderData";
import { cn } from "@/utils/cn.js";

export const CollectionSlider = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 py-12 px-8">
                <img
                    src={collections[0].image}
                    alt="model-1"
                    className={cn("w-full h-auto object-cover", "md:w-72")}
                />
                <div
                    className={cn(
                        "border p-6 text-center w-full flex flex-col justify-between",
                        "md:w-72"
                    )}
                >
                    <p className="text-gray-500 text-sm uppercase">
                        New Collection
                    </p>
                    <h2 className="text-2xl font-bold my-2">
                        {collections[0].hashtag}
                    </h2>
                    <p className="text-gray-600 text-sm">
                        {collections[0].text}
                    </p>
                    <button
                        className={cn(
                            "bg-gray-600 text-white px-4 py-2 font-semibold cursor-pointer transition-colors duration-300",
                            "hover:bg-gray-700"
                        )}
                    >
                        SHOP NOE
                    </button>
                </div>
                <img
                    src={collections[1].image}
                    alt="model-1"
                    className={cn("w-full h-auto object-cover", "md:w-72")}
                />
                <div
                    className={cn(
                        "border p-6 text-center w-full flex flex-col justify-between",
                        "md:w-72"
                    )}
                >
                    <p className="text-gray-500 text-sm uppercase">
                        New Collection
                    </p>
                    <h2 className="text-2xl font-bold my-2">
                        {collections[1].hashtag}
                    </h2>
                    <p className="text-gray-600 text-sm">
                        {collections[1].text}
                    </p>
                    <button
                        className={cn(
                            "bg-gray-600 text-white px-4 py-2 font-semibold cursor-pointer transition-colors duration-300",
                            "hover:bg-gray-700"
                        )}
                    >
                        SHOP NOE
                    </button>
                </div>
            </div>
            <p
                className={cn(
                    "px-4 text-sm max-w-3xl w-full mx-auto text-center text-gray-600 my-14",
                    "sm:px-8",
                    "md:text-base"
                )}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                nihil modi, ea eligendi placeat aliquid. Sapiente, neque sequi.
                Est nesciunt magnam a consequuntur aspernatur corporis earum
                placeat. Delectus eaque consequatur nobis, perferendis error
                rerum, distinctio fugit dolorem, cum repellendus necessitatibus.
            </p>
        </>
    );
};
