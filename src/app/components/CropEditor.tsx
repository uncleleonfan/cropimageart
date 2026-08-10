"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { AspectRatio, CompositionType, CropRect } from "../lib/types";
import { ASPECT_RATIO_VALUES } from "../lib/types";
import CompositionGrid from "./CompositionGrid";
import { useEditor } from "./EditorProvider";
import { useLang } from "./LanguageProvider";
import { t, COMPOSITION_LABELS, ASPECT_RATIO_LABELS } from "../lib/i18n";

type ResizeHandle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

const MIN_CROP = 50;
const OVERLAY_ALPHA = 0.55;
const HANDLE_SIZE = 16; // pixel hit area for resize handles

export default function CropEditor() {
  const { lang } = useLang();
  const { imageSrc, setImageSrc, composition, setComposition, aspectRatio, setAspectRatio, imageRef: ctxImageRef } = useEditor();
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [displayW, setDisplayW] = useState(0);
  const [displayH, setDisplayH] = useState(0);
  const [crop, setCrop] = useState<CropRect>({ x: 0, y: 0, width: 0, height: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragHandle, setDragHandle] = useState<ResizeHandle | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCropStart, setDragCropStart] = useState<CropRect>({ x: 0, y: 0, width: 0, height: 0 });
  const [initialized, setInitialized] = useState(false);
  const [activeHandle, setActiveHandle] = useState<ResizeHandle | null>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  const originalSrcRef = useRef<string | null>(null);

  const ratio = aspectRatio === "free" ? null : ASPECT_RATIO_VALUES[aspectRatio];

  // ---- Recalc display on window resize ----
  useEffect(() => {
    const onResize = () => {
      if (image && containerRef.current) {
        const container = containerRef.current;
        const maxW = container.clientWidth - 40;
        const maxH = container.clientHeight - 120;
        const imgW = rotation % 180 === 0 ? image.naturalWidth : image.naturalHeight;
        const imgH = rotation % 180 === 0 ? image.naturalHeight : image.naturalWidth;
        const imgRatio = imgW / imgH;
        let w = Math.min(maxW, imgW * zoom);
        let h = w / imgRatio;
        if (h > maxH) { h = maxH; w = h * imgRatio; }
        setDisplayW(Math.round(w));
        setDisplayH(Math.round(h));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [image, zoom, rotation]);

  // ---- Load image ----
  const loadFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setImageSrc(src);
        ctxImageRef.current = img;
        originalImageRef.current = img;
        originalSrcRef.current = src;
        setRotation(0);
        setZoom(1);
        setInitialized(false);
        setIsPreviewing(false);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, [setImageSrc, ctxImageRef]);

  // ---- Restore image from context on mount (after navigating back) ----
  useEffect(() => {
    if (imageSrc && !image) {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        ctxImageRef.current = img;
      };
      img.src = imageSrc;
    }
  }, []); // run once on mount

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) loadFile(file);
    },
    [loadFile]
  );

  // ---- Calculate display size ----
  useEffect(() => {
    if (!image || !containerRef.current) return;
    const container = containerRef.current;
    const maxW = container.clientWidth - 40;
    const maxH = container.clientHeight - 120;

    const imgW = rotation % 180 === 0 ? image.naturalWidth : image.naturalHeight;
    const imgH = rotation % 180 === 0 ? image.naturalHeight : image.naturalWidth;
    const imgRatio = imgW / imgH;

    let w = Math.min(maxW, imgW * zoom);
    let h = w / imgRatio;
    if (h > maxH) {
      h = maxH;
      w = h * imgRatio;
    }

    setDisplayW(Math.round(w));
    setDisplayH(Math.round(h));
  }, [image, zoom, rotation]);

  // ---- Initialize crop when display size is first set ----
  useEffect(() => {
    if (initialized || displayW === 0 || displayH === 0) return;

    const size = Math.min(displayW, displayH) * 0.75;
    let w = size, h = size;
    if (ratio) {
      if (ratio >= 1) h = w / ratio;
      else w = h * ratio;
    }

    setCrop({
      x: Math.round((displayW - w) / 2),
      y: Math.round((displayH - h) / 2),
      width: Math.round(w),
      height: Math.round(h),
    });
    setInitialized(true);
  }, [displayW, displayH, initialized]);

  // ---- Clamp crop when display size changes (zoom) ----
  useEffect(() => {
    if (!initialized || displayW === 0 || displayH === 0) return;
    setCrop((prev) => {
      let { x, y, width, height } = prev;
      if (x + width > displayW) x = Math.max(0, displayW - width);
      if (y + height > displayH) y = Math.max(0, displayH - height);
      if (width > displayW) width = displayW;
      if (height > displayH) height = displayH;
      if (
        x === prev.x && y === prev.y &&
        width === prev.width && height === prev.height
      ) return prev;
      return { x, y, width, height };
    });
  }, [displayW, displayH, initialized]);

  // ---- When aspect ratio changes (from context/header), re-constrain crop ----
  useEffect(() => {
    if (!initialized || displayW === 0 || displayH === 0) return;
    if (aspectRatio === "free") return;

    const r = ASPECT_RATIO_VALUES[aspectRatio as Exclude<AspectRatio, "free">];
    setCrop((prev) => {
      const maxW = displayW - prev.x;
      const maxH = displayH - prev.y;
      let w = prev.width;
      let h = w / r;
      if (h > maxH) { h = maxH; w = h * r; }
      if (w > maxW) { w = maxW; h = w / r; }
      if (w < MIN_CROP) { w = MIN_CROP; h = w / r; }
      if (h < MIN_CROP) { h = MIN_CROP; w = h * r; }
      return { ...prev, width: Math.round(w), height: Math.round(h) };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aspectRatio]);

  // ---- Scale factor ----
  const getScale = useCallback(() => {
    if (!image) return 1;
    const imgW = rotation % 180 === 0 ? image.naturalWidth : image.naturalHeight;
    return imgW / displayW;
  }, [image, displayW, rotation]);

  // ---- Position helpers (mouse + touch) ----
  const getPos = useCallback((clientX: number, clientY: number) => {
    const target = imageBoxRef.current || containerRef.current;
    if (!target) return { x: 0, y: 0 };
    const r = target.getBoundingClientRect();
    return { x: clientX - r.left, y: clientY - r.top };
  }, []);

  // ---- Unified pointer interactions (mouse + touch) ----
  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      const pos = getPos(clientX, clientY);
      setDragStart(pos);
      setDragCropStart({ ...crop });

      const cx = crop.x + crop.width / 2;
      const cy = crop.y + crop.height / 2;
      const handles: { h: ResizeHandle; x: number; y: number }[] = [
        { h: "nw", x: crop.x, y: crop.y },
        { h: "n", x: cx, y: crop.y },
        { h: "ne", x: crop.x + crop.width, y: crop.y },
        { h: "e", x: crop.x + crop.width, y: cy },
        { h: "se", x: crop.x + crop.width, y: crop.y + crop.height },
        { h: "s", x: cx, y: crop.y + crop.height },
        { h: "sw", x: crop.x, y: crop.y + crop.height },
        { h: "w", x: crop.x, y: cy },
      ];

      for (const { h, x, y } of handles) {
        if (Math.abs(pos.x - x) <= HANDLE_SIZE && Math.abs(pos.y - y) <= HANDLE_SIZE) {
          setDragHandle(h);
          setActiveHandle(h);
          return;
        }
      }

      if (
        pos.x >= crop.x && pos.x <= crop.x + crop.width &&
        pos.y >= crop.y && pos.y <= crop.y + crop.height
      ) {
        setIsDragging(true);
      }
    },
    [crop, getPos]
  );

  const moveDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging && !dragHandle) return;
      const pos = getPos(clientX, clientY);
      const dx = pos.x - dragStart.x;
      const dy = pos.y - dragStart.y;

      if (isDragging) {
        let nx = dragCropStart.x + dx;
        let ny = dragCropStart.y + dy;
        nx = Math.max(0, Math.min(nx, displayW - dragCropStart.width));
        ny = Math.max(0, Math.min(ny, displayH - dragCropStart.height));
        setCrop((prev) => ({ ...prev, x: Math.round(nx), y: Math.round(ny) }));
      } else if (dragHandle) {
        const s = dragCropStart;
        let nc = { ...s };
        const h = dragHandle;

        if (h.includes("e")) nc.width = Math.min(Math.max(MIN_CROP, s.width + dx), displayW - s.x);
        if (h.includes("w")) {
          const nw = Math.min(Math.max(MIN_CROP, s.width - dx), s.x + s.width);
          nc.x = s.x + s.width - nw;
          nc.width = nw;
        }
        if (h.includes("s")) nc.height = Math.min(Math.max(MIN_CROP, s.height + dy), displayH - s.y);
        if (h.includes("n")) {
          const nh = Math.min(Math.max(MIN_CROP, s.height - dy), s.y + s.height);
          nc.y = s.y + s.height - nh;
          nc.height = nh;
        }

        if (ratio) {
          if (h.length === 2) {
            nc.height = Math.round(nc.width / ratio);
            if (h.includes("n")) nc.y = s.y + s.height - nc.height;
          } else if (h === "n" || h === "s") {
            nc.width = Math.round(nc.height * ratio);
          } else if (h === "e" || h === "w") {
            nc.height = Math.round(nc.width / ratio);
          }
        }

        nc.x = Math.max(0, Math.min(nc.x, displayW));
        nc.y = Math.max(0, Math.min(nc.y, displayH));
        nc.width = Math.max(MIN_CROP, Math.min(nc.width, displayW - nc.x));
        nc.height = Math.max(MIN_CROP, Math.min(nc.height, displayH - nc.y));

        // Re-apply ratio after clamping: if one side was constrained, shrink the other
        if (ratio) {
          const idealH = nc.width / ratio;
          const idealW = nc.height * ratio;
          if (nc.height < idealH) {
            // Height hit boundary — shrink width to match
            nc.width = Math.max(MIN_CROP, Math.round(idealW));
          } else if (nc.width < idealW) {
            // Width hit boundary — shrink height to match
            nc.height = Math.max(MIN_CROP, Math.round(idealH));
          }
        }

        setCrop({ x: Math.round(nc.x), y: Math.round(nc.y), width: Math.round(nc.width), height: Math.round(nc.height) });
      }
    },
    [isDragging, dragHandle, dragStart, dragCropStart, displayW, displayH, ratio, getPos]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
    setDragHandle(null);
    setActiveHandle(null);
  }, []);

  // Event bindings
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => { e.preventDefault(); startDrag(e.clientX, e.clientY); },
    [startDrag]
  );
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      if (t) startDrag(t.clientX, t.clientY);
    },
    [startDrag]
  );

  useEffect(() => {
    const mm = (e: MouseEvent) => moveDrag(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) moveDrag(t.clientX, t.clientY);
    };
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchmove", tm, { passive: false });
    window.addEventListener("touchend", endDrag);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", endDrag);
    };
  }, [moveDrag, endDrag]);

  // ---- Download ----
  const [showExportModal, setShowExportModal] = useState(false);
  const exportCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateExportCanvas = useCallback(() => {
    if (!image) return null;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const scale = getScale();

    const sx = Math.round(crop.x * scale);
    const sy = Math.round(crop.y * scale);
    const sw = Math.round(crop.width * scale);
    const sh = Math.round(crop.height * scale);

    if (rotation % 360 === 0) {
      canvas.width = sw;
      canvas.height = sh;
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
    } else {
      const srcW = image.naturalWidth;
      const srcH = image.naturalHeight;
      let rotW: number, rotH: number;
      if (rotation % 180 === 0) {
        rotW = srcW; rotH = srcH;
      } else {
        rotW = srcH; rotH = srcW;
      }

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = rotW;
      tempCanvas.height = rotH;
      const tctx = tempCanvas.getContext("2d")!;
      tctx.save();
      tctx.translate(rotW / 2, rotH / 2);
      tctx.rotate((rotation * Math.PI) / 180);
      tctx.drawImage(image, -srcW / 2, -srcH / 2, srcW, srcH);
      tctx.restore();

      canvas.width = sw;
      canvas.height = sh;
      ctx.drawImage(tempCanvas, sx, sy, sw, sh, 0, 0, sw, sh);
    }
    return canvas;
  }, [image, crop, rotation, getScale]);

  const handleExport = useCallback((format: "png" | "jpeg" | "webp") => {
    const canvas = generateExportCanvas();
    if (!canvas) return;

    const ext = format === "jpeg" ? "jpg" : format;
    const mime = format === "jpeg" ? "image/jpeg" : `image/${format}`;
    const quality = format === "png" ? undefined : 0.92;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cropped-${Date.now()}.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
      setShowExportModal(false);
    }, mime, quality);
  }, [generateExportCanvas]);

  // ---- Generate preview via Canvas ----
  useEffect(() => {
    if (!isPreviewing || !image || crop.width === 0 || crop.height === 0) {
      if (!isPreviewing) setPreviewSrc(null);
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const scale = getScale();

    const sx = Math.round(crop.x * scale);
    const sy = Math.round(crop.y * scale);
    const sw = Math.round(crop.width * scale);
    const sh = Math.round(crop.height * scale);

    canvas.width = sw;
    canvas.height = sh;

    if (rotation % 360 === 0) {
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
    } else {
      const srcW = image.naturalWidth;
      const srcH = image.naturalHeight;
      let rotW: number, rotH: number;
      if (rotation % 180 === 0) {
        rotW = srcW; rotH = srcH;
      } else {
        rotW = srcH; rotH = srcW;
      }

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = rotW;
      tempCanvas.height = rotH;
      const tctx = tempCanvas.getContext("2d")!;
      tctx.save();
      tctx.translate(rotW / 2, rotH / 2);
      tctx.rotate((rotation * Math.PI) / 180);
      tctx.drawImage(image, -srcW / 2, -srcH / 2, srcW, srcH);
      tctx.restore();

      ctx.drawImage(tempCanvas, sx, sy, sw, sh, 0, 0, sw, sh);
    }

    const url = canvas.toDataURL("image/png");
    setPreviewSrc(url);
    return () => { URL.revokeObjectURL(url); };
  }, [isPreviewing, image, crop, rotation, getScale]);

  // ---- Apply crop (preview → continue editing) ----
  const handleApplyCrop = useCallback(() => {
    if (!previewSrc) return;

    // Immediately switch to cropped image for display
    const preImg = new Image();
    preImg.src = previewSrc;
    setImageSrc(previewSrc);
    setIsPreviewing(false);
    setRotation(0);
    setZoom(1);
    setAspectRatio("free");
    setInitialized(false);

    // Load the actual Image element (needed for dimensions / download)
    preImg.onload = () => {
      setImage(preImg);
      ctxImageRef.current = preImg;
    };
  }, [previewSrc, setImageSrc, ctxImageRef]);

  // ---- Reset to original image ----
  const handleReset = useCallback(() => {
    const origImg = originalImageRef.current;
    const origSrc = originalSrcRef.current;
    if (origImg && origSrc) {
      setImage(origImg);
      setImageSrc(origSrc);
    }
    setRotation(0);
    setZoom(1);
    setAspectRatio("free");
    setInitialized(false);
    setIsPreviewing(false);
  }, []);

  // ---- Upload screen ----
  if (!imageSrc || !image) {
    return (
      <div
        className="min-h-[calc(100vh-420px)] flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="text-center max-w-md mx-auto p-12">
          <div className="mx-auto mb-8 w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
            {t(lang, "uploadTitle")}
          </h2>
          <p className="text-zinc-400 mb-8 text-base">
            {t(lang, "uploadDesc")}
          </p>

          {/* Features */}
          <div className="grid gap-5 mb-8 text-left">
            <div>
              <h3 className="text-[13px] font-semibold text-white mb-1">
                {t(lang, "featureGuide")}
              </h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">
                {t(lang, "featureGuideBody")}
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-white mb-1">
                {t(lang, "featurePrivate")}
              </h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">
                {t(lang, "featurePrivateBody")}
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-white mb-1">
                {t(lang, "featureFree")}
              </h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">
                {t(lang, "featureFreeBody")}
              </p>
            </div>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-7 py-3 bg-white text-black rounded-full font-medium text-base hover:bg-zinc-200 transition-colors"
          >
            {t(lang, "chooseImage")}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) loadFile(f);
            }}
          />
        </div>
      </div>
    );
  }

  // ---- Main editor ----
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* ---- Toolbar: Grid + controls (centered) ---- */}
      <div className="flex items-center justify-center gap-3 px-5 py-2 border-b border-zinc-800/60 bg-zinc-950 flex-shrink-0 overflow-x-auto">
        {/* Composition Grid */}
        <span className="text-[13px] text-zinc-500 uppercase tracking-widest font-medium">{t(lang, "grid")}</span>
        <div className="flex gap-0.5 bg-zinc-900 rounded-lg p-0.5">
          {Object.entries(COMPOSITION_LABELS.en).map(([key]) => (
            <button
              key={key}
              onClick={() => setComposition(key as CompositionType)}
              className={`text-[13px] px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                composition === key
                  ? "bg-white text-black font-medium"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {COMPOSITION_LABELS[lang]?.[key] || key}
            </button>
          ))}
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <button
            onClick={() => setZoom((z) => Math.max(0.25, +(z - 0.25).toFixed(2)))}
            className="w-6 h-6 rounded flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors"
          >−</button>
          <span className="w-10 text-center tabular-nums text-[13px]">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.min(1, +(z + 0.25).toFixed(2)))}
            className="w-6 h-6 rounded flex items-center justify-center hover:bg-zinc-800 hover:text-white transition-colors"
          >+</button>
        </div>

        {/* Rotate */}
        <button
          onClick={() => setRotation((r) => (r + 90) % 360)}
          className="flex items-center gap-1 text-[13px] text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {rotation}°
        </button>

        <div className="w-px h-5 bg-zinc-800" />

        {/* Actions */}
        <button onClick={handleReset} className="text-[13px] text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors">
          {t(lang, "reset")}
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-[13px] text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          {t(lang, "new")}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) loadFile(f);
          }}
        />
        <button
          onClick={() => setShowExportModal(true)}
          className="flex items-center gap-1.5 text-[13px] font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t(lang, "export")}
        </button>
      </div>

      {/* ---- Canvas Area ---- */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
        style={{ backgroundColor: "#141416" }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* Image & crop dimensions at top */}
        {image && (
          <div className="absolute top-3 left-0 right-0 flex justify-center pointer-events-none z-10">
            <span className="text-[13px] text-zinc-400 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm inline-flex items-center gap-1.5">
              <span className="text-zinc-500">{t(lang, "original")}</span>
              {image.naturalWidth} × {image.naturalHeight}
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-500">{t(lang, "cropSize")}</span>
              <span className="inline-block w-[72px] text-white">
                {initialized ? `${Math.round(crop.width * getScale())} × ${Math.round(crop.height * getScale())}` : '—'}
              </span>
            </span>
          </div>
        )}

        {displayW > 0 && displayH > 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              ref={imageBoxRef}
              className="relative select-none"
              style={{
                width: isPreviewing ? crop.width : displayW,
                height: isPreviewing ? crop.height : displayH,
                overflow: isPreviewing ? "hidden" : "visible",
                transition: isPreviewing ? "width 0.35s ease, height 0.35s ease" : "none",
                borderRadius: isPreviewing ? "4px" : undefined,
              }}
            >
              {/* Image */}
              <img
                src={isPreviewing && previewSrc ? previewSrc : imageSrc}
                alt=""
                draggable={false}
                className="absolute pointer-events-none"
                style={isPreviewing
                  ? { top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain" }
                  : {
                      top: 0, left: 0, width: "100%", height: "100%",
                      objectFit: "contain",
                      transform: `rotate(${rotation}deg)`,
                    }
                }
              />

              {/* Crop area with dark overlay via box-shadow */}
              {!isPreviewing && (
                <div
                  className="absolute touch-none"
                  style={{
                    left: crop.x,
                    top: crop.y,
                    width: crop.width,
                    height: crop.height,
                    cursor: isDragging ? "grabbing" : "grab",
                    boxShadow: `0 0 0 9999px rgba(0,0,0,${OVERLAY_ALPHA})`,
                  }}
                  onMouseDown={onMouseDown}
                  onTouchStart={onTouchStart}
                >
                  {/* Grid overlay */}
                  <CompositionGrid
                    type={composition}
                    width={crop.width}
                    height={crop.height}
                  />

                  {/* Outer border */}
                  <div className="absolute inset-0 ring-2 ring-white/70 pointer-events-none" />

                  {/* Inner thin border */}
                  <div className="absolute inset-0 ring-1 ring-white/15 pointer-events-none" />

                  {/* Handles */}
                  {([
                    ["nw", "cursor-nw-resize", "-top-1.5 -left-1.5"],
                    ["n", "cursor-n-resize", "-top-1.5 left-1/2 -translate-x-1/2"],
                    ["ne", "cursor-ne-resize", "-top-1.5 -right-1.5"],
                    ["e", "cursor-e-resize", "top-1/2 -translate-y-1/2 -right-1.5"],
                    ["se", "cursor-se-resize", "-bottom-1.5 -right-1.5"],
                    ["s", "cursor-s-resize", "-bottom-1.5 left-1/2 -translate-x-1/2"],
                    ["sw", "cursor-sw-resize", "-bottom-1.5 -left-1.5"],
                    ["w", "cursor-w-resize", "top-1/2 -translate-y-1/2 -left-1.5"],
                  ] as const).map(([handle, cursor, posClass]) => (
                    <div
                      key={handle}
                      className={`absolute ${cursor} ${posClass} w-3 h-3 rounded-full border-2 border-zinc-700 bg-white shadow-md`}
                    />
                  ))}
                </div>
              )}

              {/* Preview mode: composition grid + border */}
              {isPreviewing && (
                <>
                  <CompositionGrid
                    type={composition}
                    width={crop.width}
                    height={crop.height}
                  />
                  <div className="absolute inset-0 ring-1 ring-white/20 ring-inset pointer-events-none rounded-[4px]" />
                  <div className="absolute -inset-1 ring-2 ring-white/60 pointer-events-none rounded-[6px]" />
                </>
              )}
            </div>
          </div>
        )}

        {/* Bottom bar — preview / export buttons */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center pointer-events-none gap-2">
            {isPreviewing ? (
              <button
                onClick={() => setIsPreviewing(false)}
                className="pointer-events-auto text-[13px] font-medium text-zinc-300 bg-zinc-800/90 px-3.5 py-1.5 rounded-full hover:bg-zinc-700 transition-all shadow-lg shadow-black/30"
              >
                {t(lang, "cancel")}
              </button>
            ) : (
              <button
                onClick={() => setIsPreviewing(true)}
                className="pointer-events-auto flex items-center gap-1.5 text-[13px] font-medium bg-white text-black px-3.5 py-1.5 rounded-full hover:bg-zinc-200 transition-all shadow-lg shadow-black/30"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t(lang, "preview")}
              </button>
            )}
        </div>

        {/* Preview backdrop */}
        {isPreviewing && (
          <div className="absolute inset-0 -z-10" />
        )}
      </div>

      {/* ---- Export Format Modal ---- */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowExportModal(false)} />
          <div className="relative bg-zinc-900 border border-zinc-700/50 rounded-2xl p-6 w-[280px] shadow-2xl shadow-black/50">
            <h3 className="text-sm font-semibold text-white mb-4">{t(lang, "exportAs")}</h3>
            <div className="flex flex-col gap-1.5">
              {([
                { format: "png" as const, label: "PNG", descKey: "pngDesc" as const },
                { format: "jpeg" as const, label: "JPEG", descKey: "jpegDesc" as const },
                { format: "webp" as const, label: "WebP", descKey: "webpDesc" as const },
              ] as const).map(({ format, label, descKey }) => (
                <button
                  key={format}
                  onClick={() => handleExport(format)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-zinc-800 text-left transition-colors group"
                >
                  <div>
                    <div className="text-[13px] font-medium text-white group-hover:text-white">{label}</div>
                    <div className="text-[13px] text-zinc-500">{t(lang, descKey)}</div>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
