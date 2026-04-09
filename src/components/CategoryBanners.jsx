import React from 'react';

// Auto-load: ordem alfabética. Use prefixo numérico (1 ..., 2 ...) para ordenar.
const bannerModules = import.meta.glob('../assets/category-banners/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});
const bannerImages = Object.entries(bannerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const titles = ['INJETÁVEIS', 'PEPTÍDEOS'];

const Card = ({ title, image }) => (
  <div style={{
    position: 'relative',
    flex: 1,
    minHeight: '170px',
    borderRadius: '6px',
    overflow: 'hidden',
    background: image
      ? `url(${image}) center/cover no-repeat`
      : 'radial-gradient(circle at 70% 50%, rgba(150,227,72,0.25) 0%, #050505 70%)',
    border: '1px solid #1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1.75rem 2rem',
  }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
    <h3 style={{
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
      fontWeight: 800,
      fontSize: '2rem',
      color: '#fff',
      letterSpacing: '0.02em',
      marginBottom: '0.75rem',
    }}>{title}</h3>
    <a
      href="#peptideos"
      style={{
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        color: '#fff',
        fontWeight: 800,
        fontSize: '0.7rem',
        padding: '0.55rem 1.25rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        textDecoration: 'none',
        alignSelf: 'flex-start',
        borderRadius: '8px',
      }}
    >
      Explore now
    </a>
  </div>
);

const CategoryBanners = () => {
  return (
    <section style={{ padding: '40px 0 20px', backgroundColor: '#000' }}>
      <div className="container" style={{ display: 'flex', gap: '1.25rem' }}>
        {titles.map((t, i) => (
          <Card key={t} title={t} image={bannerImages[i]} />
        ))}
      </div>
    </section>
  );
};

export default CategoryBanners;
