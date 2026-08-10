export default function HomeStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cropimage.art/#organization",
        name: "CropImageArt",
        url: "https://cropimage.art",
        description:
          "Free online image cropping tool with Rule of Thirds, Golden Ratio, and 8 composition guides.",
        logo: "https://cropimage.art/favicon.ico",
        sameAs: [
          "https://github.com/leonfan/cropimageart",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@cropimage.art",
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://cropimage.art/#website",
        url: "https://cropimage.art",
        name: "CropImageArt",
        publisher: { "@id": "https://cropimage.art/#organization" },
        inLanguage: "en",
        dateModified: "2026-08-10",
      },
      {
        "@type": "WebApplication",
        "@id": "https://cropimage.art/#webapp",
        name: "CropImageArt",
        url: "https://cropimage.art",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: { "@id": "https://cropimage.art/#author" },
        datePublished: "2024-08-15",
        dateModified: "2026-08-10",
      },
      {
        "@type": "Person",
        "@id": "https://cropimage.art/#author",
        name: "Leon Fan",
        url: "https://cropimage.art",
        description: "Creator of CropImageArt",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
