"use client";
import Profile from "@/components/section/my-page/Profile";
import BasicButton from "@/components/ui/Button/BasicButton";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import { useParams } from "next/navigation";
import React from "react";
import Follow from "@/assets/person-add-regular.svg";

const userInfo = {
    profileImageUrl: "/image.png",
    nickname: "nickname",
    following: 999,
    followers: 999,
};

const UserPage = () => {
    const { userId } = useParams();

    return (
        <main className="pc:pt-28 pc:gap-15 flex h-screen w-screen flex-col items-center gap-6 px-6 pt-17">
            <HeaderMo showBackButton title={userId as string} />
            <section className="pc:max-w-300 inset-ring-black-900 pc:py-8 pc:px-8 pc:flex-row pc:justify-between pc:items-center flex w-full flex-col gap-4 px-4 py-5 inset-ring-1">
                <Profile isMe={false} userInfo={userInfo} />
                <div className="pc:pl-0 pl-15">
                    <BasicButton variant="secondary" size="small">
                        팔로우
                        <Follow className="pc:size-5 size-4" />
                    </BasicButton>
                </div>
            </section>
            <section className="pc:max-w-300 pc:gap-6 flex w-full flex-col gap-4">
                <h2 className="typo-mo-title-m700 pc:typo-pc-title-m700">
                    {userId} 님이 작성한 게시물
                </h2>
            </section>
        </main>
    );
};

export default UserPage;
