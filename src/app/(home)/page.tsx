
import BottomNav from "@/components/section/BottomNav";
import HeaderPc from "@/components/section/HeaderPc";
import PostCard from "@/components/section/PostCard";
import Image from "next/image";

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
  const HOMELIST = [
    "추천 게시물",
    "학생 인기게시물",
    "디자이너 인기게시물",
    "개발자 인기게시물",
    "마케터 인기게시물",
  ];
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto w-full">
        <HeaderPc />
        <div className="pc:hidden w-full pl-6 pt-2.5 pb-[11px] flex items-center">
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
        <div className="relative w-full aspect-375/200 pc:aspect-1200/640">
          <Image
            src="/homeImgSample.png"
            alt="homeImg"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-10 pc:gap-[120px] mb-12 pc:mt-[120px] mt-10 ml-6 pc:ml-0">
          {HOMELIST.map((item) => (
            <div key={item}>
              <h2 className="typo-mo-title-m700 pc:typo-pc-title-m700 mb-4 pc:mb-6">
                {item}
              </h2>
              <div className="flex overflow-x-auto pc:overflow-x-hidden gap-2 pc:gap-6 no-scrollbar -ml-6 w-[calc(100%+24px)] px-6 pc:ml-0 pc:w-full pc:px-0">
                {MOCK_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="shrink-0 pc:w-[calc((100%-48px)/3)]"
                  >
                    <PostCard
                      {...post}
                      size={item === "추천 게시물" ? "long" : "default"}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default page