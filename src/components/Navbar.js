'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">KARACA</div>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul ref={menuRef} className={`menu ${isOpen ? 'open' : ''}`}>
          <li>
            Sofra
            <ul className="submenu">
              <li>Yemek Takımları</li>
              <li>Kahvaltı Takımı</li>
              <li>Servis Sunum</li>
            </ul>
          </li>
          <li>
            Mutfak
            <ul className="submenu">
              <li>Pişirme</li>
              <li>Saklama Düzenleme</li>
              <li>İçecek Hazırlama</li>
            </ul>
          </li>
          <li>Küçük Ev Aletleri</li>
          <li>Ev ve Yaşam</li>
          <li>Gıda</li>
          <li>Çeyiz Seti</li>
          <li>Çok Satan</li>
          <li>İndirimli Ürünler</li>
          <li>Markalar</li>
        </ul>
      </nav>
      <div className="gradient-bar"></div>
    </>
  );
}
