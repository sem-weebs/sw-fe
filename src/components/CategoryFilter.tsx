import { categoryList } from "@/utils/constant";
import React, { ComponentType } from "react";

type Props = {
  toggleCategories: () => void;
  isCollapsed: boolean;
};

export const CategoryFilter: ComponentType<Props> = ({
  toggleCategories,
  isCollapsed,
}) => {
  return (
    <>
      <div className="mt-8">
        <div className="flex flex-col space-y-2 items-center bg-gray-800 p-4 rounded-md">
          <h2
            className="text-2xl font-semibold mb-4 text-white cursor-pointer"
            onClick={toggleCategories}
          >
            🔍 Categories {isCollapsed ? "▼ " : "▲"}
          </h2>
          <div className={isCollapsed ? "hidden" : "grid grid-cols-10 gap-4"}>
            {categoryList.map((category, index) => (
              <label key={index} className="flex items-center text-white">
                <input type="checkbox" className="mr-2 border-2 border-white" />
                <span className="text-gray-300 text-left">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
