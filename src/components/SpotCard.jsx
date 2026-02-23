import React from 'react';

export default function SpotCard({ spot, index }) {
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${spot.googleMapQuery}`;

  return (
    <article className="spot-card">
      <div className="spot-card-header">
        <span className="spot-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="spot-emoji">{spot.emoji}</span>
        <div className="spot-name-wrap">
          <h3 className="spot-name-jp">{spot.nameJp}</h3>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="spot-sparkle"
              style={{
                left: `${[0, 100, 50, -5, 95][i]}%`,
                top: `${[10, 20, -15, 55, 65][i]}%`,
                animationDelay: `${(i * 0.3).toFixed(2)}s`,
                animationDuration: `${1.2 + (i % 3) * 0.4}s`,
              }}
            />
          ))}
        </div>
        <p className="spot-name-en">{spot.nameEn}</p>
      </div>

      <div className="spot-card-body">
        <p className="spot-description">{spot.description}</p>

        <div className="spot-info-bar">
          {spot.info.map((item, i) => (
            <div key={i} className="spot-info-item">
              <span className="spot-info-icon">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        <div className="reviews-title">⭐ みんなの口コミ</div>
        <div className="reviews-grid">
          {spot.reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
              </div>
              <p className="review-text">{review.text}</p>
              <p className="review-author">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="spot-actions">
          <a
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-btn-map"
          >
            📍 Google Mapで見る
          </a>
          {spot.website && (
            <a
              href={spot.website}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-web"
            >
              🌐 公式サイト
            </a>
          )}
        </div>

        {spot.youtubeId && (
          <div className="youtube-container">
            <iframe
              src={`https://www.youtube.com/embed/${spot.youtubeId}`}
              title={`${spot.nameJp}の動画`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </article>
  );
}
