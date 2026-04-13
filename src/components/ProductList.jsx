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
    <section id="peptideos" style={{ padding: '0 0 20px', scrollMarginTop: '100px' }}>
      <div className="container">
        <div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.5rem', textTransform: 'none' }}>
            Produtos Em Destaque
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Peptídeos mais procurados para pesquisa científica</p>
          <div className="cards-grid-4" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {products.map(p => <ProductCard key={p.id} product={p} sectionLabel="Destaque" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
