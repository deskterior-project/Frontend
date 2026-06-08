"use client";

import ResetIcon from "@/assets/arrow-counterclockwise-regular.svg";
import ArrowDownIcon from "@/assets/chevron-down-regular.svg";
import ArrowUpIcon from "@/assets/chevron-up-regular.svg";
import ClockIcon from "@/assets/clock-alarm-regular.svg";
import logoIcon from "@/assets/logos/logo-typography.png";
import PauseIcon from "@/assets/pause-regular.svg";
import PlayIcon from "@/assets/triangle-right-regular.svg";
import BasicButton from "@/components/ui/Button/BasicButton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PomodoroPage() {
    const searchParams = useSearchParams();
    const bgUrl = searchParams.get("bg");

    // --- 상태 관리 ---
    const [isExpanded, setIsExpanded] = useState(false); // 아코디언 열림 여부
    const [isModalOpen, setIsModalOpen] = useState(false); // 설정 모달 여부

    // 타이머 설정 값 (기본 25, 5, 15)
    const [settings, setSettings] = useState({
        pomodoro: 25,
        short: 5,
        long: 15,
    });
    const [tempSettings, setTempSettings] = useState(settings); // 모달용 임시 값

    const [mode, setMode] = useState<"pomodoro" | "short" | "long">("pomodoro");
    const [timeLeft, setTimeLeft] = useState(settings.pomodoro * 60);
    const [isActive, setIsActive] = useState(false);

    // --- 타이머 로직 ---
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    // 모드 변경 시 시간 초기화
    useEffect(() => {
        setTimeLeft(settings[mode] * 60);
        setIsActive(false);
    }, [mode, settings]);

    // 시간 포맷팅 (00:00)
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    // 원형 프로그레스 계산
    const progress = (timeLeft / (settings[mode] * 60)) * 100;

    const handleSaveSettings = () => {
        setSettings(tempSettings);
        setIsModalOpen(false);
    };
    const strokeColor = "#E9F5EB"; // 전역 배경이 어두우므로 검정색 고정

    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-start pt-10">
            {/* 1. 배경 이미지 */}
            {bgUrl && (
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={decodeURIComponent(bgUrl)}
                        fill
                        alt="background"
                        className="object-cover brightness-50"
                    />
                </div>
            )}
            {!isModalOpen && (
                <div>
                    {/* 2. 뽀모도로 툴 바 (상단 중앙) */}
                    <div
                        className={`inset-ring-black-900 z-20 w-127.25 overflow-hidden bg-white text-white shadow-2xl inset-ring-1 backdrop-blur-md transition-all duration-300 ${
                            isExpanded ? "h-160.25" : "h-18"
                        }`}
                    >
                        {/* 툴 바 상단 (닫혀있을 때 기본 노출) */}
                        <div className="flex items-center justify-between px-3 py-3">
                            <div className="relative h-8.75 w-32">
                                <Image
                                    src={logoIcon}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <span
                                    className={`inset-ring-black-900 typo-pc-title-s700 cursor-pointer px-3 py-2 inset-ring-1 transition-colors ${
                                        timeLeft === 0
                                            ? "text-green-600"
                                            : "text-black-900"
                                    }`}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    {formatTime(timeLeft)}
                                </span>
                                <button
                                    onClick={() => setIsActive(!isActive)}
                                    className="inset-ring-black-900 cursor-pointer p-3 inset-ring-1 transition-transform"
                                >
                                    {isActive ? (
                                        <PauseIcon className="text-black-900 size-6" />
                                    ) : (
                                        <PlayIcon className="text-black-900 size-6" />
                                    )}
                                </button>

                                <button
                                    onClick={() => {
                                        setIsActive(false);
                                        setTimeLeft(settings[mode] * 60);
                                    }}
                                    className="inset-ring-black-900 cursor-pointer p-3 inset-ring-1 transition-transform"
                                >
                                    <ResetIcon className="text-black-900 size-6" />
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inset-ring-black-900 cursor-pointer p-3 inset-ring-1 transition-transform"
                                >
                                    <ClockIcon className="text-black-900 size-6" />
                                </button>
                            </div>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inset-ring-black-900 cursor-pointer p-1 inset-ring-1 transition-transform"
                            >
                                {isExpanded ? (
                                    <ArrowDownIcon className="text-black-900 size-6" />
                                ) : (
                                    <ArrowUpIcon className="text-black-900 size-6" />
                                )}
                            </button>
                        </div>
                        {/* 아코디언 내용 (열렸을 때) */}
                        <div
                            className={`px-5 transition-all duration-500 ease-in-out ${isExpanded ? "max-h-100 pb-8 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-6">
                                {/* 원형 프로그레스 바 (시안 반영) */}
                                <div className="relative flex h-97.5 w-97.5 items-center justify-center">
                                    <svg
                                        className="absolute h-full w-full scale-x-[-1] rotate-90"
                                        viewBox="0 0 420 420"
                                    >
                                        {/* 1. 바깥쪽 큰 링 (반지름 195px) */}
                                        <circle
                                            cx="210"
                                            cy="210"
                                            r="195"
                                            stroke="#000000"
                                            strokeWidth="1.2"
                                            fill="transparent"
                                        />
                                        {/* 2. 안쪽 작은 링 (반지름 157px) */}
                                        <circle
                                            cx="210"
                                            cy="210"
                                            r="157"
                                            stroke="#000000"
                                            strokeWidth="1.2"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="210"
                                            cy="210"
                                            r="176"
                                            stroke={strokeColor}
                                            strokeWidth="38"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="210"
                                            cy="210"
                                            r="176"
                                            stroke="#F2F2F2"
                                            strokeWidth="38"
                                            fill="transparent"
                                            strokeDasharray={1105.8}
                                            strokeDashoffset={
                                                1105.8 -
                                                (1105.8 * progress) / 100
                                            }
                                            strokeLinecap="butt"
                                            className="shadow-sm transition-all duration-1000 ease-linear"
                                        />

                                        <line
                                            x1="367" // 210(중심) + 157(내경) = 367
                                            y1="210"
                                            x2="405" // 210(중심) + 195(외경) = 405
                                            y2="210"
                                            stroke="#000000"
                                            strokeWidth="1"
                                        />
                                        {/* 6. 끝선 (진행률에 따라 회전) */}
                                        <line
                                            x1="367"
                                            y1="210"
                                            x2="405"
                                            y2="210"
                                            stroke="#000000"
                                            strokeWidth="1"
                                            style={{
                                                transformOrigin: "210px 210px",
                                                transform: `rotate(${progress * 3.6}deg)`,
                                            }}
                                            className="transition-all duration-1000 ease-linear"
                                        />
                                    </svg>

                                    {/* 중앙 시간 */}
                                    <span className="typo-pc-heading-l900 text-black-900 tracking-tighter">
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>

                                {/* 하단 모드 선택 버튼 그룹 (BasicButton 활용) */}
                                <div className="mt-13 flex w-full gap-2">
                                    {(
                                        ["pomodoro", "short", "long"] as const
                                    ).map((m) => (
                                        <BasicButton
                                            key={m}
                                            variant={
                                                mode === m
                                                    ? "primary"
                                                    : "tertiary"
                                            }
                                            size="small"
                                            onClick={() => setMode(m)}
                                            className={`h-10.75 flex-1 font-bold transition-all ${
                                                mode === m
                                                    ? "bg-black-900 text-white"
                                                    : "text-black-900 border-none bg-gray-50"
                                            }`}
                                        >
                                            {m === "pomodoro"
                                                ? "뽀모도로"
                                                : m === "short"
                                                  ? "짧은 휴식"
                                                  : "긴 휴식"}
                                        </BasicButton>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* 3. 설정 모달 */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="h-76 w-147 bg-white p-8">
                        <div className="mb-6 flex items-center justify-between pb-4">
                            <h2 className="typo-pc-title-m700 text-gray-800">
                                뽀모도로 설정
                            </h2>
                        </div>

                        <div className="mb-12 flex gap-2">
                            {[
                                { id: "pomodoro", label: "뽀모도로" },
                                { id: "short", label: "짧은 휴식" },
                                { id: "long", label: "긴 휴식" },
                            ].map((item) => (
                                <div key={item.id} className="flex-1">
                                    <label className="typo-pc-title-xs700 uppercase">
                                        {item.label}
                                    </label>
                                    <input
                                        type="number"
                                        value={
                                            tempSettings[
                                                item.id as keyof typeof settings
                                            ]
                                        }
                                        onChange={(e) =>
                                            setTempSettings({
                                                ...tempSettings,
                                                [item.id]: Number(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                        className="typo-pc-body-m400 inset-ring-black-900 w-full px-3 py-2 inset-ring-1 outline-none"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-3">
                            <BasicButton
                                variant="tertiary"
                                size="small"
                                type="button"
                                disabled={false}
                                className="h-10.75 w-41.5"
                                onClick={() => setIsModalOpen(false)}
                            >
                                취소
                            </BasicButton>
                            <BasicButton
                                variant="primary"
                                size="small"
                                type="button"
                                disabled={false}
                                onClick={handleSaveSettings}
                                className="h-10.75 w-41.5"
                            >
                                저장
                            </BasicButton>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
