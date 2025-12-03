import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";

const checkBoxVariants = cva(
  "inset-ring-1 bg-white-200 flex items-center justify-center transition-colors cursor-pointer",
  {
    variants: {
      size: {
        large: "size-5",
        medium: "size-5",
      },
      checked: {
        true: "bg-black-900",
        false: "bg-white-200 inset-ring-black-900",
      },
      indeterminate: {
        true: "bg-black-900",
        false: "",
      },
      disabled: {
        true: "bg-black-200 inset-ring-black-400 cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        checked: true,
        indeterminate: true,
        class: "bg-black-900",
      },
      {
        disabled: true,
        checked: true,
        class: "bg-black-200 inset-ring-black-400",
      },
      {
        disabled: true,
        indeterminate: true,
        class: "bg-black-200 inset-ring-black-400",
      },
    ],
    defaultVariants: {
      size: "large",
      checked: false,
      indeterminate: false,
      disabled: false,
    },
  }
);

const checkBoxTextVariants = cva("transition-colors", {
  variants: {
    size: {
      large: "typo-pc-body-l500",
      medium: "typo-mo-body-l500",
    },
    disabled: {
      true: "text-black-400",
      false: "text-black-900",
    },
  },
  defaultVariants: {
    size: "large",
    disabled: false,
  },
});

interface CheckBoxButtonProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "checked" | "disabled"
  > {
  children?: React.ReactNode;
  size?: VariantProps<typeof checkBoxVariants>["size"];
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

const CheckBoxButton = ({
  children,
  size,
  checked = false,
  indeterminate = false,
  disabled = false,
  className,
  onChange,
  ...props
}: CheckBoxButtonProps) => {
  const isChecked = checked && !indeterminate;
  const isIndeterminate = indeterminate;

  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      <div
        className={cn(
          checkBoxVariants({
            size,
            checked: isChecked || isIndeterminate,
            indeterminate: isIndeterminate,
            disabled,
          })
        )}
      >
        {isChecked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-opacity",
              disabled ? "opacity-100" : "opacity-100"
            )}
            aria-hidden="true"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke={disabled ? "#9CA3AF" : "white"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {isIndeterminate && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity"
            aria-hidden="true"
          >
            <line
              x1="3"
              y1="6"
              x2="9"
              y2="6"
              stroke={disabled ? "#9CA3AF" : "white"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        {...props}
      />
      <span className={cn(checkBoxTextVariants({ size, disabled }))}>
        {children}
      </span>
    </label>
  );
};

export default CheckBoxButton;
