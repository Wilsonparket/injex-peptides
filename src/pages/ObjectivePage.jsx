import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { buildProducts } from '../utils/productParser';

// Auto-load banners per objective
const bannerModules = {
  emagrecimento: import.meta.glob('../assets/objetivos/emagrecimento/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  'massa-muscular': import.meta.glob('../assets/objetivos/massa-muscular/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  beleza: import.meta.glob('../assets/objetivos/beleza/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
};
const getBanner = (slug) => {
  const mods = bannerModules[slug] || {};
  const sorted = Object.entries(mods).sort(([a], [b]) => a.localeCompare(b));
  return sorted.length > 0 ? sorted[0][1] : null;
};

const allModules = {
  ...import.meta.glob('../assets/produtos em destaque/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/byologic/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/neopeptides/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }),
};
const allProducts = buildProducts(allModules);

const objectives = {
  emagrecimento: {
    title: 'Emagrecimento',
    subtitle: 'Peptídeos pesquisados para regulação de peso, metabolismo lipídico e composição corporal.',
    description: 'Estes compostos são objeto de intensa pesquisa científica em modelos de controle de peso corporal, sensibilidade à insulina e otimização metabólica. Todos destinam-se exclusivamente a uso em laboratório e pesquisa.',
    productNames: ['TIZERPADIDE', 'TESAMORELIN', 'TESAMOELIN', 'MOTS-c', 'KLOW 80 mg', 'KLOW 80mg'],
    bannerText: {
      headline: 'MENOS GORDURA.\nMAIS RESULTADO.',
      sub: '',
      cta: 'Descobrir agora',
    },
  },
  'massa-muscular': {
    title: 'Massa Muscular',
    subtitle: 'Peptídeos estudados para regeneração tecidual, resistência muscular e biogênese mitocondrial.',
    description: 'Compostos investigados em modelos pré-clínicos de reparo de tendões, ligamentos e tecido muscular, além de estudos sobre resistência e metabolismo oxidativo. Exclusivos para pesquisa científica.',
    productNames: ['BPC-157', 'SLU-PP-332', 'TESAMORELIN', 'TESAMOELIN'],
    bannerText: {
      headline: 'PEPTÍDEOS PARA GANHO\nDE MASSA MUSCULAR',
      sub: '',
    },
  },
  beleza: {
    title: 'Beleza',
    subtitle: 'Peptídeos para pesquisa em bioestimulação cutânea, colágeno e renovação celular.',
    description: 'Tripeptídeos e formulações investigados em estudos dermatológicos in vitro, com foco em remodelagem da matriz extracelular, produção de colágeno, luminosidade e hidratação. Uso exclusivo em pesquisa.',
    productNames: ['GHK-Cu', 'GLOW'],
    bannerText: {
      headline: 'PEPTÍDEOS PARA BELEZA\nE REJUVENESCIMENTO',
      sub: '',
    },
  },
};

const ObjectivePage = () => {
  const { slug } = useParams();
  const obj = objectives[slug];
  const banner = getBanner(slug);

  if (!obj) {
    return (
      <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Objetivo não encontrado.</p>
        <Link to="/" style={{ color: 'var(--neon)', fontWeight: 700 }}>Voltar à loja</Link>
      </div>
    );
  }

  const filtered = allProducts.filter((p) =>
    obj.productNames.some((n) => p.name.toLowerCase() === n.toLowerCase())
  );

  // Remove duplicates by name
  const seen = new Set();
  const unique = filtered.filter((p) => {
    const key = p.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        {/* Banner */}
        {banner && (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '2.5rem',
          }}>
            <img src={banner} alt={obj.title} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: slug === 'massa-muscular' ? 'left center' : 'center',
              display: 'block',
            }} />
            {/* Overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(270deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />
            {/* Banner text */}
            {obj.bannerText && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: 0, bottom: 0, right: '10%',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  alignItems: 'flex-start', textAlign: 'left',
                  padding: '2rem 3rem', maxWidth: '500px',
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                  style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: '#fff',
                  lineHeight: 1.1,
                  marginBottom: '0.75rem',
                  textTransform: 'none',
                  whiteSpace: 'pre-line',
                }}>{obj.bannerText.headline}</motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                  style={{
                    color: '#fff',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem',
                    whiteSpace: 'pre-line',
                  }}
                >{obj.bannerText.sub}</motion.p>
              </motion.div>
            )}
          </div>
        )}

        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#fff',
            textTransform: 'none',
            marginBottom: '0.75rem',
          }}>{obj.title}</h1>
          <p style={{
            color: 'var(--neon)',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
          }}>{obj.subtitle}</p>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            maxWidth: '700px',
          }}>{obj.description}</p>
        </div>

        <div className="cards-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {unique.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {unique.length === 0 && (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem' }}>
            Nenhum produto encontrado para este objetivo.
          </p>
        )}
      </div>
    </div>
  );
};

export default ObjectivePage;
