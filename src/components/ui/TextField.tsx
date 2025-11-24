"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { default as DismissCircle } from "@/assets/dismiss-circle-regular.svg";

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

const STYLE_BY_STATE = {
  default: {
    text: "text-black-900",
    border: "border-black-600",
    input: "text-black-600",
    dismiss: "text-black-600",
  },
  focused: {
    text: "text-black-900",
    border: "border-black-900",
    input: "text-black-900",
    dismiss: "text-black-900",
  },
  success: {
    text: "text-success-700",
    border: "border-success-700",
    input: "text-black-900",
    dismiss: "text-black-900",
  },
  error: {
    text: "text-error-600",
    border: "border-error-600",
    input: "text-black-900",
    dismiss: "text-black-900",
  },
  disabled: {
    text: "text-black-400",
    border: "border-black-500",
    input: "text-black-500",
    dismiss: "text-black-500",
  },
  complete: {
    text: "text-black-900",
    border: "border-black-600",
    input: "text-black-900",
    dismiss: "text-black-600",
  },
} as const;

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
  const { text, border, input, dismiss } = STYLE_BY_STATE[finalState];

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="flex flex-col gap-2 w-[335px]">
      <label
        htmlFor={id}
        className={clsx(
          text,
          isPc ? "typo-pc-title-xs700" : "typo-mo-title-s700"
        )}
      >
        {label}
      </label>

      <div
        className={clsx(
          "border flex items-center py-2 px-3",
          state === "disabled" ? "bg-white-400" : "bg-white-200",
          border
        )}
      >
        <input
          id={id}
          type="text"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={isDisabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={clsx(
            "w-full outline-none",
            input,
            isPc ? "typo-pc-body-m400" : "typo-mo-body-m400"
          )}
        />
        <DismissCircle
          onClick={() => handleClear()}
          className={clsx(
            isPc ? "w-6 h-6" : "w-5 h-5",
            "cursor-pointer",
            dismiss
          )}
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
