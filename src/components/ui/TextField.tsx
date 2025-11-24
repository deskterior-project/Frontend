"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { default as DismissCircle } from "@/assets/dismiss-circle-regular.svg";
import { cva } from "class-variance-authority";

type TextFieldProps = {
  id: string;
  label?: string;
  helperText?: string;
  value: string;
  onChange: (value: string) => void;
  state?: "default" | "success" | "error" | "disabled" | "complete";
  placeholder?: string;
  version: "pc" | "mo";
};

const labelStyle = cva("", {
  variants: {
    version: { pc: "typo-pc-title-xs700", mo: "typo-mo-title-s700" },
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
    version: "pc",
    state: "default",
  },
});

const inputWrapperStyle = cva("border flex items-center py-2 px-3", {
  variants: {
    state: {
      default: "border-black-600 bg-white-200",
      focused: "border-black-900 bg-white-200",
      success: "border-success-700 bg-white-200",
      error: "border-error-600 bg-white-200",
      disabled: "border-black-500 bg-white-400",
      complete: "border-black-600 bg-white-200",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

const inputStyle = cva("w-full outline-none", {
  variants: {
    version: { pc: "typo-pc-body-m400", mo: "typo-mo-body-m400" },
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
    version: "pc",
    state: "default",
  },
});

const dismissStyle = cva("cursor-pointer", {
  variants: {
    version: { pc: "w-6 h-6", mo: "w-5 h-5" },
    state: {
      default: "text-black-600",
      focused: "text-black-900",
      success: "text-black-900",
      error: "text-black-900",
      disabled: "text-black-500",
      complete: "text-black-600",
    },
  },
  defaultVariants: { version: "pc", state: "default" },
});

export default function TextField({
  id,
  label = "label",
  helperText = "helper text",
  value,
  onChange,
  placeholder = "input text",
  version,
  state = "default",
}: TextFieldProps) {
  const isPc = version === "pc";
  const isDisabled = state === "disabled";
  const [focused, setFocused] = useState(false);
  const finalState = isDisabled ? "disabled" : focused ? "focused" : state;

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="flex flex-col gap-2 w-[335px]">
      <label
        htmlFor={id}
        className={labelStyle({ state: finalState, version })}
      >
        {label}
      </label>

      <div className={inputWrapperStyle({ state: finalState })}>
        <input
          id={id}
          type="text"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isDisabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputStyle({ state: finalState, version })}
        />
        <DismissCircle
          onClick={() => handleClear()}
          className={dismissStyle({ version, state: finalState })}
        />
      </div>

      <span
        className={clsx(
          state === "disabled" ? "text-black-500" : "text-black-600",
          isPc ? "typo-pc-body-m400" : "typo-mo-body-m400"
        )}
      >
        {helperText}
      </span>
    </div>
  );
}
