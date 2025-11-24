import { cva, VariantProps } from "class-variance-authority";

interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof basicButtonVariants> {
  children: React.ReactNode;
}

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
  }
);

const BasicButton = ({
  children,
  variant,
  size,
  ...props
}: BasicButtonProps) => {
  return (
    <button {...props} className={basicButtonVariants({ variant, size })}>
      {children}
    </button>
  );
};

export default BasicButton;
