import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Composition Guides",
  description:
    "Learn professional image composition techniques — Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, and more. Master the art of cropping with intention.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Composition Guides — Learn to Crop with Professional Grids",
    description:
      "Deep dive into every composition technique. Learn principles, discover when to use each grid, and master the art of cropping.",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
