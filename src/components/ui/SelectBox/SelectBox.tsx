"use client";

import { cn } from "@/hooks/cn";
import { useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

// 1. 필요한 타입들 내부에 정의 (외부에서 가져와도 됨)
export interface CommonItems {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface ISelect {
  name: string;
  items: CommonItems[]; // any 대신 구체적인 타입 사용
  rules?: any;
  disabled?: boolean;
  sizeW?: "XS" | "S" | "M" | "L" | "XL"; // 프로젝트에 맞는 키값으로 수정
  sizeH?: "XS" | "S" | "M";
  className?: string;
  onSubmit?: (item?: any) => void;
}

// 2. 누락되었던 width, height 객체 예시 (프로젝트의 실제 값으로 대체하세요)
const widthStyles: Record<string, string> = {
  XS: "w-[100px]",
  S: "w-[200px]",
  M: "w-[300px]",
  L: "w-[400px]",
  XL: "w-full",
};

const heightStyles: Record<string, string> = {
  XS: "h-[32px]",
  S: "h-[40px]",
  M: "h-[48px]",
};

const FormSelect = ({
  name,
  sizeW = "S",
  sizeH = "S",
  items = [], // 기본값 빈 배열 설정 (undefined 에러 방지)
  disabled = false,
  rules,
  className,
  onSubmit,
}: ISelect) => {
  const selectDiv = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  // useFormContext를 사용할 때는 반드시 상위에 <FormProvider>가 있어야 합니다.
  const {
    getValues,
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    control,
    name,
    rules: rules || {}, // rules가 없을 경우 빈 객체 전달
  });

  const selectValue = getValues(name);

  // 에러 메시지 추출 방식 안전하게 변경
  const errorObj = errors[name];
  const errorMessages = errorObj?.message;
  const hasError = !!errorMessages;

  useEffect(() => {
    const clickOutside = (evt: MouseEvent) => {
      if (
        selectDiv.current &&
        !selectDiv.current.contains(evt.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div
      className={cn("flex flex-col relative", widthStyles[sizeW], className)}
      ref={selectDiv}
    >
      <button
        id={name}
        type="button"
        disabled={disabled}
        className={cn(
          "w-full p-[10px] rounded border text-sm text-gray-700 text-left transition-colors",
          heightStyles[sizeH],
          // 기본 배경 및 비활성화 처리
          !disabled
            ? "bg-white hover:border-black"
            : "bg-gray-100 cursor-not-allowed",
          // 상태별 테두리 색상
          "border-gray-300",
          showOptions && "border-black",
          hasError && !showOptions && "border-red-500",
        )}
        onClick={() => {
          if (!disabled && items.length > 0) {
            setShowOptions(!showOptions);
          }
        }}
      >
        <div className="flex items-center justify-between">
          <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
            {items?.find((i) => i.value === selectValue)?.label ||
              "선택해 주세요"}
          </span>

          <div
            className={cn(
              "flex-shrink-0 w-3 h-3 transition-transform duration-200",
              // 화살표 아이콘 (이미지가 없다면 간단한 SVG로 대체하거나 기존 경로 유지)
              "bg-[url('/admin/icon/icon_arrow-down.svg')] bg-contain bg-no-repeat bg-center",
              showOptions ? "rotate-180" : "rotate-0",
            )}
          />
        </div>
      </button>

      {showOptions && (
        <ul
          className={cn(
            "absolute left-0 w-full border border-gray-300 z-50 overflow-auto bg-white shadow-md",
            "rounded-b-[4px] max-h-[200px] mt-1",
            sizeH === "XS" ? "top-[32px]" : "top-[40px]", // 버튼 높이에 맞춰 위치 조정
          )}
        >
          {items.map((item, idx) => (
            <li
              key={`${name}-opt-${idx}`}
              onClick={() => {
                field.onChange(item.value);
                setShowOptions(false);
                if (onSubmit) onSubmit(item.value);
              }}
              className={cn(
                "px-3 py-2 cursor-pointer transition-colors text-sm flex items-center gap-2", // gap-2와 flex 추가
                selectValue === item.value
                  ? "bg-gray-100 font-bold"
                  : "bg-white hover:bg-gray-50",
              )}
            >
              {/* 아이콘이 있으면 렌더링 */}
              {item.icon && <span className="w-4 h-4">{item.icon}</span>}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}

      {hasError && (
        <span className="text-red-500 mt-1 text-xs">
          {String(errorMessages)}
        </span>
      )}
    </div>
  );
};

export default FormSelect;
