'use client';
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/frontend/Navbar";
import Footer from "@/components/frontend/Footer";
import NavSidebar from "@/components/learn/NavSidebar"
import NavDropdown from "@/components/learn/NavDropdown";


export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NavDropdown />
      <div className={"flex flex-row min-h-screen flex-1 lg:px-20 lg:pt-6 lg:pb-4 " + (isSidebarOpen ? "lg:gap-4" : "lg:gap-0")}>
        <NavSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* Main Content */}
        <div className="prose max-w-none flex-1 bg-white p-4 rounded-lg">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}