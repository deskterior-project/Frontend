"use client";
import CircleRight from "@/assets/chevron-circle-right-regular.svg";
import { useAlertModal } from "@/store/alertModalStore";
import { Dialog } from "radix-ui";
import BasicButton from "../../Button/BasicButton";
const AlertModal = () => {
  const { message, actions, clearAlertModal } = useAlertModal();
  if (actions.length === 0) return;
  return (
    <Dialog.Root
      open={!!message && actions.length > 0}
      onOpenChange={clearAlertModal}
    >
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black-900/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 focus:outline-none w-82 pc:w-147 bg-white -translate-x-1/2 -translate-y-1/2 px-8 py-6 pc:px-10 pc:py-10 flex flex-col gap-4 pc:gap-10">
          <Dialog.Title className="typo-mo-body-m500 pc:typo-pc-body-l500 w-66 pc:w-127 max-h-9.5 pc:max-h-13.5 overflow-hidden line-clamp-2 break-all whitespace-pre-wrap">
            {message}
          </Dialog.Title>
          <div className="flex gap-2 pc:gap-6">
            {actions.map((action, idx) => (
              <BasicButton
                key={idx}
                variant={action.variant}
                size="small"
                className="w-full flex items-center focus:outline-0"
                onClick={() => {
                  action?.onClick?.();
                  clearAlertModal();
                }}
              >
                {action.label}
                <CircleRight className="size-4 pc:size-6" />
              </BasicButton>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AlertModal;
