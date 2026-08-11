"use client";

// ---------- 类型安全的 GA4 事件助手 ----------

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(action: string, params?: EventParams): void {
  if (typeof window === "undefined" || !window.gtag) return;
  try {
    window.gtag("event", action, params ?? {});
  } catch {
    // 静默失败，不影响业务
  }
}

// ---------- 业务事件 ----------

/** 上传图片 */
export function trackUpload() {
  trackEvent("upload");
}

/** 选择宽高比 */
export function trackRatioSelect(value: string) {
  trackEvent("ratio_select", { ratio: value });
}

/** 应用自定义宽高比 */
export function trackCustomRatio(w: string, h: string) {
  trackEvent("custom_ratio", { width: w, height: h });
}

/** 选择构图辅助线 */
export function trackComposition(value: string) {
  trackEvent("composition_select", { composition: value });
}

/** 缩放 */
export function trackZoom(direction: "in" | "out", level: number) {
  trackEvent("zoom", { direction, level });
}

/** 旋转 */
export function trackRotate(angle: number) {
  trackEvent("rotate", { angle });
}

/** 手动输入裁剪尺寸 */
export function trackCropSize(type: "width" | "height", value: number) {
  trackEvent("crop_size_input", { type, value });
}

/** 预览裁剪效果 */
export function trackPreview() {
  trackEvent("preview");
}

/** 导出图片 */
export function trackExport(format: "png" | "jpeg" | "webp", width: number, height: number) {
  trackEvent("export", { format, width, height });
}

/** 重置编辑器 */
export function trackReset() {
  trackEvent("reset");
}
