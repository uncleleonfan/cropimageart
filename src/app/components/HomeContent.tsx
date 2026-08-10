"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { t } from "../lib/i18n";

const publishDate = "2024-08-15T00:00:00.000Z";
const modifiedDate = "2026-08-10T00:00:00.000Z";

export default function HomeContent() {
  const { lang } = useLang();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-14">
      {/* Section 1: What Are Composition Grids? */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeGridsTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeGridsBody1")}
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          {t(lang, "homeGridsBody2")}
        </p>
      </div>

      {/* Section 2: Why Crop Online? */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeWhyTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeWhyBody")}
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
          <li>
            <span className="text-zinc-300 font-medium">
              {t(lang, "homeWhyP1")}
            </span>{" "}
            — {t(lang, "homeWhyP1Desc")}
          </li>
          <li>
            <span className="text-zinc-300 font-medium">
              {t(lang, "homeWhyP2")}
            </span>{" "}
            — {t(lang, "homeWhyP2Desc")}
          </li>
          <li>
            <span className="text-zinc-300 font-medium">
              {t(lang, "homeWhyP3")}
            </span>{" "}
            — {t(lang, "homeWhyP3Desc")}
          </li>
          <li>
            <span className="text-zinc-300 font-medium">
              {t(lang, "homeWhyP4")}
            </span>{" "}
            — {t(lang, "homeWhyP4Desc")}
          </li>
        </ul>
      </div>

      {/* Section 3: How to Use Rule of Thirds */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeThirdsTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeThirdsBody1")}
        </p>
        <blockquote className="mt-3 border-l-2 border-purple-500/40 pl-4 text-sm text-zinc-500 italic leading-relaxed">
          &ldquo;{t(lang, "homeThirdsQuote")}&rdquo; —{" "}
          <span className="text-zinc-400 not-italic">Ansel Adams</span>
        </blockquote>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          {t(lang, "homeThirdsBody2")}
        </p>
      </div>

      {/* Section 4: The Golden Ratio */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeGoldenTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeGoldenBody")}
        </p>
        <blockquote className="mt-3 border-l-2 border-purple-500/40 pl-4 text-sm text-zinc-500 italic leading-relaxed">
          &ldquo;{t(lang, "homeGoldenQuote")}&rdquo; —{" "}
          <span className="text-zinc-400 not-italic">John Brownlee</span>,{" "}
          <cite className="not-italic">Fast Company</cite>
        </blockquote>
      </div>

      {/* Section 5: All 8 Grids Explained */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeWhichTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeWhichIntro")}
        </p>
        <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-zinc-400">
          <div>
            <span className="text-zinc-300 font-medium">Rule of Thirds</span> —{" "}
            {t(lang, "homeWhich0")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Golden Ratio</span> —{" "}
            {t(lang, "homeWhich1")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Golden Spiral</span> —{" "}
            {t(lang, "homeWhich2")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Diagonal Method</span> —{" "}
            {t(lang, "homeWhich3")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Triangle</span> —{" "}
            {t(lang, "homeWhich4")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Center Cross</span> —{" "}
            {t(lang, "homeWhich5")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Symmetry</span> —{" "}
            {t(lang, "homeWhich6")}
          </div>
          <div>
            <span className="text-zinc-300 font-medium">Leading Lines</span> —{" "}
            {t(lang, "homeWhich7")}
          </div>
        </div>
      </div>

      {/* Section 6: Privacy & Safety */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
          {t(lang, "homeSafeTitle")}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(lang, "homeSafeBody1")}
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed mt-3">
          <Link
            href="/privacy"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
          >
            {t(lang, "homePrivacyLink")}
          </Link>{" "}
          {t(lang, "homePrivacyLinkDesc")}
        </p>
      </div>

      {/* Machine-readable dates */}
      <time dateTime={publishDate} className="hidden" aria-hidden="true">
        Published:{" "}
        {new Date(publishDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <time dateTime={modifiedDate} className="hidden" aria-hidden="true">
        Updated:{" "}
        {new Date(modifiedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </section>
  );
}
