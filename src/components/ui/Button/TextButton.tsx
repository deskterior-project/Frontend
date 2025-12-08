import { cn } from "@/hooks/cn";
import { cva, VariantProps } from "class-variance-authority";

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textButtonVariants> {
  children: React.ReactNode;
}

const textButtonVariants = cva(
  "flex items-center justify-center gap-1 cursor-pointer inset-ring-b-1 shadow-black-900 hover:shadow-black-600 active:shadow-black-600 disabled:shadow-black-300 text-black-900 hover:text-black-600 active:text-black-600 disabled:text-black-300 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        large: "typo-mo-body-l400 pc:typo-pc-body-l400",
        medium: "typo-mo-body-m400 pc:typo-pc-body-m400",
        small: "typo-mo-body-s400 pc:typo-pc-body-s400",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);
const TextButton = ({
  children,
  size,
  className,
  ...props
}: TextButtonProps) => {
  return (
    <button {...props} className={cn(textButtonVariants({ size }), className)}>
      {children}
    </button>
  );
};

export default TextButton;
