import styles from './header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (!isHome) return; // 只在首頁執行

    const hero = document.querySelector('#hero-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, [isHome]);

  const headerClass = isHome
    ? `${styles.header} ${styles.transparent} ${showHeader ? styles.visible : styles.hidden}`
    : `${styles.header} ${styles.colored}`;

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <img src="/images/logo.png" alt="logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>首頁</Link>
          <Link href="/products" className={styles.navLink}>商品</Link>
          <Link href="/blog" className={styles.navLink}>種植日記</Link>
          <Link href="/about" className={styles.navLink}>關於我們</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
