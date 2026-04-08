import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ByologicList from './components/ByologicList';
import NeopeptidesList from './components/NeopeptidesList';
import Footer from './components/Footer';
import PurchasePage from './pages/PurchasePage';
import PaymentDeliveryPage from './pages/PaymentDeliveryPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => (
  <>
    <Hero />
    <ProductList />
    <ByologicList />
    <NeopeptidesList />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
