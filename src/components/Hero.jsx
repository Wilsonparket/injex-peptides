import { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

// Auto-load all banner images from src/assets/banners
const bannerModules = import.meta.glob('../assets/banners/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});
const banners = Object.entries(bannerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const slides = [
  {
    id: 1,
    eyebrow: 'Conheça',
    titlePre: 'Tesamorelina: mais definição, ',
    titleNeon: 'menos gordura',
    titlePost: '',
    description: 'Ative seu corpo para queimar gordura com Tesamorelina',
    image: `${BASE}Foto banner 1.png`,
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a2410 100%)',
  },
  {
    id: 2,
    eyebrow: 'Novidade',
    titlePre: 'Nova era do ',
    titleNeon: 'emagrecimento',
    titlePost: '',
    description: 'Inovação que esculpe resultados',
    image: `${BASE}02.png`,
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #102418 100%)',
  },
  {
    id: 3,
    eyebrow: 'Mais vendidos',
    titlePre: 'Recupere-se melhor, treine mais ',
    titleNeon: 'forte!',
    titlePost: '',
    description: 'Seu corpo em evolução',
    image: `${BASE}01.png`,
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #241810 100%)',
  },
];

const AUTOPLAY_MS = 6000;

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 500;
      const op = Math.max(0, Math.min(1, 1 - (y - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(op);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section style={{
      opacity,
      transition: 'opacity 0.1s linear',
      position: 'relative',
      width: '100%',
      height: '80vh',
      minHeight: '500px',
      backgroundColor: '#000',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Right-side Image */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '55%',
        zIndex: 1
      }}>
        <img
          src={banners[0] || `${import.meta.env.BASE_URL}Foto banner 1.png`}
          alt="Hero Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            display: 'block',
            transformOrigin: 'right center',
            transform: 'scale(0.9)'
          }}
        />
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: '700px' }}
        >
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.82rem, 4.37vw, 3.28rem)',
            fontWeight: 600,
            lineHeight: 1,
            color: '#fff',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            GLOBAL<br />
            <span style={{ whiteSpace: 'nowrap' }}>BIO-PERFORMANCE</span>
          </h1>
          
          <a
            href="#byologic"
            className="btn-primary"
            style={{ 
              display: 'inline-block', 
              padding: '0.8rem 2rem', 
              fontSize: '0.9rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderRadius: '4px'
            }}
          >
            EXPLORE PRODUTOS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
