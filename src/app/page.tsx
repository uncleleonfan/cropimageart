"use client";

import CropEditor from "./components/CropEditor";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white tracking-tight">
              CropImageArt
            </h1>
            <p className="text-[10px] text-zinc-500">
              Compose beautiful crops
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://en.wikipedia.org/wiki/Rule_of_thirds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            What is Rule of Thirds?
          </a>
          <span className="text-[11px] text-zinc-700">Free & Open</span>
        </div>
      </header>

      {/* Editor */}
      <CropEditor />
    </main>
  );
}
