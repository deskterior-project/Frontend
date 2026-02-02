"use client";

import React, { useState } from "react";
import DismissCircle from "@/assets/dismiss-circle-regular.svg";
import { cva } from "class-variance-authority";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  helperText?: string;
  state?: "default" | "success" | "error" | "disabled" | "complete";
  placeholder?: string;
  value?: string;
  setValue: (value: string) => void;
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

const inputWrapperVariants = cva("inset-ring-1 flex items-center py-2 px-3", {
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
});

const inputVariants = cva(
  "w-full outline-none pc:typo-pc-body-m400 mo:typo-mo-body-m400",
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
  },
);

const dismissCircleVariants = cva("cursor-pointer pc:size-6 mo:size-5", {
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
  },
);

export default function TextField({
  id,
  label,
  helperText,
  placeholder,
  state = "default",
  value,
  setValue,
  onKeyDown,
}: TextFieldProps) {
  const isDisabled = state === "disabled";
  const [focused, setFocused] = useState(false);
  const finalState = isDisabled ? "disabled" : focused ? "focused" : state;

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className={labelVariants({ state: finalState })}>
          {label}
        </label>
      )}

      <div className={inputWrapperVariants({ state: finalState })}>
        <input
          id={id}
          autoComplete="off"
          type="text"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          className={inputVariants({ state: finalState })}
        />
        <DismissCircle
          className={dismissCircleVariants({ state: finalState })}
          onClick={handleClear}
        />
      </div>

      {helperText && (
        <span className={helperTextVariants({ state: finalState })}>
          {helperText}
        </span>
      )}
    </div>
  );
}
