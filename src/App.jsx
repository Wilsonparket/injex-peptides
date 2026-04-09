import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Stats from './components/Stats';
import CategoryBanners from './components/CategoryBanners';
import ByologicList from './components/ByologicList';
import NeopeptidesList from './components/NeopeptidesList';
import Footer from './components/Footer';
import PurchasePage from './pages/PurchasePage';
import PaymentDeliveryPage from './pages/PaymentDeliveryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogSection from './components/BlogSection';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => (
  <>
    <Hero />
    <CategoryBanners />
    <Stats />
    <ProductList />
    <ByologicList />
    <NeopeptidesList />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
