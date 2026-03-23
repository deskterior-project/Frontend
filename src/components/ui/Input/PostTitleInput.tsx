"use client";

import { cn } from "@/hooks/cn";
import { useFormContext } from "react-hook-form";

interface PostTitleInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    rules?: any;
    className?: string;
}

const PostTitleInput = ({
    name,
    placeholder,
    rules,
    className,
}: PostTitleInputProps) => {
    const { register } = useFormContext();

    return (
        <div className={cn("flex w-full flex-col gap-2", className)}>
            <div className="relative flex items-center justify-center">
                <input
                    id={name}
                    type="text"
                    maxLength={30}
                    placeholder={placeholder}
                    className={cn(
                        "mo:h-6.75 mo:w-81.75 pc:w-198 pc:h-10.75 text-black-900 transition-all outline-none",
                        "mo:typo-mo-title-l700 pc:typo-pc-title-l700",
                        "placeholder:text-black-600 placeholder:mo:typo-mo-title-l700 placeholder:pc:typo-pc-title-l700"
                    )}
                    {...register(name, rules)}
                />
            </div>
        </div>
    );
};

export default PostTitleInput;
