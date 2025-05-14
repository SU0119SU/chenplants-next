import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './ProductGrid.module.scss';
import ProductCard from '@/components/ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      console.log('📦 撈到的資料：', data); //
      if (error) {
        console.error('❌ Supabase 錯誤：', error);
        setError('無法載入商品，請稍後再試。');
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p className={styles.status}>載入中...</p>;
  if (error) return <p className={styles.status}>{error}</p>;
  if (products.length === 0) return <p className={styles.status}>目前沒有商品。</p>;

  return (
    <section className={styles.gridWrapper}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
