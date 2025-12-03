import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";

const toggleButtonContainerVariants = cva(
  "rounded-[40px] inset-ring-1 p-0.5 transition-colors duration-200 ease-in-out cursor-pointer",
  {
    variants: {
      size: {
        large: "w-10 h-6",
        medium: "w-8 h-5",
      },
      checked: {
        true: "bg-black-900 inset-ring-black-900",
        false: "bg-black-200 inset-ring-black-900",
      },
      disabled: {
        true: "bg-black-200 inset-ring-black-400 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "large",
      checked: false,
      disabled: false,
    },
  }
);

const toggleButtonThumbVariants = cva(
  "rounded-full transition-transform duration-200 ease-in-out",
  {
    variants: {
      size: {
        large: "size-5",
        medium: "size-4",
      },
      checked: {
        true: "",
        false: "translate-x-0",
      },
      disabled: {
        true: "bg-black-400",
        false: "inset-ring-black-900 inset-ring-1 bg-white-200",
      },
    },
    compoundVariants: [
      {
        size: "large",
        checked: true,
        class: "translate-x-4",
      },
      {
        size: "medium",
        checked: true,
        class: "translate-x-3",
      },
    ],
    defaultVariants: {
      size: "large",
      checked: false,
      disabled: false,
    },
  }
);

const toggleButtonTextVariants = cva("text-black-900", {
  variants: {
    size: {
      large: "typo-pc-body-l500 ",
      medium: "typo-mo-body-l500 ",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

interface ToggleButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "checked" | "disabled"
    >,
    VariantProps<typeof toggleButtonContainerVariants> {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

const ToggleButton = ({
  checked = false,
  disabled = false,
  size = "large",
  onCheckedChange,
  className,
  onClick,
  children,
  ...props
}: ToggleButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onCheckedChange?.(!checked);
    onClick?.(e);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          toggleButtonContainerVariants({ size, checked, disabled }),
          className
        )}
        {...props}
      >
        <div
          className={cn(toggleButtonThumbVariants({ size, checked, disabled }))}
          aria-hidden="true"
        />
      </button>
      <span className={cn(toggleButtonTextVariants({ size }))}>{children}</span>
    </div>
  );
};

export default ToggleButton;
