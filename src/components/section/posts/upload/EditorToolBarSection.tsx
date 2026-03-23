"use client";

import CameraIcon from "@/assets/image-regular.svg"; // 아이콘 임포트
import LinkIcon from "@/assets/tag-regular.svg";
import { cn } from "@/hooks/cn";
import React, { useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";

interface EditorToolbarProps {
    onLinkClick: () => void;
    className?: string;
}

const EditorToolbar = ({ onLinkClick, className }: EditorToolbarProps) => {
    const { setValue, control } = useFormContext();

    const images = useWatch({ control, name: "images" }) || [];

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCameraClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);

            const newImages = files.map((file, index) => ({
                id: Date.now() + index,
                url: URL.createObjectURL(file),
            }));

            setValue("images", [...images, ...newImages]);

            e.target.value = "";
        }
    };

    return (
        <>
            <div className="pc:block pointer-events-none fixed right-0 -bottom-5 left-0 z-10 hidden h-33 [background:linear-gradient(to_top,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]" />
            <div
                className={cn(
                    "bg-white-200 mo:shadow-[inset_0_1px_0_0_#141414] fixed right-0 bottom-0 left-0 z-20 w-full",
                    "pc:left-1/2 pc:-translate-x-1/2 pc:bottom-12 pc:w-81.25 pc:h-14 pc:inset-ring-1 pc:inset-ring-black-900",
                    "safe-area-bottom",
                    className
                )}
            >
                <div className="mo:gap-4 pc:gap-6 mo:h-11 pc:h-full pc:justify-center flex items-center px-6">
                    <button
                        type="button"
                        onClick={handleCameraClick}
                        className="pc:gap-2 text-black-900 mo:typo-mo-body-l400 pc:typo-pc-body-l400 flex items-center justify-center whitespace-nowrap"
                        aria-label="사진 추가"
                    >
                        <CameraIcon className="pc:size-8 flex size-6 items-center justify-center" />
                        사진추가
                    </button>

                    <div className="pc:block border-black-600 hidden h-4 w-px border" />

                    <button
                        type="button"
                        onClick={onLinkClick}
                        className="pc:gap-2 text-black-900 mo:typo-mo-body-l400 pc:typo-pc-body-l400 flex items-center justify-center whitespace-nowrap"
                        aria-label="상품 링크 추가"
                    >
                        <LinkIcon className="pc:size-8 flex size-6 items-center justify-center" />
                        상품링크추가
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                    />
                </div>
            </div>
        </>
    );
};

export default EditorToolbar;
