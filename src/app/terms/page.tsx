"use client";

import Link from "next/link";
import { useLang } from "../components/LanguageProvider";
import { t } from "../lib/i18n";
import { termsContent } from "../lib/legal-content";

export default function TermsPage() {
  const { lang } = useLang();
  const c = termsContent[lang] || termsContent["en"];

  return (
    <div className="flex-1 bg-zinc-950 text-zinc-200">
      <header className="border-b border-zinc-800/60 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">{t(lang, "siteName")}</span>
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            {t(lang, "backToEditor")}
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
          {c.title}
        </h1>
        <p className="text-zinc-500 text-sm mb-10">
          {t(lang, "footerRights") === "All rights reserved." ? "Last updated: " : "最后更新："}
          {c.updated}
        </p>

        <p className="text-zinc-300 leading-relaxed mb-10">
          {c.intro}
        </p>

        <div className="space-y-8">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-base font-semibold text-white mb-2">
                {s.heading}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
