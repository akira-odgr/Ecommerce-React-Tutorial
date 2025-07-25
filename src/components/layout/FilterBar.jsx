import { GoChevronDown } from "react-icons/go";
import { SelectBox } from "@/components/ui/SelectBox";
import { options } from "@/data/filterBarData";

export const FilterBar = () => {
    return (
        <div className="py-12 flex items-center justify-center flex-wrap gap-10 p-4 bg-white border-b border-gray-300 mb-10">
            {Object.entries(options).map(([label, items]) => (
                <SelectBox key={label} label={label} items={items} />
            ))}
        </div>
    );
};
