"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import TextField from "@/components/ui/TextField/TextField";
import DividerIcon from "@/assets/divider-short-regular.svg";
import XIcon from "@/assets/dismiss-regular.svg";
import PenIcon from "@/assets/edit-regular.svg";
import PersonIcon from "@/assets/person-regular.svg";
import { useRecentSearches } from "@/hooks/useRecentSearches";
import { useAuthStore } from "@/store/authStore";
import BasicButton from "../ui/Button/BasicButton";

interface HeaderPcProps {
  type?: "default" | "write";
  className?: string;
  onPublish?: () => void;
  onExit?: () => void;
  onProfileOpen?: () => void;
  canPublish?: boolean;
}

const HeaderPc = ({
  type = "default",
  className,
  onPublish,
  onExit,
  onProfileOpen,
  canPublish = false,
}: HeaderPcProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const isLoggedIn = useAuthStore((s) => !!s.user);

  const { recent, saveSearch, removeSearch, clearAll } = useRecentSearches();

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      saveSearch(searchValue);
      setIsDropdownOpen(false);
      if (e.currentTarget) {
        e.currentTarget.blur();
      }
      router.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleRecentClick = (term: string) => {
    setSearchValue(term);
    saveSearch(term);
    setIsDropdownOpen(false);
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearAll();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSearchValue(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <header
      className={`hidden pc:flex justify-between w-full items-center z-50 mb-12 h-16 py-2 ${className}`}
    >
      <div className="flex gap-10">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              priority
              width={128}
              height={35}
            />
          </Link>
          {type === "default" && (
            <>
              <DividerIcon className="size-5" />
              <Link href="/post-list">
                <span className="typo-pc-body-s400">리스트</span>
              </Link>
            </>
          )}
        </div>

        {type === "default" && (
          <div className="w-[500px] relative" ref={searchRef}>
            <TextField
              value={searchValue}
              setValue={setSearchValue}
              placeholder="검색어를 입력하세요."
              onKeyDown={onSearch}
              onFocus={() => setIsDropdownOpen(true)}
            />
            {isDropdownOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 bg-white-200 w-full border border-black-900 pt-8 pb-6 px-8 z-50">
                <div className="mb-3 flex justify-between items-center">
                  <span className="typo-pc-body-m500 text-black-900">
                    최근 검색어
                  </span>
                  {recent.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearAll}
                      className="typo-pc-body-s400 text-black-500 cursor-pointer"
                    >
                      전체 삭제
                    </button>
                  )}
                </div>
                {recent.length > 0 ? (
                  <ul className="bg-white-200">
                    {recent.map((term, i) => (
                      <li
                        key={i}
                        onClick={() => handleRecentClick(term)}
                        className="py-2 px-1 hover:bg-black-200 cursor-pointer flex justify-between items-center group"
                      >
                        <span className="typo-pc-body-s400">{term}</span>
                        <XIcon
                          className="size-5"
                          onClick={(e: any) => {
                            e.stopPropagation();
                            removeSearch(term);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-10 text-center text-black-500 typo-pc-body-s400 pt-[74px] pb-[130px]">
                    최근 검색어가 없습니다.
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex gap-4">
            {type === "write" ? (
              <>
                <BasicButton
                  variant="tertiary"
                  size="small"
                  className="pc:px-4 pc:py-2"
                  onClick={onExit}
                >
                  <span className="typo-pc-body-s500">나가기</span>
                </BasicButton>
                <BasicButton
                  variant="primary"
                  size="small"
                  className="pc:px-4 pc:py-2"
                  disabled={!canPublish}
                  onClick={onPublish}
                >
                  <span className="typo-pc-body-s500">올리기</span>
                </BasicButton>
              </>
            ) : (
              <>
                <Link href="/write">
                  <BasicButton
                    variant="primary"
                    size="small"
                    className="pc:px-2 pc:py-[9px]"
                  >
                    <PenIcon className="size-5" />
                  </BasicButton>
                </Link>
                <Link href="/my-page">
                  <BasicButton
                    variant="secondary"
                    size="small"
                    className="pc:px-2 pc:py-[9px]"
                    onClick={onProfileOpen}
                  >
                    <PersonIcon className="size-5" />
                  </BasicButton>
                </Link>
              </>
            )}
          </div>
        ) : (
          <Link href="/sign-in">
            <BasicButton
              variant="primary"
              size="small"
              className="pc:px-4 pc:py-2"
            >
              <span className="typo-pc-body-s500">로그인</span>
            </BasicButton>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderPc;
