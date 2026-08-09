"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  AspectRatio,
  CompositionType,
  CropRect,
} from "../lib/types";
import {
  ASPECT_RATIO_VALUES,
  COMPOSITION_LABELS,
} from "../lib/types";
import CompositionGrid from "./CompositionGrid";

type ResizeHandle =
  | "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

const MIN_CROP_SIZE = 50;

function clampCrop(rect: CropRect, imgW: number, imgH: number): CropRect {
  let { x, y, width, height } = rect;
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x + width > imgW) x = imgW - width;
  if (y + height > imgH) y = imgH - height;
  if (x < 0) {
    width += x;
    x = 0;
  }
  if (y < 0) {
    height += y;
    y = 0;
  }
  return { x, y, width: Math.max(MIN_CROP_SIZE, width), height: Math.max(MIN_CROP_SIZE, height) };
}

function constrainByRatio(
  rect: CropRect,
  ratio: number,
  imgW: number,
  imgH: number
): CropRect {
  const maxW = imgW - rect.x;
  const maxH = imgH - rect.y;
  let w = rect.width;
  let h = w / ratio;
  if (h > maxH) {
    h = maxH;
    w = h * ratio;
  }
  if (w > maxW) {
    w = maxW;
    h = w / ratio;
  }
  if (w < MIN_CROP_SIZE) {
    w = MIN_CROP_SIZE;
    h = w / ratio;
  }
  if (h < MIN_CROP_SIZE) {
    h = MIN_CROP_SIZE;
    w = h * ratio;
  }
  return { ...rect, width: w, height: h };
}

