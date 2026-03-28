"use client";

import ChevronDown from "@/assets/chevron-circle-down-regular.svg";
import ChevronUp from "@/assets/chevron-circle-up-regular.svg";
import { cn } from "@/hooks/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ProductItem {
    id: string | number;
    name: string;
    url: string;
    image?: string;
}

interface DropdownProps {
    items: ProductItem[];
    className?: string;
}

const Dropdown = ({ items = [], className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    if (items.length === 0) return null;

    const isSingleItem = items.length === 1;
    const displayItem = items[0];

    useEffect(() => {
        if (isSingleItem) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isSingleItem]);

    const handleLinkOpen = (url: string) => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <div
            className={cn(
                "relative mx-auto bg-white transition-all",
                "pc:w-284 mo:w-78",
                className
            )}
            ref={dropdownRef}
        >
            {/* 1. 트리거 영역 */}
            <div
                className={cn(
                    "flex h-14 w-full items-center justify-between px-3 py-2 transition-all",

                    "inset-ring-1 inset-ring-[#141414]",

                    !isSingleItem && isOpen
                        ? "relative z-60 shadow-[inset_1px_1px_0_0_#141414,inset_-1px_0_0_0_#141414] inset-ring-0"
                        : "relative z-10"
                )}
            >
                <div
                    className="flex h-full flex-1 cursor-pointer items-center gap-2 overflow-hidden text-left"
                    onClick={() => handleLinkOpen(displayItem.url)}
                >
                    {displayItem.image && (
                        <div className="inset-ring-black-900 flex h-10 w-10 shrink-0 items-center justify-center inset-ring-1">
                            <Image
                                src={displayItem.image}
                                className="h-full w-full object-contain"
                                alt={displayItem.name}
                                width={40}
                                height={40}
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-1 overflow-hidden">
                        <span className="typo-mo-body-s400 text-black-900 truncate">
                            {displayItem.name}
                        </span>
                        <span className="typo-mo-body-s400 text-black-600 truncate">
                            {displayItem.url}
                        </span>
                    </div>
                </div>

                {!isSingleItem && (
                    <div
                        className="ml-2 shrink-0 cursor-pointer p-1"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen ? (
                            <ChevronUp className="size-6 text-[#141414]" />
                        ) : (
                            <ChevronDown className="size-6 text-[#141414]" />
                        )}
                    </div>
                )}
            </div>

            {!isSingleItem && isOpen && (
                <ul
                    className={cn(
                        "absolute top-full left-0 z-50 max-h-75 w-full overflow-y-auto bg-white",

                        "shadow-[inset_1px_-1px_0_0_#141414,inset_-1px_0_0_0_#141414,inset_1px_0_0_0_#141414]"
                    )}
                >
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            onClick={() => handleLinkOpen(item.url)}
                            className={cn(
                                "flex cursor-pointer items-center gap-2 p-3 transition-colors"
                            )}
                        >
                            {item.image && (
                                <div className="inset-ring-black-900 flex h-10 w-10 shrink-0 items-center justify-center bg-white inset-ring-1">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col gap-1 overflow-hidden text-left">
                                <span className="typo-mo-body-s400 text-black-900">
                                    {item.name}
                                </span>
                                <span className="typo-mo-body-s400 text-black-600 truncate">
                                    {item.url}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
