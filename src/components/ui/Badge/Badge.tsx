"use client";

import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label?: string;
  className?: string;
  onClick?: () => void;
}

const badgeVariants = cva(
  "flex items-center justify-center px-2 py-1 pc:typo-pc-body-s400 mo:typo-mo-body-s400",
  {
    variants: {
      variant: {
        outline: "inset-ring-1",
        solid: "",
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
    },
    compoundVariants: [
      {
        color: "black",
        variant: "outline",
        className: "text-black-900 inset-ring-black-900",
      },
      {
        color: "black",
        variant: "solid",
        className: "bg-black-900 text-white-200",
      },
      {
        color: "black",
        variant: "outline_pastel",
        className: "text-black-900 bg-black-200",
      },
      {
        color: "success",
        variant: "outline",
        className: "text-success-700 inset-ring-success-700",
      },
      {
        color: "success",
        variant: "solid",
        className: "bg-success-700 text-white-200",
      },
      {
        color: "success",
        variant: "outline_pastel",
        className: "text-success-700 bg-success-100",
      },
      {
        color: "error",
        variant: "outline",
        className: "text-error-600 inset-ring-error-600",
      },
      {
        color: "error",
        variant: "solid",
        className: "bg-error-600 text-white-200",
      },
      {
        color: "error",
        variant: "outline_pastel",
        className: "text-error-600 bg-error-100",
      },
      {
        color: "bg-pink",
        variant: "outline",
        className: "text-black-900 inset-ring-black-900 bg-bg-pink",
      },
      {
        color: "bg-pink",
        variant: "solid",
        className: "bg-black-900 text-bg-pink",
      },
      {
        color: "bg-pink",
        variant: "outline_pastel",
        className: "text-black-900 bg-bg-pink",
      },
      {
        color: "bg-blue",
        variant: "outline",
        className: "text-black-900 inset-ring-black-900 bg-bg-blue",
      },
      {
        color: "bg-blue",
        variant: "solid",
        className: "bg-black-900 text-bg-blue",
      },
      {
        color: "bg-blue",
        variant: "outline_pastel",
        className: "text-black-900 bg-bg-blue",
      },
      {
        color: "bg-green",
        variant: "outline",
        className: "text-black-900 inset-ring-black-900 bg-bg-green",
      },
      {
        color: "bg-green",
        variant: "solid",
        className: "bg-black-900 text-bg-green",
      },
      {
        color: "bg-green",
        variant: "outline_pastel",
        className: "text-black-900 bg-bg-green",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "black",
    },
  }
);

const Badge: React.FC<BadgeProps> = ({
  label,
  variant,
  color,

  className,
}) => {
  return (
    <span className={cn(badgeVariants({ variant, color }), className)}>
      {label}
    </span>
  );
};

export default Badge;
