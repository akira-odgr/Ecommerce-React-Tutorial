import { cn } from "@/utils/cn";
import { Button } from "../ui/Button";

export const Hero = () => {
    return (
        <section
            className={cn(
                "relative flex items-center h-[70vh] hero-background",
                "md:h-[90vh]"
            )}
        >
            <div className="absolute inset-0 bg-gray-950/60 z-0" />
            <div
                className={cn(
                    "relative z-10 px-4 max-w-full w-full text-white",
                    "sm:px-8 md:pl-10 md:max-w-2xl"
                )}
            >
                <p className="uppercase text-base sm:text-lg tracking-widest text-gray-300">
                    Create your own collection
                </p>
                <h1 className="text-[clamp(36px,8vw,60px)] font-extrabold leading-tight capitalize">
                    Elevate Your Style with{" "}
                    <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
                        FabrikFit
                    </span>
                </h1>
                <p
                    className={cn(
                        "mt-4 text-base text-indigo-100",
                        "sm:mt-6 sm:text-lg md:text-xl"
                    )}
                >
                    Discover premium streetwar & Lorem ipsum dolor sit amet
                    consectetur adipisicing.
                </p>
                <div
                    className={cn(
                        "mt-6 flex flex-col gap-4 justify-center",
                        "sm:mt-8 sm:flex-row",
                        "md:justify-start"
                    )}
                >
                    <Button>Shop Now</Button>
                    <Button valiant="outline">Explore Collections</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
