import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CorporateWellness from './pages/CorporateWellness';
import HealthProgram from './pages/HealthProgram';
import MorningYoga from './pages/MorningYoga';
import About from './pages/About';
import Blog from './components/Blog';
import ScrollToTop from './components/ScrollToTop';
import PaymentQR from './pages/PaymentQR';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/health-program" element={<HealthProgram />} />
            <Route path="/morning-yoga" element={<MorningYoga />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/payment-qr" element={<PaymentQR />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;