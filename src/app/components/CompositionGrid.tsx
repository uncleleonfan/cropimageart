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

function drawPhiGrid(w: number, h: number) {
  const phi = 1.618;
  // Phi grid has divisions at 1/φ², 1/φ, and φ-1
  const d1 = w / (phi * phi);
  const d2 = w / phi;
  const d3 = w - d2;
  const e1 = h / (phi * phi);
  const e2 = h / phi;
  const e3 = h - e2;

  return (
    <>
      <line x1={d1} y1={0} x2={d1} y2={h} stroke="white" strokeWidth={0.5} opacity={0.3} />
      <line x1={d2} y1={0} x2={d2} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={d3} y1={0} x2={d3} y2={h} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={e1} x2={w} y2={e1} stroke="white" strokeWidth={0.5} opacity={0.3} />
      <line x1={0} y1={e2} x2={w} y2={e2} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={e3} x2={w} y2={e3} stroke="white" strokeWidth={1} opacity={0.6} />
    </>
  );
}

// ── 8. Symmetry ──────────────────────────────────
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

// ── 9. Quarters (4×4) ───────────────────────────
function drawQuarters(w: number, h: number) {
  const lines = [];
  for (let i = 1; i < 4; i++) {
    lines.push(<line key={`qv${i}`} x1={(w * i) / 4} y1={0} x2={(w * i) / 4} y2={h} stroke="white" strokeWidth={0.5} opacity={0.35} />);
    lines.push(<line key={`qh${i}`} x1={0} y1={(h * i) / 4} x2={w} y2={(h * i) / 4} stroke="white" strokeWidth={0.5} opacity={0.35} />);
  }
  // center lines slightly brighter
  lines.push(<line key="qvc" x1={w / 2} y1={0} x2={w / 2} y2={h} stroke="white" strokeWidth={1.5} opacity={0.5} />);
  lines.push(<line key="qhc" x1={0} y1={h / 2} x2={w} y2={h / 2} stroke="white" strokeWidth={1.5} opacity={0.5} />);
  return <>{lines}</>;
}

// ── 10. Radiating Lines ─────────────────────────
function drawRadiating(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.hypot(w, h);
  const rays = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
    const x2 = cx + Math.cos(angle) * r;
    const y2 = cy + Math.sin(angle) * r;
    rays.push(
      <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke="white" strokeWidth={0.4} opacity={0.2} />
    );
  }
  return (
    <>
      {rays}
      <circle cx={cx} cy={cy} r={4} fill="white" opacity={0.4} />
      {/* Emphasize horizontal & vertical */}
      <line x1={cx} y1={0} x2={cx} y2={h} stroke="white" strokeWidth={0.8} opacity={0.35} />
      <line x1={0} y1={cy} x2={w} y2={cy} stroke="white" strokeWidth={0.8} opacity={0.35} />
    </>
  );
}

// ── 11. Leading Lines ───────────────────────────
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

// ── 12. S-Curve ─────────────────────────────────
function drawSCurve(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  // A graceful S-curve using cubic bezier
  const d = `M ${cx * 0.3} ${h} C ${w * 0.8} ${h * 0.6}, ${w * 0.2} ${h * 0.4}, ${cx * 1.7} 0`;
  return (
    <>
      <path d={d} stroke="white" strokeWidth={1.5} opacity={0.45} fill="none" />
      {/* Entrance / exit dots */}
      <circle cx={cx * 0.3} cy={h} r={3} fill="white" opacity={0.35} />
      <circle cx={cx * 1.7} cy={0} r={3} fill="white" opacity={0.35} />
      {/* Reverse S (lighter) */}
      <path
        d={`M ${cx * 1.7} ${h} C ${w * 0.2} ${h * 0.6}, ${w * 0.8} ${h * 0.4}, ${cx * 0.3} 0`}
        stroke="white" strokeWidth={0.6} opacity={0.15} fill="none" strokeDasharray="5 5"
      />
    </>
  );
}

// ── 13. X-Composition ───────────────────────────
function drawXComposition(w: number, h: number) {
  return (
    <>
      <line x1={0} y1={0} x2={w} y2={h} stroke="white" strokeWidth={1} opacity={0.4} />
      <line x1={w} y1={0} x2={0} y2={h} stroke="white" strokeWidth={1} opacity={0.4} />
      <circle cx={w / 2} cy={h / 2} r={4} fill="white" opacity={0.5} />
      {/* Rule-of-thirds intersection markers on diagonals */}
      {[
        [w / 3, h / 3], [w * 2 / 3, h / 3],
        [w / 3, h * 2 / 3], [w * 2 / 3, h * 2 / 3],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="white" opacity={0.25} />
      ))}
    </>
  );
}

// ── 14. L-Shape ─────────────────────────────────
function drawLShape(w: number, h: number) {
  const margin = Math.min(w, h) * 0.15;
  return (
    <>
      {/* Bottom-left L */}
      <path
        d={`M ${margin} ${margin} L ${margin} ${h - margin} L ${w - margin} ${h - margin}`}
        stroke="white" strokeWidth={1.5} opacity={0.5} fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx={margin} cy={margin} r={3} fill="white" opacity={0.35} />
      <circle cx={w - margin} cy={h - margin} r={3} fill="white" opacity={0.35} />
      {/* Top-right L (lighter) */}
      <path
        d={`M ${w - margin} ${margin} L ${margin} ${margin} L ${margin} ${h - margin}`}
        stroke="white" strokeWidth={0.5} opacity={0.2} fill="none"
        strokeDasharray="4 4" strokeLinecap="round"
      />
    </>
  );
}

