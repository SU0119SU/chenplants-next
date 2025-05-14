import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './BlogSectionHome.module.scss';

export default function BlogSectionHome() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      if (!error) {
        setFeaturedPosts(data);
      } else {
        console.error('❌ 文章載入錯誤：', error);
      }
    };

    fetchPosts();
  }, []);

  if (featuredPosts.length === 0) return null;

  return (
    <section className={styles.blogSection}>
      <h2 className={styles.title}>植物知識小教室</h2>
      <div className={styles.carousel}>
        {featuredPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={post.image_url} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.date}>
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              <p className={styles.excerpt}>
                {post.article.slice(0, 60)}...
              </p>
              <a href={`/blog/${post.id}`} className={styles.cta}>閱讀更多</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
