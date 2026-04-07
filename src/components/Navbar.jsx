import React from 'react';
import { ShoppingBag, Search, User, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { count } = useCart();
  const navigate = useNavigate();
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1a1a1a',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/LOGO.png" alt="INJEX" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </Link>

        <ul style={{
          display: 'flex',
          gap: '2rem',
          fontWeight: 600,
          fontSize: '0.875rem'
        }}>
          <li><a href="#peptideos" className="text-neon">Peptídios</a></li>
          <li><a href="#">Peptídios Populares</a></li>
          <li><a href="#sobre-nos">Sobre nós</a></li>
          <li><Link to="/pagamento-e-entrega">Pagamento e entrega</Link></li>
          <li><Link to="/fale-conosco">Fale conosco</Link></li>
        </ul>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Search size={20} cursor="pointer" />
          <User size={20} cursor="pointer" />
          <div onClick={() => navigate('/purchase')} style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingBag size={20} />
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