export default function CropEditor() {
  // State
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("free");
  const [composition, setComposition] = useState<CompositionType>("thirds");
  const [crop, setCrop] = useState<CropRect>({ x: 0, y: 0, width: 0, height: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragHandle, setDragHandle] = useState<ResizeHandle | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCropStart, setDragCropStart] = useState<CropRect>({ x: 0, y: 0, width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ratio = aspectRatio === "free" ? null : ASPECT_RATIO_VALUES[aspectRatio];

  // Load image
  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setImageSrc(src);
        setRotation(0);
        setZoom(1);
        // display size will be set in effect
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, []);

  // Drop handler
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  // Calculate display size when image or zoom changes
  useEffect(() => {
    if (!image || !containerRef.current) return;

    const container = containerRef.current;
    const maxW = container.clientWidth;
    const maxH = container.clientHeight;

    const imgRatio = image.naturalWidth / image.naturalHeight;
    let w: number, h: number;

    if (rotation % 180 === 0) {
      w = Math.min(maxW, image.naturalWidth * zoom);
      h = w / imgRatio;
      if (h > maxH) {
        h = maxH;
        w = h * imgRatio;
      }
    } else {
      h = Math.min(maxW, image.naturalHeight * zoom);
      w = h / imgRatio;
      if (w > maxH) {
        w = maxH;
        h = w * imgRatio;
      }
    }

    setDisplayWidth(w);
    setDisplayHeight(h);
  }, [image, zoom, rotation]);

  // Init crop when image size changes
  useEffect(() => {
    if (displayWidth === 0 || displayHeight === 0) return;

    const defaultSize = Math.min(displayWidth, displayHeight) * 0.75;
    let w = defaultSize;
    let h = defaultSize;

    if (ratio) {
      if (ratio >= 1) {
        h = w / ratio;
      } else {
        w = h * ratio;
      }
    }

    const x = (displayWidth - w) / 2;
    const y = (displayHeight - h) / 2;

    setCrop({ x, y, width: w, height: h });
  }, [displayWidth, displayHeight]); // eslint-disable-line

  // Get image-to-display scale
  const getScale = useCallback(() => {
    if (!image) return 1;
    if (rotation % 180 === 0) {
      return image.naturalWidth / displayWidth;
    }
    return image.naturalHeight / displayWidth; // swapped
  }, [image, displayWidth, rotation]);

  // Mouse handlers
  const getEventPos = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const pos = getEventPos(e);
      setDragStart(pos);
      setDragCropStart({ ...crop });

      // Check if clicking on a resize handle
      const handleSize = 10;
      const handles: { h: ResizeHandle; x: number; y: number }[] = [
        { h: "nw", x: crop.x, y: crop.y },
        { h: "n", x: crop.x + crop.width / 2, y: crop.y },
        { h: "ne", x: crop.x + crop.width, y: crop.y },
        { h: "e", x: crop.x + crop.width, y: crop.y + crop.height / 2 },
        { h: "se", x: crop.x + crop.width, y: crop.y + crop.height },
        { h: "s", x: crop.x + crop.width / 2, y: crop.y + crop.height },
        { h: "sw", x: crop.x, y: crop.y + crop.height },
        { h: "w", x: crop.x, y: crop.y + crop.height / 2 },
      ];

      for (const { h, x, y } of handles) {
        if (
          Math.abs(pos.x - x) < handleSize + 4 &&
          Math.abs(pos.y - y) < handleSize + 4
        ) {
          setDragHandle(h);
          return;
        }
      }

      // Check if clicking inside the crop area
      if (
        pos.x >= crop.x &&
        pos.x <= crop.x + crop.width &&
        pos.y >= crop.y &&
        pos.y <= crop.y + crop.height
      ) {
        setIsDragging(true);
        setDragHandle(null);
        return;
      }
    },
    [crop, getEventPos]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging && !dragHandle) return;

      const pos = getEventPos(e);
      const dx = pos.x - dragStart.x;
      const dy = pos.y - dragStart.y;

      if (isDragging) {
        // Move crop area
        let newX = dragCropStart.x + dx;
        let newY = dragCropStart.y + dy;
        // Clamp
        newX = Math.max(0, Math.min(newX, displayWidth - dragCropStart.width));
        newY = Math.max(0, Math.min(newY, displayHeight - dragCropStart.height));
        setCrop((prev) => ({ ...prev, x: newX, y: newY }));
      } else if (dragHandle) {
        // Resize crop area
        let newCrop = { ...dragCropStart };
        const h = dragHandle;

        if (h.includes("e")) {
          newCrop.width = Math.max(MIN_CROP_SIZE, dragCropStart.width + dx);
          newCrop.width = Math.min(newCrop.width, displayWidth - newCrop.x);
        }
        if (h.includes("w")) {
          const newW = Math.max(MIN_CROP_SIZE, dragCropStart.width - dx);
          const maxW = dragCropStart.x + dragCropStart.width;
          newCrop.width = Math.min(newW, maxW);
          newCrop.x = dragCropStart.x + dragCropStart.width - newCrop.width;
        }
        if (h.includes("s")) {
          newCrop.height = Math.max(MIN_CROP_SIZE, dragCropStart.height + dy);
          newCrop.height = Math.min(newCrop.height, displayHeight - newCrop.y);
        }
        if (h.includes("n")) {
          const newH = Math.max(MIN_CROP_SIZE, dragCropStart.height - dy);
          const maxH = dragCropStart.y + dragCropStart.height;
          newCrop.height = Math.min(newH, maxH);
          newCrop.y = dragCropStart.y + dragCropStart.height - newCrop.height;
        }

        // Apply aspect ratio constraint
        if (ratio && (h === "se" || h === "sw" || h === "ne" || h === "nw")) {
          newCrop.height = newCrop.width / ratio;
          if (h.includes("n")) {
            newCrop.y = dragCropStart.y + dragCropStart.height - newCrop.height;
          }
        }

        newCrop = clampCrop(newCrop, displayWidth, displayHeight);
        setCrop(newCrop);
      }
    },
    [
      isDragging,
      dragHandle,
      dragStart,
      dragCropStart,
      displayWidth,
      displayHeight,
      ratio,
      getEventPos,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragHandle(null);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Download
  const handleDownload = useCallback(() => {
    if (!image || !imageSrc) return;

    const canvas = document.createElement("canvas");
    const scale = getScale();

    // Account for rotation
    let srcW: number, srcH: number;
    if (rotation % 180 === 0) {
      srcW = image.naturalWidth;
      srcH = image.naturalHeight;
    } else {
      srcW = image.naturalHeight;
      srcH = image.naturalWidth;
    }

    const cropX = crop.x * scale;
    const cropY = crop.y * scale;
    const cropW = crop.width * scale;
    const cropH = crop.height * scale;

    canvas.width = cropW;
    canvas.height = cropH;
    const ctx = canvas.getContext("2d")!;

    // Handle rotation
    ctx.save();
    if (rotation !== 0) {
      ctx.translate(cropW / 2, cropH / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(
        image,
        cropX - srcW / 2,
        cropY - srcH / 2,
        srcW,
        srcH,
        -cropW / 2,
        -cropH / 2,
        cropW,
        cropH
      );
    } else {
      ctx.drawImage(image, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
    }
    ctx.restore();

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cropped-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }, [image, imageSrc, crop, rotation, getScale]);

  // Reset
  const handleReset = useCallback(() => {
    if (!image) return;
    setRotation(0);
    setZoom(1);
    setAspectRatio("free");
  }, [image]);

  if (!imageSrc) {
    return (
      <div
        className="flex-1 flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="text-center max-w-md mx-auto p-12">
          {/* Upload icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Upload an image to start cropping
          </h2>
          <p className="text-zinc-500 mb-6 text-sm leading-relaxed">
            Drag & drop an image here, or click to browse. <br />
            Use composition guides like Rule of Thirds, Golden Ratio, and more
            to create beautifully framed images.
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            Choose Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur flex-shrink-0">
        {/* Aspect Ratio Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
            Ratio
          </span>
          <select
            value={aspectRatio}
            onChange={(e) => {
              setAspectRatio(e.target.value as AspectRatio);
              // Recalculate crop to match new ratio
              if (e.target.value !== "free") {
                const r = ASPECT_RATIO_VALUES[e.target.value as Exclude<AspectRatio, "free">];
                setCrop((prev) =>
                  constrainByRatio(prev, r, displayWidth, displayHeight)
                );
              }
            }}
            className="bg-zinc-800 text-white text-xs rounded-lg px-2.5 py-1.5 border border-zinc-700 outline-none focus:border-zinc-500 cursor-pointer"
          >
            {(
              [
                "free",
                "1:1",
                "4:5",
                "3:4",
                "2:3",
                "9:16",
                "3:2",
                "4:3",
                "16:9",
              ] as AspectRatio[]
            ).map((r) => (
              <option key={r} value={r}>
                {r === "free" ? "Free" : r}
              </option>
            ))}
          </select>
        </div>

        <div className="w-px h-5 bg-zinc-800" />

        {/* Composition Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
            Grid
          </span>
          <select
            value={composition}
            onChange={(e) => setComposition(e.target.value as CompositionType)}
            className="bg-zinc-800 text-white text-xs rounded-lg px-2.5 py-1.5 border border-zinc-700 outline-none focus:border-zinc-500 cursor-pointer"
          >
            {Object.entries(COMPOSITION_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="w-px h-5 bg-zinc-800" />

        {/* Rotation */}
        <button
          onClick={() => setRotation((r) => (r + 90) % 360)}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
          title="Rotate 90°"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>{rotation}°</span>
        </button>

        {/* Zoom */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoom((z) => Math.max(0.25, z - 0.25))}
            className="text-xs text-zinc-400 hover:text-white px-1.5 py-1 rounded hover:bg-zinc-800 transition-colors"
          >
            −
          </button>
          <span className="text-xs text-zinc-400 w-10 text-center tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => setZoom((z) => Math.min(4, z + 0.25))}
            className="text-xs text-zinc-400 hover:text-white px-1.5 py-1 rounded hover:bg-zinc-800 transition-colors"
          >
            +
          </button>
        </div>

        <div className="flex-1" />

        {/* Reset & Download */}
        <button
          onClick={handleReset}
          className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          New Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />
        <button
          onClick={handleDownload}
          className="flex items-center gap-1.5 text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
      </div>

      {/* Canvas Area */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden bg-[#1a1a1a]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {image && displayWidth > 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative"
              style={{
                width: displayWidth,
                height: displayHeight,
              }}
              onMouseDown={handleMouseDown}
            >
              {/* Image */}
              <img
                src={imageSrc!}
                alt="Crop preview"
                draggable={false}
                className="absolute inset-0 w-full h-full object-contain select-none"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              />

              {/* Dark overlay outside crop area */}
              {/* Top */}
              <div
                className="absolute left-0 right-0 bg-black/60 pointer-events-none"
                style={{ top: 0, height: crop.y }}
              />
              {/* Bottom */}
              <div
                className="absolute left-0 right-0 bg-black/60 pointer-events-none"
                style={{ top: crop.y + crop.height, bottom: 0 }}
              />
              {/* Left */}
              <div
                className="absolute top-0 bottom-0 bg-black/60 pointer-events-none"
                style={{ left: 0, width: crop.x, top: crop.y, bottom: displayHeight - crop.y - crop.height }}
              />
              {/* Right */}
              <div
                className="absolute bg-black/60 pointer-events-none"
                style={{
                  left: crop.x + crop.width,
                  top: crop.y,
                  bottom: displayHeight - crop.y - crop.height,
                  width: displayWidth - crop.x - crop.width,
                }}
              />

              {/* Crop Area */}
              <div
                className="absolute cursor-move"
                style={{
                  left: crop.x,
                  top: crop.y,
                  width: crop.width,
                  height: crop.height,
                }}
              >
                {/* Composition Grid */}
                <CompositionGrid
                  type={composition}
                  width={crop.width}
                  height={crop.height}
                />

                {/* Crop border */}
                <div className="absolute inset-0 border-2 border-white/80 pointer-events-none" />

                {/* Rule of Thirds lines on crop border */}
                <div className="absolute inset-0 border border-white/20 pointer-events-none" />

                {/* Resize handles */}
                {(
                  [
                    ["nw", "cursor-nw-resize", "top-0 left-0", "-translate-x-1/2 -translate-y-1/2"],
                    ["n", "cursor-n-resize", "top-0 left-1/2", "-translate-x-1/2 -translate-y-1/2"],
                    ["ne", "cursor-ne-resize", "top-0 right-0", "translate-x-1/2 -translate-y-1/2"],
                    ["e", "cursor-e-resize", "top-1/2 right-0", "translate-x-1/2 -translate-y-1/2"],
                    ["se", "cursor-se-resize", "bottom-0 right-0", "translate-x-1/2 translate-y-1/2"],
                    ["s", "cursor-s-resize", "bottom-0 left-1/2", "-translate-x-1/2 translate-y-1/2"],
                    ["sw", "cursor-sw-resize", "bottom-0 left-0", "-translate-x-1/2 translate-y-1/2"],
                    ["w", "cursor-w-resize", "top-1/2 left-0", "-translate-x-1/2 -translate-y-1/2"],
                  ] as const
                ).map(([handle, cursor, pos, transform]) => (
                  <div
                    key={handle}
                    className={`absolute ${cursor} ${pos} ${transform} w-3 h-3 bg-white rounded-full border-2 border-black/30 shadow-sm hover:scale-125 transition-transform`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Size info */}
        {image && (
          <div className="absolute bottom-4 left-4 text-xs text-zinc-500 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur">
            {rotation % 180 === 0
              ? `${image.naturalWidth} × ${image.naturalHeight}`
              : `${image.naturalHeight} × ${image.naturalWidth}`}
          </div>
        )}

        {/* Crop dimension info */}
        {image && crop.width > 0 && (
          <div className="absolute bottom-4 right-4 text-xs text-zinc-400 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur">
            Crop: {Math.round(crop.width * getScale())} ×{" "}
            {Math.round(crop.height * getScale())}px
          </div>
        )}
      </div>
    </div>
  );
}
