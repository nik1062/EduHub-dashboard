import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduHub | Next-Gen Learning Dashboard",
  description: "A comprehensive learning platform for modern students.",
};

import { SidebarProvider } from "@/context/SidebarContext";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="h-full bg-gray-50 flex overflow-hidden text-gray-900">
        <SessionProvider>
          <SidebarProvider>
            <Sidebar />
            <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
