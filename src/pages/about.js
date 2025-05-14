import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/about.module.scss';

export default function About() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '100px 1rem 2rem' }} className={styles.wrapper}>
        <h1>關於我們</h1>
        <p>
          我們是來自台灣的植物愛好者團隊，熱愛自然、設計與綠意生活。
          品牌「chenplants」致力於提供高品質觀葉植物，讓你在生活中感受到療癒與寧靜。
        </p>
        <p>
          無論你是城市中的植物新手，還是室內景觀設計的愛好者，我們希望成為你打造綠色空間的好夥伴。
        </p>

        <h2 className={styles.sectionTitle}>聯絡我們</h2>
        <p>📩 信箱：<a href="mailto:info@chenplants.co">info@chenplants.co</a></p>
        <p>📷 Instagram：<a href="https://instagram.com/chenplants" target="_blank" rel="noreferrer">@chenplants</a></p>
      </main>
      <Footer />
    </div>
  );
}
