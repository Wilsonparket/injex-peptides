import React from 'react';

const items = [
  {
    label: 'Nossa empresa',
    title: 'A mais alta qualidade em ',
    titleHighlight: 'Peptídeos',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
    ),
  },
  {
    label: 'Entrega',
    title: 'Entrega rápida para todo o ',
    titleHighlight: 'Brasil',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
    ),
  },
  {
    label: 'Padrão premium',
    title: 'Matéria-prima de ',
    titleHighlight: 'alta pureza',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  },
  {
    label: 'Segurança garantida',
    title: 'Processos rigorosos de ',
    titleHighlight: 'qualidade',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
];

const Stats = () => {
  return (
    <section id="sobre-nos" style={{ padding: '40px 0 60px', backgroundColor: '#000', scrollMarginTop: '100px' }}>
      <div className="container">
        <div className="cards-section" style={{
          padding: '2.5rem 1.5rem',
          background: '#0a0a0a',
          borderRadius: '12px',
          fontFamily: "'Inter', sans-serif",
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 600,
            color: '#f0f0f0',
            margin: '0 0 2rem',
            letterSpacing: '-0.4px',
            fontFamily: "'Inter', sans-serif",
            textTransform: 'none',
          }}>
            Peptídeos para pesquisa e desenvolvimento científico
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '12px',
          }}>
            {items.map((it) => (
              <div
                key={it.label}
                className="stat-card"
                style={{
                  background: '#141414',
                  border: '0.5px solid #2a2a2a',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '7px',
                    background: 'rgba(122, 226, 52, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      width: '16px',
                      height: '16px',
                      color: '#7AE234',
                    }}>
                      {React.cloneElement(it.icon, {
                        width: 16,
                        height: 16,
                        fill: 'none',
                        stroke: '#7AE234',
                        strokeWidth: 1.8,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      })}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: '#555',
                    fontFamily: "'Inter', sans-serif",
                  }}>{it.label}</span>
                </div>
                <div style={{ width: '24px', height: '1px', background: '#2a2a2a' }} />
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#e0e0e0',
                    lineHeight: 1.5,
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'none',
                  }}>
                    {it.title}<span style={{ color: '#7AE234' }}>{it.titleHighlight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
