import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";

export const GET = async (request: NextRequest) => {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    if (error) {
        const redirectUrl = new URL("/sign-in", origin);
        redirectUrl.searchParams.set("error", errorDescription ?? error);
        return NextResponse.redirect(redirectUrl);
    }

    if (code) {
        const supabase = await createClient();
        const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

        if (!exchangeError) {
            return NextResponse.redirect(new URL(next, origin));
        }

        const redirectUrl = new URL("/sign-in", origin);
        redirectUrl.searchParams.set("error", exchangeError.message);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.redirect(new URL("/sign-in", origin));
};
