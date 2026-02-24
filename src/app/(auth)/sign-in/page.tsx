"use client";
import logoImage from "@/assets/logos/logo-primary-main.png";
import SocialAuthSection from "@/components/section/sign-in/SocialAuthSection";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import SignUpModal from "@/components/ui/Modal/SignUpModal/SignUpModal";
import Image from "next/image";
import { useState } from "react";

const SignInPage = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false);

  const handleSocialSignInClick = (name: string) => {
    console.log(name);
  };
  return (
    <div className="w-screen h-screen flex justify-center mo:pt-34 pc:pt-36">
      <HeaderMo
        title={signUpModalOpen ? "회원가입하기" : "로그인"}
        showBackButton
      />
      <div className="flex flex-col items-center w-fit pc:gap-15">
        <div className="pc:w-64 pc:h-46.75 w-[163.84px] h-30 relative mb-2 pc:mb-0">
          <Image src={logoImage} alt="logo" fill className="object-contain" />
        </div>
        <SocialAuthSection
          mode="sign-in"
          onClick={(name) => {
            handleSocialSignInClick(name);
          }}
        />
        <div className="flex flex-col items-center justify-center gap-3 mt-12 pc:mt-0">
          <span className="typo-mo-body-m400 pc:typo-pc-body-m400">
            아직 회원이 아니라면?
          </span>
          <SignUpModal
            signUpModalOpen={signUpModalOpen}
            setSignUpModalOpen={setSignUpModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
