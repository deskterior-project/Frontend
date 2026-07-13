"use client";
import {
  socialAuthOptions,
  type SocialAuthOption,
} from "@/constants/socialAuthOptions";
import { cn } from "@/hooks/cn";
import Image from "next/image";

interface SocialAuthSectionProps {
  className?: string;
  mode: "sign-in" | "sign-up";
  onClick?: (option: SocialAuthOption) => void;
}

const title = {
  "sign-in": "간편로그인 하기",
  "sign-up": "SNS로 가입하기",
};

const SocialAuthSection = ({
  className,
  mode,
  onClick,
}: SocialAuthSectionProps) => {
  const onClickHandler = (option: SocialAuthOption) => {
    if (onClick) {
      onClick(option);
    }
  };

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-3 w-73 pc:w-80",
        className,
      )}
    >
      <div className="typo-mo-title-l700 pc:typo-pc-title-l700">
        {title[mode]}
      </div>
      <div className="flex items-center justify-center gap-4 pc:gap-8">
        {socialAuthOptions.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() => onClickHandler(option)}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="size-10 pc:size-14">
                <Image src={option.icon} alt={option.name} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SocialAuthSection;
