'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVisited } from '@/redux/visitedSlice';

export default function ProductDetailClient({ item }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      dispatch(addVisited(item));
    }
  }, [item, dispatch]);

  const renderStars = (rating) => {
    const filled = Math.floor(rating);
    const empty = 5 - filled;
    return '★'.repeat(filled) + '☆'.repeat(empty);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>{item.title}</h1>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: '400px', height: '400px', objectFit: 'contain' }}
      />
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        <strong>Fiyat:</strong> {item.price} TL
      </p>
      <p style={{ fontSize: '18px' }}>
        <strong>Puan:</strong> {renderStars(item.rating)} ({item.rating})
      </p>
    </div>
  );
}
