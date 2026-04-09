import React from 'react';
import ProductCard from './ProductCard';
import { buildProducts } from '../utils/productParser';

const imageModules = import.meta.glob('../assets/produtos em destaque/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const products = buildProducts(imageModules, 'Peptídeo para pesquisa científica');

const ProductList = () => {
  return (
    <section id="peptideos" style={{ padding: '0 0 100px', scrollMarginTop: '100px' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
          padding: '1.5rem',
          borderRadius: '6px',
        }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.377rem', textTransform: 'none' }}>
            Produtos Em Destaque
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
