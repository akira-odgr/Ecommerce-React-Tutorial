import { cn } from "@/utils/cn";

export const Button = ({
    children,
    type = "button",
    valiant = "primary",
    className = "",
    ...props
}) => {
    const base =
        "px-6 py-3 font-bold rounded-full cursor-pointer transition-all duration-300";

    const valiantCss = {
        primary: "bg-indigo-700 text-white hover:bg-indigo-800",
        outline: "border border-white hover:bg-white hover:text-indigo-700",
    };

    const merged = cn(base, valiantCss[valiant], className);

    return (
        <button type={type} className={merged} {...props}>
            {children}
        </button>
    );
};
