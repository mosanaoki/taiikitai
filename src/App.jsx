import React from 'react';
import Hero from './components/Hero';
import SpotCard from './components/SpotCard';
import Footer from './components/Footer';
import { Leaf1, Leaf2, Leaf3, Leaf4 } from './components/LeafDeco';
import { spots } from './data/spots';
import './App.css';

/* スポットカードの間に差し込む葉っぱ装飾 */
const leafPattern = [
  // { position: 'left' | 'right', component, floatClass }
  { side: 'right', Component: Leaf1, float: 'deco-float-2', rotate: '-20deg' },
  { side: 'left',  Component: Leaf3, float: 'deco-float-4', rotate: '15deg' },
  { side: 'right', Component: Leaf2, float: 'deco-float-1', rotate: '-10deg' },
  { side: 'left',  Component: Leaf4, float: 'deco-float-3', rotate: '25deg' },
  { side: 'right', Component: Leaf3, float: 'deco-float-2', rotate: '-30deg' },
  { side: 'left',  Component: Leaf1, float: 'deco-float-4', rotate: '10deg' },
  { side: 'right', Component: Leaf4, float: 'deco-float-1', rotate: '-15deg' },
  { side: 'left',  Component: Leaf2, float: 'deco-float-3', rotate: '20deg' },
  { side: 'right', Component: Leaf1, float: 'deco-float-2', rotate: '-25deg' },
];

export default function App() {
  return (
    <div className="app">
      <Hero />

      {/* spots-section 全体を相対ポジションで包む */}
      <div className="spots-wrapper">

        {/* セクションタイトル横にも葉っぱ */}
        <div className="section-leaf section-leaf--left">
          <Leaf2 className="leaf-svg deco-float-3" style={{ width: 120, opacity: 0.55 }} />
        </div>
        <div className="section-leaf section-leaf--right">
          <Leaf4 className="leaf-svg deco-float-1" style={{ width: 100, opacity: 0.5 }} />
        </div>

        <main className="spots-section">
          <h2 className="section-title">
            <span className="title-icon">📍</span>
            行きたいところ
          </h2>
          <div className="spots-container">
            {spots.map((spot, index) => {
              const leaf = leafPattern[index % leafPattern.length];
              const { Component, float: floatCls, rotate, side } = leaf;
              return (
                <div key={spot.id} className="spot-card-wrapper">
                  {/* カード左右に葉っぱ */}
                  <div
                    className={`card-leaf card-leaf--${side}`}
                    aria-hidden="true"
                  >
                    <Component
                      className={`leaf-svg ${floatCls}`}
                      style={{
                        width: side === 'left' ? 130 : 110,
                        transform: `rotate(${rotate})`,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                  <SpotCard spot={spot} index={index} />
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
