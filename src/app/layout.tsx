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
  metadataBase: new URL("https://cropimageart.vercel.app"),
  title: {
    default: "CropImageArt — Free Online Image Cropping Tool with Composition Guides",
    template: "%s — CropImageArt",
  },
  description:
    "Crop images beautifully with professional composition guides including Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, and more. Free online image cropping tool — all processing happens locally in your browser, no upload needed.",
  keywords: [
    "image crop",
    "composition grid",
    "rule of thirds",
    "golden ratio",
    "photo crop tool",
    "aesthetic crop",
    "online image editor",
    "golden spiral",
    "diagonal method",
    "triangle composition",
    "leading lines",
    "free image cropper",
  ],
  authors: [{ name: "CropImageArt" }],
  creator: "CropImageArt",
  publisher: "CropImageArt",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "CropImageArt",
    title: "CropImageArt — Free Online Image Cropping Tool with Composition Guides",
    description:
      "Crop images beautifully with professional composition guides. Free, private, no upload needed.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CropImageArt — Free Online Image Cropping Tool",
    description:
      "Crop images beautifully with professional composition guides. Free, private, no upload needed.",
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
