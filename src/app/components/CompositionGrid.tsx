"use client";

import React from "react";
import { CompositionType } from "../lib/types";

interface Props {
  type: CompositionType;
  width: number;
  height: number;
}

function drawThirds(w: number, h: number) {
  const cx = w / 3;
  const cy = h / 3;
  return (
    <>
      <line x1={cx} y1={0} x2={cx} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={cx * 2} y1={0} x2={cx * 2} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={cy} x2={w} y2={cy} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={cy * 2} x2={w} y2={cy * 2} stroke="white" strokeWidth={1} opacity={0.6} />
      {/* Intersection points */}
      {[
        [cx, cy],
        [cx * 2.001, cy],
        [cx, cy * 2.001],
        [cx * 2.001, cy * 2.001],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="white" opacity={0.4} />
      ))}
    </>
  );
}

function drawGoldenRatio(w: number, h: number) {
  const phi = 1.618;
  const r1 = w / phi;
  const r2 = w - r1;
  const r3 = h / phi;
  const r4 = h - r3;
  return (
    <>
      <line x1={r1} y1={0} x2={r1} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={r2} y1={0} x2={r2} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={r3} x2={w} y2={r3} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={r4} x2={w} y2={r4} stroke="white" strokeWidth={1} opacity={0.6} />
      {[
        [r1, r3],
        [r1, r4],
        [r2, r3],
        [r2, r4],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="white" opacity={0.4} />
      ))}
    </>
  );
}

function drawGoldenSpiral(w: number, h: number) {
  const segments: string[] = [];
  let remaining: { x: number; y: number; w: number; h: number } = {
    x: 0,
    y: 0,
    w,
    h,
  };

  for (let i = 0; i < 8; i++) {
    const { x, y, w: rw, h: rh } = remaining;
    if (rw < 5 || rh < 5) break;

    const size = Math.min(rw, rh);
    const cx = x + rw;
    const cy = y;
    const direction = i % 4;

    let arcPath = "";
    switch (direction) {
      case 0:
        arcPath = `M ${cx - size} ${cy} A ${size} ${size} 0 0 1 ${cx} ${cy + size}`;
        remaining = { x, y: y + size, w: rw - size, h: rh - size };
        break;
      case 1:
        arcPath = `M ${cx} ${cy + size} A ${size} ${size} 0 0 1 ${cx - size} ${cy}`;
        remaining = { x: x + size, y, w: rw - size, h: rh - size };
        break;
      case 2:
        arcPath = `M ${cx} ${cy - size} A ${size} ${size} 0 0 1 ${cx - size} ${cy}`;
        remaining = { x, y, w: rw - size, h: rh - size };
        break;
      case 3:
        arcPath = `M ${cx - size} ${cy} A ${size} ${size} 0 0 1 ${cx} ${cy + size}`;
        remaining = { x: x + size, y: y + size, w: rw - size, h: rh - size };
        break;
    }

    if (arcPath) segments.push(arcPath);
  }

  return (
    <path
      d={segments.join(" ")}
      fill="none"
      stroke="white"
      strokeWidth={1.5}
      opacity={0.5}
    />
  );
}

function drawDiagonal(w: number, h: number) {
  const lines = [];
  // 4 lines from corners at 45 degrees
  const smallSize = Math.min(w, h);

  // Bottom-left to top-right diagonal
  lines.push(`M 0 ${h} L ${w} 0`);
  // 45° lines from each corner extending up to smallSize
  lines.push(`M 0 ${Math.max(0, h - smallSize)} L ${Math.min(w, smallSize)} ${h}`);
  lines.push(`M ${Math.max(0, w - smallSize)} 0 L ${w} ${Math.min(h, smallSize)}`);

  return (
    <>
      {lines.map((d, i) => (
        <path key={i} d={d} stroke="white" strokeWidth={1} opacity={0.4} fill="none" />
      ))}
    </>
  );
}

