import React from 'react';
import ProductCard from './ProductCard';
import { buildProducts } from '../utils/productParser';

const imageModules = import.meta.glob('../assets/neopeptides/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const products = buildProducts(imageModules, 'Produto Neopeptides para pesquisa');

const NeopeptidesList = () => {
  return (
    <section id="neopeptides-section" style={{ padding: '60px 0', scrollMarginTop: '100px' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
          padding: '1.5rem',
          borderRadius: '6px',
        }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '1.53rem', color: '#ffffff' }}>
            NEOPEPTIDES
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

export default NeopeptidesList;
