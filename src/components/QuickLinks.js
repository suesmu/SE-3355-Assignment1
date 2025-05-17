'use client';
import React, { useEffect, useState } from 'react';

export default function QuickLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('/api/quicklinks')
      .then(res => res.json())
      .then(data => setLinks(data));
  }, []);

  return (
   <div className="flex flex-wrap justify-center gap-6 my-10">
  {links.map(link => (
    <a
      key={link.id}
      href={link.url}
      className="w-[150px] h-[150px] flex flex-col items-center justify-center bg-white rounded-xl shadow hover:scale-105 transition-transform p-4"
    >
      <img
        src={link.image}
        alt={link.title}
        className="w-40 h-40 object-contain mb-2"
      />
      <p className="text-center text-[15px] font-semibold text-gray-800">
        {link.title}
      </p>
    </a>
  ))}
</div>

  );
}

