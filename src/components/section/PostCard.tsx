"use client";

import Image from "next/image";
import Heart from "@/assets/heart-regular.svg";
import FilledHeart from "@/assets/heart-filled.svg";

type PostCardProps = {
  userName: string;
  userImage: string;
  thumbnail: string;
  isblack: boolean;
  title: string;
  size?: "default" | "long";
};

export default function PostCard({
  userName,
  userImage,
  thumbnail,
  isblack,
  title,
  size = "default",
}: PostCardProps) {
  const aspectClass =
    size === "long"
      ? "aspect-[144/230] pc:aspect-[352/563]"
      : "aspect-[144/108] pc:aspect-[352/264]";

  return (
    <div className="flex flex-col gap-2 inset-ring-1 px-2 py-3 pc:px-4 pc:py-5 w-full max-w-40 pc:max-w-96">
      <span className="truncate typo-mo-body-s400 pc:typo-pc-body-s400">
        {title}
      </span>
      <div className={`relative overflow-hidden w-full ${aspectClass}`}>
        <Image
          src={thumbnail}
          alt="post thumbnail"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex justify-between items-center text-black-900">
        <div className="flex gap-2 items-center">
          <div className="relative size-6 pc:size-8 overflow-hidden rounded-full">
            <Image
              src={userImage}
              alt={userName}
              fill
              className="object-cover"
            />
          </div>
          <span className="typo-mo-body-s400 pc:typo-pc-body-s400">
            {userName}
          </span>
        </div>
        {isblack ? (
          <FilledHeart className="size-5 pc:size-8" />
        ) : (
          <Heart className="size-5 pc:size-8" />
        )}
      </div>
    </div>
  );
}
