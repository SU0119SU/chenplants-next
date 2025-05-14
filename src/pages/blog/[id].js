import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/BlogDetail.module.scss'; 

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .eq('id', id)
        .single();
      if (!error) setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div>
        <Header />
        <main className={styles.container}>
          <p>文章載入中...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>{new Date(post.created_at).toLocaleDateString()}</p>
        <img src={post.image_url} alt={post.title} className={styles.image} />
        <p className={styles.article}>{post.article}</p>
      </main>
      <Footer />
    </div>
  );
}
