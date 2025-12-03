import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";

const radioButtonVariants = cva(
  "rounded-full inset-ring-1 bg-white-200 flex items-center justify-center transition-colors cursor-pointer",
  {
    variants: {
      size: {
        large: "size-6",
        medium: "size-5",
      },
      disabled: {
        true: "inset-ring-black-400 bg-black-200 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "large",
      disabled: false,
    },
  }
);

const radioButtonInnerVariants = cva("rounded-full transition-opacity", {
  variants: {
    size: {
      large: "size-3",
      medium: "size-2.5",
    },
    checked: {
      true: "opacity-100",
      false: "opacity-0",
    },
    disabled: {
      true: "bg-black-400",
      false: "bg-black-900",
    },
  },
  defaultVariants: {
    size: "large",
    checked: false,
    disabled: false,
  },
});

const radioButtonTextVariants = cva("transition-colors", {
  variants: {
    size: {
      large: "typo-mo-body-l500 pc:typo-pc-body-l500",
      medium: "typo-mo-body-m500 pc:typo-pc-body-m500",
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

interface RadioButtonProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "checked" | "disabled"
  > {
  children?: React.ReactNode;
  value: string;
  size?: VariantProps<typeof radioButtonVariants>["size"];
  checked?: boolean;
  disabled?: boolean;
}

const RadioButton = ({
  children,
  size,
  checked,
  disabled,
  className,
  value,
  name,
  onChange,
  ...props
}: RadioButtonProps) => {
  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      <div className={cn(radioButtonVariants({ size, disabled }))}>
        <span
          className={cn(radioButtonInnerVariants({ size, checked, disabled }))}
          aria-hidden="true"
        />
      </div>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        {...props}
      />
      <span className={cn(radioButtonTextVariants({ size, disabled }))}>
        {children}
      </span>
    </label>
  );
};

export default RadioButton;
