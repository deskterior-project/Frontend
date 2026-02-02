"use client";
import SocialAuthSection from "@/components/section/sign-in/SocialAuthSection";
import BasicButton from "../../Button/BasicButton";
import Modal from "../Modal";

interface SignUpModalProps {
  signUpModalOpen: boolean;
  setSignUpModalOpen: (open: boolean) => void;
}

const SignUpModal = ({
  signUpModalOpen,
  setSignUpModalOpen,
}: SignUpModalProps) => {
  const handleSocialSignUpClick = (name: string) => {
    console.log(name);
  };

  return (
    <Modal
      open={signUpModalOpen}
      setOpen={setSignUpModalOpen}
      border
      className="w-[328px] mo:px-2 mo:py-8 pc:px-8 pc:py-12 pc:w-[384px]"
      trigger={
        <BasicButton variant="primary" size="large">
          회원 가입하기
        </BasicButton>
      }
    >
      <SocialAuthSection
        mode="sign-up"
        onClick={(name) => {
          handleSocialSignUpClick(name);
        }}
      />
    </Modal>
  );
};

export default SignUpModal;
