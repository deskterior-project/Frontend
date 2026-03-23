import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
        const urlObj = new URL(targetUrl);
        const hostname = urlObj.hostname.replace("www.", "");

        const favicon = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;

        return NextResponse.json({ domain: hostname, favicon });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid URL format" },
            { status: 400 }
        );
    }
}
