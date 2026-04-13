import React, { useState, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { buildProducts } from '../utils/productParser';

const allModules = {
  ...import.meta.glob('../assets/produtos em destaque/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/byologic/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/neopeptides/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
};
const allProducts = buildProducts(allModules);

const ProductPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const product = state?.product;
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [slide, setSlide] = useState(0);
  const [added, setAdded] = useState(false);

  const suggestions = useMemo(() => {
    const others = allProducts.filter((p) => p.name !== product?.name);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Produto não encontrado.</p>
        <Link to="/" style={{ color: 'var(--neon)', fontWeight: 700 }}>Voltar à loja</Link>
      </div>
    );
  }

  const images = product.images || [product.img];
  const total = images.length;
  const current = images[slide];

  const handleAdd = () => {
    addItem({ ...product, img: current }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        <div className="product-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Images */}
          <div>
            <div style={{
              position: 'relative',
              backgroundColor: '#0a0a0a',
              borderRadius: '8px',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src={current} alt={product.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />

              {total > 1 && (
                <>
                  <button onClick={() => setSlide((s) => (s - 1 + total) % total)} style={arrowStyle('left')}><ChevronLeft size={20} /></button>
                  <button onClick={() => setSlide((s) => (s + 1) % total)} style={arrowStyle('right')}><ChevronRight size={20} /></button>
                </>
              )}
            </div>

            {total > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    style={{
                      width: '70px', height: '70px',
                      backgroundColor: '#0a0a0a',
                      border: i === slide ? '2px solid var(--neon)' : '2px solid #222',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      padding: '4px',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {product.tag && (
              <span style={{
                alignSelf: 'flex-start',
                backgroundColor: 'var(--neon)', color: 'black',
                padding: '4px 12px', borderRadius: '4px',
                fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase',
              }}>{product.tag}</span>
            )}

            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '2rem',
              color: '#fff',
              textTransform: 'none',
              lineHeight: 1.2,
            }}>{product.name}</h1>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {product.description}
            </p>

            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--neon)' }}>
              {product.price}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={qtyBtn}><Minus size={16} /></button>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, minWidth: '30px', textAlign: 'center' }}>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} style={qtyBtn}><Plus size={16} /></button>
              </div>

              <button
                onClick={handleAdd}
                style={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: added ? '#333' : 'var(--neon)',
                  color: added ? 'var(--neon)' : 'black',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {added ? 'ADICIONADO ✓' : 'ADICIONAR AO CARRINHO'}
              </button>
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #222', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <InfoRow label="Disponibilidade" value="Em estoque" />
              <InfoRow label="Envio" value="Entrega para todo o Brasil" />
              <InfoRow label="Uso" value="Exclusivo para pesquisa científica" />
            </div>
          </div>
        </div>

        {/* Você também pode gostar */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '1.5rem',
            color: '#fff',
            textTransform: 'none',
            marginBottom: '1.5rem',
          }}>
            Você também pode gostar:
          </h2>
          <div className="cards-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
    <span style={{ color: '#fff', fontWeight: 600 }}>{value}</span>
  </div>
);

const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '12px',
  transform: 'translateY(-50%)',
  width: '38px', height: '38px', borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
});

const qtyBtn = {
  width: '36px', height: '36px',
  backgroundColor: '#1a1a1a',
  border: '1px solid #333',
  color: '#fff',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ProductPage;
