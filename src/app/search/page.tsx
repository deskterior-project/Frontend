"use client";

import TextField from "@/components/ui/TextField/TextField";
import React, { useMemo, useState } from "react";
import XIcon from "@/assets/dismiss-regular.svg";
import CategoryBar from "@/components/section/CategoryBar";
import PostCard from "@/components/section/PostCard";
import BottomNav from "@/components/section/BottomNav";

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
  const [recent, setRecent] = useState<string[]>(["두쫀쿠", "두쫀쿠2"]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchResults, setSearchResults] = useState(MOCK_POSTS);
  const [inputValue, setInputValue] = useState("");
  const [finalKeyword, setFinalKeyword] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [suggestions, setSuggestions] = useState(["두쫀쿠", "두쫀쿠2"]);
  const hasRecent = recent.length > 0;
  const hasResults = searchResults.length > 0;
  const isTyping = inputValue.length > 0;

  const handleSearch = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) return;

    setRecent((prev) => {
      const filtered = prev.filter((item) => item !== trimmedKeyword);

      return [trimmedKeyword, ...filtered].slice(0, 10);
    });

    setInputValue(trimmedKeyword);
    setFinalKeyword(trimmedKeyword);
    setIsDone(true);
    setSelectedCategory("전체");
  };

  const filteredResults = useMemo(() => {
    return searchResults.filter((post) => {
      return selectedCategory === "전체" || post.category === selectedCategory;
    });
  }, [searchResults, selectedCategory]);

  const removeRecent = (keyword: string) => {
    setRecent((prev) => prev.filter((item) => item !== keyword));
  };

  const handleClearAll = () => {
    setRecent([]);
  };

  return (
    <div className="flex flex-col h-screen px-6 py-3.5">
      <div className="mb-[26px] shrink-0">
        {/* <TextField
          id={"search"}
          value={inputValue}
          setValue={setInputValue}
          placeholder={"검색어를 입력하세요."}
          state={"default"}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) {
              handleSearch(inputValue);
            }
          }}
        /> */}
      </div>

      <div className="flex flex-1 flex-col">
        {isDone ? (
          <div className="flex flex-1 flex-col">
            <div className="mb-6">
              <span className="typo-mo-title-m700 text-black-900">
                "{finalKeyword}"
              </span>
              <span className=" typo-mo-body-l500 text-black-900">
                에 대한 검색결과
              </span>
            </div>
            <CategoryBar
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
              className="mb-6 pc:mb-[60px]"
            />
            {hasResults ? (
              <div className="grid grid-cols-2 pc:grid-cols-3 gap-x-[7px] gap-y-4 pc:gap-6">
                {filteredResults.map((post) => (
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
              <div className="flex flex-1 items-center justify-center">
                <span className="typo-mo-body-m400 text-black-500">
                  검색어를 확인 후 다시 입력해주세요!
                </span>
              </div>
            )}
          </div>
        ) : isTyping ? (
          <div>
            {suggestions.map((item) => (
              <div
                key={item}
                className="flex justify-between items-center py-2"
                onClick={() => handleSearch(item)}
              >
                <span className="typo-mo-body-s400 text-black-900">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <span className="typo-mo-title-m700 text-black-900 mb-3">
                최근 검색어
              </span>
              {hasRecent && (
                <button
                  onClick={handleClearAll}
                  className="text-black-500 typo-mo-body-s400"
                >
                  전체 삭제
                </button>
              )}
            </div>
            {hasRecent ? (
              recent.map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center py-2"
                  onClick={() => handleSearch(item)}
                >
                  <span className="typo-mo-body-s400 text-black-900">
                    {item}
                  </span>
                  <XIcon
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      removeRecent(item);
                    }}
                    className="size-5"
                  />
                </div>
              ))
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <span className="typo-mo-body-m400 text-black-500">
                  최근 검색어가 없습니다.
                </span>
              </div>
            )}
          </>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
