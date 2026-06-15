import type { NextRequest } from "next/server";

import { updateSession } from "@/utils/supabase/middleware";

export const middleware = (request: NextRequest) => updateSession(request);

export const config = {
    matcher: [
        // 정적 파일 / 이미지 / favicon / Next 내부 리소스 제외
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
