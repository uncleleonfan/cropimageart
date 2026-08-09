export type AspectRatio = "free" | "1:1" | "4:5" | "5:4" | "3:4" | "4:3" | "3:2" | "2:3" | "16:9" | "9:16";

export type CompositionType =
  | "none"
  | "thirds"
  | "golden-ratio"
  | "golden-spiral"
  | "diagonal"
  | "triangle"
  | "cross"
  | "symmetry"
  | "leading-lines";

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageState {
  src: string;
  naturalWidth: number;
  naturalHeight: number;
  rotation: number;
  scale: number;
  offsetX: number;
  offsetY: number;
}

export const ASPECT_RATIO_LABELS: Record<AspectRatio, string> = {
  free: "Free",
  "1:1": "1:1 Square",
  "4:5": "4:5 Instagram",
  "5:4": "5:4",
  "3:4": "3:4",
  "4:3": "4:3",
  "3:2": "3:2",
  "2:3": "2:3",
  "16:9": "16:9 Video",
  "9:16": "9:16 Story",
};

export const COMPOSITION_LABELS: Record<CompositionType, string> = {
  none: "No Grid",
  thirds: "Rule of Thirds",
  "golden-ratio": "Golden Ratio",
  "golden-spiral": "Golden Spiral",
  diagonal: "Diagonal Method",
  triangle: "Triangle",
  cross: "Center Cross",
  symmetry: "Symmetry",
  "leading-lines": "Leading Lines",
};

export const ASPECT_RATIO_VALUES: Record<Exclude<AspectRatio, "free">, number> = {
  "1:1": 1,
  "4:5": 0.8,
  "5:4": 1.25,
  "3:4": 0.75,
  "4:3": 1.3333,
  "3:2": 1.5,
  "2:3": 0.6667,
  "16:9": 1.7778,
  "9:16": 0.5625,
};
