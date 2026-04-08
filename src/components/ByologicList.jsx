import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Auto-load all images from src/assets/byologic
const imageModules = import.meta.glob('../assets/byologic/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const productMeta = {
  // Add per-file metadata here, e.g.:
  // 'NomeDoArquivo': { price: 'R$199,90', description: '...' },
};

const products = Object.entries(imageModules).map(([path, src], i) => {
  const filename = path.split('/').pop().replace(/\.[^.]+$/, '');
  const [rawName, rawPrice] = filename.split('+');
  const name = rawName.trim();
  const meta = productMeta[name] || {};
  const price = rawPrice
    ? `R$${rawPrice.trim().replace('.', ',')}`
    : meta.price || 'R$199,90';
  return {
    id: i + 1,
    name,
    description: meta.description || 'Produto BYOLOGIC para pesquisa',
    price,
    img: src,
  };
});

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [zoom, setZoom] = useState(false);
  const addToCart = (e) => { e.stopPropagation(); addItem(product); navigate('/purchase'); };
  const closeZoom = (e) => { e.stopPropagation(); setZoom(false); };

  return (
    <React.Fragment>
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 0 0 1px #96e348, 0 0 25px rgba(150, 227, 72, 0.45)' }}
        onClick={() => setZoom(true)}
        style={{
          backgroundColor: '#0a0a0a',
          border: 'none',
          borderRadius: '4px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'zoom-in',
          overflow: 'hidden',
        }}
      >
        <div style={{
          height: '255px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.85rem',
          backgroundColor: '#000',
          border: '1px solid #1a1a1a',
          borderRadius: '3px',
        }}>
          <img
            src={product.img}
            alt={product.name}
            style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain' }}
          />
        </div>

        <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', marginBottom: '0.35rem', textTransform: 'none', letterSpacing: 0, lineHeight: 1.1, wordBreak: 'break-word', minHeight: '1rem' }}>
          {product.name}
        </h3>
        <p style={{ color: '#666', fontSize: '0.65rem', marginBottom: '0.75rem', lineHeight: 1.35, wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '1.75rem' }}>
          {product.description}
        </p>
        <div style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--neon)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
          {product.price}
        </div>
        <button
          onClick={addToCart}
          style={{
            width: '100%',
            padding: '0.6rem',
            color: 'black',
            backgroundColor: 'var(--neon)',
            border: 'none',
            fontWeight: 900,
            fontSize: '0.65rem',
            borderRadius: '2px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginTop: 'auto',
          }}
        >
          Adicionar ao carrinho
        </button>
      </motion.div>

      {zoom && (
        <div
          onClick={closeZoom}
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, cursor: 'zoom-out'
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '500px', height: '500px', backgroundColor: '#fff', padding: '1rem' }}>
            <button
              type="button"
              onClick={closeZoom}
              aria-label="Fechar"
              style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', color: 'var(--neon)', cursor: 'pointer', display: 'flex' }}
            >
              <X size={24} />
            </button>
            <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const ByologicList = () => {
  return (
    <section id="byologic" style={{ padding: '60px 0', scrollMarginTop: '100px' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
          padding: '1.5rem',
          borderRadius: '6px',
        }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.53rem', color: '#ffffff' }}>
            BYOLOGIC
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

export default ByologicList;
