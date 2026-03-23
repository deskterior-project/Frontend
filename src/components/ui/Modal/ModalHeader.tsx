import DismissIcon from "@/assets/dismiss-regular.svg";
import { cn } from "@/hooks/cn";

interface ModalHeaderProps {
  title: string;
  onClose?: () => void;
  className?: string;
}

const ModalHeader = ({
  title,
  onClose,
  className,
}: ModalHeaderProps) => {
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      <h2 className={cn("text-black-900 pc:typo-pc-title-s700 mo:typo-mo-title-l700")}>{title}</h2>

        <button
          onClick={onClose}
          className="flex size-7 items-center justify-center p-1 cursor-pointer inset-ring-1"
          aria-label="Close modal"
        >
          <DismissIcon className="size-5 text-black-900" />
        </button>

    </div>
  );
};

export default ModalHeader;