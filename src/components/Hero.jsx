import { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

const slides = [
  {
    id: 1,
    eyebrow: 'Conheça',
    titlePre: 'Tesamorelina: mais definição, ',
    titleNeon: 'menos gordura',
    titlePost: '',
    description: 'Ative seu corpo para queimar gordura com Tesamorelina',
    image: `${BASE}03.png`,
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
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + slides.length) % slides.length);
  }, [index]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[index];

  return (
    <section style={{
      paddingTop: '110px',
      paddingBottom: '2rem',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          height: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: slide.bg,
          border: '1px solid #222',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '60%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(150, 227, 72, 0.18) 0%, transparent 65%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              alignItems: 'center',
              padding: '2.5rem 3rem',
              gap: '1.5rem'
            }}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: direction * -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div style={{
                display: 'inline-block',
                padding: '0.35rem 0.8rem',
                border: '1px solid #333',
                borderRadius: '999px',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--text-muted)'
              }}>
                {slide.eyebrow}
              </div>
              <h1 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                margin: '0 0 0.9rem',
                textTransform: 'uppercase'
              }}>
                {slide.titlePre}
                <span className="text-neon neon-glow-text">{slide.titleNeon}</span>
                {slide.titlePost}
              </h1>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                maxWidth: '420px',
                lineHeight: 1.5
              }}>
                {slide.description}
              </p>
              <Link
                to="/purchase"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                Comprar agora <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: direction * -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src={slide.image}
                alt={slide.titleNeon}
                style={{
                  maxWidth: '100%',
                  maxHeight: '340px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  filter: 'drop-shadow(0 0 40px rgba(150, 227, 72, 0.35))'
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid #333',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 5,
            backdropFilter: 'blur(4px)'
          }}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid #333',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 5,
            backdropFilter: 'blur(4px)'
          }}
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 5
        }}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? 28 : 10,
                height: 4,
                borderRadius: 2,
                border: 'none',
                background: i === index ? '#96E348' : '#444',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
