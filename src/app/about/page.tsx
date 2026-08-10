import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About CropImageArt — a free browser-based image cropping tool with professional composition guides. 100% private, no uploads.",
  alternates: {
    canonical: "https://cropimage.art/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold text-white mb-8 tracking-tight">
        About CropImageArt
      </h1>

      <div className="space-y-6 text-sm text-zinc-400 leading-relaxed">
        <p>
          CropImageArt is a free, browser-based image cropping tool designed for
          photographers, designers, and social media creators who want better
          composition without installing software.
        </p>

        <p>
          Unlike traditional photo editors, CropImageArt overlays professional
          composition grids directly on your crop area — Rule of Thirds, Golden
          Ratio, Golden Spiral, Diagonal Method, Triangle, Center Cross,
          Symmetry, and Leading Lines. You can switch between grids instantly
          while adjusting your crop, making it easy to find the most visually
          pleasing framing.
        </p>

        <h2 className="text-lg font-semibold text-white mt-8 mb-3">
          Why We Built This
        </h2>
        <p>
          Most online image cropping tools are bare-bones — they let you crop
          but give you no guidance on composition. Desktop apps like Photoshop
          and Lightroom have composition overlays, but they are expensive and
          require installation. CropImageArt bridges that gap: professional
          tools, zero friction, completely free.
        </p>

        <h2 className="text-lg font-semibold text-white mt-8 mb-3">
          Privacy First
        </h2>
        <p>
          All image processing is done locally in your browser using the Canvas
          API and FileReader. Your photos are never uploaded to any server. You
          can verify this by disconnecting your internet after loading the
          page — everything will continue to work. We don&apos;t require
          accounts, collect personal data, or use tracking beyond basic
          analytics.
        </p>

        <h2 className="text-lg font-semibold text-white mt-8 mb-3">Contact</h2>
        <p>
          Have feedback or feature requests? Email us at{" "}
          <a
            href="mailto:hello@cropimage.art"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
          >
            hello@cropimage.art
          </a>
          .
        </p>

        <p className="mt-8 pt-6 border-t border-zinc-800/60">
          CropImageArt was created and is maintained by Leon Fan. Built with
          Next.js and deployed on Vercel.
        </p>
      </div>
    </main>
  );
}
