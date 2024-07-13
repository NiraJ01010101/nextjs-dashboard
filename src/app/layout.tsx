"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Navbar, Sidebar } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full text-textPrimary bg-backgroundPrimary flex ${poppins.className}`}
      >
        <div
          className={`transition-all duration-700 ${
            isCollapsed ? "w-1/6" : "w-[5%]"
          }`}
        >
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>
        <div
          className={`bg-backgroundSecondary transition-all duration-700 ${
            isCollapsed ? "w-11/12" : "w-[95%]"
          }`}
        >
          <main className="main-container">
            <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
