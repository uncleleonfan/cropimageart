"use client";

import Link from "next/link";
import CropEditor from "./components/CropEditor";
import { useLang } from "./components/LanguageProvider";
import { t } from "./lib/i18n";

export default function Home() {
  const { lang, setLang } = useLang();

  return (
    <main className="flex-1 flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/40 flex-shrink-0 bg-zinc-950/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
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
            <p className="text-[10px] text-zinc-500 leading-none mt-0.5">
              {t(lang, "tagline")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/blog"
            className="text-[11px] text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-800/60"
          >
            {t(lang, "guides")}
          </Link>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 ml-1 bg-zinc-800/50 rounded-full p-0.5">
            {(["en", "zh-CN", "zh-TW"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-[10px] font-medium px-2 py-1 rounded-full transition-all ${
                  lang === code
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {code === "en" ? "EN" : code === "zh-CN" ? "简" : "繁"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Editor */}
      <CropEditor />
    </main>
  );
}
