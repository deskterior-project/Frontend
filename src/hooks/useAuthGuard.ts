import { useAlertModal } from "@/store/alertModalStore";
import { useRouter } from "next/navigation";

export const useAuthGuard = () => {
  const { clearAlertModal, alertModal } = useAlertModal();
  const router = useRouter();
  const isLoggedIn = false; // 후에 로그인 상태 확인 로직으로 대체

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