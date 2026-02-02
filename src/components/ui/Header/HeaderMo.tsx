"use client";

import ChevronLeftIcon from "@/assets/chevron-left-regular.svg";
import logo from "@/assets/logo-typography.png";
import { cn } from "@/hooks/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderMoProps {
  showLogo?: boolean;
  showBackButton?: boolean;
  handleBack?: () => void;
  title?: string;
  content?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      aria-label="뒤로가기"
      onClick={onClick}
      className="inset-ring-1 inset-ring-black-900 size-7 flex items-center justify-center shrink-0 cursor-pointer"
    >
      <ChevronLeftIcon className="size-5" />
    </button>
  );
};

const HeaderMo = ({
  showLogo = false,
  showBackButton = false,
  handleBack,
  title,
  content,
  rightContent,
  className,
}: HeaderMoProps) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    if (handleBack) {
      handleBack();
    } else {
      router.back();
    }
  };

  if (showLogo) {
    return (
      <header
        className={cn(
          "pc:hidden w-full h-14 px-6 flex items-center justify-start fixed top-0 left-0 right-0 z-10",
          className,
        )}
      >
        <Image src={logo} alt="logo" width={128} height={35} priority />
      </header>
    );
  }

  return (
    <header
      className={cn(
        "pc:hidden w-full h-14 px-6 flex items-center fixed top-0 left-0 right-0 z-10",
        rightContent ? "justify-between gap-2" : "justify-start",
        className,
      )}
    >
      <div className="flex items-center gap-2 w-full">
        {showBackButton && <BackButton onClick={handleBackButtonClick} />}

        {title && <h1 className="typo-mo-title-l700 text-center">{title}</h1>}

        {!title && content}
      </div>

      {rightContent && rightContent}
    </header>
  );
};

export default HeaderMo;
