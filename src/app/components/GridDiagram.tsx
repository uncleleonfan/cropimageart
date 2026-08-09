"use client";

import React from "react";
import { CompositionType } from "../lib/types";

interface Props {
  type: CompositionType;
  className?: string;
}

// ── Shared canvas: 600×400 (3:2 landscape) with scene context ──
const W = 600;
const H = 400;
const STROKE = "rgba(255,255,255,0.55)";
const STROKE_DIM = "rgba(255,255,255,0.22)";
const STROKE_THIN = "rgba(255,255,255,0.14)";
const ACCENT = "#a78bfa"; // purple accent for key points

// A subtle background scene (sky/ground horizon + tree hint)
function SceneBackground() {
  return (
    <>
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,58,237,0.12)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0.03)" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect x="0" y="0" width={W} height={H * 0.6} fill="url(#sky)" />
      {/* Ground */}
      <rect x="0" y={H * 0.6} width={W} height={H * 0.4} fill="url(#ground)" />
      {/* Horizon line */}
      <line x1={0} y1={H * 0.6} x2={W} y2={H * 0.6} stroke={STROKE_THIN} strokeWidth={1} />
      {/* Distant subject hint — a subtle vertical element near center-left */}
      <rect x={W * 0.38} y={H * 0.38} width={4} height={H * 0.22} rx={2} fill="rgba(255,255,255,0.06)" />
      <circle cx={W * 0.385} cy={H * 0.41} r={12} fill="rgba(255,255,255,0.04)" />
      {/* Sun / light source hint */}
      <circle cx={W * 0.65} cy={H * 0.25} r={18} fill="rgba(255,255,255,0.03)" />
    </>
  );
}

// ── 1. Rule of Thirds ──────────────────────────
function ThirdsDiagram() {
  return (
    <>
      <SceneBackground />
      <line x1={W / 3} y1={0} x2={W / 3} y2={H} stroke={STROKE} strokeWidth={1.2} />
      <line x1={(W * 2) / 3} y1={0} x2={(W * 2) / 3} y2={H} stroke={STROKE} strokeWidth={1.2} />
      <line x1={0} y1={H / 3} x2={W} y2={H / 3} stroke={STROKE} strokeWidth={1.2} />
      <line x1={0} y1={(H * 2) / 3} x2={W} y2={(H * 2) / 3} stroke={STROKE} strokeWidth={1.2} />
      {[
        [W / 3, H / 3],
        [(W * 2) / 3, H / 3],
        [W / 3, (H * 2) / 3],
        [(W * 2) / 3, (H * 2) / 3],
      ].map(([x, y], i) => (
        <React.Fragment key={i}>
          <circle cx={x} cy={y} r={5} fill={ACCENT} opacity={0.7} />
          <circle cx={x} cy={y} r={9} fill={ACCENT} opacity={0.15} />
        </React.Fragment>
      ))}
      {/* Annotations */}
      <text x={W / 3} y={H - 10} textAnchor="middle" fill={STROKE_THIN} fontSize={10}>1/3</text>
      <text x={(W * 2) / 3} y={H - 10} textAnchor="middle" fill={STROKE_THIN} fontSize={10}>2/3</text>
    </>
  );
}

// ── 2. Golden Ratio ────────────────────────────
function GoldenRatioDiagram() {
  const phi = 1.618;
  const r1 = W / phi; // ~370
  const r3 = H / phi; // ~247
  return (
    <>
      <SceneBackground />
      <line x1={r1} y1={0} x2={r1} y2={H} stroke={STROKE} strokeWidth={1.2} />
      <line x1={W - r1} y1={0} x2={W - r1} y2={H} stroke={STROKE} strokeWidth={1.2} />
      <line x1={0} y1={r3} x2={W} y2={r3} stroke={STROKE} strokeWidth={1.2} />
      <line x1={0} y1={H - r3} x2={W} y2={H - r3} stroke={STROKE} strokeWidth={1.2} />
      {[
        [r1, r3],
        [r1, H - r3],
        [W - r1, r3],
        [W - r1, H - r3],
      ].map(([x, y], i) => (
        <React.Fragment key={i}>
          <circle cx={x} cy={y} r={5} fill={ACCENT} opacity={0.7} />
          <circle cx={x} cy={y} r={9} fill={ACCENT} opacity={0.15} />
        </React.Fragment>
      ))}
      <text x={r1 / 2} y={H - 10} textAnchor="middle" fill={STROKE_THIN} fontSize={10}>≈38%</text>
      <text x={r1 + (W - 2 * r1) / 2} y={H - 10} textAnchor="middle" fill={STROKE_THIN} fontSize={10}>≈24%</text>
    </>
  );
}

