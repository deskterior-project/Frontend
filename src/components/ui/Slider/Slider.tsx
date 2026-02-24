"use client";
import ChevronLeft from "@/assets/chevron-circle-left-regular.svg";
import ChevronRight from "@/assets/chevron-circle-right-regular.svg";
import { cn } from "@/hooks/cn";
import { useMemo } from "react";

interface SliderProps {
  array: { id: number; url: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  className?: string;
}

const MAX_DOTS = 5;

const DOT_WIDTH = 20;

const Slider = ({
  array,
  currentIndex,
  setCurrentIndex,
  className,
}: SliderProps) => {
  if (array.length <= 1) return null;

  const translateX = useMemo(() => {
    const centerOffset = Math.floor(MAX_DOTS / 2);
    const maxStartIndex = array.length - MAX_DOTS;

    let startIndex = currentIndex - centerOffset;
    startIndex = Math.max(0, Math.min(startIndex, maxStartIndex));

    return -startIndex * DOT_WIDTH;
  }, [array.length, currentIndex]);

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  const handleArrowNavigationClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div
      className={cn("flex items-center justify-center gap-3 w-fit", className)}
    >
      <button
        onClick={() => handleArrowNavigationClick("left")}
        className={cn("cursor-pointer", currentIndex === 0 && "opacity-50")}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="size-6" />
      </button>
      <div
        className={cn("overflow-hidden")}
        style={{
          width:
            array.length <= MAX_DOTS
              ? "fit-content"
              : `${DOT_WIDTH * MAX_DOTS}px`,
        }}
      >
        <div
          className={cn(
            "flex items-center transition-transform duration-200 ease-out",
            array.length <= MAX_DOTS && "justify-center",
          )}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {array.map((item, idx) => (
            <div
              className="flex items-center justify-center p-1.5 shrink-0"
              key={item.id}
            >
              <div
                className={cn(
                  "size-2 rounded-full transition-colors duration-300 cursor-pointer",
                  currentIndex === idx ? "bg-black-600" : "bg-black-400",
                )}
                onClick={() => handleDotClick(idx)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleArrowNavigationClick("right")}
        className={cn(
          "cursor-pointer",
          currentIndex === array.length - 1 && "opacity-50",
        )}
        disabled={currentIndex === array.length - 1}
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
};

export default Slider;
