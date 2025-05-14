// components/ProductSectionHome.js
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './ProductSectionHome.module.scss';

function ProductSectionHome() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_popular', true)  // 只抓精選商品
        .limit(3);               // 顯示最多三筆
      if (!error) {
        setFeatured(data);
      } else {
        console.error('❌ 錯誤：', error);
      }
    };

    fetchFeatured();
  }, []);

  if (featured.length === 0) return null;

  return (
    <section className={styles.productSection}>
      <h2 className={styles.title}>熱門植物精選</h2>
      <div className={styles.cardGrid}>
        {featured.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={item.image_url} alt={item.name} className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>NT$ {item.price}</p>
              <a href={`/products/${item.id}`} className={styles.cta}>
                查看商品
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSectionHome;
