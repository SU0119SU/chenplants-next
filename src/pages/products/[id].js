import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import styles from '@/styles/ProductDetail.module.scss'

export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true) 
  useEffect(() => {
    if (!id) return
    async function fetchProduct() {
      setIsLoading(true) 
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('載入錯誤:', error)
        setProduct(null)
      } else {
        setProduct(data)
      }
      setIsLoading(false) 
    }

    fetchProduct()
  }, [id])

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.detailWrapper}>
        {isLoading ? (
          <p>載入中...</p> 
        ) : !product ? (
          <>
            <h1>找不到這個商品 😢</h1>
            <p><a href="/products">← 返回商品列表</a></p>
          </>
        ) : (
          <div className={styles.detailContainer}>
            <div className={styles.imageArea}>
              <img src={product.image_url} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.infoArea}>
              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.price}>NT$ {product.price}</p>
              <p className={styles.description}>
                {product.description || '這是詳細介紹內容'}
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
