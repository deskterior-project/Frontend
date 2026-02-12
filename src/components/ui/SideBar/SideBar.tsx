"use client";

import Profile from "@/components/section/my-page/Profile";
import { cn } from "@/hooks/cn";
import Logout from "@/assets/sign-out-regular.svg";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface SideBarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

type BackgroundColor = "white" | "green" | "blue" | "pink";

const NAV_LINKS = [
    { href: "/my-page/profile-edit", label: "프로필 수정" },
    { href: "/my-page?posts=like", label: "좋아요 표시한 글" },
    { href: "/my-page?posts=my", label: "내가 쓴 글" },
] as const;

const COLOR_BG_CLASS = [
    { color: "white", bgClass: "bg-bg-white" },
    { color: "green", bgClass: "bg-bg-green" },
    { color: "blue", bgClass: "bg-bg-blue" },
    { color: "pink", bgClass: "bg-bg-pink" },
];

const userInfo = {
    profileImageUrl: "/image.png",
    nickname: "nickname",
    following: 999,
    followers: 999,
};

const Divider = () => <div className="bg-black-500 mt-8 mb-4 h-px w-full" />;

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
    const [currentColor, setCurrentColor] = useState<BackgroundColor>("white");
    const navigationRef = useRef<HTMLElement>(null);

    const handleOutsideClose = useCallback(
        (e: MouseEvent) => {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        },
        [setIsOpen]
    );

    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => {
            document.addEventListener("click", handleOutsideClose);
        }, 0);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("click", handleOutsideClose);
            setIsOpen(false);
        };
    }, [isOpen, handleOutsideClose]);

    const handleLogOutClick = () => {};

    return (
        <>
            {isOpen && (
                <div className="pc:hidden fixed top-0 right-0 bottom-11 left-0 z-0 h-screen w-screen bg-[#141414]/60" />
            )}

            <nav
                ref={navigationRef}
                className={cn(
                    "fixed top-0 right-0 bottom-11 z-50 w-66.75 bg-white",
                    "transform transition-transform duration-150 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full",
                    "pc:hidden flex flex-col justify-between px-6 py-8"
                )}
            >
                <div className="flex flex-col">
                    <Profile isMe userInfo={userInfo} />
                    <Divider />
                    <div className="flex flex-col">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="typo-mo-body-l400 hover:bg-black-200 active:bg-black-200 px-1 py-2 text-start"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col items-start gap-4">
                        <div className="typo-mo-title-xs700">배경색 설정</div>
                        <div className="flex items-center justify-center gap-2.25">
                            {COLOR_BG_CLASS.map(({ color, bgClass }) => {
                                return (
                                    <button
                                        key={color}
                                        className={cn(
                                            "size-12 cursor-pointer inset-ring-1",
                                            bgClass,
                                            currentColor === color
                                                ? "inset-ring-white-900"
                                                : "inset-ring-white-400"
                                        )}
                                        onClick={() =>
                                            setCurrentColor(
                                                color as BackgroundColor
                                            )
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <Divider />
                    <button
                        onClick={handleLogOutClick}
                        className="typo-mo-body-l400 hover:bg-black-200 active:bg-black-200 flex cursor-pointer items-center justify-between px-1 py-2"
                    >
                        로그아웃
                        <Logout className="size-5" />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default SideBar;
