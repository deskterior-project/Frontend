"use client";

import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

type ColorKey =
  | "black"
  | "success"
  | "error"
  | "bg-pink"
  | "bg-blue"
  | "bg-green";
type BadgeVariant = "solid" | "outline" | "outline_pastel";
type BadgeSize = "pc" | "mobile";

interface BadgeProps {
  label?: string;
  variant?: BadgeVariant;
  color?: ColorKey;
  size?: BadgeSize;
  className?: string;
  onClick?: () => void;
}

const badgeStyles = cva("flex items-center justify-center", {
  variants: {
    variant: {
      outline: "border",
      solid: "border",
      outline_pastel: "",
    },
    color: {
      black: "",
      success: "",
      error: "",
      "bg-pink": "",
      "bg-blue": "",
      "bg-green": "",
    },
    size: {
      pc: "typo-pc-body-s400 w-[59px] h-[30px]",
      mobile: "typo-mo-body-s400 w-[49px] h-[24px]",
    },
  },
  compoundVariants: [
    {
      color: "black",
      variant: "outline",
      className:
        "[color:var(--color-black-900)] [border-color:var(--color-black-900)]",
    },
    {
      color: "black",
      variant: "solid",
      className:
        "[background-color:var(--color-black-900)] [color:var(--color-white-200)]",
    },
    {
      color: "black",
      variant: "outline_pastel",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-black-200)]",
    },
    {
      color: "success",
      variant: "outline",
      className:
        "[color:var(--color-success-700)] [border-color:var(--color-success-700)]",
    },
    {
      color: "success",
      variant: "solid",
      className:
        "[background-color:var(--color-success-700)] [color:var(--color-white-200)] [border-color:var(--color-black-900)]",
    },
    {
      color: "success",
      variant: "outline_pastel",
      className:
        "[color:var(--color-success-700)] [background-color:var(--color-success-100)] [border-color:var(--color-success-700)]",
    },
    {
      color: "error",
      variant: "outline",
      className:
        "[color:var(--color-error-600)] [border-color:var(--color-error-600)]",
    },
    {
      color: "error",
      variant: "solid",
      className:
        "[background-color:var(--color-error-600)] [color:var(--color-white-200)]",
    },
    {
      color: "error",
      variant: "outline_pastel",
      className:
        "[color:var(--color-error-600)] [background-color:var(--color-error-100)] [border-color:var(--color-error-600)]",
    },
    {
      color: "bg-pink",
      variant: "outline",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-pink)] [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-pink",
      variant: "solid",
      className:
        "[color:var(--color-bg-pink)] [background-color:var(--color-black-900)]  [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-pink",
      variant: "outline_pastel",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-pink)] [border-color:var(--color-bg-pink)]",
    },
    {
      color: "bg-blue",
      variant: "outline",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-blue)] [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-blue",
      variant: "solid",
      className:
        "[color:var(--color-bg-blue)] [background-color:var(--color-black-900)] [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-blue",
      variant: "outline_pastel",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-blue)] [border-color:var(--color-bg-blue)]",
    },
    {
      color: "bg-green",
      variant: "outline",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-green)] [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-green",
      variant: "solid",
      className:
        "[color:var(--color-bg-green)] [background-color:var(--color-black-900)] [border-color:var(--color-black-900)]",
    },
    {
      color: "bg-green",
      variant: "outline_pastel",
      className:
        "[color:var(--color-black-900)] [background-color:var(--color-bg-green)] [border-color:var(--color-bg-green)]",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "black",
    size: "pc",
  },
});

const Badge: React.FC<BadgeProps> = ({
  label = "badge",
  variant = "solid",
  color = "black",
  size = "pc",
  className = "",
  onClick,
}) => {
  return (
    <span
      className={clsx(badgeStyles({ variant, color, size }), className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {label}
    </span>
  );
};

export default Badge;
