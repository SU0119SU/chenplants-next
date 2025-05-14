import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}>© 2020 chenplants</p>
        <p className={styles.contact}>
          聯絡信箱：<a href="mailto:info@chenplants.co">chenplants@gmail.com</a> ｜  
          IG：<a href="https://www.instagram.com/thecp.co/" target="_blank" rel="noreferrer"> thecp.co </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
