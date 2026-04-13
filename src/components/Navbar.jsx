import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Zap, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const { count } = useCart();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
      padding: '1rem 0',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{ 
            fontFamily: "'Archivo Black', sans-serif", 
            fontSize: '1.5rem', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'baseline'
          }}>
            <span style={{ color: '#fff' }}>INJ</span>
            <span style={{ color: 'var(--neon)' }}>EX</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--neon)', marginLeft: '2px', alignSelf: 'flex-start', marginTop: '4px' }}>™</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <ul style={{
            display: 'flex',
            gap: '1.5rem',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <li><a href="#injetaveis" style={{ color: '#fff', textDecoration: 'none' }}>Injetáveis</a></li>
            <li><a href="#peptideos" style={{ color: '#fff', textDecoration: 'none' }}>Peptídeos</a></li>
            <li><a href="#sobre" style={{ color: '#fff', textDecoration: 'none' }}>Sobre</a></li>
            <li><Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link></li>
            <li><Link to="/fale-conosco" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link></li>
          </ul>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#111',
            borderRadius: '8px',
            padding: '0.4rem 0.8rem',
            width: '240px',
            border: '1px solid #222'
          }}>
            <input
              type="text"
              placeholder="Buscar"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.75rem',
                width: '100%',
                outline: 'none'
              }}
            />
            <Search size={16} color="#666" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <User size={20} cursor="pointer" color="#fff" className="desktop-only" />
          <div onClick={() => setCartOpen(true)} style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingBag size={20} color="#fff" />
            {count > 0 && (
              <span style={{
                position: 'absolute',
                top: -8,
                right: -8,
                backgroundColor: 'var(--neon)',
                color: 'black',
                fontSize: '0.65rem',
                fontWeight: 900,
                padding: '2px 5px',
                borderRadius: '50%'
              }}>{count}</span>
            )}
          </div>
          {/* Hamburger */}
          <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-only" style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 2rem',
            display: 'none',
            flexDirection: 'column',
            gap: '1.25rem',
            borderBottom: '1px solid #1a1a1a',
          }}>
            <a href="#injetaveis" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Injetáveis</a>
            <a href="#peptideos" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Peptídeos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Sobre</a>
            <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Blog</Link>
            <Link to="/fale-conosco" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
