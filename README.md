# CropImageArt

**Crop images with professional composition guides — free, private, no upload needed.**

[cropimage.art](https://cropimage.art) is an online image cropping tool that overlays professional composition grids on your photos. Everything runs locally in your browser — your images never leave your device.

## Features

- **8 Composition Grids** — Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, Triangle, Center Cross, Symmetry, Leading Lines
- **9 Aspect Ratio Presets** — Free, 1:1 Square, 4:5/3:4/9:16 for Instagram and Stories, 16:9 for video, plus standard print ratios
- **Rotate & Scale** — Fine-tune your crop with rotation and zoom controls
- **Multiple Export Formats** — PNG (lossless), JPEG, WebP
- **Share Directly** — Web Share API integration for mobile
- **9 Languages** — English, 简体中文, 繁體中文, 日本語, 한국어, Español, Français, Deutsch, Português
- **100% Private** — All processing happens via Canvas API in your browser. No server uploads, no account required, no watermarks.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

All image processing runs locally using the browser's built-in Canvas API and FileReader. When you select an image:

1. The image is loaded into an offscreen canvas
2. Composition grid overlays are rendered on top
3. You adjust the crop, rotation, and scale
4. Export renders the final cropped region to a new canvas

No data is ever sent to a server. You can verify this by disconnecting your internet after the page loads — everything keeps working.

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## License

MIT

---

Made with ❤️ — [cropimage.art](https://cropimage.art)
