"use client";

import ChatIcon from "@/assets/chat-regular.svg";
import ChevronRight from "@/assets/chevron-circle-right-regular.svg";
import AlarmIcon from "@/assets/clock-alarm-regular.svg";
import HeartIcon from "@/assets/heart-regular.svg";
import PersonAddIcon from "@/assets/person-add-regular.svg";
import ShareIcon from "@/assets/share-android-regular.svg";
import Badge from "@/components/ui/Badge/Badge";
import BasicButton from "@/components/ui/Button/BasicButton";
import Carousel from "@/components/ui/Carousel/Carousel";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import CommentModal from "@/components/ui/Modal/CommentModal/CommentModal";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileBottomSheet from "./MobileBottomSheet";

const MOCK_DATA: any = {
    status: "success",
    data: {
        postId: "post_12345",
        isMine: false, // 현재 로그인한 사용자가 작성자인지 여부

        // 1. 글 쓴 사람 정보
        author: {
            userId: "user_99",
            name: "김철수",
            profileImage: "https://picsum.photos/id/64/200/200",
        },

        // 2. 글 정보
        post: {
            category: "developer", // student, designer, developer, marketer 등
            categoryLabel: "개발자",
            title: "2026년 프론트엔드 데스크테리어 셋업 공유합니다!",
            createdAt: "2026-03-28T22:14:00Z",
            content:
                "이번에 새로 이사하면서 데스크 셋업을 다시 해봤어요. 맥북 프로와 커스텀 키보드의 조합이 아주 만족스럽습니다. 특히 조명에 신경을 많이 썼는데 어떤가요? 궁금하신 점은 댓글로 남겨주세요!",

            // 사진 (UploadImage 타입 기반)
            images: [
                { id: 101, url: "https://picsum.photos/id/1/600/400" },
                { id: 102, url: "https://picsum.photos/id/2/600/400" },
                { id: 103, url: "https://picsum.photos/id/3/600/400" },
            ],

            // 상품 (ProductLink 타입 기반)
            products: [
                {
                    id: 201,
                    productName: "아르떼미데 톨로메오 마이크로 탁상조명",
                    productLink:
                        "https://www.artemide.com/en/subfamily/1856140/tolomeo-micro-table",
                    favicon: "https://www.artemide.com/favicon.ico",
                    domain: "artemide.com",
                },
                {
                    id: 202,
                    productName: "플랜테리어용 몬스테라 화분 & 스탠드",
                    productLink:
                        "https://www.ikea.com/kr/ko/p/monstera-deliciosa-potted-plant-00361141/",
                    favicon: "https://www.ikea.com/favicon.ico",
                    domain: "ikea.com",
                },
                {
                    id: 203,
                    productName: "그루브메이드 우드 모니터 스탠드 (Walnut)",
                    productLink:
                        "https://grovemade.com/product/wood-monitor-stand/",
                    favicon: "https://grovemade.com/favicon.ico",
                    domain: "grovemade.com",
                },
                {
                    id: 204,
                    productName: "킨토 데이오프 텀블러 500ml",
                    productLink:
                        "https://kinto-kr.com/product/day-off-tumbler-500ml/147/",
                    favicon: "https://kinto-kr.com/favicon.ico",
                    domain: "kinto-kr.com",
                },
            ],
            likeCount: 128,
            isLiked: true,
        },

        // 3. 글 댓글
        comments: {
            totalCount: 3,
            list: [
                {
                    commentId: "comm_1",
                    authorName: "이영희",
                    authorProfile: "https://picsum.photos/id/65/100/100",
                    content:
                        "와, 조명이 진짜 예술이네요! 어떤 제품 쓰시는지 알 수 있을까요?",
                    createdAt: "2026-03-28T23:00:00Z",
                },
                {
                    commentId: "comm_2",
                    authorName: "박지성",
                    authorProfile: "https://picsum.photos/id/66/100/100",
                    content:
                        "키보드 타건감 궁금해요 ㅎㅎ 세팅 너무 깔끔합니다.",
                    createdAt: "2026-03-29T09:30:00Z",
                },
                {
                    commentId: "comm_3",
                    authorName: "최코딩",
                    authorProfile: "https://picsum.photos/id/67/100/100",
                    content: "역시 개발자는 장비빨이죠. 잘 보고 갑니다!",
                    createdAt: "2026-03-29T10:15:00Z",
                },
            ],
        },

        // 4. 추천 게시물들 (하단 관련 게시물)
        recommendedPosts: [
            {
                postId: "post_201",
                title: "무선 셋업의 완성, 깔끔한 데스크테리어를 위한 케이블 정리 팁",
                thumbnail: "https://picsum.photos/id/160/600/400",
                likeCount: 156,
                author: {
                    name: "데스크덕후",
                    profileImage: "https://picsum.photos/id/64/100/100",
                },
            },
            {
                postId: "post_202",
                title: "화이트 감성 충만! 2026년 프론트엔드 개발자의 책상 꾸미기",
                thumbnail: "https://picsum.photos/id/48/600/400",
                likeCount: 243,
                author: {
                    name: "미니멀리스트",
                    profileImage: "https://picsum.photos/id/65/100/100",
                },
            },
            {
                postId: "post_203",
                title: "개발 생산성을 높여주는 모니터 조명과 무드등 배치법",
                thumbnail: "https://picsum.photos/id/180/600/400",
                likeCount: 98,
                author: {
                    name: "라이트모드",
                    profileImage: "https://picsum.photos/id/66/100/100",
                },
            },
            {
                postId: "post_204",
                title: "플랜테리어와 IT 기기의 조화, 쾌적한 작업실 만드는 법",
                thumbnail: "https://picsum.photos/id/201/600/400",
                likeCount: 112,
                author: {
                    name: "그린코더",
                    profileImage: "https://picsum.photos/id/67/100/100",
                },
            },
            {
                postId: "post_205",
                title: "커스텀 키보드로 시작하는 나만의 데스크테리어 입문 가이드",
                thumbnail: "https://picsum.photos/id/119/600/400",
                likeCount: 187,
                author: {
                    name: "키보드마스터",
                    profileImage: "https://picsum.photos/id/68/100/100",
                },
            },
            {
                postId: "post_206",
                title: "우드 감성 데스크셋업, 따뜻한 분위기의 코딩 환경 구축하기",
                thumbnail: "https://picsum.photos/id/1060/600/400",
                likeCount: 310,
                author: {
                    name: "우드러버",
                    profileImage: "https://picsum.photos/id/69/100/100",
                },
            },
        ],
    },
};

