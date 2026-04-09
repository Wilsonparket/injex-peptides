import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'BPC-157: o que diz a pesquisa atual',
    date: '2 de Abril, 2026',
    excerpt: 'Conheça os principais achados sobre o BPC-157 em estudos pré-clínicos de regeneração tecidual e sua aplicação em laboratório.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    body: `O BPC-157 (Body Protection Compound) é um peptídeo de 15 aminoácidos derivado de uma proteína gástrica humana. Em modelos pré-clínicos, demonstrou potencial em estudos de cicatrização tecidual, especialmente envolvendo tendões, ligamentos e mucosa gástrica.

Pesquisadores investigam sua interação com vias de sinalização ligadas ao óxido nítrico e a fatores de crescimento. Os estudos disponíveis são quase exclusivamente em animais ou in vitro — não há evidência clínica robusta em humanos, e o composto é vendido apenas para fins de pesquisa em laboratório.

Os principais desafios apontados pela literatura incluem padronização de dosagem em modelos experimentais, estabilidade em solução e ausência de ensaios randomizados em humanos. Para grupos de pesquisa, o BPC-157 segue sendo uma ferramenta interessante para estudos mecanísticos de reparo tecidual.`,
  },
  {
    id: 2,
    title: 'GHK-Cu: o tripeptídeo cobre na pesquisa dermatológica',
    date: '28 de Março, 2026',
    excerpt: 'Por que o tripeptídeo GHK-Cu desperta tanto interesse em estudos de pele, colágeno e cicatrização.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    body: `GHK-Cu é um tripeptídeo (glicil-L-histidil-L-lisina) que se liga naturalmente ao íon cobre. Estudos indicam que ele atua em vias de sinalização ligadas a remodelagem da matriz extracelular, produção de colágeno e modulação inflamatória.

Em pesquisas in vitro, o GHK-Cu mostrou-se promissor em estudos sobre fibroblastos cutâneos e cicatrização. Seu uso continua restrito ao ambiente de pesquisa — qualquer aplicação fora do laboratório exige aprovação regulatória específica.

Para o pesquisador, a principal atratividade está nos múltiplos alvos moleculares descritos na literatura, o que permite explorar mecanismos relacionados a envelhecimento celular, reparo tecidual e modulação imunológica em modelos controlados.`,
  },
  {
    id: 3,
    title: 'MOTS-c: o peptídeo mitocondrial e o metabolismo',
    date: '20 de Março, 2026',
    excerpt: 'Estudos exploram como o peptídeo derivado do DNA mitocondrial influencia metabolismo e homeostase energética.',
    image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&q=80',
    body: `MOTS-c é um peptídeo de 16 aminoácidos codificado pelo DNA mitocondrial. Foi descrito pela primeira vez em 2015 e desde então é objeto de estudos sobre comunicação entre mitocôndria e núcleo celular.

A literatura indica que o MOTS-c pode influenciar a sensibilidade à insulina e o metabolismo energético em modelos animais. Pesquisadores avaliam seu papel em vias relacionadas a envelhecimento celular e estresse oxidativo.

Como qualquer composto de pesquisa, o MOTS-c não tem indicação terapêutica aprovada e seu uso está restrito a laboratórios qualificados. Os achados atuais apontam para um peptídeo promissor para estudos de bioenergética celular.`,
  },
];

const BlogPage = () => {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const visible = posts.slice(page * 3, page * 3 + 3);
  const totalPages = Math.ceil(posts.length / 3);

  if (selected) {
    return (
      <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <button
            onClick={() => setSelected(null)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ChevronLeft size={20} /> VOLTAR AO BLOG
          </button>
          <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '6px', marginBottom: '2rem' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>{selected.date}</p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#fff', marginBottom: '1.5rem', textTransform: 'none' }}>
            {selected.title}
          </h1>
          {selected.body.split('\n\n').map((p, i) => (
            <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{p}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className="section-title" style={{ fontSize: '2rem', textTransform: 'none', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            Blog
          </h1>
          {totalPages > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} style={arrowBtn}><ChevronLeft size={18} /></button>
              <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page >= totalPages - 1} style={arrowBtn}><ChevronRight size={18} /></button>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {visible.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelected(post)}
              style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 0 1px var(--neon), 0 0 25px rgba(150,227,72,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'none', lineHeight: 1.3 }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 700 }}>{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => setSelected(visible[0])}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--neon)',
              backgroundColor: 'transparent',
              color: 'var(--neon)',
              fontWeight: 800,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

const arrowBtn = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid var(--neon)',
  background: 'transparent',
  color: 'var(--neon)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default BlogPage;
