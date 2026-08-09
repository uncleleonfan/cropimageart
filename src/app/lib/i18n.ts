export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "zh-CN", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

// ── COMPOSITION LABELS ──
export const COMPOSITION_LABELS: Record<LangCode, Record<string, string>> = {
  en: {
    "none": "No Grid",
    "thirds": "Rule of Thirds",
    "golden-ratio": "Golden Ratio",
    "golden-spiral": "Golden Spiral",
    "diagonal": "Diagonal Method",
    "triangle": "Triangle",
    "cross": "Center Cross",
    "symmetry": "Symmetry",
    "leading-lines": "Leading Lines",
  },
  "zh-CN": {
    "none": "无网格",
    "thirds": "三分法",
    "golden-ratio": "黄金比例",
    "golden-spiral": "黄金螺旋",
    "diagonal": "对角线法",
    "triangle": "三角形",
    "cross": "中心十字",
    "symmetry": "对称",
    "leading-lines": "引导线",
  },
  "zh-TW": {
    "none": "無網格",
    "thirds": "三分法",
    "golden-ratio": "黃金比例",
    "golden-spiral": "黃金螺旋",
    "diagonal": "對角線法",
    "triangle": "三角形",
    "cross": "中心十字",
    "symmetry": "對稱",
    "leading-lines": "引導線",
  },
};

// ── ASPECT RATIO LABELS ──
export const ASPECT_RATIO_LABELS: Record<LangCode, Record<string, string>> = {
  en: {
    "free": "Free",
    "1:1": "1:1 Square",
    "4:5": "4:5 Instagram",
    "5:4": "5:4",
    "3:4": "3:4",
    "4:3": "4:3",
    "3:2": "3:2",
    "2:3": "2:3",
    "16:9": "16:9 Video",
    "9:16": "9:16 Story",
  },
  "zh-CN": {
    "free": "自由",
    "1:1": "1:1 正方",
    "4:5": "4:5 Instagram",
    "5:4": "5:4",
    "3:4": "3:4",
    "4:3": "4:3",
    "3:2": "3:2",
    "2:3": "2:3",
    "16:9": "16:9 视频",
    "9:16": "9:16 故事",
  },
  "zh-TW": {
    "free": "自由",
    "1:1": "1:1 正方",
    "4:5": "4:5 Instagram",
    "5:4": "5:4",
    "3:4": "3:4",
    "4:3": "4:3",
    "3:2": "3:2",
    "2:3": "2:3",
    "16:9": "16:9 影片",
    "9:16": "9:16 限時",
  },
};

