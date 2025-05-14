import Header from '@/components/Header';  
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero';
import ProductSectionHome from '@/components/ProductSectionHome';
import BlogSectionHome from '@/components/BlogSectionHome';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.wrapper}>
        <section className={styles.section}>
          <ProductSectionHome />
        </section>
        <section className={styles.section}>
          <BlogSectionHome />
        </section>
      </main>
      <Footer />
    </div>
  );
}
