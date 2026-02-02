import BottomNav from "@/components/section/BottomNav";
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
    <div className="pc:px-[360px]">
      <div className="flex flex-col mb-10">
        <div className="py-2.5 ml-6">
          <Image src="/logo.svg" alt="logo" width={128} height={35} />
        </div>
        <div className="relative w-[375px] h-[200px] pc:w-[1200px] pc:h-[640px]">
          <Image
            src="/homeImgSample.png"
            alt="homeImg"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 pc:gap-[120px] mb-12 ml-6">
        {HOMELIST.map((item) => (
          <div key={item}>
            <h2 className="typo-mo-title-m700 pc:typo-pc-title-m700 mb-4 pc:mb-6">
              {item}
            </h2>
            <div className="flex overflow-x-auto gap-2 pc:gap-6 no-scrollbar">
              {MOCK_POSTS.map((post) => (
                <PostCard
                  key={post.id}
                  userName={post.userName}
                  userImage={post.userImage}
                  thumbnail={post.thumbnail}
                  isblack={post.isblack}
                  title={post.title}
                  size={item === "추천 게시물" ? "long" : "default"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