// ── 3. Golden Spiral ───────────────────────────
function SpiralDiagram() {
  const segments: string[] = [];
  let remaining: { x: number; y: number; w: number; h: number } = { x: 0, y: 0, w: W, h: H };
  for (let i = 0; i < 7; i++) {
    const { x, y, w: rw, h: rh } = remaining;
    if (rw < 8 || rh < 8) break;
    const size = Math.min(rw, rh);
    const cx = x + rw;
    const cy = y;
    const dir = i % 4;
    let arc = "";
    switch (dir) {
      case 0:
        arc = `M ${cx - size} ${cy} A ${size} ${size} 0 0 1 ${cx} ${cy + size}`;
        remaining = { x, y: y + size, w: rw - size, h: rh - size };
        break;
      case 1:
        arc = `M ${cx} ${cy + size} A ${size} ${size} 0 0 1 ${cx - size} ${cy}`;
        remaining = { x: x + size, y, w: rw - size, h: rh - size };
        break;
      case 2:
        arc = `M ${cx} ${cy - size} A ${size} ${size} 0 0 1 ${cx - size} ${cy}`;
        remaining = { x, y, w: rw - size, h: rh - size };
        break;
      case 3:
        arc = `M ${cx - size} ${cy} A ${size} ${size} 0 0 1 ${cx} ${cy + size}`;
        remaining = { x: x + size, y: y + size, w: rw - size, h: rh - size };
        break;
    }
    if (arc) segments.push(arc);
  }
  // Last segment endpoint is roughly the spiral center
  const centerX = segments.length > 0 ? W * 0.62 : W / 2;
  const centerY = segments.length > 0 ? H * 0.38 : H / 2;
  return (
    <>
      <SceneBackground />
      <path d={segments.join(" ")} fill="none" stroke={STROKE} strokeWidth={2} opacity={0.7} />
      <circle cx={centerX} cy={centerY} r={6} fill={ACCENT} opacity={0.8} />
      <circle cx={centerX} cy={centerY} r={12} fill={ACCENT} opacity={0.15} />
      <text x={centerX + 16} y={centerY - 12} fill={ACCENT} fontSize={9} opacity={0.7}>spiral center</text>
    </>
  );
}

// ── 4. Diagonal Method ──────────────────────────
function DiagonalDiagram() {
  const d = `M 0 ${H} L ${W} 0`;
  const s = Math.min(W, H);
  return (
    <>
      <SceneBackground />
      <path d={d} stroke={STROKE} strokeWidth={1.2} opacity={0.7} />
      <path d={`M 0 ${Math.max(0, H - s)} L ${Math.min(W, s)} ${H}`} stroke={STROKE_DIM} strokeWidth={0.8} />
      <path d={`M ${Math.max(0, W - s)} 0 L ${W} ${Math.min(H, s)}`} stroke={STROKE_DIM} strokeWidth={0.8} />
      <circle cx={W * 0.5} cy={H * 0.5} r={4} fill={ACCENT} opacity={0.6} />
      <text x={W - 30} y={28} textAnchor="end" fill={STROKE_THIN} fontSize={10}>45°</text>
    </>
  );
}

// ── 5. Triangle ────────────────────────────────
function TriangleDiagram() {
  const midX = W / 2;
  const midY = H / 2;
  return (
    <>
      <SceneBackground />
      <path d={`M 0 ${H} L ${W} 0`} stroke={STROKE} strokeWidth={1.2} opacity={0.7} />
      <path d={`M 0 0 L ${midX} ${midY}`} stroke={STROKE_DIM} strokeWidth={0.8} strokeDasharray="6 4" />
      <path d={`M ${W} ${H} L ${midX} ${midY}`} stroke={STROKE_DIM} strokeWidth={0.8} strokeDasharray="6 4" />
      <circle cx={midX} cy={midY} r={5} fill={ACCENT} opacity={0.7} />
      <circle cx={midX} cy={midY} r={10} fill={ACCENT} opacity={0.12} />
      <text x={midX + 14} y={midY - 10} fill={ACCENT} fontSize={10} opacity={0.6}>重心</text>
    </>
  );
}

