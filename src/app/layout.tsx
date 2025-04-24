import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryClientWrapper from "@/providers/query-client.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Find weather for cities around the world",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}      >
        <QueryClientWrapper>
          <div className="mx-auto min-h-screen max-w-screen-2xl py-0 font-sans md:py-16 lg:py-0 px-5 sm:px-0 ">
            {children}
          </div>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
