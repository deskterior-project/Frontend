"use client";

import ChatIcon from "@/assets/chat-regular.svg";
import DismissIcon from "@/assets/dismiss-regular.svg";
import HeartIcon from "@/assets/heart-regular.svg";
import ExclamationTriangleIcon from "@/assets/warning-regular.svg";
import { cn } from "@/hooks/cn";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";

interface CommentModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    comments: any[];
    totalCount: number;
}

const CommentModal = ({
    open,
    setOpen,
    comments,
    totalCount,
}: CommentModalProps) => {
    const [content, setContent] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            border
            className={cn(
                "pc:w-[90vw] pc:max-w-160 pc:h-[90vh] pc:max-h-216 pc:px-6 pc:py-5",
                "gap-8"
            )}
            trigger={<div className="hidden" />}
        >
            <div className="flex w-full justify-between">
                <h3 className="text-black-900 typo-pc-title-s700">
                    댓글 {totalCount}
                </h3>
                <DismissIcon
                    className="text-black-900 inset-ring-black-900 size-5 cursor-pointer p-0.5 inset-ring-1"
                    onClick={() => setOpen(false)}
                />
            </div>

            <div className="h-8 w-full">
                <div className="inset-ring-black-600 bg-white-200 relative flex w-full items-center px-4 py-3 inset-ring-1">
                    <input
                        type="text"
                        placeholder="댓글을 입력해주세요."
                        className="w-full bg-transparent text-[14px] outline-none placeholder:text-gray-400"
                    />

                    <ChatIcon className="text-black-600 absolute right-4 size-6 cursor-pointer" />
                </div>
            </div>

            <div className="custom-scrollbar w-full flex-1 overflow-y-auto">
                {comments.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-400">
                        <span className="text-[14px]">댓글이 없습니다.</span>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex gap-3">
                                <div className="relative size-8 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                    <Image
                                        src={comment.author.profileImage}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-black-900 typo-pc-body-s500">
                                                {comment.author.name}
                                            </span>
                                            <p className="text-black-900 typo-pc-body-s400 pr-4 leading-relaxed">
                                                {comment.content}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button className="hover:text-black-900">
                                                <HeartIcon className="size-6" />
                                            </button>
                                            <button className="hover:text-black-900">
                                                <ExclamationTriangleIcon className="size-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default CommentModal;
