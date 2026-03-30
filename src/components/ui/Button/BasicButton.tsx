import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonVariant = VariantProps<typeof basicButtonVariants>;
type BasicButtonProps = ButtonVariant &
  (React.ButtonHTMLAttributes<HTMLButtonElement> | ComponentProps<typeof Link>);

const basicButtonVariants = cva(
  "flex items-center justify-center gap-1 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-black-900 hover:bg-black-800 active:bg-black-800 disabled:bg-black-400 text-white-200 hover:text-white-500 active:text-white-500 disabled:text-white-500 disabled:cursor-not-allowed",
        secondary:
          "bg-white-200 inset-ring-black-900 inset-ring-1 hover:bg-white-500 active:bg-white-500 disabled:bg-white-500 disabled:inset-ring-black-400 text-black-900 hover:text-black-800 active:text-black-800 disabled:text-black-400 disabled:cursor-not-allowed",
        tertiary:
          "bg-black-200 hover:bg-black-400 active:bg-black-400 disabled:bg-black-300 text-black-900 hover:text-black-800 active:text-black-800 disabled:text-black-500 disabled:cursor-not-allowed",
        success:
          "bg-success-700 hover:bg-success-600 active:bg-success-600 disabled:bg-success-400 text-white-200 hover:text-white-500 active:text-white-500 disabled:text-white-500 disabled:cursor-not-allowed",
        error:
          "bg-error-600 hover:bg-error-400 active:bg-error-400 disabled:bg-error-100 text-white-200 hover:text-white-500 active:text-white-500 disabled:text-white-500 disabled:cursor-not-allowed",
      },
      size: {
        large:
          "px-3 py-1 typo-mo-body-l400 pc:px-5 pc:py-2 pc:typo-pc-body-l500",
        medium:
          "px-3 py-1 typo-mo-body-m400 pc:px-5 pc:py-2 pc:typo-pc-body-m500",
        small:
          "px-2 py-1 typo-mo-body-s400 pc:px-4 pc:py-2 pc:typo-pc-body-s500",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  },
);

const BasicButton = ({
  children,
  variant,
  size,
  className,
  ...props
}: BasicButtonProps) => {
  if ("href" in props) {
    return (
      <Link
        {...props}
        className={cn(basicButtonVariants({ variant, size }), className)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={cn(basicButtonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default BasicButton;
