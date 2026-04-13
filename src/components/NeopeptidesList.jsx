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
    <section id="neopeptides-section" style={{ padding: '20px 0', scrollMarginTop: '100px' }}>
      <div className="container">
        <div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.5rem', color: '#ffffff', textTransform: 'none' }}>
            Neopeptides
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Nova geração de peptídeos para pesquisa avançada</p>
          <div className="cards-grid-4" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {products.map(p => <ProductCard key={p.id} product={p} sectionLabel="Neopeptides" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeopeptidesList;
