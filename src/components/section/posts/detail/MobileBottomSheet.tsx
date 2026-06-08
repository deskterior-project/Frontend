"use client";

import ChatIcon from "@/assets/chat-regular.svg";
import HeartIcon from "@/assets/heart-regular.svg";
import ExclamationTriangleIcon from "@/assets/warning-regular.svg";
import { cn } from "@/hooks/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

const MobileBottomSheet = ({ open, setOpen, comments, totalCount }: any) => {
    const [content, setContent] = useState("");
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const deltaY = e.touches[0].clientY - startY;
        if (deltaY > 0) setCurrentY(deltaY);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (currentY > 150) setOpen(false);
        setCurrentY(0);
    };

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-100 flex flex-col justify-end">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setOpen(false)}
            />

            <div
                className={cn(
                    "relative flex h-109.5 w-full flex-col bg-white shadow-xl",
                    !isDragging && "transition-transform duration-300 ease-out"
                )}
                style={{ transform: `translateY(${currentY}px)` }}
            >
                {/* 1. 드래그 핸들 영역: 여기서만 터치 이벤트를 작동시킵니다. */}
                <div
                    className="flex w-full cursor-grab flex-col items-center pt-4 pb-2 active:cursor-grabbing"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="bg-black-900 h-1 w-6" />
                    <div className="mt-1 flex w-full items-center justify-center px-5">
                        <h3 className="text-black-900 typo-mo-body-s500">
                            댓글
                        </h3>
                    </div>
                </div>

                {/* 2. 댓글 목록: 여기는 드래그 이벤트 영향을 받지 않아야 스크롤이 잘 됩니다. */}
                <div className="custom-scrollbar flex-1 overflow-y-auto px-5 pb-24">
                    <div className="flex flex-col gap-6">
                        {comments.map((comment: any) => (
                            <div
                                key={comment.id}
                                className="flex items-center gap-4"
                            >
                                <div className="shriflex relative flex size-8 items-center justify-center overflow-hidden rounded-full">
                                    <Image
                                        src={comment.author.profileImage}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-1">
                                    <div className="flex items-start justify-between">
                                        <span className="text-black-900 text-[13px] font-bold">
                                            {comment.author.name}
                                        </span>
                                    </div>
                                    <p className="text-black-800 text-[13px] leading-relaxed">
                                        {comment.content}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2.5 opacity-40">
                                    <HeartIcon className="size-5" />
                                    <ExclamationTriangleIcon className="size-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. 하단 입력창: 이제 textarea를 클릭해도 부모의 드래그 이벤트가 간섭하지 않습니다. */}
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-100 bg-white p-5">
                    <div
                        className="inset-ring-black-600 bg-white-200 relative flex h-7 w-83.75 items-center justify-between px-2 py-1 inset-ring-1"
                        onClick={() => {}}
                    >
                        <textarea
                            rows={1}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
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

export default MobileBottomSheet;
