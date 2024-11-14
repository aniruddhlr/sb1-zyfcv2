import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatorProfile from './pages/CreatorProfile';
import PricingPage from './pages/PricingPage';
import CampaignsPage from './pages/CampaignsPage';
import FindCreators from './pages/FindCreators';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/creators" element={<FindCreators />} />
        <Route path="/help" element={<div className="p-8">Help Center coming soon</div>} />
        <Route path="/contact" element={<div className="p-8">Contact page coming soon</div>} />
        <Route path="/privacy" element={<div className="p-8">Privacy Policy coming soon</div>} />
      </Routes>
      <Footer />
    </div>
  );
}