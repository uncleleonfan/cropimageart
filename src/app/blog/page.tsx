"use client";

import Link from "next/link";
import { blogPosts } from "../lib/blog-posts";
import { COMPOSITION_LABELS } from "../lib/types";
import GridDiagram from "../components/GridDiagram";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Header */}
      <header className="border-b border-zinc-800/60 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">CropImageArt</span>
          </Link>
          <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Editor
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Composition Guides
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">
            Deep dives into every composition technique available in CropImageArt.
            Learn the principles, discover when to use each grid, and master the art of
            cropping with intention.
          </p>
        </div>

        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[140px_1fr_24px] gap-5 p-5 rounded-xl border border-zinc-800/60 hover:border-zinc-700/80 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all items-center"
            >
              {/* Thumbnail */}
              <div className="rounded-lg overflow-hidden border border-zinc-800/50 bg-zinc-900">
                <GridDiagram type={post.compositionType} className="[&>div:last-child]:hidden" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">
                    {COMPOSITION_LABELS[post.compositionType as keyof typeof COMPOSITION_LABELS] || post.compositionType}
                  </span>
                  <span className="text-[10px] text-zinc-600">{post.readTime}</span>
                </div>
                <h2 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 line-clamp-1">{post.subtitle}</p>
              </div>

              {/* Arrow */}
              <svg
                className="w-5 h-5 text-zinc-700 group-hover:text-zinc-400 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
