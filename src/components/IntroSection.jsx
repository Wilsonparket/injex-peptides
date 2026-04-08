import React from 'react';

const IntroSection = () => {
  return (
    <section style={{ padding: '80px 0 40px', backgroundColor: '#000' }}>
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '1.25rem'
        }}>
          Ciência de ponta em <span className="text-neon">peptídeos</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '720px',
          margin: '0 auto'
        }}>
          Na INJEX, unimos pesquisa rigorosa, matéria-prima de alta pureza e processos
          de qualidade para entregar peptídeos de referência ao mercado científico.
          Cada produto é desenvolvido para apoiar laboratórios, universidades e
          pesquisadores em estudos de ponta.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