// ── 15. Circular ────────────────────────────────
function drawCircular(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.min(w, h) * 0.45;
  return (
    <>
      <circle cx={cx} cy={cy} r={maxR} fill="none" stroke="white" strokeWidth={1.2} opacity={0.45} />
      <circle cx={cx} cy={cy} r={maxR * 0.618} fill="none" stroke="white" strokeWidth={0.6} opacity={0.25} strokeDasharray="4 4" />
      <circle cx={cx} cy={cy} r={maxR * 0.382} fill="none" stroke="white" strokeWidth={0.5} opacity={0.18} />
      <circle cx={cx} cy={cy} r={2.5} fill="white" opacity={0.4} />
      {/* Crosshair through center */}
      <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="white" strokeWidth={0.4} opacity={0.2} />
      <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="white" strokeWidth={0.4} opacity={0.2} />
    </>
  );
}

// ── 16. Cinematic Letterbox ─────────────────────
function drawCinematic(w: number, h: number) {
  // 2.35:1 crop area with letterbox bars
  const targetRatio = 2.35;
  let cropH: number;
  if (w / h > targetRatio) {
    // wider than 2.35 — bars on sides
    cropH = h;
  } else {
    // taller than 2.35 — bars top & bottom
    cropH = w / targetRatio;
  }
  const barH = (h - cropH) / 2;
  const barPadding = Math.max(4, barH * 0.12);

  return (
    <>
      {/* Top bar */}
      <rect x={0} y={barH - barPadding} width={w} height={barPadding} fill="white" opacity={0.45} />
      <line x1={0} y1={barH - barPadding} x2={w} y2={barH - barPadding} stroke="white" strokeWidth={0.5} opacity={0.3} />
      <line x1={0} y1={barH} x2={w} y2={barH} stroke="white" strokeWidth={1} opacity={0.6} />
      {/* Bottom bar */}
      <rect x={0} y={h - barH} width={w} height={barPadding} fill="white" opacity={0.45} />
      <line x1={0} y1={h - barH} x2={w} y2={h - barH} stroke="white" strokeWidth={1} opacity={0.6} />
      <line x1={0} y1={h - barH + barPadding} x2={w} y2={h - barH + barPadding} stroke="white" strokeWidth={0.5} opacity={0.3} />
      {/* Center marker */}
      <text x={w / 2} y={h / 2} textAnchor="middle" dominantBaseline="middle"
        fill="white" opacity={0.3} fontSize={Math.min(w, h) * 0.07} fontFamily="monospace"
      >2.35:1</text>
    </>
  );
}

// ── 17. Dynamic Symmetry (√2 rectangle system) ──
function drawDynamicSymmetry(w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  const lines: React.ReactNode[] = [];

  // Main diagonal
  lines.push(<line key="dsd" x1={0} y1={0} x2={w} y2={h} stroke="white" strokeWidth={1} opacity={0.4} />);
  // Reciprocal diagonal (perpendicular to main diagonal through a corner)
  lines.push(<line key="dsr" x1={w} y1={0} x2={0} y2={h} stroke="white" strokeWidth={1} opacity={0.4} />);

  // √2 vertical divisions
  const sqrt2 = 1.414;
  const v1 = w / sqrt2; // ~0.707 * w
  lines.push(<line key="dsv1" x1={v1} y1={0} x2={v1} y2={h} stroke="white" strokeWidth={0.8} opacity={0.35} />);
  lines.push(<line key="dsv2" x1={w - v1} y1={0} x2={w - v1} y2={h} stroke="white" strokeWidth={0.8} opacity={0.35} />);

  // √2 horizontal divisions
  const h1 = h / sqrt2;
  lines.push(<line key="dsh1" x1={0} y1={h1} x2={w} y2={h1} stroke="white" strokeWidth={0.8} opacity={0.35} />);
  lines.push(<line key="dsh2" x1={0} y1={h - h1} x2={w} y2={h - h1} stroke="white" strokeWidth={0.8} opacity={0.35} />);

  // Intersection points of √2 grid
  const pts = [
    [v1, h1], [v1, h - h1], [w - v1, h1], [w - v1, h - h1],
    [v1, cy], [w - v1, cy], [cx, h1], [cx, h - h1],
  ];
  pts.forEach(([x, y], i) => {
    lines.push(<circle key={`dspt${i}`} cx={x} cy={y} r={2} fill="white" opacity={0.3} />);
  });

  // Center
  lines.push(<circle key="dsc" cx={cx} cy={cy} r={3} fill="white" opacity={0.4} />);

  return <>{lines}</>;
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
      {type === "phi-grid" && drawPhiGrid(width, height)}
      {type === "symmetry" && drawSymmetry(width, height)}
      {type === "quarters" && drawQuarters(width, height)}
      {type === "radiating" && drawRadiating(width, height)}
      {type === "leading-lines" && drawLeadingLines(width, height)}
      {type === "s-curve" && drawSCurve(width, height)}
      {type === "x-composition" && drawXComposition(width, height)}
      {type === "l-shape" && drawLShape(width, height)}
      {type === "circular" && drawCircular(width, height)}
      {type === "cinematic" && drawCinematic(width, height)}
      {type === "dynamic-symmetry" && drawDynamicSymmetry(width, height)}
    </svg>
  );
}
