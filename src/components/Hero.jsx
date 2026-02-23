import React from "react";
import { Leaf1, Leaf2, Leaf3, Leaf4 } from "./LeafDeco";

export default function Hero() {
  const scrollToSpots = () => {
    document
      .querySelector(".spots-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* 背景 */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      {/* ネオンライト演出 */}
      <div className="hero-neon hero-neon--pink" />
      <div className="hero-neon hero-neon--purple" />
      <div className="hero-neon hero-neon--blue" />

      {/* パーティクル (光の粒) */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className={`particle particle--${i % 6}`}
            style={{
              left: `${5 + ((i * 53) % 90)}%`,
              top: `${10 + ((i * 37) % 75)}%`,
              animationDelay: `${(i * 0.4).toFixed(1)}s`,
            }}
          />
        ))}
      </div>

      {/* 葉っぱ装飾 四隅 */}
      <div className="hero-leaf hero-leaf--left-top">
        <Leaf1 className="leaf-svg deco-float-1" />
      </div>
      <div className="hero-leaf hero-leaf--right-top">
        <Leaf2 className="leaf-svg deco-float-2" />
      </div>
      <div className="hero-leaf hero-leaf--right-bottom">
        <Leaf3 className="leaf-svg deco-float-3" />
      </div>
      <div className="hero-leaf hero-leaf--left-bottom">
        <Leaf4 className="leaf-svg deco-float-4" />
      </div>

      {/* メインコンテンツ */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          🇹🇭 THAILAND TRIP 2026
        </div>
        <h1 className="hero-title">タイ旅行</h1>
        <p className="hero-subtitle">- アユタヤ遺跡で消えた３人の男たち -</p>

        {/* ネオンラインアクセント */}
        <div className="hero-neon-line" />

        <div className="hero-travel-image">
          <div className="hero-travel-image-glow" />
          <img
            src="https://c6tnazhe5wzuantf.public.blob.vercel-storage.com/elephant.webp"
            alt="楽しそうに旅行する3人の男性"
          />
        </div>
      </div>

      <div className="hero-scroll" onClick={scrollToSpots}>
        スクロールして旅のしおりを見る
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}