function drawTriangle(w: number, h: number) {
  // Main diagonal
  const diag = `M 0 ${h} L ${w} 0`;
  // Perpendicular from top-left to diagonal
  const midX = w / 2;
  const midY = h / 2;
  const perpEndpoint = { x: 0, y: 0 };
  const px = perpEndpoint.x;
  const py = perpEndpoint.y;
  const perp = `M ${px} ${py} L ${midX} ${midY}`;
  // Perpendicular from bottom-right
  const perp2 = `M ${w} ${h} L ${midX} ${midY}`;

  return (
    <>
      <path d={diag} stroke="white" strokeWidth={1} opacity={0.5} fill="none" />
      <path d={perp} stroke="white" strokeWidth={1} opacity={0.3} fill="none" strokeDasharray="4 4" />
      <path d={perp2} stroke="white" strokeWidth={1} opacity={0.3} fill="none" strokeDasharray="4 4" />
      <circle cx={midX} cy={midY} r={3} fill="white" opacity={0.5} />
    </>
  );
}

function drawCross(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  return (
    <>
      <line x1={cx} y1={0} x2={cx} y2={h} stroke="white" strokeWidth={1} opacity={0.5} />
      <line x1={0} y1={cy} x2={w} y2={cy} stroke="white" strokeWidth={1} opacity={0.5} />
      <circle cx={cx} cy={cy} r={4} fill="none" stroke="white" strokeWidth={1} opacity={0.5} />
    </>
  );
}

// ── 7. Symmetry ──────────────────────────────────
function drawSymmetry(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  return (
    <>
      <line x1={cx} y1={0} x2={cx} y2={h} stroke="white" strokeWidth={1.5} opacity={0.6} />
      <line x1={0} y1={cy} x2={w} y2={cy} stroke="white" strokeWidth={0.5} opacity={0.25} />
      <line x1={cx * 0.5} y1={cy} x2={cx * 1.5} y2={cy} stroke="white" strokeWidth={0.5} opacity={0.15} strokeDasharray="3 6" />
    </>
  );
}

// ── 8. Leading Lines ───────────────────────────
function drawLeadingLines(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  // Lines from corners pointing to the center area (offset slightly for asymmetry)
  const targets = [
    { x: cx * 0.65, y: cy },
    { x: cx * 1.35, y: cy },
    { x: cx, y: cy },
  ];
  return (
    <>
      {/* From top-left */}
      <line x1={0} y1={0} x2={targets[0].x} y2={targets[0].y} stroke="white" strokeWidth={1} opacity={0.35} />
      <line x1={0} y1={h} x2={targets[0].x} y2={targets[0].y} stroke="white" strokeWidth={0.5} opacity={0.2} />
      {/* From top-right */}
      <line x1={w} y1={0} x2={targets[1].x} y2={targets[1].y} stroke="white" strokeWidth={1} opacity={0.35} />
      {/* From bottom-right */}
      <line x1={w} y1={h} x2={targets[1].x} y2={targets[1].y} stroke="white" strokeWidth={0.5} opacity={0.2} />
      {/* From bottom-left */}
      <line x1={0} y1={h} x2={cx} y2={cy * 0.7} stroke="white" strokeWidth={0.5} opacity={0.2} />
      {/* Cross point */}
      <circle cx={targets[1].x} cy={targets[1].y} r={3} fill="white" opacity={0.35} />
      <circle cx={targets[0].x} cy={targets[0].y} r={3} fill="white" opacity={0.35} />
    </>
  );
}

export default function CompositionGrid({ type, width, height }: Props) {
  if (type === "none" || width === 0 || height === 0) return null;

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {type === "thirds" && drawThirds(width, height)}
      {type === "golden-ratio" && drawGoldenRatio(width, height)}
      {type === "golden-spiral" && drawGoldenSpiral(width, height)}
      {type === "diagonal" && drawDiagonal(width, height)}
      {type === "triangle" && drawTriangle(width, height)}
      {type === "cross" && drawCross(width, height)}
      {type === "symmetry" && drawSymmetry(width, height)}
      {type === "leading-lines" && drawLeadingLines(width, height)}
    </svg>
  );
}
