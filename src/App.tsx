/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Locations from './components/Locations';
import HoursAndContact from './components/HoursAndContact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const handleOpenWhatsAppFloater = () => {
    const defaultMsg = encodeURIComponent('Halo Bakso Titoti Wonogiri! 👋 Saya ingin bertanya mengenai menu katering, pemesanan katering, atau alamat cabang terdekat.');
    window.open(`https://wa.me/6281329458822?text=${defaultMsg}`, '_blank', 'noreferrer');
  };

  return (
    <div className="min-h-screen bg-brand-cream/10 text-stone-800 selection:bg-brand-yellow/30 selection:text-brand-red-dark">
      {/* Dynamic Header */}
      <Navbar />

      {/* Hero Presentation */}
      <main>
        <Hero />
        <About />
        <Menu />
        <Locations />
        <HoursAndContact />
      </main>

      {/* Footer Branding */}
      <Footer />

      {/* Persistent Floating WhatsApp widget */}
      <button
        onClick={handleOpenWhatsAppFloater}
        title="Hubungi Admin WA Bakso Titoti"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white cursor-pointer group"
      >
        <MessageCircle size={24} className="fill-white stroke-none group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-black tracking-wide pl-0 group-hover:pl-2">
          Chat Order
        </span>
      </button>
    </div>
  );
}

