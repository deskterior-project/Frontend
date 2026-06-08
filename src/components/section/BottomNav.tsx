"use client";

import React, { useState } from "react";
import HomeIcon from "@/assets/home-regular.svg";
import HomeFilledIcon from "@/assets/home-filled.svg";
import AppListIcon from "@/assets/apps-list-regular.svg";
import AppListFilledIcon from "@/assets/apps-list-filled.svg";
import SearchIcon from "@/assets/search-regular.svg";
import SearchFilledIcon from "@/assets/search-filled.svg";
import PenIcon from "@/assets/pen-regular.svg";
import PenFilledIcon from "@/assets/pen-filled.svg";
import PersonIcon from "@/assets/person-circle-regular.svg";
import PersonFilledIcon from "@/assets/person-circle-filled.svg";
import { usePathname, useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import SideBar from "../ui/SideBar/SideBar";

const BottomNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const route = useRouter();
    const { checkAuth } = useAuthGuard();
    const navItems = [
        {
            path: "/",
            onClick: () => route.push("/"),
            Regular: HomeIcon,
            Filled: HomeFilledIcon,
            label: "홈",
        },
        {
            path: "/post-list",
            onClick: () => route.push("/post-list"),
            Regular: AppListIcon,
            Filled: AppListFilledIcon,
        },
        {
            path: "/search",
            onClick: () => route.push("/search"),
            Regular: SearchIcon,
            Filled: SearchFilledIcon,
        },
        {
            path: "/posts/upload",
            onClick: () => checkAuth(() => route.push("/posts/upload")),
            Regular: PenIcon,
            Filled: PenFilledIcon,
        },
        {
            path: "/my-page",
            onClick: () => checkAuth(() => setIsOpen(!isOpen)),
            Regular: PersonIcon,
            Filled: PersonFilledIcon,
        },
    ];
    return (
        <>
            <nav className="pc:hidden border-black-900 fixed right-0 bottom-0 left-0 z-100 h-11 border-t bg-white">
                <ul className="flex h-full items-center justify-around">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        const Icon = isActive ? item.Filled : item.Regular;

                        return (
                            <li key={item.path}>
                                <button
                                    onClick={item.onClick}
                                    className="flex cursor-pointer flex-col items-center gap-1"
                                >
                                    <Icon className="h-6 w-6" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default BottomNav;