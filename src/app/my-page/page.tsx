"use client";
import Profile from "@/components/section/my-page/Profile";
import BasicButton from "@/components/ui/Button/BasicButton";
import Edit from "@/assets/edit-regular.svg";
import Logout from "@/assets/sign-out-regular.svg";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import TabMenu from "@/components/ui/Button/TabMenu";
import Heart from "@/assets/heart-regular.svg";
import FillHeart from "@/assets/heart-filled.svg";
import TextEdit from "@/assets/clipboard-text-edit-regular.svg";
import FillTextEdit from "@/assets/clipboard-text-edit-filled.svg";
import { MouseEvent, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BottomNav from "@/components/section/BottomNav";
import { useAuthStore } from "@/store/authStore";
import { signOut } from "@/services/auth";

const tabs = [
    {
        id: "like",
        title: "좋아요 표시한 글",
        icon: <Heart className="size-4" />,
        activeIcon: <FillHeart className="size-4" />,
    },
    {
        id: "my",
        title: "내가 쓴 글",
        icon: <TextEdit className="size-4" />,
        activeIcon: <FillTextEdit className="size-4" />,
    },
];

const MyPage = () => {
    const searchParams = useSearchParams();
    const currentTab = searchParams.get("posts") || "like";
    const router = useRouter();

    const user = useAuthStore((s) => s.user);
    const isReady = useAuthStore((s) => s.isReady);

    useEffect(() => {
        if (isReady && !user) {
            router.replace("/sign-in");
        }
    }, [isReady, user, router]);

    if (!isReady || !user) {
        return null;
    }

    const userInfo = {
        profileImageUrl:
            user.user_metadata?.avatar_url ??
            user.user_metadata?.picture ??
            "/image.png",
        nickname:
            user.user_metadata?.nickname ??
            user.user_metadata?.name ??
            user.user_metadata?.full_name ??
            user.email ??
            "사용자",
        following: 0,
        followers: 0,
    };

    const handleTabClick = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        router.push(`/my-page?posts=${id}`);
    };

    const handleLogout = async () => {
        await signOut();
        router.replace("/");
    };

    return (
        <main className="pc:pt-28 pc:gap-15 flex h-screen w-screen flex-col items-center gap-6 px-6 pt-17">
            <HeaderMo title="마이페이지" />
            <section className="pc:max-w-300 pc:px-8 pc:py-8 pc:flex pc:flex-row pc:justify-between pc:items-center inset-ring-black-900 flex w-full flex-col gap-4 bg-white px-4 py-5 inset-ring-1">
                <Profile isMe userInfo={userInfo} />
                <div className="pc:w-fit flex w-full items-center justify-center gap-3">
                    <BasicButton
                        variant="secondary"
                        size="small"
                        href={"/my-page/profile-edit"}
                    >
                        프로필 수정
                        <Edit className="size-4" />
                    </BasicButton>
                    <BasicButton
                        variant="tertiary"
                        size="small"
                        onClick={handleLogout}
                    >
                        로그아웃
                        <Logout className="size-4" />
                    </BasicButton>
                </div>
            </section>
            <section className="pc:max-w-300 flex w-full flex-col items-start gap-4">
                <div className="pc:gap-4 flex gap-3">
                    {tabs.map((tab) => (
                        <TabMenu
                            key={tab.id}
                            active={currentTab === tab.id}
                            id={tab.id}
                            onClick={(e) => handleTabClick(e, tab.id)}
                        >
                            {currentTab === tab.id ? tab.activeIcon : tab.icon}

                            {tab.title}
                        </TabMenu>
                    ))}
                </div>
            </section>
            <BottomNav />
        </main>
    );
};

export default MyPage;
