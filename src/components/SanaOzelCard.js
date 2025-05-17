'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SanaOzelCard() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/recommendations')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  
  const renderStars = (rating) => {
    const filled = Math.floor(rating);
    const half = rating - filled >= 0.5 ? 1 : 0;
    const empty = 5 - filled - half;
    return '★'.repeat(filled) +  '☆'.repeat(empty);
  };

 return (
  <div className="px-4 py-6">
    <h2 className="text-xl font-bold mb-4">Sana Özel Ürünler</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(item => (
        <div
          key={item.id}
          onClick={() => router.push(`/products/${item.id}`)}
          className="bg-white rounded-lg shadow-md p-3 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-contain mb-2"
          />
          <h3 className="text-sm font-semibold mb-1 line-clamp-2">{item.title}</h3>
          <p className="text-yellow-500 text-sm mb-1">
            {renderStars(item.rating)} <span className="text-gray-600">({item.rating})</span>
          </p>
          <p className="font-bold">{item.price} TL</p>
        </div>
      ))}
    </div>
  </div>
);

}
