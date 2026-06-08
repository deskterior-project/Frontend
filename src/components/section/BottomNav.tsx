"use client";

import React from "react";
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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/useAuthGuard";

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter(); 
  const { checkAuth } = useAuthGuard()

 const navItems = [
    { path: "/", Regular: HomeIcon, Filled: HomeFilledIcon, label: "홈", auth: false },
    { path: "/post-list", Regular: AppListIcon, Filled: AppListFilledIcon, auth: false },
    { path: "/search", Regular: SearchIcon, Filled: SearchFilledIcon, auth: false },
    { path: "/write", Regular: PenIcon, Filled: PenFilledIcon, auth: true }, 
    { path: "/mypage", Regular: PersonIcon, Filled: PersonFilledIcon, auth: true },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.auth) {
      e.preventDefault(); // Link의 기본 이동 동작을 막음
      checkAuth(() => {
        router.push(item.path);
      });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-11 border-t z-10 border-black-900 bg-white">
      <ul className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = isActive ? item.Filled : item.Regular;

          return (
            <li key={item.path} className="flex-1">
              <Link
                href={item.path}
                className="flex flex-col items-center gap-1"
                onClick={(e) => handleNavClick(e, item)}
              >
                <Icon className="w-6 h-6" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
