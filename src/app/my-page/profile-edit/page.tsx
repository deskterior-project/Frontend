"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

import RadioButton from "@/components/ui/Button/RadioButton";
import HeaderMo from "@/components/ui/Header/HeaderMo";
import TextField from "@/components/ui/TextField/TextField";
import BasicButton from "@/components/ui/Button/BasicButton";
import BottomNav from "@/components/section/BottomNav";

const ProfileEditPage = () => {
    const [nickName, setNickName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("male");
    const handleGenderChange = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>
    ) => {
        setGender(e.target.value);
    };
    const handleNickNameChange = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>
    ) => {
        setNickName(e.target.value);
    };
    const handleBirthDateChange = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>
    ) => {
        setBirthDate(e.target.value);
    };
    return (
        <main className="pc:pt-28 flex h-screen w-screen items-start justify-center px-6 pt-17">
            <HeaderMo title="프로필 수정" showBackButton />
            <section className="inset-ring-black-900 pc:h-188 pc:pb-12 pc:w-147 pc:px-8 flex h-152.5 w-full flex-col items-center justify-between bg-white px-4 pt-8 pb-8 inset-ring-1">
                <div className="pc:gap-8 flex w-full flex-col items-center gap-4">
                    <div className="bg-black-400 relative size-20 overflow-hidden rounded-full">
                        <Image
                            src={"/image.png"}
                            alt="profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <TextField
                            id={nickName}
                            value={nickName}
                            label="닉네임"
                            helperText=""
                            onChange={handleNickNameChange}
                        />
                        <TextField
                            id={birthDate}
                            value={birthDate}
                            label="생년월일"
                            helperText=""
                            onChange={handleBirthDateChange}
                        />
                        <div className="flex flex-col gap-2">
                            <div className="typo-mo-title-s700 pc:typo-pc-title-xs700">
                                성별
                            </div>
                            <div className="flex justify-between">
                                <RadioButton
                                    size={"medium"}
                                    value={"male"}
                                    onChange={handleGenderChange}
                                    checked={gender === "male"}
                                >
                                    남성
                                </RadioButton>
                                <RadioButton
                                    size={"medium"}
                                    value={"female"}
                                    onChange={handleGenderChange}
                                    checked={gender === "female"}
                                >
                                    여성
                                </RadioButton>
                                <RadioButton
                                    size={"medium"}
                                    value={"none"}
                                    onChange={handleGenderChange}
                                    checked={gender === "none"}
                                >
                                    선택안함
                                </RadioButton>
                            </div>
                        </div>
                        <TextField
                            id={"job"}
                            value={"job"}
                            label="직업"
                            helperText=""
                        />
                    </div>
                </div>
                <div className="pc:gap-4 flex w-full flex-col items-center justify-center gap-2">
                    <div className="typo-mo-body-s400 pc:typo-pc-body-s400 text-black-600 w-fit">
                        카카오로 로그인했어요
                    </div>
                    <BasicButton
                        variant="secondary"
                        size="large"
                        className="w-full"
                        disabled
                    >
                        수정 완료
                    </BasicButton>
                </div>
            </section>
            <BottomNav />
        </main>
    );
};

export default ProfileEditPage;
