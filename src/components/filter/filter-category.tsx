"use client";

// components
import { Checkbox } from "@/components/ui/checkbox";

// assets
import ProductCategoryJSON from "@/assets/json/product-category.json";
import { useState } from "react";

interface FilterCategoryProps {
  value?: string[];
  onChange: (selectedCategories: string[]) => void;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  value = [],
  onChange,
}) => {
  const [selectedCategories, setSelectedCategories] = useState(value);
  return (
    <>
      <div className="text-base">Kategori</div>
      <div className="flex flex-col gap-2 my-4">
        {ProductCategoryJSON.map((category) => (
          <div
            key={`productCategory-${category.id}`}
            className="flex gap-2 items-center"
          >
            <Checkbox
              className="w-6 h-6 border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground"
              id={category.id}
              onCheckedChange={(isChecked) =>
                setSelectedCategories((selectedCategory) => {
                  const newCategories = !isChecked
                    ? selectedCategory.filter((val) => val !== category.id)
                    : [...selectedCategory, category.id];

                  onChange(newCategories);
                  return newCategories;
                })
              }
              checked={selectedCategories.includes(category.id)}
            />
            <label
              htmlFor={category.id}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {category.title}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterCategory;
