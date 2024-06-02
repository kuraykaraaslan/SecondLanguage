import type { Metadata } from "next";
import Navbar from "@/components/frontend/Navbar";
import Footer from "@/components/frontend/Footer";
import NavSidebar from "@/components/learn/NavSidebar"

export const metadata: Metadata = {
  title: "Second Language - Learn a new language with ease",
  description: "versatile and powerful platform designed to facilitate language learning in an engaging and effective manner.",
  applicationName: "Second Language",
  authors: [{ name: "Kwankitiya Kwankong", url: "https://www.instagram.com/breezykwan/" }],
  keywords: ["language", "learning", "education", "second language"],
  creator: "Second Language Team",
  publisher: "kuray.dev internet solutions",
  icons: [
    {
      url: "/assets/img/icons/64x64.png",
      sizes: "64x64",
      type: "image/png",
    },
    {
      url: "/assets/img/icons/128x128.png",
      sizes: "128x128",
      type: "image/png",
    }
  ],
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className={"flex flex-row flex-1 lg:px-20 lg:pt-6 lg:pb-4 "}>
        {/* Main Content */}
        <div className="prose max-w-none flex-1 rounded-lg">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}