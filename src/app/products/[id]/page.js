import db from '@/lib/db';
import ProductDetailClient from '@/components/ProductDetailsClient';

export default function ProductDetailPage({ params }) {
  const id = Number(params.id);
  const item = db.prepare('SELECT * FROM sanaOzel WHERE id = ?').get(id);

  if (!item) return <div>Ürün bulunamadı 😔</div>;

  return <ProductDetailClient item={item} />;
}
