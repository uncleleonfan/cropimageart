"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { useEditor } from "./EditorProvider";
import { t } from "../lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const { imageSrc } = useEditor();

  // Hide footer when editing an image — user needs full screen space
  if (imageSrc) return null;

  return (
    <footer className="border-t border-zinc-800/40 bg-zinc-950/90 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4 text-[12px]">
        {/* Left: Brand + Copyright */}
        <div className="flex items-center gap-3 text-zinc-500 min-w-0">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-5 h-5 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
              <img src="/icon.png" alt="CropImageArt" className="w-full h-full object-contain" />
            </div>
            <span className="text-[13px] font-semibold text-white tracking-tight">
              {t(lang, "siteName")}
            </span>
          </Link>
          <span className="hidden sm:inline text-zinc-600">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {t(lang, "home")}
          </Link>
          <Link
            href="/blog"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {t(lang, "guides")}
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {t(lang, "about")}
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href="/privacy"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {t(lang, "privacy")}
          </Link>
          <Link
            href="/terms"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {t(lang, "terms")}
          </Link>
        </div>

        {/* Right: Contact */}
        <div className="flex items-center gap-1.5 text-zinc-500 shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a
            href="mailto:uncleleofan@gmail.com"
            className="hover:text-white transition-colors"
          >
            uncleleofan@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
