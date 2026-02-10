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
import { MouseEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  const url = searchParams.get("posts");
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState<string | null>(url || "like");

  const handleTabClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    setCurrentTab(id);
    router.push(`/my-page?posts=${id}`);
  };

  return (
    <main className="px-6 pt-17 flex flex-col gap-6">
      <HeaderMo title="마이페이지" />
      <section className="px-4 py-5 pc:px-8 pc:py-8 flex flex-col gap-4 pc:flex pc:flex-row pc:justify-between pc:items-center bg-white inset-ring-1 inset-ring-black-900">
        <Profile />
        <div className="flex gap-3 w-full pc:w-fit items-center justify-center">
          <BasicButton
            variant="secondary"
            size="small"
            href={"/my-page/profile-edit"}
          >
            프로필 수정
            <Edit className="size-4" />
          </BasicButton>
          <BasicButton variant="tertiary" size="small">
            로그아웃
            <Logout className="size-4" />
          </BasicButton>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <TabMenu
              key={tab.id}
              active={currentTab === tab.id}
              id={tab.id}
              onClick={(e) => handleTabClick(e, tab.id)}
              className="group"
            >
              {currentTab === tab.id ? tab.activeIcon : tab.icon}

              {tab.title}
            </TabMenu>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyPage;
