import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-zinc-950 text-zinc-200 px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-zinc-800 mb-4">404</p>
        <h1 className="text-xl font-semibold text-white mb-2">Page Not Found</h1>
        <p className="text-sm text-zinc-500 leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-white hover:bg-zinc-700 transition-colors"
        >
          ← Back to CropImageArt
        </Link>
      </div>
    </div>
  );
}
