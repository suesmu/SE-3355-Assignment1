'use client';
import { useSelector } from 'react-redux';

export default function GezilenUrunler() {
  const gezilenler = useSelector(state => state.visited);

  if (gezilenler.length === 0) return null;

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Geçmişte Göz Attıkların</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        {gezilenler.map(item => (
          <div
            key={item.id}
            className="border rounded-lg p-3 bg-white shadow hover:scale-105 transition-transform duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="font-bold">{item.price} TL</p>
          </div>
        ))}
      </div>
    </div>
  );
}
