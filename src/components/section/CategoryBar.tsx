"use client";

import React from "react";

import AllIcon from "@/assets/border-all-regular.svg";
import AllFilledIcon from "@/assets/border-all-filled.svg";
import BookIcon from "@/assets/book-regular.svg";
import BookFilledIcon from "@/assets/book-filled-regular.svg";
import DesignIcon from "@/assets/design-ideas-regular.svg";
import DesignFilledIcon from "@/assets/design-ideas-filled.svg";
import CodeIcon from "@/assets/code-block-regular.svg";
import CodeFilledIcon from "@/assets/code-block-filled.svg";
import ChartIcon from "@/assets/chart-multiple-regular.svg";
import ChartFilledIcon from "@/assets/chart-multifple-filled.svg";
import clsx from "clsx";

const CATEGORIES = [
  { name: "전체", defaultIcon: AllIcon, activeIcon: AllFilledIcon },
  { name: "학생", defaultIcon: BookIcon, activeIcon: BookFilledIcon },
  { name: "디자이너", defaultIcon: DesignIcon, activeIcon: DesignFilledIcon },
  { name: "개발자", defaultIcon: CodeIcon, activeIcon: CodeFilledIcon },
  { name: "마케터", defaultIcon: ChartIcon, activeIcon: ChartFilledIcon },
];

interface CategoryBarProps {
  selectedCategory: string;
  onSelect: (name: string) => void;
  className?: string;
}

const CategoryBar = ({
  selectedCategory,
  onSelect,
  className,
}: CategoryBarProps) => {
  return (
    <nav className={clsx("overflow-x-auto no-scrollbar", className)}>
      <ul className="flex gap-2 pc:gap-3">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.name;
          const Icon = isSelected ? category.activeIcon : category.defaultIcon;

          return (
            <li
              key={category.name}
              onClick={() => onSelect(category.name)}
              className={clsx(
                "flex shrink-0 items-center inset-ring-1 bg-white-200 px-2 py-1 pc:px-4 pc:py-2 cursor-pointer",
                "typo-mo-body-s500 pc:typo-pc-body-s500 text-black-800 pc:text-black-900",
                isSelected && "bg-white-500"
              )}
            >
              <Icon className="size-5 pc:size-5 mr-1" />
              {category.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryBar;
