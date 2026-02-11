import Dismiss from "@/assets/dismiss-regular.svg";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import Slider from "../Slider/Slider";

interface CarouselProps {
  images: { id: number; url: string }[];
  aspectRatio?: string;
  onRemove?: (id: number) => void;
  extraButton?: (id: number) => ReactNode;
}

export default function Carousel({
  images,
  aspectRatio = "1/1",
  onRemove,
  extraButton,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  if (!images || images.length === 0) return null;

  useEffect(() => {
    if (images.length > 0 && currentIndex >= images.length) {
      setCurrentIndex(images.length - 1);
    }
  }, [images.length, currentIndex]);

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
      (currentIndex === 0 && diff > 0) ||
      (currentIndex === images.length - 1 && diff < 0)
    ) {
      setDragOffset(diff * 0.3);
    } else {
      setDragOffset(diff);
    }
  };

  const onDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (dragOffset < -50 && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  return (
    <div className="relative w-full overflow-hidden select-none touch-none">
      <div
        className={`flex w-full ${!isDragging.current ? "transition-transform duration-500 ease-out" : ""}`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
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
            style={{ aspectRatio }}
          >
            <Image
              src={image.url}
              alt="slide"
              fill
              className="object-cover pointer-events-none"
              priority={image.id === images[0].id}
            />

            <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
              {onRemove && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(image.id);
                  }}
                  className="size-6 flex items-center justify-center bg-white inset-ring-1 inset-ring-black"
                >
                  <Dismiss className="size-4 text-gray-700" />
                </button>
              )}

              {extraButton && (
                <div onClick={(e) => e.stopPropagation()}>
                  {extraButton(image.id)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Slider
        array={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10"
      />
    </div>
  );
}
