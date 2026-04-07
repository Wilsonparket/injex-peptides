import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ContactPage = () => {
  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Fale <span className="text-neon">conosco</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Encontre nossa localização abaixo. Estamos prontos para atender você.
        </p>

        <div style={{ width: '100%', aspectRatio: '4 / 3', maxWidth: '600px' }}>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.244610169204!2d-74.01087862388547!3d40.71263137139354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18edfceff5%3A0x982e385fe7d21f79!2sWoolworth%20Building%2C%20New%20York%2C%20NY%2010007%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1775548594342!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
