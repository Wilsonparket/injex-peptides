import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Stats from './components/Stats';
import ByologicList from './components/ByologicList';
import NeopeptidesList from './components/NeopeptidesList';
import Footer from './components/Footer';
import PurchasePage from './pages/PurchasePage';
import PaymentDeliveryPage from './pages/PaymentDeliveryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import ObjectivePage from './pages/ObjectivePage';
import BlogSection from './components/BlogSection';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import ProductSidebar from './components/ProductSidebar';

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <div className="products-wrapper" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)', borderRadius: '12px', margin: '0 auto', maxWidth: 'var(--container-width)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
      <ProductSidebar />
      <div style={{ flex: 1, minWidth: 0 }}>
        <ProductList />
        <ByologicList />
        <NeopeptidesList />
      </div>
    </div>
    <BlogSection />
  </>
);

function App() {
  return (
    <Router basename="/injex-peptides">
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/pagamento-e-entrega" element={<PaymentDeliveryPage />} />
          <Route path="/fale-conosco" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/objetivo/:slug" element={<ObjectivePage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
