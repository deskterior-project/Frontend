"use client";

import ChevronDown from "@/assets/chevron-circle-down-regular.svg";
import ChevronUp from "@/assets/chevron-circle-up-regular.svg";

import { cn } from "@/hooks/cn";
import { useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

export interface CommonItems {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
}

export interface ISelect {
    name: string;
    items: CommonItems[];
    rules?: any;
    disabled?: boolean;
    className?: string;
    onSubmit?: (item?: any) => void;
}

const SelectBox = ({
    name,
    items = [],
    disabled = false,
    rules,
    className,
    onSubmit,
}: ISelect) => {
    const selectDiv = useRef<HTMLDivElement>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [startY, setStartY] = useState(0); // 터치 시작 지점
    const [currentY, setCurrentY] = useState(0); // 현재 이동 거리
    const [isDragging, setIsDragging] = useState(false);

    const { getValues, control } = useFormContext();

    const { field } = useController({
        control,
        name,
        rules: rules || {},
    });
    const selectValue = getValues(name);

    const displayItems = [...items].sort((a, b) => {
        if (a.value === selectValue) return -1;
        if (b.value === selectValue) return 1;
        return 0;
    });

    // 터치 시작
    const handleTouchStart = (e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    };

    // 터치 이동
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const deltaY = e.touches[0].clientY - startY;
        // 위로는 못 올라가게 하고 아래로만 드래그 가능하게 제한
        if (deltaY > 0) {
            setCurrentY(deltaY);
        }
    };

    // 터치 종료
    const handleTouchEnd = () => {
        setIsDragging(false);
        // 150px 이상 내려가면 닫기, 아니면 다시 제자리로
        if (currentY > 150) {
            setShowOptions(false);
        }
        setCurrentY(0);
    };

    useEffect(() => {
        const clickOutside = (evt: MouseEvent) => {
            if (
                selectDiv.current &&
                !selectDiv.current.contains(evt.target as Node)
            ) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", clickOutside);
        return () => document.removeEventListener("mousedown", clickOutside);
    }, []);

    return (
        <div
            className={cn("relative flex flex-col", className)}
            ref={selectDiv}
        >
            <button
                id={name}
                type="button"
                disabled={disabled}
                className={cn(
                    "mo:px-2 mo:py-[4.5px] pc:px-3 pc:py-2 inset-ring-black-600 pc:typo-pc-body-m400 mo:typo-mo-body-m400 pc:w-198 pc:h-10 mo:w-81.75 mo:h-8 w-full text-left inset-ring-1 transition-all duration-200",
                    !disabled && [
                        "bg-white-200 cursor-pointer hover:border-black",
                        showOptions && [
                            "pc:inset-ring-0 pc:shadow-[inset_1px_1px_0_0_#141414,inset_-1px_0_0_0_#141414]",
                            "mo:inset-ring-1 mo:inset-ring-black-600 mo:shadow-none",
                        ],
                    ]
                )}
                onClick={() => {
                    if (!disabled && items.length > 0) {
                        setShowOptions(!showOptions);
                    }
                }}
            >
                <div className="flex items-center justify-between">
                    <span
                        className={cn(
                            "mo:typo-mo-body-m400 pc:typo-pc-body-m400 block overflow-hidden text-ellipsis whitespace-nowrap",
                            selectValue ? "text-black-900" : "text-black-600"
                        )}
                    >
                        {" "}
                        {items?.find((i) => i.value === selectValue)?.label ||
                            "카테고리를 입력해주세요"}
                    </span>

                    <div
                        className={cn(
                            "h-3 w-3 shrink-0 transition-transform duration-200"
                        )}
                    />
                    {showOptions ? (
                        <ChevronUp className="size-6 text-[#141414]" />
                    ) : (
                        <ChevronDown className="size-6 text-[#8C8C8C]" />
                    )}
                </div>
            </button>

            <div
                className={cn(
                    "pc:absolute pc:top-full pc:left-0 pc:z-50 pc:w-full hidden",
                    "pc:grid hidden transition-[grid-template-rows] duration-300 ease-in-out",
                    showOptions ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <ul
                        className={cn(
                            "bg-white-200 pc:w-[792] flex w-full flex-col items-center px-3 py-2 transition-all duration-300 ease-in-out",
                            showOptions
                                ? "shadow-[inset_1px_-1px_0_0_#141414,inset_-1px_0_0_0_#141414,inset_1px_0_0_0_#141414]"
                                : ""
                        )}
                    >
                        {displayItems.map((item, idx) => (
                            <li
                                key={`${name}-opt-${idx}`}
                                onClick={() => {
                                    field.onChange(item.value);
                                    setShowOptions(false);
                                    if (onSubmit) onSubmit(item.value);
                                }}
                                className={cn(
                                    "hover:bg-black-200 pc:w-193 flex cursor-pointer items-center justify-start gap-2 px-2 py-2 transition-colors"
                                )}
                            >
                                {item.icon && (
                                    <span className="flex h-6 w-6 items-center justify-center">
                                        {item.icon}
                                    </span>
                                )}
                                <span className="flex items-center p-0">
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 모바일 바텀시트 */}
            {showOptions && (
                <div className="mo:fixed pc:hidden inset-0 z-50 flex flex-col justify-end">
                    <div
                        className={cn(
                            "bg-black-900/60 absolute inset-0 transition-opacity duration-300",
                            isDragging ? "opacity-100" : "opacity-100"
                        )}
                        onClick={() => setShowOptions(false)}
                    />

                    {/* 2. 시트 본체 */}
                    <div
                        className={cn(
                            "bg-white-200 relative flex max-h-[70vh] w-full flex-col shadow-[0_-4px_20px_rgba(0,0,0,0.15)]",
                            !isDragging && "transition-transform duration-300"
                        )}
                        style={{ transform: `translateY(${currentY}px)` }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* 드래그 핸들 영역 */}
                        <div className="flex flex-col gap-1 pt-4 pb-6">
                            <div className="flex w-full justify-center">
                                <div className="bg-black-900 h-1 w-6" />
                            </div>
                            <h3 className="mo:typo-mo-body-s500 text-black-900 cursor-pointe py-0 text-center">
                                카테고리 선택
                            </h3>
                        </div>

                        <div className="overflow-y-auto px-5 pb-8">
                            <ul className="flex flex-col gap-2">
                                {displayItems.map((item, idx) => (
                                    <li
                                        key={`${name}-mo-opt-${idx}`}
                                        onClick={() => {
                                            field.onChange(item.value);
                                            setShowOptions(false);
                                            if (onSubmit) onSubmit(item.value);
                                        }}
                                        className={cn(
                                            "inset-ring-black-900 active:bg-black-200 flex w-full items-center justify-center gap-1 py-4.5 inset-ring-1"
                                        )}
                                    >
                                        {item.icon && (
                                            <span className="flex h-4 w-4 items-center justify-center">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span className="mo:typo-mo-body-s500 flex items-center p-0">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectBox;