// ── 6. Center Cross ────────────────────────────
function CrossDiagram() {
  return (
    <>
      <SceneBackground />
      <line x1={W / 2} y1={0} x2={W / 2} y2={H} stroke={STROKE} strokeWidth={1.2} />
      <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke={STROKE} strokeWidth={1.2} />
      <circle cx={W / 2} cy={H / 2} r={6} fill="none" stroke={ACCENT} strokeWidth={2} opacity={0.8} />
      <circle cx={W / 2} cy={H / 2} r={12} fill={ACCENT} opacity={0.12} />
      <text x={W / 2} y={H / 2 + 22} textAnchor="middle" fill={ACCENT} fontSize={10} opacity={0.6}>center</text>
    </>
  );
}

// ── 7. Symmetry ────────────────────────────────
function SymmetryDiagram() {
  return (
    <>
      <SceneBackground />
      {/* Strong vertical center line */}
      <line x1={W / 2} y1={0} x2={W / 2} y2={H} stroke={STROKE} strokeWidth={2} opacity={0.75} />
      {/* Subtle horizontal */}
      <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke={STROKE_DIM} strokeWidth={0.6} />
      {/* Mirror indicators */}
      <line x1={W / 2} y1={10} x2={W / 2 - 8} y2={22} stroke={STROKE_DIM} strokeWidth={0.5} />
      <line x1={W / 2} y1={10} x2={W / 2 + 8} y2={22} stroke={STROKE_DIM} strokeWidth={0.5} />
      <line x1={W / 2} y1={H - 10} x2={W / 2 - 8} y2={H - 22} stroke={STROKE_DIM} strokeWidth={0.5} />
      <line x1={W / 2} y1={H - 10} x2={W / 2 + 8} y2={H - 22} stroke={STROKE_DIM} strokeWidth={0.5} />
      <circle cx={W / 2} cy={H / 2} r={5} fill={ACCENT} opacity={0.7} />
      <text x={W / 2 + 14} y={H / 2 - 10} fill={ACCENT} fontSize={9} opacity={0.5}>axis</text>
    </>
  );
}

// ── 8. Leading Lines ──────────────────────────
function LeadingLinesDiagram() {
  const cx = W / 2;
  const cy = H / 2;
  const focusX = cx * 1.1;
  const focusY = cy * 0.75;
  return (
    <>
      <SceneBackground />
      {/* Leading lines from corners to focus area */}
      <line x1={0} y1={0} x2={focusX} y2={focusY} stroke={STROKE} strokeWidth={1.2} />
      <line x1={W} y1={0} x2={focusX} y2={focusY} stroke={STROKE} strokeWidth={0.8} opacity={0.5} />
      <line x1={0} y1={H} x2={cx * 0.9} y2={cy * 1.15} stroke={STROKE_DIM} strokeWidth={0.8} />
      <line x1={W} y1={H} x2={focusX} y2={focusY} stroke={STROKE_DIM} strokeWidth={0.7} />
      {/* Focus point */}
      <circle cx={focusX} cy={focusY} r={6} fill={ACCENT} opacity={0.8} />
      <circle cx={focusX} cy={focusY} r={14} fill={ACCENT} opacity={0.12} />
      <text x={focusX + 18} y={focusY - 12} fill={ACCENT} fontSize={9} opacity={0.6}>focus</text>
      {/* Arrow hints on lines */}
      <text x={60} y={35} fill={STROKE_THIN} fontSize={12}>↘</text>
      <text x={W - 75} y={35} fill={STROKE_THIN} fontSize={12}>↙</text>
    </>
  );
}

// ── Main Component ─────────────────────────────
export default function GridDiagram({ type, className = "" }: Props) {
  const renderDiagram = () => {
    switch (type) {
      case "thirds": return <ThirdsDiagram />;
      case "golden-ratio": return <GoldenRatioDiagram />;
      case "golden-spiral": return <SpiralDiagram />;
      case "diagonal": return <DiagonalDiagram />;
      case "triangle": return <TriangleDiagram />;
      case "cross": return <CrossDiagram />;
      case "symmetry": return <SymmetryDiagram />;
      case "leading-lines": return <LeadingLinesDiagram />;
      default: return null;
    }
  };

  return (
    <div className={`rounded-xl border border-zinc-800/60 overflow-hidden bg-zinc-900/50 ${className}`}>
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ aspectRatio: `${W}/${H}`, maxWidth: "100%" }}
      >
        {renderDiagram()}
      </svg>
      <div className="px-4 py-2 border-t border-zinc-800/40 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-500/60" />
        <span className="text-[10px] text-zinc-600 uppercase tracking-wider">composition grid diagram</span>
      </div>
    </div>
  );
}
