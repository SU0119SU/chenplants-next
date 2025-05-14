import styles from './BlogCard.module.scss';
import Link from 'next/link';

export default function BlogCard({ id, title, date, excerpt, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={`/blog/${id}`} className={styles.readMore}>閱讀更多 →</Link>
      </div>
    </article>
  );
}
