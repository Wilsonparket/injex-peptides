import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { items, updateQty, removeItem, count } = useCart();
  const navigate = useNavigate();

  const parsePrice = (p) => parseFloat(String(p).replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
  const formatBRL = (n) => `R$${n.toFixed(2).replace('.', ',')}`;
  const total = items.reduce((acc, i) => acc + parsePrice(i.price) * i.qty, 0);

  const goCheckout = () => { onClose(); navigate('/purchase'); };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '380px', maxWidth: '90vw',
        zIndex: 1200,
        backgroundColor: '#0a0a0a',
        borderLeft: '1px solid #1a1a1a',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', textTransform: 'none' }}>
            Carrinho ({count})
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex' }}>
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginTop: '3rem' }}>
              Seu carrinho está vazio.
            </p>
          )}
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #1a1a1a' }}>
              <img src={item.img} alt={item.name} style={{ width: '70px', height: '70px', backgroundColor: '#000', padding: '6px', objectFit: 'contain', borderRadius: '6px' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{item.name}</span>
                  <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 0 }}>
                    <Trash2 size={14} />
                  </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={qtyBtn}><Minus size={12} /></button>
                    <span style={{ fontSize: '0.8rem', minWidth: '20px', textAlign: 'center', color: '#fff' }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={qtyBtn}><Plus size={12} /></button>
                  </div>
                  <span style={{ color: 'var(--neon)', fontWeight: 900, fontSize: '0.85rem' }}>
                    {formatBRL(parsePrice(item.price) * item.qty)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #1a1a1a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total</span>
              <span style={{ color: 'var(--neon)', fontWeight: 900, fontSize: '1.25rem' }}>{formatBRL(total)}</span>
            </div>
            <button
              onClick={goCheckout}
              style={{
                width: '100%',
                padding: '0.9rem',
                backgroundColor: 'var(--neon)',
                color: 'black',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 900,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              IR PARA O CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const qtyBtn = {
  width: '24px', height: '24px',
  backgroundColor: '#1a1a1a',
  border: '1px solid #333',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
};

export default CartDrawer;
