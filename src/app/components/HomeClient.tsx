"use client";

import { useState } from "react";
import Link from "next/link";
import CropEditor from "./CropEditor";
import HomeStructuredData from "./HomeStructuredData";
import { useLang } from "./LanguageProvider";
import { useEditor } from "./EditorProvider";
import { t, ASPECT_RATIO_LABELS, LANGUAGES } from "../lib/i18n";
import { trackRatioSelect, trackCustomRatio } from "../lib/analytics";
import type { LangCode } from "../lib/i18n";
import type { AspectRatio } from "../lib/types";
import type { ReactNode } from "react";

export default function HomeClient({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang();
  const { imageSrc, aspectRatio, setAspectRatio, customRatio, setCustomRatio } = useEditor();
  const [customW, setCustomW] = useState(customRatio ? String(Math.round(customRatio * 100)) : "16");
  const [customH, setCustomH] = useState(customRatio ? "100" : "9");

  const applyCustomRatio = (w: string, h: string) => {
    const nw = parseFloat(w);
    const nh = parseFloat(h);
    if (nw > 0 && nh > 0) {
      setCustomRatio(nw / nh);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <header className={`flex flex-col px-5 border-b border-zinc-800/40 flex-shrink-0 bg-zinc-950/80 backdrop-blur-xl ${imageSrc ? 'py-2 gap-2' : 'py-3'}`}>
          {/* Row 1: Logo + Right links */}
          <div className="flex items-center w-full">
            {/* Left: Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link href="/" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden flex-shrink-0">
                <img src="/icon.png" alt="Logo" className="w-full h-full object-contain" />
              </Link>
              <div className={imageSrc ? "hidden sm:block" : ""}>
                <h1 className="text-[13px] font-semibold text-white tracking-tight leading-none">
                  {t(lang, "siteName")}
                </h1>
                <p className="text-[13px] text-zinc-500 leading-none mt-0.5">
                  {t(lang, "tagline")}
                </p>
              </div>
            </div>

            {/* Spacer when not editing */}
            {!imageSrc && <div className="flex-1" />}

            {/* Right: Links */}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto flex-shrink-0">
              <Link
                href="/blog"
                className="text-[13px] text-zinc-400 hover:text-white transition-colors px-2 sm:px-3 py-1.5 rounded-full hover:bg-zinc-800/60"
              >
                {t(lang, "guides")}
              </Link>

              {/* GitHub */}
              <a
                href="https://github.com/uncleleonfan/cropimageart"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

            {/* Language switcher */}
            <select
              aria-label="Select language"
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
          </div>

          {/* Row 2: Ratio selector (only when image loaded) */}
          {imageSrc && (
            <div className="flex items-center justify-start overflow-x-auto w-full gap-1.5 sm:justify-center no-scrollbar">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex-shrink-0">{t(lang, "ratio")}</span>
              <div className="flex items-center gap-0.5 bg-zinc-900 rounded-lg p-0.5">
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
                  ["custom", "Custom"],
                ] as [AspectRatio, string][]).map(([key, label]) => {
                  if (key === "custom") {
                    return (
                      <span key={key} className="flex items-center gap-0.5">
                        {aspectRatio !== "custom" ? (
                          <button
                            onClick={() => {
                              setAspectRatio("custom");
                              applyCustomRatio(customW, customH);
                              trackCustomRatio(customW, customH);
                            }}
                            className="text-[12px] sm:text-[13px] px-1.5 sm:px-2 py-1 rounded-md transition-colors whitespace-nowrap text-zinc-400 hover:text-white hover:bg-zinc-800"
                          >
                            {label}
                          </button>
                        ) : (
                          <span className="flex items-center gap-0.5 px-1">
                            <input
                              type="number"
                              min={1}
                              value={customW}
                              onChange={(e) => {
                                setCustomW(e.target.value);
                                applyCustomRatio(e.target.value, customH);
                              }}
                              onBlur={() => { applyCustomRatio(customW, customH); trackCustomRatio(customW, customH); }}
                              className="w-9 text-center text-black bg-white rounded text-[11px] py-0.5 outline-none [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                            <span className="text-zinc-400 text-[11px]">:</span>
                            <input
                              type="number"
                              min={1}
                              value={customH}
                              onChange={(e) => {
                                setCustomH(e.target.value);
                                applyCustomRatio(customW, e.target.value);
                              }}
                              onBlur={() => { applyCustomRatio(customW, customH); trackCustomRatio(customW, customH); }}
                              className="w-9 text-center text-black bg-white rounded text-[11px] py-0.5 outline-none [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                          </span>
                        )}
                      </span>
                    );
                  }
                  return (
                    <button
                      key={key}
                      onClick={() => { setAspectRatio(key); trackRatioSelect(key); }}
                      className={`text-[12px] sm:text-[13px] px-1.5 sm:px-2 py-1 rounded-md transition-colors whitespace-nowrap ${
                        aspectRatio === key
                          ? "bg-white text-black font-medium"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      {ASPECT_RATIO_LABELS[lang]?.[key] || key}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* Editor */}
        <CropEditor />
      </main>

      {/* SEO content — only on homepage (no image loaded) */}
      {!imageSrc && children}

      {/* Structured Data */}
      <HomeStructuredData />
    </>
  );
}
