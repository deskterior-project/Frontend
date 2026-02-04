import ChevronLeft from "@/assets/chevron-circle-left-regular.svg";
import ChevronRight from "@/assets/chevron-circle-right-regular.svg";
import Dismiss from "@/assets/dismiss-regular.svg";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";

interface SliderProps {
  images: { id: number; url: string }[];
  aspectRatio?: string; // 예: "16/9", "4/3", "1/1"
  onRemove?: (id: number) => void; // 삭제 로직 프롭스
  extraButton?: (id: number) => ReactNode; // 추가 버튼 렌더링 함수
}

export default function Slider({
  images,
  aspectRatio = "1/1",
  onRemove,
  extraButton,
}: SliderProps) {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  if (!images || images.length === 0) return null;
  const isMultiple = images.length > 1;

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    startX.current = pageX;
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const diff = pageX - startX.current;

    if (
      (current === 0 && diff > 0) ||
      (current === images.length - 1 && diff < 0)
    ) {
      setDragOffset(diff * 0.3);
    } else {
      setDragOffset(diff);
    }
  };

  const onDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (dragOffset < -50 && current < images.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (dragOffset > 50 && current > 0) {
      setCurrent((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  return (
    <div className="relative w-full overflow-hidden select-none touch-none">
      <div
        className={`flex w-full ${!isDragging.current ? "transition-transform duration-500 ease-out" : ""}`}
        style={{
          transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
        }}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-full shrink-0"
            style={{ aspectRatio }} // 프롭스로 받은 비율 적용
          >
            <Image
              src={image.url}
              alt="slide"
              fill
              className="object-cover pointer-events-none"
              priority={image.id === images[0].id}
            />

            {/* 오른쪽 상단 버튼 레이어 */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
              {/* 삭제 버튼 */}
              {onRemove && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 드래그 이벤트 전파 방지
                    onRemove(image.id);
                  }}
                  className="w-6 h-6 flex items-center justify-center bg-white inset-ring-1 inset-ring-black"
                >
                  <Dismiss className="w-4 h-4 text-gray-700" />
                </button>
              )}
              {/* 추가 버튼 (커스텀 버튼) */}
              {extraButton && (
                <div onClick={(e) => e.stopPropagation()}>
                  {extraButton(image.id)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isMultiple && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-between gap-3 py-1.5 h-6 bg-white/3 z-10">
          <button onClick={() => setCurrent((p) => Math.max(0, p - 1))}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            {images.slice(0, 5).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === current ? "bg-black-800" : "bg-black-400"}`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setCurrent((p) => Math.min(images.length - 1, p + 1))
            }
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
