import { useRouter } from "next/navigation";

import { useAlertModal } from "@/store/alertModalStore";
import { useAuthStore } from "@/store/authStore";

export const useAuthGuard = () => {
  const { clearAlertModal, alertModal } = useAlertModal();
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => !!s.user);

  const checkAuth = (callback: () => void) => {
    if (!isLoggedIn) {
      alertModal({
        message: "로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?",
        actions: [
          {
            label: "돌아가기",
            variant: "secondary",
            onClick: () => {
                clearAlertModal();
            },
          },
          {
            label: "로그인하러 가기",
            variant: "primary",
            onClick: () => {
              router.push("/sign-in");
            },
          },
        ],
      });
      return;
    }
    callback();
  };

  return { checkAuth };
};
