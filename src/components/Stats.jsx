import React from 'react';
import { Zap, Dna, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section id="sobre-nos" style={{ padding: '40px 0 60px', backgroundColor: '#050505', scrollMarginTop: '100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '180%', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Peptídeos para pesquisa e desenvolvimento científico</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderLeft: '4px solid var(--neon)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Dna size={32} className="text-neon" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Nossa empresa:</span>
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>A mais alta qualidade em <span className="text-neon">Peptídeos</span></div>
            </div>
          </div>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderLeft: '4px solid var(--neon)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Truck size={32} className="text-neon" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Entrega</span>
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Entrega rápida para todo o <span className="text-neon">Brasil</span></div>
            </div>
          </div>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderLeft: '4px solid var(--neon)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Zap size={32} className="text-neon" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Padrão Premium</span>
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Matéria-prima de <span className="text-neon">alta pureza</span></div>
            </div>
          </div>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderLeft: '4px solid var(--neon)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ShieldCheck size={32} className="text-neon" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Segurança Garantida</span>
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Processos rigorosos de <span className="text-neon">qualidade</span></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Stats;
