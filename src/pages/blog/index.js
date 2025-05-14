import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/blog.module.scss';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>種植日記</h1>
        <div className={styles.list}>
          {posts.map((post) => (
            <a key={post.id} href={`/blog/${post.id}`} className={styles.cardLink}>
              <article className={styles.card}>
                <img src={post.image_url} alt={post.title} className={styles.image} />
                <div className={styles.content}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.createdAt}>{new Date(post.created_at).toLocaleDateString()}</p>
                  <p className={styles.article}>{post.article.slice(0, 100)}...</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
