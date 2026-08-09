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
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/15 group-hover:shadow-purple-500/30 transition-shadow">
                <svg
                  className="w-3.5 h-3.5 text-white"
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
            <p className="text-[12px] text-zinc-500 max-w-xs leading-relaxed">
              {t(lang, "footerDesc")}
            </p>
          </div>

          {/* Right: Links + Contact */}
          <div className="flex flex-col gap-3 text-[12px]">
            <div className="flex items-center gap-4">
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
            </div>

            <div className="flex items-center gap-1.5 text-zinc-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a
                href="mailto:uncleleofan@gmail.com"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-purple-400"
              >
                uncleleofan@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-zinc-800/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-zinc-600">
          <span>
            &copy; {new Date().getFullYear()} CropImageArt. {t(lang, "footerRights")}
          </span>
          <span className="text-zinc-700">
            {t(lang, "free")} &middot; {t(lang, "uploadDesc").slice(0, 20)}...
          </span>
        </div>
      </div>
    </footer>
  );
}
