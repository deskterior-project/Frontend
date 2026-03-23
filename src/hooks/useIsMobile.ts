// @/hooks/useIsMobile.ts
import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint: number = 1024) => {
    // 초기값 설정 (서버 사이드 렌더링 에러 방지)
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // 첫 렌더링 시 확인
        checkIsMobile();

        // 창 크기 조절될 때마다 실행
        window.addEventListener("resize", checkIsMobile);
        
        // 언마운트 시 이벤트 제거 (메모리 누수 방지)
        return () => window.removeEventListener("resize", checkIsMobile);
    }, [breakpoint]);

    return isMobile;
};