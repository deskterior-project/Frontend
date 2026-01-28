import { cn } from "@/hooks/cn";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog } from "radix-ui";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  border?: boolean;
  className?: string;
}

const Modal = ({
  open,
  setOpen,
  trigger,
  children,
  border,
  className,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-black-900/60" />
        <Dialog.Content
          className={cn(
            "mo:w-82 pc:w-147 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white-200",
            "mo:px-8 mo:py-6 pc:px-10 pc:py-10",
            "flex flex-col items-center justify-center",
            border && "inset-ring-1 inset-ring-black-90",
            className,
          )}
        >
          <VisuallyHidden>
            <Dialog.Title />
            <Dialog.Description />
          </VisuallyHidden>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