// ── COMMON UI STRINGS ──
const ui = {
  // header
  siteName: { en: "CropImageArt", "zh-CN": "CropImageArt", "zh-TW": "CropImageArt" },
  tagline: { en: "Compose beautiful crops", "zh-CN": "专业构图 · 精准裁剪", "zh-TW": "專業構圖 · 精準裁剪" },
  guides: { en: "Guides", "zh-CN": "构图指南", "zh-TW": "構圖指南" },
  free: { en: "Free", "zh-CN": "免费", "zh-TW": "免費" },

  // upload screen
  uploadTitle: { en: "CropImageArt", "zh-CN": "CropImageArt", "zh-TW": "CropImageArt" },
  uploadDesc: { en: "Crop images with professional composition guides", "zh-CN": "使用专业构图辅助线裁剪图片", "zh-TW": "使用專業構圖輔助線裁剪圖片" },
  uploadHint: { en: "Drag & drop an image, or click to browse", "zh-CN": "拖拽图片到此处，或点击浏览", "zh-TW": "拖拽圖片到此處，或點擊瀏覽" },
  chooseImage: { en: "Choose Image", "zh-CN": "选择图片", "zh-TW": "選擇圖片" },

  // toolbar
  ratio: { en: "Ratio", "zh-CN": "比例", "zh-TW": "比例" },
  grid: { en: "Grid", "zh-CN": "网格", "zh-TW": "網格" },
  reset: { en: "Reset", "zh-CN": "重置", "zh-TW": "重置" },
  new: { en: "New", "zh-CN": "新图片", "zh-TW": "新圖片" },
  export: { en: "Export", "zh-CN": "导出", "zh-TW": "匯出" },

  // canvas info
  original: { en: "Original", "zh-CN": "原图", "zh-TW": "原圖" },
  cropSize: { en: "Crop", "zh-CN": "裁切", "zh-TW": "裁切" },

  // preview
  preview: { en: "Preview", "zh-CN": "预览", "zh-TW": "預覽" },
  cancel: { en: "Cancel", "zh-CN": "取消", "zh-TW": "取消" },

  // export modal
  exportAs: { en: "Export As", "zh-CN": "导出格式", "zh-TW": "匯出格式" },
  pngDesc: { en: "Lossless · Transparency", "zh-CN": "无损 · 带透明", "zh-TW": "無損 · 帶透明" },
  jpegDesc: { en: "Lossy · Smaller file", "zh-CN": "有损压缩 · 更小", "zh-TW": "有損壓縮 · 更小" },
  webpDesc: { en: "Modern · Smallest", "zh-CN": "现代格式 · 体积小", "zh-TW": "現代格式 · 體積小" },

  // blog
  backToEditor: { en: "← Back to Editor", "zh-CN": "← 返回编辑器", "zh-TW": "← 返回編輯器" },
  compositionGuides: { en: "Composition Guides", "zh-CN": "构图指南", "zh-TW": "構圖指南" },
  blogDesc: {
    en: "Deep dives into every composition technique. Learn the principles, discover when to use each grid, and master the art of cropping with intention.",
    "zh-CN": "深入了解每种构图技巧。学习构图原理，掌握如何在不同场景选择合适的网格辅助线。",
    "zh-TW": "深入了解每種構圖技巧。學習構圖原理，掌握如何在不同場景選擇合適的網格輔助線。",
  },
  allGuides: { en: "← All Guides", "zh-CN": "← 全部指南", "zh-TW": "← 全部指南" },
  quickTips: { en: "Quick Tips", "zh-CN": "实用技巧", "zh-TW": "實用技巧" },
  openEditor: { en: "Open Editor", "zh-CN": "打开编辑器", "zh-TW": "開啟編輯器" },
  previous: { en: "← Previous", "zh-CN": "← 上一篇", "zh-TW": "← 上一篇" },
  next: { en: "Next →", "zh-CN": "下一篇 →", "zh-TW": "下一篇 →" },
  read: { en: "read", "zh-CN": "阅读", "zh-TW": "閱讀" },

  // meta
  metaTitle: { en: "CropImageArt — Crop with Composition Guides", "zh-CN": "CropImageArt — 专业构图辅助裁剪工具", "zh-TW": "CropImageArt — 專業構圖輔助裁剪工具" },
  metaDesc: {
    en: "Crop images beautifully with professional composition guides including Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, and more. Free online image cropping tool.",
    "zh-CN": "使用三分法、黄金比例、黄金螺旋、对角线法等专业构图辅助线裁剪图片。免费的在线图片裁剪工具。",
    "zh-TW": "使用三分法、黃金比例、黃金螺旋、對角線法等專業構圖輔助線裁剪圖片。免費的線上圖片裁剪工具。",
  },

  langLabel: { en: "EN", "zh-CN": "简", "zh-TW": "繁" },
} as const;

// Function-based translations
const uiFn = {
  tryIt: {
    en: (name: string) => `Ready to try ${name} on your own photos?`,
    "zh-CN": (name: string) => `准备好在自己的照片上尝试「${name}」了吗？`,
    "zh-TW": (name: string) => `準備好在自己的照片上嘗試「${name}」了嗎？`,
  },
} satisfies Record<string, Record<LangCode, (...args: string[]) => string>>;

export function t(lang: LangCode | null, key: keyof typeof ui): string {
  const l = lang || "en";
  const entry = ui[key];
  if (!entry) return key;
  return entry[l] || entry["en"] || key;
}

export function tf(lang: LangCode | null, key: keyof typeof uiFn): (...args: string[]) => string {
  const l = lang || "en";
  const entry = uiFn[key];
  return entry[l] || entry["en"] || (() => "");
}
