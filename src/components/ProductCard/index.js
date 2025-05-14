import styles from './ProductCard.module.scss';
import Link from 'next/link';

export default function ProductCard({ id, name, image_url, price }) {
  return (
    <article className={styles.card}>
      <img src={image_url} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>NT$ {price}</p>
        <Link href={`/products/${id}`} className={styles.link}>查看商品 →</Link>
      </div>
    </article>
  );
}
