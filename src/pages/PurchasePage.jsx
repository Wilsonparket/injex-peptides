import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, ShieldCheck, CheckCircle2, X, Trash2, Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const parsePrice = (p) =>
  parseFloat(String(p).replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
const formatBRL = (n) => `R$${n.toFixed(2).replace('.', ',')}`;

const PurchasePage = () => {
  const navigate = useNavigate();
  const { items, updateQty, removeItem, clear } = useCart();

  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const applyCoupon = () => setAppliedCoupon(coupon.trim().toUpperCase());

  const [cep, setCep] = useState('');
  const [shipping, setShipping] = useState(null); // { price, days }
  const [shippingError, setShippingError] = useState('');
  const maskCep = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 8);
    return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
  };
  const calculateShipping = () => {
    const digits = cep.replace(/\D/g, '');
    if (digits.length !== 8) {
      setShippingError('Informe um CEP válido (8 dígitos)');
      setShipping(null);
      return;
    }
    setShippingError('');
    // Fake calc: based on first digit of CEP
    const region = parseInt(digits[0], 10);
    const price = 12.9 + region * 3.5;
    const days = 3 + region;
    setShipping({ price, days });
  };
  const removeShipping = () => { setShipping(null); setCep(''); setShippingError(''); };

  const subtotal = items.reduce((acc, i) => acc + parsePrice(i.price) * i.qty, 0);
  const discountRate =
    appliedCoupon === 'PEPT20' || appliedCoupon === 'INJEX'
      ? 0.5
      : appliedCoupon === 'INJEX20'
        ? 0.2
        : 0;
  const discount = subtotal * discountRate;
  const shippingPrice = shipping?.price || 0;
  const total = Math.max(0, subtotal - discount + shippingPrice);

  // ---------- Masks ----------
  const maskCard = (v) =>
    v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
  const maskExpiry = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 4);
    if (d.length < 3) return d;
    return `${d.slice(0, 2)}/${d.slice(2)}`;
  };
  const maskCvv = (v) => v.replace(/\D/g, '').slice(0, 4);

  // ---------- Validation ----------
  const validators = {
    firstName: (v) => (v.trim().length >= 2 ? '' : 'Informe seu nome'),
    lastName: (v) => (v.trim().length >= 2 ? '' : 'Informe seu sobrenome'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'E-mail inválido'),
    cardNumber: (v) =>
      v.replace(/\s/g, '').length === 16 ? '' : 'Cartão deve ter 16 dígitos',
    expiry: (v) => {
      if (!/^\d{2}\/\d{2}$/.test(v)) return 'Use o formato MM/AA';
      const [mm, yy] = v.split('/').map(Number);
      if (mm < 1 || mm > 12) return 'Mês inválido';
      const now = new Date();
      const exp = new Date(2000 + yy, mm - 1, 1);
      const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      if (exp < thisMonth) return 'Cartão vencido';
      return '';
    },
    cvv: (v) => (v.length >= 3 ? '' : 'CVV inválido'),
  };

  const validateAll = () => {
    const next = {};
    Object.keys(validators).forEach((k) => {
      const err = validators[k](form[k]);
      if (err) next[k] = err;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'cardNumber') value = maskCard(value);
    if (field === 'expiry') value = maskExpiry(value);
    if (field === 'cvv') value = maskCvv(value);
    setForm((f) => ({ ...f, [field]: value }));
    if (touched[field]) {
      setErrors((errs) => ({ ...errs, [field]: validators[field](value) }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((errs) => ({ ...errs, [field]: validators[field](form[field]) }));
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    setTouched(Object.fromEntries(Object.keys(validators).map((k) => [k, true])));
    if (!validateAll()) return;
    if (items.length === 0) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      clear();
    }, 2000);
  };

  const fieldStyle = (field) => ({
    ...inputStyle,
    borderColor: errors[field] && touched[field] ? '#ff4d4d' : '#333',
  });

  if (success) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
      }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10 }}
        >
          <CheckCircle2 size={120} className="text-neon" />
        </motion.div>
        <h1 style={{ marginTop: '2rem' }}>PEDIDO CONFIRMADO</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Seu pedido está a caminho.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          VOLTAR À LOJA
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '4rem'
        }}>
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>FINALIZAR COMPRA</h2>

            <form onSubmit={handlePurchase} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={labelStyle}>NOME</label>
                  <input
                    type="text"
                    placeholder="João"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    style={fieldStyle('firstName')}
                  />
                  {touched.firstName && errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={labelStyle}>SOBRENOME</label>
                  <input
                    type="text"
                    placeholder="Silva"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    style={fieldStyle('lastName')}
                  />
                  {touched.lastName && errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={labelStyle}>E-MAIL</label>
                <input
                  type="email"
                  placeholder="joao@exemplo.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={fieldStyle('email')}
                />
                {touched.email && errors.email && <span style={errorStyle}>{errors.email}</span>}
              </div>

              <div style={{ padding: '2rem', backgroundColor: '#111', border: '1px solid #222' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <CreditCard className="text-neon" />
                  <span style={{ fontWeight: 800 }}>FORMA DE PAGAMENTO</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={form.cardNumber}
                      onChange={handleChange('cardNumber')}
                      onBlur={handleBlur('cardNumber')}
                      inputMode="numeric"
                      style={fieldStyle('cardNumber')}
                    />
                    {touched.cardNumber && errors.cardNumber && <span style={errorStyle}>{errors.cardNumber}</span>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={form.expiry}
                        onChange={handleChange('expiry')}
                        onBlur={handleBlur('expiry')}
                        inputMode="numeric"
                        style={fieldStyle('expiry')}
                      />
                      {touched.expiry && errors.expiry && <span style={errorStyle}>{errors.expiry}</span>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <input
                        type="text"
                        placeholder="CVV"
                        value={form.cvv}
                        onChange={handleChange('cvv')}
                        onBlur={handleBlur('cvv')}
                        inputMode="numeric"
                        style={fieldStyle('cvv')}
                      />
                      {touched.cvv && errors.cvv && <span style={errorStyle}>{errors.cvv}</span>}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={processing || items.length === 0}
                style={{ width: '100%', justifyContent: 'center', height: '60px' }}
              >
                {processing ? 'PROCESSANDO...' : 'FINALIZAR PEDIDO'}
              </button>
            </form>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              backgroundColor: '#111',
              padding: '2rem',
              height: 'fit-content',
              position: 'sticky',
              top: '120px'
            }}
          >
            <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid #222', paddingBottom: '1rem' }}>Sua compra</h3>

            {items.length === 0 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Seu carrinho está vazio.
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {items.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #222', paddingBottom: '1rem' }}>
                  <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', backgroundColor: 'black', padding: '8px', objectFit: 'contain' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.875rem' }}>{item.name}</div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remover item"
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 0 }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    {item.tag && <div style={badgeStyle}>{item.tag}</div>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} style={qtyBtnStyle}><Minus size={12} /></button>
                        <span style={{ fontSize: '0.875rem', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} style={qtyBtnStyle}><Plus size={12} /></button>
                      </div>
                      <span className="text-neon" style={{ fontWeight: 900, fontSize: '0.875rem' }}>
                        {formatBRL(parsePrice(item.price) * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(maskCep(e.target.value))}
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={calculateShipping}
                className="bg-neon"
                style={{ padding: '0 1rem', color: 'black', fontWeight: 900, fontSize: '0.75rem', border: 'none', cursor: 'pointer' }}
              >
                CALCULAR
              </button>
            </div>
            {shippingError && (
              <div style={{ fontSize: '0.7rem', color: '#ff4d4d', marginBottom: '1rem' }}>{shippingError}</div>
            )}
            {shipping && (
              <div style={{ fontSize: '0.75rem', color: 'var(--neon)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Frete: {formatBRL(shipping.price)} · {shipping.days} dias úteis</span>
                <button
                  type="button"
                  onClick={removeShipping}
                  aria-label="Remover frete"
                  style={{ background: 'none', border: 'none', color: 'var(--neon)', cursor: 'pointer', display: 'flex', padding: 0 }}
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="CUPOM DE DESCONTO"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="bg-neon"
                style={{ padding: '0 1rem', color: 'black', fontWeight: 900, fontSize: '0.75rem', border: 'none', cursor: 'pointer' }}
              >
                APLICAR
              </button>
            </div>
            {appliedCoupon && (
              <div style={{ fontSize: '0.75rem', color: 'var(--neon)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Cupom "{appliedCoupon}" aplicado</span>
                <button
                  type="button"
                  onClick={() => { setAppliedCoupon(''); setCoupon(''); }}
                  aria-label="Remover cupom"
                  style={{ background: 'none', border: 'none', color: 'var(--neon)', cursor: 'pointer', display: 'flex', padding: 0 }}
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
                <span>Subtotal</span>
                <span>{formatBRL(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
                <span>Entrega{shipping ? ` (${shipping.days} dias úteis)` : ''}</span>
                <span>{shipping ? formatBRL(shipping.price) : '—'}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--neon)' }}>
                  <span>Desconto ({appliedCoupon})</span>
                  <span>-{formatBRL(discount)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '1.25rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #222' }}>
                <span>Total</span>
                <span className="text-neon">{formatBRL(total)}</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              <ShieldCheck size={16} /> Checkout seguro
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  backgroundColor: '#1a1a1a',
  border: '1px solid #333',
  padding: '1rem',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 600,
  outline: 'none',
  transition: 'all 0.3s ease'
};

const labelStyle = { fontSize: '0.75rem', fontWeight: 700, opacity: 0.6 };

const errorStyle = { fontSize: '0.7rem', color: '#ff4d4d', fontWeight: 600 };

const qtyBtnStyle = {
  backgroundColor: '#1a1a1a',
  border: '1px solid #333',
  color: 'white',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
};

const badgeStyle = {
  backgroundColor: 'var(--neon)',
  color: 'black',
  padding: '2px 8px',
  fontSize: '0.6rem',
  fontWeight: 900,
  display: 'inline-block',
  marginTop: '0.25rem',
  textTransform: 'uppercase'
};

export default PurchasePage;
