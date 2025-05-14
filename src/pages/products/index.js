import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 1rem 2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>全部商品</h1>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
