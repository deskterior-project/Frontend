"use client";

import DismissIcon from "@/assets/dismiss-regular.svg";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";
import { UploadFormData } from "./UploadFormSection";

const AddedProductListSection = () => {
    const { control, setValue } = useFormContext<UploadFormData>();

    const products = useWatch({ control, name: "products" }) || [];

    const handleRemoveProduct = (id: number) => {
        setValue(
            "products",
            products.filter((p) => p.id !== id)
        );
    };

    if (products.length === 0) return null;

    return (
        <div className="mo:gap-3 pc:gap-4 flex w-full flex-col">
            {products.map((p) => (
                <div
                    key={p.id}
                    className="group mo:gap-2 pc:gap-3 relative w-full"
                >
                    <a
                        href={p.productLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white-200 pc:h-14 flex h-10 w-full items-center justify-between gap-2 pr-2 transition-colors active:bg-gray-50"
                    >
                        <div className="pc:size-14 border-black-800 relative size-10 shrink-0 border bg-white">
                            <Image
                                src={
                                    p.favicon ||
                                    `https://www.google.com/s2/favicons?domain=${p.productLink}&sz=64`
                                }
                                alt="icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-start gap-1 overflow-hidden">
                            <span className="mo:typo-mo-body-s400 pc:typo-pc-body-m400 text-black-900 truncate text-left">
                                {p.productName}
                            </span>
                            <span className="mo:typo-mo-body-s500 pc:typo-pc-body-s500 text-black-600 truncate text-left">
                                {p.domain}
                            </span>
                        </div>

                        <DismissIcon
                            className="text-black-900 pc:size-7 size-6 shrink-0 cursor-pointer"
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleRemoveProduct(p.id);
                            }}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default AddedProductListSection;
