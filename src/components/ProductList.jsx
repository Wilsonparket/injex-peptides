import React, { useState } from 'react';
import { ShoppingCart, Heart, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const BASE = import.meta.env.BASE_URL;

const products = [
  { id: 1, name: 'BPC-157', price: 'R$199,90', category: 'Regeneração', img: `${BASE}BPC-157.png`, tag: 'Mais vendido' },
  { id: 2, name: 'KLOW', price: 'R$199,90', category: 'Otimização', img: `${BASE}KLOW.png`, tag: 'New' },
  { id: 3, name: 'MOTS-c', price: 'R$199,90', category: 'Energia', img: `${BASE}MOTS-c.png`, tag: 'Limited' },
  { id: 4, name: 'GHK-Cu', price: 'R$199,90', category: 'Estética', img: `${BASE}GHK-cu.jpeg`, tag: 'Limited' },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [zoom, setZoom] = useState(false);
  const goToCheckout = () => { addItem(product); navigate('/purchase'); };
  const addToCart = (e) => { e.stopPropagation(); addItem(product); navigate('/purchase'); };
  const openZoom = (e) => { e.stopPropagation(); setZoom(true); };
  const closeZoom = (e) => { e.stopPropagation(); setZoom(false); };
  return (
  <React.Fragment>
  <motion.div
    whileHover={{ y: -10 }}
    onClick={() => setZoom(true)}
    style={{
      backgroundColor: 'var(--surface)',
      position: 'relative',
      padding: '1.5rem',
      overflow: 'hidden',
      cursor: 'zoom-in'
    }}
  >
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'var(--neon)',
      color: 'black',
      padding: '4px 12px',
      fontSize: '0.75rem',
      fontWeight: 900,
      zIndex: 2,
      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
    }}>
      {product.tag}
    </div>
    
    <div
      onClick={(e) => { e.stopPropagation(); goToCheckout(); }}
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 2,
        cursor: 'pointer'
      }}
    >
      <Heart size={20} className="text-neon" />
    </div>

    <div style={{
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(150, 227, 72, 0.05)',
        filter: 'blur(30px)'
      }}></div>
      <img src={product.img} alt={product.name} onClick={openZoom} style={{ width: '100%', objectFit: 'contain', cursor: 'zoom-in' }} />
    </div>

    <div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{product.name}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{product.category}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 900 }} className="text-neon">{product.price}</span>
        <button onClick={addToCart} className="bg-neon" style={{
          padding: '0.75rem',
          color: 'black',
          borderRadius: '2px'
        }}>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </motion.div>
  {zoom && (
    <div
      onClick={closeZoom}
      style={{
        position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, cursor: 'zoom-out'
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '500px', height: '500px', backgroundColor: 'var(--surface)', padding: '1rem' }}>
        <button
          type="button"
          onClick={closeZoom}
          aria-label="Fechar"
          style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}
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

const ProductList = () => {
  return (
    <section id="peptideos" style={{ padding: '70px 0 100px', scrollMarginTop: '100px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Peptídeos <span className="text-neon">Populares</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Descubra os produtos mais buscados para a sua rotina</p>
          </div>
          <button style={{
            borderBottom: '2px solid var(--neon)',
            paddingBottom: '0.5rem',
            fontWeight: 700,
            fontSize: '0.875rem'
          }}>VIEW ALL</button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
