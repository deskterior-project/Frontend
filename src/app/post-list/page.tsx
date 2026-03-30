"use client";

import BottomNav from "@/components/section/BottomNav";
import CategoryBar from "@/components/section/CategoryBar";
import PostCard from "@/components/section/PostCard";
import BasicButton from "@/components/ui/Button/BasicButton";
import PenIcon from "@/assets/pen-regular.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderPc from "@/components/section/HeaderPc";

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
  {
    id: 5,
    category: "개발자",
    userName: "silver moon",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 6,
    category: "개발자",
    userName: "silver moon",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 7,
    category: "개발자",
    userName: "silver moon",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
  {
    id: 8,
    category: "개발자",
    userName: "silver moon",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표하기로합시다",
  },
];

const page = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleGoToWrite = () => {
    // 로그인 조건문 추가
    router.push("/write");
  };

  const filteredBestPosts =
    selectedCategory === "전체"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) => post.category === selectedCategory);

  const filteredAllPosts =
    selectedCategory === "전체"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((post) => post.category === selectedCategory);

  const isTotalEmpty =
    filteredBestPosts.length === 0 && filteredAllPosts.length === 0;

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col pl-6 max-w-[1200px] mx-auto w-full">
        <HeaderPc />
        <div className="pc:hidden w-full pt-2.5 pb-[11px] flex items-center">
          <div className="relative w-32 h-[35px]">
            <Image
              src="/logo.svg"
              alt="logoImg"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
          className="mt-3 mb-6 pc:mb-[60px]"
        />
        {isTotalEmpty ? (
          <div className="flex flex-col min-h-[60vh]">
            <h2 className="typo-mo-title-m700 mb-4 pc:mb-6 pc:typo-pc-title-m700">
              {selectedCategory} 게시물
            </h2>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="mb-4 flex flex-col items-center">
                <span className="typo-mo-body-m400 text-black-600">
                  등록된 게시물이 아직 없습니다.
                </span>
                <span className="typo-mo-body-m400 text-black-600">
                  {selectedCategory} 카테고리의 첫번째 글을 써주세요!
                </span>
              </div>
              <BasicButton
                onClick={handleGoToWrite}
                variant="primary"
                size="large"
                className="h-8 py-1 px-3 flex justify-center items-center"
              >
                <span className="typo-mo-body-l400">글쓰러 가기</span>
                <PenIcon className="size-6" />
              </BasicButton>
            </div>
          </div>
        ) : (
          <>
            <section className="flex flex-col mb-[60px] pc:mb-[120px] pr-6 pc:pr-0">
              <h2 className="typo-mo-title-m700 mb-4 pc:mb-6 pc:typo-pc-title-m700">
                {selectedCategory} 인기게시물
              </h2>

              <div className="-ml-6 pl-6 flex overflow-x-auto gap-2 no-scrollbar pc:ml-0 pc:pl-0 pc:flex pc:overflow-x-auto pc:gap-6">
                {filteredBestPosts.map((post) => (
                  <div
                    key={post.id}
                    className="shrink-0 w-36 pc:w-[calc((100%-48px)/3)]"
                  >
                    <PostCard
                      userName={post.userName}
                      userImage={post.userImage}
                      thumbnail={post.thumbnail}
                      isblack={post.isblack}
                      title={post.title}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col">
              <h2 className="typo-mo-title-m700 mb-4 pc:mb-6 pc:typo-pc-title-m700">
                전체 게시물
              </h2>
              <div className="grid gap-x-[7px] gap-y-4 grid-cols-[repeat(auto-fill,minmax(144px,1fr))] pc:grid-cols-3 pc:gap-6">
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
            </section>
          </>
        )}

        <BottomNav />
      </div>
    </div>
  );
};

export default page;
