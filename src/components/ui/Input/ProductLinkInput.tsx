"use client";

import DismissCircle from "@/assets/dismiss-circle-regular.svg";
import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface ProductLinkInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    helperText?: string;
    state?: "default" | "success" | "error" | "disabled" | "complete";
}

const labelVariants = cva("pc:typo-pc-title-xs700 mo:typo-mo-title-s700", {
    variants: {
        state: {
            default: "text-black-900",
            focused: "text-black-900",
            success: "text-success-700",
            error: "text-error-600",
            disabled: "text-black-400",
            complete: "text-black-900",
        },
    },
    defaultVariants: {
        state: "default",
    },
});

const inputWrapperVariants = cva(
    "pc:h-10 pc:py-2 flex h-7 items-center px-3 py-1 inset-ring-1",
    {
        variants: {
            state: {
                default: "inset-ring-black-600 bg-white-200",
                focused: "inset-ring-black-900 bg-white-200",
                success: "inset-ring-success-700 bg-white-200",
                error: "inset-ring-error-600 bg-white-200",
                disabled: "inset-ring-black-500 bg-white-400",
                complete: "inset-ring-black-600 bg-white-200",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

const inputVariants = cva(
    "pc:typo-pc-body-m400 mo:typo-mo-body-m400 w-full bg-transparent outline-none",
    {
        variants: {
            state: {
                default: "text-black-600",
                focused: "text-black-900",
                success: "text-black-900",
                error: "text-black-900",
                disabled: "text-black-500",
                complete: "text-black-900",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

const dismissCircleVariants = cva("pc:size-6 size-5 cursor-pointer", {
    variants: {
        state: {
            default: "text-black-600",
            focused: "text-black-900",
            success: "text-black-900",
            error: "text-black-900",
            disabled: "text-black-500",
            complete: "text-black-600",
        },
    },
    defaultVariants: { state: "default" },
});

const helperTextVariants = cva(
    "pc:typo-pc-body-m400 mo:typo-mo-body-m400 text-black-600",
    {
        variants: {
            state: {
                default: "",
                focused: "",
                success: "",
                error: "",
                disabled: "text-black-500",
                complete: "",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export default function ProductLinkInput({
    name,
    id,
    label,
    helperText,
    placeholder,
    state = "default",
    onFocus,
    onBlur,
    ...props
}: ProductLinkInputProps) {
    const { register, setValue, watch } = useFormContext();
    const [focused, setFocused] = useState(false);

    const inputValue = watch(name);
    const isDisabled = state === "disabled";
    const finalState = isDisabled ? "disabled" : focused ? "focused" : state;

    const handleClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={id || name}
                    className={labelVariants({ state: finalState })}
                >
                    {label}
                </label>
            )}

            <div className={inputWrapperVariants({ state: finalState })}>
                <input
                    {...register(name)}
                    id={id || name}
                    autoComplete="off"
                    type="text"
                    disabled={isDisabled}
                    placeholder={placeholder}
                    onFocus={(e) => {
                        setFocused(true);
                        onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        onBlur?.(e);
                    }}
                    className={inputVariants({ state: finalState })}
                    {...props}
                />
                {inputValue && inputValue.length > 0 && (
                    <button type="button" onClick={handleClear} tabIndex={-1}>
                        <DismissCircle
                            className={dismissCircleVariants({
                                state: finalState,
                            })}
                        />
                    </button>
                )}
            </div>

            {helperText && (
                <span className={helperTextVariants({ state: finalState })}>
                    {helperText}
                </span>
            )}
        </div>
    );
}
