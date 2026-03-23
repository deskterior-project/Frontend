"use client";

import { cn } from "@/hooks/cn";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

interface PostContentInputProps {
    name: string;
    placeholder?: string;
    rules?: any;
    className?: string;
}

const PostContentInput = ({
    name,
    placeholder,
    rules,
    className,
}: PostContentInputProps) => {
    const { register } = useFormContext();

    // 1. 높이 조절을 위한 Ref 생성
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // 2. React Hook Form의 ref와 커스텀 ref를 합치기 위한 작업
    const { ref, ...rest } = register(name, rules);

    // 3. 높이 조절 함수
    const handleResizeHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <div className={cn("flex w-full flex-col gap-2", className)}>
            <div className="relative">
                <textarea
                    id={name}
                    placeholder={placeholder}
                    rows={1}
                    className={cn(
                        "mo:w-81.75 pc:w-198 text-black-900 resize-none overflow-hidden transition-all outline-none",
                        "mo:typo-mo-body-m400 pc:typo-pc-body-m400",
                        "placeholder:text-black-600 min-h-25"
                    )}
                    {...rest}
                    ref={(e) => {
                        ref(e);
                        textareaRef.current = e;
                    }}
                    onInput={handleResizeHeight}
                />
            </div>
        </div>
    );
};

export default PostContentInput;
