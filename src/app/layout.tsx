import { suit } from "@/assets/fonts/fonts";
import AlertModal from "@/components/ui/Modal/AlertModal/AlertModal";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "De:Foco_",
  description: "데스크테리어 & 뽀모도로",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={suit.variable}>
      <body className={suit.className}>
        {children}
        <AlertModal />
      </body>
    </html>
  );
}
