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
import { useAuthGuard } from "@/hooks/useAuthGuard";

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
    const { checkAuth } = useAuthGuard();
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const handleGoToWrite = () => {
        router.push("/write");
    };

    const handleLikeClick = (postId: number, nextState: boolean) => {
        console.log(
            `포스트 ${postId}의 좋아요 상태를 ${nextState}로 변경 시도`
        );
        // 실제 Supabase 연동 시: await supabase.from('likes').insert(...) 등
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
        <div className="min-h-screen w-full">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col">
                <HeaderPc />
                <div className="pc:hidden flex w-full items-center pt-2.5 pb-[11px]">
                    <div className="relative h-[35px] w-32">
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
                    className="pc:mb-[60px] mt-3 mb-6"
                />
                {isTotalEmpty ? (
                    <div className="flex min-h-[60vh] flex-col">
                        <h2 className="typo-mo-title-m700 pc:mb-6 pc:typo-pc-title-m700 mb-4">
                            {selectedCategory} 게시물
                        </h2>
                        <div className="flex flex-1 flex-col items-center justify-center">
                            <div className="mb-4 flex flex-col items-center">
                                <span className="typo-mo-body-m400 text-black-600">
                                    등록된 게시물이 아직 없습니다.
                                </span>
                                <span className="typo-mo-body-m400 text-black-600">
                                    {selectedCategory} 카테고리의 첫번째 글을
                                    써주세요!
                                </span>
                            </div>
                            <BasicButton
                                onClick={() => checkAuth(handleGoToWrite)}
                                variant="primary"
                                size="large"
                                className="flex h-8 items-center justify-center px-3 py-1"
                            >
                                <span className="typo-mo-body-l400">
                                    글쓰러 가기
                                </span>
                                <PenIcon className="size-6" />
                            </BasicButton>
                        </div>
                    </div>
                ) : (
                    <>
                        <section className="pc:mb-[120px] pc:pr-0 mb-[60px] flex flex-col pr-6">
                            <h2 className="typo-mo-title-m700 pc:mb-6 pc:typo-pc-title-m700 mb-4">
                                {selectedCategory} 인기게시물
                            </h2>

                            <div className="no-scrollbar pc:ml-0 pc:pl-0 pc:flex pc:overflow-x-auto pc:gap-6 -ml-6 flex gap-2 overflow-x-auto pl-6">
                                {filteredBestPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="pc:w-[calc((100%-48px)/3)] w-36 shrink-0"
                                    >
                                        <PostCard
                                            userName={post.userName}
                                            userImage={post.userImage}
                                            thumbnail={post.thumbnail}
                                            isblack={post.isblack}
                                            title={post.title}
                                            onLikeClick={(nextState) =>
                                                checkAuth(() =>
                                                    handleLikeClick(
                                                        post.id,
                                                        nextState
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="flex flex-col">
                            <h2 className="typo-mo-title-m700 pc:mb-6 pc:typo-pc-title-m700 mb-4">
                                전체 게시물
                            </h2>
                            <div className="pc:grid-cols-3 pc:gap-6 grid grid-cols-[repeat(auto-fill,minmax(144px,1fr))] gap-x-[7px] gap-y-4">
                                {filteredAllPosts.map((post) => (
                                    <PostCard
                                        key={post.id}
                                        userName={post.userName}
                                        userImage={post.userImage}
                                        thumbnail={post.thumbnail}
                                        isblack={post.isblack}
                                        title={post.title}
                                        onLikeClick={(nextState) =>
                                            checkAuth(() =>
                                                handleLikeClick(
                                                    post.id,
                                                    nextState
                                                )
                                            )
                                        }
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
