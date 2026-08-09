import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import EditorProvider from "./components/EditorProvider";
import LanguageProvider from "./components/LanguageProvider";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CropImageArt — Crop with Composition Guides",
  description:
    "Crop images beautifully with professional composition guides including Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, and more. Free online image cropping tool.",
  keywords: [
    "image crop",
    "composition grid",
    "rule of thirds",
    "golden ratio",
    "photo crop tool",
    "aesthetic crop",
    "online image editor",
  ],
  openGraph: {
    title: "CropImageArt — Crop with Composition Guides",
    description:
      "Crop images beautifully with professional composition guides.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-zinc-950 text-white font-sans flex flex-col">
        <LanguageProvider>
          <EditorProvider>
            {children}
            <Footer />
          </EditorProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
