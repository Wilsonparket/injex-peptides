import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: 'var(--neon)',
        color: 'black',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(150,227,72,0.4)',
        transition: 'transform 0.2s ease, opacity 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <ChevronUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
