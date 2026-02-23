import React from 'react';

export default function Hero() {
  const scrollToSpots = () => {
    document.querySelector('.spots-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">🇹🇭 THAILAND TRIP 2026</div>
        <h1 className="hero-title">タイ旅行</h1>
        <p className="hero-subtitle">
          男3人で行く、忘れられないバンコク＆アユタヤの旅
        </p>
        <div className="hero-travel-image">
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
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
