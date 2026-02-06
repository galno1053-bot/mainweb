"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";

const BRAND_PURPLE = "#B99CFF";
const BASE_BLUE = "#0052FF";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

export default function CryptoFiatBridge() {
  const reduceMotion = useReducedMotion();
  const duration = 5.2;
  const startX = 174;
  const endX = 546;
  const travel = endX - startX;

  const horizontalLoop: Transition | undefined = reduceMotion
    ? undefined
    : {
        duration,
        repeat: Infinity,
        ease: "linear" as const,
      };

  const pulseLoop: Transition | undefined = reduceMotion
    ? undefined
    : {
        duration,
        repeat: Infinity,
        ease: "easeInOut" as const,
      };

  return (
    <div className="mx-auto w-full max-w-xl rounded-xl border border-black/10 bg-white p-4 shadow-[0_18px_36px_rgba(0,0,0,0.08)]">
      <svg viewBox="0 0 720 280" className="h-auto w-full" aria-label="Animasi alur kripto ke Rupiah">
        <g style={{ fontFamily: "var(--font-sora)" }}>
          <motion.circle
            cx="96"
            cy="140"
            r="60"
            fill="rgba(185, 156, 255, 0.20)"
            animate={reduceMotion ? { opacity: 0.75 } : { opacity: [0.4, 0.8, 0.4], r: [56, 66, 56] }}
            transition={pulseLoop}
          />

          <motion.circle
            cx="624"
            cy="140"
            r="60"
            fill="rgba(0, 82, 255, 0.18)"
            animate={reduceMotion ? { opacity: 0.75 } : { opacity: [0.35, 0.75, 0.35], r: [56, 66, 56] }}
            transition={pulseLoop ? { ...pulseLoop, delay: duration / 2 } : undefined}
          />

          <line x1="158" y1="140" x2="562" y2="140" stroke={BASE_BLUE} strokeWidth="4" strokeLinecap="round" />
          <circle cx="158" cy="140" r="7" fill={BASE_BLUE} />
          <circle cx="360" cy="140" r="6" fill={BASE_BLUE} />
          <circle cx="562" cy="140" r="7" fill={BASE_BLUE} />

          <circle cx="96" cy="140" r="48" fill={WHITE} stroke={BRAND_PURPLE} strokeWidth="3" />
          <text x="96" y="136" textAnchor="middle" fontSize="16" fontWeight="500" fill={BLACK}>
            ETH & USDC
          </text>
          <text x="96" y="158" textAnchor="middle" fontSize="12" fontWeight="300" fill={BLACK}>
            Jaminan Kripto
          </text>

          <circle cx="624" cy="140" r="48" fill={WHITE} stroke={BASE_BLUE} strokeWidth="3" />
          <text x="624" y="134" textAnchor="middle" fontSize="22" fontWeight="500" fill={BLACK}>
            Rp
          </text>
          <text x="624" y="158" textAnchor="middle" fontSize="12" fontWeight="300" fill={BLACK}>
            Bank Lokal
          </text>

          <motion.g
            animate={reduceMotion ? { x: 0 } : { x: [0, travel] }}
            transition={horizontalLoop}
          >
            <circle cx={startX} cy="108" r="8" fill={BASE_BLUE} />
            <rect
              x={startX + 16}
              y="92"
              width="230"
              height="32"
              rx="10"
              fill="rgba(185, 156, 255, 0.14)"
              stroke={BRAND_PURPLE}
            />
            <text
              x={startX + 131}
              y="112"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="400"
              fill={BLACK}
            >
              Jaminan terkunci (onchain)
            </text>
          </motion.g>

          <motion.g
            animate={reduceMotion ? { x: travel } : { x: [travel, 0] }}
            transition={
              horizontalLoop ? { ...horizontalLoop, delay: duration / 2 } : undefined
            }
          >
            <circle cx={startX} cy="172" r="8" fill={BASE_BLUE} />
            <rect
              x={startX - 244}
              y="156"
              width="230"
              height="32"
              rx="10"
              fill="rgba(0, 82, 255, 0.10)"
              stroke={BASE_BLUE}
            />
            <text
              x={startX - 129}
              y="176"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="400"
              fill={BLACK}
            >
              Pelunasan - buka jaminan
            </text>
          </motion.g>

          <motion.g
            animate={reduceMotion ? { opacity: 1 } : { opacity: [0.55, 1, 0.55] }}
            transition={pulseLoop ? { ...pulseLoop, delay: duration / 3 } : undefined}
          >
            <rect
              x="486"
              y="36"
              width="170"
              height="34"
              rx="10"
              fill="rgba(0, 82, 255, 0.10)"
              stroke={BASE_BLUE}
            />
            <text
              x="571"
              y="53"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="400"
              fill={BLACK}
            >
              Transfer IDR (manual)
            </text>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}

