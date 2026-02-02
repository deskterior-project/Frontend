"use client";

import BottomNav from "@/components/section/BottomNav";
import CategoryBar from "@/components/section/CategoryBar";
import PostCard from "@/components/section/PostCard";
import BasicButton from "@/components/ui/Button/BasicButton";
import PenIcon from "@/assets/pen-regular.svg";
import Image from "next/image";
import { useState } from "react";

const MOCK_POSTS = [
  {
    id: 1,
    category: "학생",
    userName: "saramino",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: true,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 2,
    category: "디자이너",
    userName: "borjak",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 3,
    category: "개발자",
    userName: "mallow23",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 4,
    category: "개발자",
    userName: "silver moon",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
];

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredBestPosts =
    selectedCategory === "전체"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) => post.category === selectedCategory);

  const filteredAllPosts =
    selectedCategory === "전체"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col px-6 pc:px-[360px]">
      <div className="flex items-center h-14 pc:h-16 mb-3 pc:mb-12">
        <Image src="/logo.svg" alt="logo" width={128} height={35} />
      </div>
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
        className="mb-6 pc:mb-[60px]"
      />
      <section className="flex flex-col mb-[60px] pc:mb-[120px]">
        <h2 className="typo-mo-title-m700 mb-4 pc:mb-6 pc:typo-pc-title-m700">
          {selectedCategory} 인기게시물
        </h2>
        {filteredBestPosts && filteredBestPosts.length > 0 ? (
          <div className="flex overflow-x-auto gap-2 pc:gap-6 no-scrollbar">
            {filteredBestPosts.map((post) => (
              <PostCard
                key={post.id}
                userName={post.userName}
                userImage={post.userImage}
                thumbnail={post.thumbnail}
                isblack={post.isblack}
                title={post.title}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <BasicButton
              variant="primary"
              size="large"
              className="h-8 py-1 px-3 flex justify-center items-center"
            >
              <span className="typo-mo-body-l400">글쓰러 가기</span>
              <PenIcon className="size-6" />
            </BasicButton>
          </div>
        )}
      </section>

      <section className="flex flex-col">
        {filteredAllPosts && filteredAllPosts.length > 0 ? (
          <>
            <h2 className="typo-mo-title-m700 mb-4 pc:mb-6 pc:typo-pc-title-m700">
              전체 게시물
            </h2>
            <div className="grid grid-cols-2 pc:grid-cols-3 gap-x-[7px] gap-y-4 pc:gap-6">
              {filteredAllPosts.map((post) => (
                <PostCard
                  key={post.id}
                  userName={post.userName}
                  userImage={post.userImage}
                  thumbnail={post.thumbnail}
                  isblack={post.isblack}
                  title={post.title}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
      <BottomNav />
    </div>
  );
};

export default page;
