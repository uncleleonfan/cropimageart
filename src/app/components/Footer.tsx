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
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-sm shadow-purple-500/15 group-hover:shadow-purple-500/30 transition-shadow">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
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
