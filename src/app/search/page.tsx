"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TextField from "@/components/ui/TextField/TextField";
import XIcon from "@/assets/dismiss-regular.svg";
import CategoryBar from "@/components/section/CategoryBar";
import PostCard from "@/components/section/PostCard";
import BottomNav from "@/components/section/BottomNav";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import HeaderPc from "@/components/section/HeaderPc";

const MOCK_POSTS = [
  {
    id: 1,
    category: "학생",
    userName: "saramino",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: true,
    title: "타이틀 한줄 넘어가면 말줄임표",
  },
  {
    id: 2,
    category: "디자이너",
    userName: "borjak",
    userImage: "/sampleProfile.png",
    thumbnail: "/sampleImg.png",
    isblack: false,
    title: "타이틀 한줄 넘어가면 말줄임표",
  },
];

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(["두쫀쿠", "두쫀쿠2"]); // 자동완성

  const { recent, saveSearch, removeSearch, clearAll } = useRecentSearches();

  useEffect(() => {
    setInputValue(query);
    if (query) setSelectedCategory("전체");
  }, [query]);

  const handleSearch = (keyword: string) => {
    const trimmed = keyword.trim();
    if (!trimmed) return;
    saveSearch(trimmed);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch(inputValue);
  };

  const filteredResults = useMemo(() => {
    return MOCK_POSTS.filter((post) => {
      return selectedCategory === "전체" || post.category === selectedCategory;
    });
  }, [selectedCategory]);

  const isShowResult = query.length > 0;
  const isTyping = inputValue.length > 0 && !isShowResult;

  useEffect(() => {
    const handleCheckRedirect = () => {
      const isPC = window.innerWidth >= 1024;
      if (isPC && !query) {
        router.replace("/");
      }
    };

    handleCheckRedirect();
    window.addEventListener("resize", handleCheckRedirect);

    return () => {
      window.removeEventListener("resize", handleCheckRedirect);
    };
  }, [query, router]);

  return (
    <div className="flex flex-col h-screen px-6 py-3.5 pc:px-20">
      <HeaderPc />
      <div className="mb-14 pc:hidden">
        <HeaderMo
          showBackButton
          handleBack={isShowResult ? () => router.push("/search") : undefined}
          content={
            <TextField
              value={inputValue}
              setValue={setInputValue}
              placeholder="검색어를 입력하세요."
              onKeyDown={handleEnter}
            />
          }
        />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        {isShowResult ? (
          <div className="flex flex-1 flex-col">
            <div className="mb-6">
              <span className="typo-mo-title-m700 pc:typo-pc-title-m700 text-black-900">
                "{query}"
              </span>
              <span className="typo-mo-body-l500 pc:typo-pc-body-l500 text-black-900">
                {" "}
                에 대한 검색결과
              </span>
            </div>

            <CategoryBar
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
              className="mb-6 pc:mb-10"
            />

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-2 pc:grid-cols-4 gap-x-[7px] pc:gap-6 gap-y-4">
                {filteredResults.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <span className="typo-mo-body-m400 text-black-500">
                  검색 결과가 없습니다.
                </span>
              </div>
            )}
          </div>
        ) : isTyping ? (
          <div className="flex flex-col">
            {suggestions.map((item) => (
              <div
                key={item}
                className="py-2 cursor-pointer"
                onClick={() => handleSearch(item)}
              >
                <span className="typo-mo-body-s400 text-black-900">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-3">
              <span className="typo-mo-title-m700 text-black-900">
                최근 검색어
              </span>
              {recent.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-black-500 typo-mo-body-s400"
                >
                  전체 삭제
                </button>
              )}
            </div>
            <div className="flex flex-col">
              {recent.length > 0 ? (
                recent.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center py-2 cursor-pointer"
                    onClick={() => handleSearch(item)}
                  >
                    <span className="typo-mo-body-s400 text-black-900">
                      {item}
                    </span>
                    <XIcon
                      onClick={(e: any) => {
                        e.stopPropagation();
                        removeSearch(item);
                      }}
                      className="size-5 text-black-400"
                    />
                  </div>
                ))
              ) : (
                <div className="mt-20 text-center text-black-500">
                  최근 검색어가 없습니다.
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="pc:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default SearchPage;
