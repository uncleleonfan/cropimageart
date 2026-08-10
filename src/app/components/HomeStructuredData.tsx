export default function HomeStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "CropImageArt",
          url: "https://cropimage.art",
          description:
            "Free online image cropping tool with professional composition guides including Rule of Thirds, Golden Ratio, and more. All processing happens locally in your browser.",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          browserRequirements: "Requires JavaScript",
        }),
      }}
    />
  );
}
