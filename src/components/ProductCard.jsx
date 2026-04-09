import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, variant = 'dark' }) => {
  const { addItem } = useCart();
  const [zoom, setZoom] = useState(false);
  const [slide, setSlide] = useState(0);
  const images = product.images || [product.img];
  const total = images.length;
  const current = images[slide];

  const addToCart = (e) => {
    e.stopPropagation();
    addItem({ ...product, img: current });
  };
  const prev = (e) => { e.stopPropagation(); setSlide((s) => (s - 1 + total) % total); };
  const next = (e) => { e.stopPropagation(); setSlide((s) => (s + 1) % total); };
  const closeZoom = (e) => { e.stopPropagation(); setZoom(false); };

  const isLight = variant === 'light';

  return (
    <React.Fragment>
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 0 0 1px #96e348, 0 0 25px rgba(150, 227, 72, 0.45)' }}
        onClick={() => setZoom(true)}
        style={{
          backgroundColor: isLight ? '#ffffff' : '#0a0a0a',
          border: isLight ? '1px solid #e5e5e5' : 'none',
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
          backgroundColor: isLight ? '#f5f5f5' : '#000',
          borderRadius: '3px',
          position: 'relative',
        }}>
          <img
            src={current}
            alt={product.name}
            style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain' }}
          />
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                style={carouselArrowStyle('left')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima"
                style={carouselArrowStyle('right')}
              >
                <ChevronRight size={18} />
              </button>
              <div style={{
                position: 'absolute',
                bottom: '6px',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: '4px',
              }}>
                {images.map((_, i) => (
                  <span key={i} style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: i === slide ? 'var(--neon)' : '#555',
                  }} />
                ))}
              </div>
            </>
          )}
        </div>

        <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: isLight ? '#0a0a0a' : 'white', marginBottom: '0.35rem', textTransform: 'none', letterSpacing: 0, lineHeight: 1.1, wordBreak: 'break-word', minHeight: '1rem' }}>
          {product.name}
        </h3>
        <p style={{ color: isLight ? '#777' : '#666', fontSize: '0.65rem', marginBottom: '0.75rem', lineHeight: 1.35, wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '1.75rem' }}>
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
            borderRadius: '8px',
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
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '500px', height: '500px', backgroundColor: isLight ? '#fff' : 'var(--surface)', padding: '1rem' }}>
            <button
              type="button"
              onClick={closeZoom}
              aria-label="Fechar"
              style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', color: 'var(--neon)', cursor: 'pointer', display: 'flex' }}
            >
              <X size={24} />
            </button>
            <img src={current} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const carouselArrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '6px',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.6)',
  color: 'var(--neon)',
  border: 'none',
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default ProductCard;
