import React from 'react';
import { Camera, MessageCircle, Globe, Play, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'black',
      padding: '80px 0 40px',
      borderTop: '1px solid #111'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img src={`${import.meta.env.BASE_URL}LOGO.png`} alt="INJEX" style={{ height: '56px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Levando a ciência dos peptídeos adiante por meio de pesquisa rigorosa e inovação contínua.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>LOJA</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <li><a href="#">Lançamentos</a></li>
              <li><a href="#">Mais vendidos</a></li>
              <li><a href="#">Promoções</a></li>
              <li><a href="#">Catálogo completo</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>SUPORTE</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <li><a href="#">Status do pedido</a></li>
              <li><a href="#">Envio e entrega</a></li>
              <li><a href="#">Trocas e devoluções</a></li>
              <li><a href="#">Fale conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>FAÇA PARTE</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Ganhe 15% de desconto na primeira compra e acesso exclusivo a novidades.
            </p>
            <div style={{ display: 'flex' }}>
              <input type="email" placeholder="SEU E-MAIL" style={{
                backgroundColor: '#111',
                border: 'none',
                padding: '0.75rem 1rem',
                color: 'white',
                flex: 1,
                fontSize: '0.75rem',
                fontWeight: 700
              }} />
              <button className="bg-neon" style={{
                padding: '0.75rem 1.5rem',
                color: 'black',
                fontWeight: 900,
                fontSize: '0.75rem'
              }}>ENTRAR</button>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid #111'
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>© 2026 INJEX INC. TODOS OS DIREITOS RESERVADOS</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Camera size={18} cursor="pointer" />
            <MessageCircle size={18} cursor="pointer" />
            <Globe size={18} cursor="pointer" />
            <Play size={18} cursor="pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
