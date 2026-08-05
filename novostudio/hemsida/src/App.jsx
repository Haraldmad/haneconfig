import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TransformationSlider from './components/TransformationSlider';
import ValueCards from './components/ValueCards';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream text-ink">
      <Header />
      <main>
        <Hero />
        <TransformationSlider />
        <ValueCards />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
