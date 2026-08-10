"use client";

import Link from "next/link";
import CropEditor from "./CropEditor";
import HomeStructuredData from "./HomeStructuredData";
import { useLang } from "./LanguageProvider";
import { useEditor } from "./EditorProvider";
import { t, ASPECT_RATIO_LABELS, LANGUAGES } from "../lib/i18n";
import type { LangCode } from "../lib/i18n";
import type { AspectRatio } from "../lib/types";
import type { ReactNode } from "react";

export default function HomeClient({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang();
  const { imageSrc, aspectRatio, setAspectRatio } = useEditor();

  return (
    <main className="flex-1 flex flex-col min-h-0">
      {/* Header */}
      <header className="flex items-center px-5 py-3 border-b border-zinc-800/40 flex-shrink-0 bg-zinc-950/80 backdrop-blur-xl">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg
              className="w-[18px] h-[18px] text-white"
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
          <div>
            <h1 className="text-[13px] font-semibold text-white tracking-tight leading-none">
              {t(lang, "siteName")}
            </h1>
            <p className="text-[13px] text-zinc-500 leading-none mt-0.5">
              {t(lang, "tagline")}
            </p>
          </div>
        </div>

        {/* Center: Ratio selector (only when image loaded) */}
        {imageSrc ? (
          <div className="flex-1 flex items-center justify-center overflow-x-auto mx-3 gap-2">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex-shrink-0">{t(lang, "ratio")}</span>
            <div className="flex gap-0.5 bg-zinc-900 rounded-lg p-0.5">
              {([
                ["free", "Free"],
                ["1:1", "1:1"],
                ["4:5", "4:5"],
                ["3:4", "3:4"],
                ["2:3", "2:3"],
                ["9:16", "9:16"],
                ["16:9", "16:9"],
                ["4:3", "4:3"],
                ["3:2", "3:2"],
              ] as [AspectRatio, string][]).map(([key]) => (
                <button
                  key={key}
                  onClick={() => setAspectRatio(key)}
                  className={`text-[13px] px-2 py-1 rounded-md transition-colors whitespace-nowrap ${
                    aspectRatio === key
                      ? "bg-white text-black font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {ASPECT_RATIO_LABELS[lang]?.[key] || key}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1" />
        )}

        {/* Right: Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/blog"
            className="text-[13px] text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-800/60"
          >
            {t(lang, "guides")}
          </Link>

          {/* Language switcher */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LangCode)}
            className="text-[12px] bg-zinc-800/60 text-zinc-300 rounded-full px-2.5 py-1.5 border border-zinc-700/40 focus:outline-none focus:border-zinc-500 appearance-none cursor-pointer hover:bg-zinc-700/60 transition-colors"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M1 1l4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center", paddingRight: "24px" }}
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Editor */}
      <CropEditor />

      {/* Server-rendered content (passed as children from page.tsx) */}
      {children}

      {/* Structured Data */}
      <HomeStructuredData />
    </main>
  );
}
