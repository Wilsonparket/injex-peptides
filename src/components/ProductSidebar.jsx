import { buildProducts } from '../utils/productParser';

const prodModules = import.meta.glob('../assets/produtos em destaque/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const byoModules = import.meta.glob('../assets/byologic/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const neoModules = import.meta.glob('../assets/neopeptides/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

const sections = [
  { label: 'Destaque', products: buildProducts(prodModules) },
  { label: 'Byologik', products: buildProducts(byoModules) },
  { label: 'Neopeptides', products: buildProducts(neoModules) },
];

const ProductSidebar = () => {
  const scrollTo = (sectionLabel, productId) => {
    const el = document.getElementById(`product-${sectionLabel}-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.boxShadow = '0 0 0 2px var(--neon), 0 0 30px rgba(150,227,72,0.5)';
      setTimeout(() => { el.style.boxShadow = ''; }, 2000);
    }
  };

  return (
    <div className="desktop-only" style={{
      width: '180px',
      flexShrink: 0,
      position: 'sticky',
      top: '100px',
      alignSelf: 'flex-start',
      maxHeight: 'calc(100vh - 120px)',
      overflowY: 'auto',
      paddingRight: '1rem',
    }}>
      {sections.map((sec) => (
        <div key={sec.label} style={{ marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.845rem',
            fontWeight: 800,
            color: 'var(--neon)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.5rem',
          }}>{sec.label}</p>
          {sec.products.map((p) => (
            <button
              key={`${sec.label}-${p.id}`}
              onClick={() => scrollTo(sec.label, p.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: '#aaa',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.975rem',
                fontWeight: 500,
                padding: '0.3rem 0',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}
            >{p.name}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductSidebar;
