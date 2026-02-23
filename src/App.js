import React from 'react';
import Hero from './components/Hero';
import SpotCard from './components/SpotCard';
import Footer from './components/Footer';
import { spots } from './data/spots';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Hero />
      <main className="spots-section">
        <h2 className="section-title">
          <span className="title-icon">📍</span>
          行きたいところ
        </h2>
        <div className="spots-container">
          {spots.map((spot, index) => (
            <SpotCard key={spot.id} spot={spot} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
