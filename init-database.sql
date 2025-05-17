DROP TABLE IF EXISTS quicklinks;

CREATE TABLE quicklinks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  url TEXT NOT NULL
);

INSERT INTO quicklinks (title, image, url) VALUES
('2 Al 1 Öde', 'https://r.resimlink.com/Yf12qWn_NA0R.webp', 'https://www.karaca.com/1-alana-1-bedava-urunler'),
('Birlikte Al Kazan', 'https://r.resimlink.com/2Y0DNyf-q1xG.webp', 'https://www.karaca.com/hediyesiyle-gelen-urunler'),
('Hediye', 'https://r.resimlink.com/dmPE2f6zcb.webp', 'https://www.karaca.com/hediye-lp'),
('Sadece Karacada', 'https://r.resimlink.com/z4kGK.webp', 'https://www.karaca.com/sadece-karacada-urunler'),
('Emsan', 'https://r.resimlink.com/jTwFPU4iqW9Z.webp', 'https://www.karaca.com/marka/emsan'),
('Nespresso', 'https://r.resimlink.com/bZ6aFp.webp', 'https://www.karaca.com/marka/nespresso'),
('Shark', 'https://r.resimlink.com/2eBgz4.webp', 'https://www.karaca.com/shark-detect-pro'),
('Tarifler', 'https://r.resimlink.com/D5kywQZnOeM.webp', 'https://www.karaca.com/karaca-ile-tarifler');



-
DROP TABLE IF EXISTS slider;

CREATE TABLE slider (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  link TEXT DEFAULT '/'
);


INSERT INTO slider (title, image, link) VALUES
('Yaza Yakışan Fırsatlar Evinizde',
  'https://r.resimlink.com/f7Wdztrk.webp',
  'https://www.karaca.com'),

('Yazın En Şık Hali Marine Serisi',
  'https://r.resimlink.com/gQwkaSs3q_.webp',
  'https://www.karaca.com'),

('2 Al 1 Ödeye Ek %15 İndirim',
  'https://r.resimlink.com/oCJNZjEgvkKc.webp',
  'https://www.karaca.com'),

('Yazın Ruhu Sofranızda 2 Al 1 Öde',
  'https://r.resimlink.com/2SDoJczpG.webp',
  'https://www.karaca.com/'),

('Hediyesiyle Gelen Ürünler',
  'https://r.resimlink.com/Nj2DAV.webp',
  'https://www.karaca.com/'),

('Nevresim Takımı',
  'https://r.resimlink.com/2eqJWMcE-1.webp',
  'https://www.karaca.com/'),

('171 Parça Çeyiz Paketi',
  'https://r.resimlink.com/pw421sYGm.webp',
  'https://www.karaca.com'),

('Yenilikçi Tasarımlar',
  'https://r.resimlink.com/jgGFE9.webp',
  'https://www.karaca.com'),

('Mutfak Favorileri',
  'https://r.resimlink.com/SoqivtTdfB1y.webp',
  'https://www.karaca.com'),

('Konfor',
  'https://r.resimlink.com/QNavnFX.webp',
  'https://www.karaca.com');


DROP TABLE IF EXISTS electronics;

CREATE TABLE electronics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  link TEXT NOT NULL
);

INSERT INTO electronics (title, image, link) VALUES
('Yemek Takımları 799,99 TLden Başlayan Fiyatlar',
 'https://r.resimlink.com/N_5br0.webp',
 'https://www.karaca.com/yemek-takimlari'),

('Tencere Setleri 1099 TLden Başlayan Fiyatlar',
 'https://r.resimlink.com/aP_O0qrgUIc.webp',
 'https://www.karaca.com/tencere-seti'),

('Çatal Kaşık Bıçak Takımları 699,99 TLden Başlayan Fiyatlar',
 'https://r.resimlink.com/MxyzR-w4B1i.webp',
 'https://www.karaca.com/catal-kasik-bicak-takimlari');





DROP TABLE IF EXISTS sanaOzel;

CREATE TABLE sanaOzel (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  price REAL NOT NULL,
  rating REAL NOT NULL
);


INSERT INTO sanaOzel (title, image, price, rating) VALUES
('Smoothie Blender', 'https://r.resimlink.com/lDUsA8fr3.jpg', 17990, 4.5),
('Kahvaltılık Takımı', 'https://r.resimlink.com/LifDJH_.webp', 1482.45, 4.2),
('Çift Kişilik Nevresim Takımı', 'https://r.resimlink.com/Kg8EAW5I.webp', 709.99, 3.8),
('Servis Seti Mavi', 'https://r.resimlink.com/97JGI8R4yrPj.jpg', 546.75, 4.9),
('Pilav/Karnıyarık Tencere', 'https://r.resimlink.com/n_-bY4CyBdRe.webp', 3499, 4.4),
('Otomatik Türk Kahve Makinesi', 'https://r.resimlink.com/oZyJhPmr.webp', 1450, 4.7),
('Izgara ve Tost Makinesi', 'https://r.resimlink.com/DGxkJ95u3.webp', 3280, 4.6),
('Moplu Robot Süpürge', 'https://r.resimlink.com/XB7RK3.webp', 19995, 4.3),
('Çift Kollu Hamur Yoğurma Makinesi', 'https://r.resimlink.com/QDUMosA3vj6.webp', 800, 4.1),
('Buhar Kazanlı Ütü', 'https://r.resimlink.com/eX-IK3.webp', 2379, 4.8),
('Geniş Hazne Airfryer 9L', 'https://r.resimlink.com/TYyAm9.webp', 2915, 4.0),
('Makyaj Düzenleyici Takı Kutusu', 'https://r.resimlink.com/Cc_e-AMgPN.webp', 500.99, 4.5);
