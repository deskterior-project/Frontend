"use client";
import logoImage from "@/assets/logos/logo-primary-main.png";
import SocialAuthSection from "@/components/section/sign-in/SocialAuthSection";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import type { SocialAuthOption } from "@/constants/socialAuthOptions";
import { signInWithProvider } from "@/services/auth";
import { useAlertToast } from "@/store/alertToastStore";
import Image from "next/image";

const SignInPage = () => {
  const { alertToast } = useAlertToast();

  const handleSocialSignInClick = async (option: SocialAuthOption) => {
    const { error } = await signInWithProvider(option.provider);
    if (error) {
      alertToast({
        firstMessage: "로그인에 실패했어요.",
        secondMessage: error.message,
      });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center mo:pt-34 pc:pt-36">
      <HeaderMo title="로그인" showBackButton />
      <div className="flex flex-col items-center w-fit pc:gap-15">
        <div className="pc:w-64 pc:h-46.75 w-[163.84px] h-30 relative mb-2 pc:mb-0">
          <Image src={logoImage} alt="logo" fill className="object-contain" />
        </div>
        <SocialAuthSection mode="sign-in" onClick={handleSocialSignInClick} />
      </div>
    </div>
  );
};

export default SignInPage;