const PostDetailSection = () => {
    const { author, post, comments, recommendedPosts, isMine } = MOCK_DATA.data;
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const isMobile = useIsMobile(1024);
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center gap-10 bg-white pb-20">
            <HeaderMo
                showBackButton={true}
                title="게시물 상세"
                rightContent={null}
            />

            <main className="inset-ring-black-900 pc:w-300 mo:w-82 pc:gap-4 mo:gap-2 pc:p-8 mo:py-4 mo:px-2 mo:mt-17 flex flex-col inset-ring-1">
                <div className="flex items-center gap-2">
                    <Badge
                        label={post.categoryLabel}
                        variant="outline_pastel"
                        color="black"
                        className="shrink-0 whitespace-nowrap"
                    />

                    <span className="text-black-900 pc:typo-pc-body-s400 mo:typo-mo-body-m400">
                        {post.title}
                    </span>
                </div>
                <div className="text-black-900 pc:typo-pc-body-s400 mo:typo-mo-body-s400">
                    {new Date(post.createdAt)
                        .toLocaleDateString("ko-KR")
                        .replace(/\. /g, ".")
                        .slice(0, -1)}
                </div>

                <div className="pc:block hidden">
                    <Carousel
                        images={post.images}
                        aspectRatio="1136 / 639"
                        extraButton={(id) => {
                            // 현재 슬라이드 중인 이미지의 URL을 찾습니다.
                            const targetImage = post.images.find(
                                (img: any) => img.id === id
                            );

                            return (
                                <BasicButton
                                    variant="primary"
                                    onClick={() => {
                                        // 이미지 URL을 쿼리 스트링으로 인코딩해서 전달
                                        const encodedUrl = encodeURIComponent(
                                            targetImage.url
                                        );
                                        router.push(
                                            `/pomodoro?bg=${encodedUrl}`
                                        );
                                    }}
                                >
                                    뽀모도로
                                    <AlarmIcon className="size-5 text-white" />
                                </BasicButton>
                            );
                        }}
                    />
                </div>

                <div className="pc:hidden block">
                    <Carousel images={post.images} aspectRatio="312 / 230" />
                </div>

                <Dropdown items={post.products} />

                <section className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="pc:size-8 relative size-6 overflow-hidden rounded-full">
                            <Image
                                src={author.profileImage}
                                alt={author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-black-900 pc:typo-pc-body-s400 mo:typo-mo-body-s400">
                            {author.name}
                        </span>
                    </div>
                    <div className="pc:gap-4 mo:gap-2 flex items-center">
                        <div className="text-black-900 pc:gap-3 mo:gap-1 flex items-center">
                            <button>
                                <HeartIcon className="pc:size-8 size-5" />
                            </button>
                            <button>
                                <ShareIcon className="pc:size-8 size-5" />
                            </button>
                        </div>
                        <BasicButton
                            variant="secondary"
                            size="small"
                            type="button"
                            disabled={false}
                            className="text-black-900 whitespace-nowrap"
                        >
                            팔로우
                            <PersonAddIcon className="size-5" />
                        </BasicButton>
                    </div>
                </section>

                <section className="text-black-900 leading-[1.6]">
                    <p className="pc:typo-pc-body-s500 mo:typo-mo-body-s500 whitespace-pre-wrap">
                        {post.content}
                    </p>
                </section>
            </main>

            <section className="pc:block inset-ring-black-900 mx-5 mb-10 hidden w-300 px-8.25 py-5.25 inset-ring-1">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-black-900 typo-pc-title-s700">
                        댓글 {comments.totalCount}
                    </h3>
                    <ChevronRight
                        className="size-6 cursor-pointer"
                        onClick={() => setIsCommentModalOpen(true)}
                    />
                </div>
                <div className="flex gap-3">
                    <div className="size-8 shrink-0 rounded-full bg-gray-200" />
                    <div className="flex flex-col gap-1 overflow-hidden">
                        <span className="text-black-900 typo-pc-body-s500">
                            nickname
                        </span>
                        <p className="text-black-900 typo-pc-body-s400 truncate">
                            {comments.list[0]?.content}
                        </p>
                    </div>
                </div>
            </section>

            <section className="pc:block border-black-600 hidden w-300 border-t pt-10 pb-30.5">
                <div className="flex flex-col gap-6">
                    <h3 className="text-black-900 typo-pc-title-m700 block">
                        추천 게시물
                    </h3>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                        {recommendedPosts.slice(0, 6).map((rPost: any) => (
                            <div
                                key={rPost.postId}
                                className="inset-ring-black-900 flex h-97.5 w-[384px] flex-col bg-white px-5 py-4 inset-ring-1"
                            >
                                <h4 className="text-black-800 mb-3 line-clamp-1 text-[16px] font-bold">
                                    {rPost.title}
                                </h4>

                                <div className="relative mx-auto mb-4 h-66 w-86 overflow-hidden bg-gray-100">
                                    <Image
                                        src={rPost.thumbnail}
                                        alt={rPost.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="relative size-8 overflow-hidden rounded-full">
                                            <Image
                                                src={rPost.author.profileImage}
                                                alt={rPost.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <span className="typo-pc-body-s400 text-black-900">
                                            {rPost.author.name}
                                        </span>
                                    </div>

                                    <HeartIcon className="size-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isCommentModalOpen &&
                (isMobile ? (
                    <MobileBottomSheet
                        open={isCommentModalOpen}
                        setOpen={setIsCommentModalOpen}
                        totalCount={comments.totalCount}
                        comments={comments.list.map((c: any) => ({
                            id: c.commentId,
                            content: c.content,
                            author: {
                                name: c.authorName,
                                profileImage: c.authorProfile,
                            },
                        }))}
                    />
                ) : (
                    <CommentModal
                        open={isCommentModalOpen}
                        setOpen={setIsCommentModalOpen}
                        totalCount={comments.totalCount}
                        comments={comments.list.map((c: any) => ({
                            id: c.commentId,
                            content: c.content,
                            author: {
                                name: c.authorName,
                                profileImage: c.authorProfile,
                            },
                        }))}
                    />
                ))}

            {/* --- 모바일 하단 고정 댓글 바 --- */}
            <div className="pc:hidden border-black-100 fixed bottom-0 left-0 z-50 flex w-full items-center gap-3 border-t bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                <div className="h-11 w-full">
                    <div
                        className="inset-ring-black-600 bg-white-200 relative flex h-7 w-83.75 items-center px-2 py-1 inset-ring-1"
                        onClick={() => setIsCommentModalOpen(true)}
                    >
                        <input
                            type="text"
                            readOnly
                            placeholder="댓글을 입력해주세요."
                            className="w-full bg-transparent text-[14px] outline-none placeholder:text-gray-400"
                        />

                        <ChatIcon className="text-black-600 absolute right-1 size-6 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostDetailSection;
