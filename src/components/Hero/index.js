import styles from './hero.module.scss';
import Link from 'next/link';


function Hero() {
  return (
    <section className={styles.hero} id="hero-section">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>打造你的綠意生活</h2>
        <p className={styles.subtitle}>探索最美的植物與設計靈感</p>
        <Link href="/products" className={styles.cta}>立即選購</Link>
      </div>
    </section>
  );
}

export default Hero;
