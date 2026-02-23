import React from "react";

/* 熱帯バナナリーフ SVG — 4種類のバリエーション */

export function Leaf1({ className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110 310 C60 260 10 180 20 100 C30 30 90 5 110 10 C130 5 190 30 200 100 C210 180 160 260 110 310Z"
        fill="url(#leaf1grad)"
        opacity="0.9"
      />
      <path
        d="M110 310 L110 10"
        stroke="rgba(0,80,0,0.5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* 葉脈 */}
      {[40, 80, 120, 160, 200, 240, 280].map((y, i) => (
        <path
          key={i}
          d={`M110 ${y} Q${80 - i * 3} ${y - 15} ${50 - i * 2} ${y + 5}`}
          stroke="rgba(0,100,0,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      {[40, 80, 120, 160, 200, 240, 280].map((y, i) => (
        <path
          key={i + 10}
          d={`M110 ${y} Q${140 + i * 3} ${y - 15} ${170 + i * 2} ${y + 5}`}
          stroke="rgba(0,100,0,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      <defs>
        <linearGradient id="leaf1grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a5c2a" />
          <stop offset="50%" stopColor="#2d8c3e" />
          <stop offset="100%" stopColor="#1a4a20" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Leaf2({ className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 100 C30 30 120 5 200 20 C260 35 275 80 270 100 C265 120 230 170 150 185 C80 198 -10 170 10 100Z"
        fill="url(#leaf2grad)"
        opacity="0.88"
      />
      <path
        d="M10 100 L270 100"
        stroke="rgba(0,80,0,0.5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[60, 100, 140, 180, 220].map((x, i) => (
        <path
          key={i}
          d={`M${x} 100 Q${x + 5} ${70 - i * 2} ${x + 20} ${55}`}
          stroke="rgba(0,100,0,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      {[60, 100, 140, 180, 220].map((x, i) => (
        <path
          key={i + 10}
          d={`M${x} 100 Q${x + 5} ${130 + i * 2} ${x + 20} ${148}`}
          stroke="rgba(0,100,0,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      <defs>
        <linearGradient id="leaf2grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f3d1a" />
          <stop offset="50%" stopColor="#1e6b2e" />
          <stop offset="100%" stopColor="#145224" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Leaf3({ className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 大きな熱帯リーフ (モンステラ風) */}
      <path
        d="M100 290 C40 240 5 160 15 80 C25 20 70 0 100 5 C130 0 175 20 185 80 C195 160 160 240 100 290Z"
        fill="url(#leaf3grad)"
        opacity="0.85"
      />
      {/* 切り込み（モンステラらしさ） */}
      <path
        d="M60 120 C50 110 45 95 55 88 C50 95 60 105 70 108Z"
        fill="#0f0f1a"
        opacity="0.7"
      />
      <path
        d="M140 120 C150 110 155 95 145 88 C150 95 140 105 130 108Z"
        fill="#0f0f1a"
        opacity="0.7"
      />
      <path
        d="M100 290 L100 5"
        stroke="rgba(0,90,0,0.5)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="leaf3grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b5e20" />
          <stop offset="50%" stopColor="#388e3c" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Leaf4({ className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 260 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 細長い熱帯草 */}
      <path
        d="M130 170 C80 130 5 90 10 40 C15 5 60 0 100 15 C120 23 135 40 130 170Z"
        fill="url(#leaf4agrad)"
        opacity="0.88"
      />
      <path
        d="M130 170 C180 130 255 90 250 40 C245 5 200 0 160 15 C140 23 125 40 130 170Z"
        fill="url(#leaf4bgrad)"
        opacity="0.85"
      />
      <path
        d="M130 170 L130 20"
        stroke="rgba(0,80,0,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="leaf4agrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a5c2a" />
          <stop offset="100%" stopColor="#0d3318" />
        </linearGradient>
        <linearGradient id="leaf4bgrad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#145224" />
        </linearGradient>
      </defs>
    </svg>
  );
}
