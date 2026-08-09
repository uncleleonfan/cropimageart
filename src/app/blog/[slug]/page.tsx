"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, blogPosts } from "../../lib/blog-posts";
import { notFound } from "next/navigation";
import GridDiagram from "../../components/GridDiagram";
import { useLang } from "../../components/LanguageProvider";
import { t, COMPOSITION_LABELS, tf } from "../../lib/i18n";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);
  const { lang } = useLang();

  if (!post) {
    notFound();
  }

  const c = post.content[lang] || post.content["en"];
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Header */}
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
          <Link href="/blog" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            {t(lang, "allGuides")}
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] text-purple-400 bg-purple-400/10 px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wide">
              {COMPOSITION_LABELS[lang]?.[post.compositionType] || post.compositionType}
            </span>
            <span className="text-[10px] text-zinc-600">{post.publishedAt}</span>
            <span className="text-[10px] text-zinc-600">·</span>
            <span className="text-[10px] text-zinc-600">{post.readTime[lang] || post.readTime["en"]} {t(lang, "read")}</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
            {c.title}
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 text-base leading-relaxed text-zinc-300">
          {c.intro}
        </div>

        {/* Example Photo */}
        {post.exampleImage && (
          <div className="mb-10">
            <div className="rounded-xl overflow-hidden border border-zinc-800/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.exampleImage}
                alt={c.exampleImageCaption}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex items-start justify-between mt-3 gap-4">
              <p className="text-sm text-zinc-400">
                {c.exampleImageCaption}
              </p>
              <span className="text-[10px] text-zinc-600 flex-shrink-0 mt-0.5">
                {post.exampleImageCredit[lang] || post.exampleImageCredit["en"]}
              </span>
            </div>
          </div>
        )}

        {/* Grid Diagram */}
        <div className="mb-10">
          <GridDiagram type={post.compositionType} />
          <p className="text-center text-[11px] text-zinc-600 mt-3">
            {COMPOSITION_LABELS[lang]?.[post.compositionType] || post.compositionType}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 mb-12">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {section.heading}
              </h2>
              <div className="text-base leading-relaxed text-zinc-300 space-y-4">
                {section.body.split("\n\n").map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Tips box */}
        <div className="mb-12 p-6 rounded-xl bg-purple-500/5 border border-purple-500/15">
          <h3 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">
            {t(lang, "quickTips")}
          </h3>
          <ul className="space-y-2">
            {c.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <svg
                  className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Try it CTA */}
        <div className="mb-12 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
          <p className="text-zinc-300 mb-3 text-sm">
            {tf(lang, "tryIt")(c.title)}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            {t(lang, "openEditor")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-zinc-800/60 pt-8 flex items-center justify-between gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex-1 text-left p-4 rounded-lg border border-zinc-800/40 hover:border-zinc-700/60 transition-colors"
            >
              <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{t(lang, "previous")}</span>
              <p className="text-sm text-zinc-300 group-hover:text-white transition-colors mt-1 line-clamp-1">
                {(prevPost.content[lang] || prevPost.content["en"]).title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex-1 text-right p-4 rounded-lg border border-zinc-800/40 hover:border-zinc-700/60 transition-colors"
            >
              <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{t(lang, "next")}</span>
              <p className="text-sm text-zinc-300 group-hover:text-white transition-colors mt-1 line-clamp-1">
                {(nextPost.content[lang] || nextPost.content["en"]).title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </article>
    </div>
  );
}
