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

const SLIDE_INTERVAL = 5000;

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [index, setIndex] = useState(0);
  const total = banners.length || 1;

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

  useEffect(() => {
    if (banners.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [total]);
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
      {/* Full Background Carousel */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {banners.length > 0 ? banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Hero Banner ${i + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: i === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        )) : (
          <img
            src={`${import.meta.env.BASE_URL}Foto banner 1.png`}
            alt="Hero Banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        )}
      </div>

      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '12%',
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <a
          href="#peptideos"
          style={{
            padding: '0.95rem 2.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
          }}
        >
          EXPLORAR PRODUTOS
        </a>
      </div>

      {/* Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            aria-label="Anterior"
            style={{
              position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 4,
              width: '42px', height: '42px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          ><ChevronLeft size={20} /></button>
          <button
            onClick={() => setIndex((i) => (i + 1) % total)}
            aria-label="Próximo"
            style={{
              position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 4,
              width: '42px', height: '42px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          ><ChevronRight size={20} /></button>
        </>
      )}

      {/* Dots */}
      {banners.length > 1 && (
        <div style={{ position: 'absolute', bottom: '4%', left: 0, right: 0, zIndex: 4, display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === index ? '24px' : '8px', height: '8px', borderRadius: '4px',
                backgroundColor: i === index ? 'var(--neon)' : 'rgba(255,255,255,0.4)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
