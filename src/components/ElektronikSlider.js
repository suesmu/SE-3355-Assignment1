'use client';
import React, { useEffect, useState } from 'react';

export default function TechDealsSlider() {
  const [deals, setDeals] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/api/electronics')
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % deals.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [deals]);

  if (deals.length === 0) return null;

  const currentDeal = deals[index];

  return (
      <div style={{ marginTop: '40px' }}>
    <h2 style={{
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center'
    }}
    >
      Haftanın Fırsatları
    </h2>

    
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        padding: '20px',
        width: '100%',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href={currentDeal.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#111',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src={currentDeal.image}
          alt={currentDeal.title}
          style={{
            maxWidth: '100%',
            maxHeight: '240px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
        <p
          style={{
            fontSize: '18px',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '1.4',
          }}
        >
          {currentDeal.title}
        </p>
      </a>
    </div>
  </div>
);
}
