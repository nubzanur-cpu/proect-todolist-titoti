import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Award, Sparkles, Flame } from 'lucide-react';
import { HERO_IMAGE } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-brand-cream border-b-8 border-brand-red">
      {/* Structural Geometry Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-yellow/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            
            {/* Tagline/Promo badge - sharp block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-slate-dark border-2 border-brand-slate-dark px-4 py-2 w-fit self-start shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
            >
              <Flame size={14} className="text-brand-red animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest font-sans">
                RESEP ASLI WONOGIRI SEJAK 1971
              </span>
            </motion.div>

            {/* Bold Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-brand-slate-dark leading-[0.9] uppercase italic"
              >
                KELEZATAN <br/>
                <span className="text-brand-red block my-1">KEMEWAHAN BAKSO</span> 
                <span className="text-brand-yellow bg-brand-slate-dark px-4 py-1.5 inline-block text-3xl sm:text-4xl lg:text-5xl border-y-4 border-brand-red mt-2视 not-italic">
                  URAT WONOGIRI
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-700 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-brand-red pl-4"
              >
                Rasakan kelembutan daging sapi asli pilihan dipadukan kuah kaldu murni yang gurih segar melimpah. Bakso Titoti menghadirkan cita rasa orisinal khas Wonogiri yang terus dicintai lintas generasi hingga hari ini.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('menu')}
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-brand-cream font-black text-xs uppercase tracking-widest border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                Lihat Menu Favorit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('locations')}
                className="px-8 py-4 bg-white hover:bg-stone-50 text-brand-slate-dark font-black text-xs uppercase tracking-widest border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Cari Cabang Terdekat
              </button>
            </motion.div>

            {/* Trust Signals & Badges - stark panels */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t-4 border-brand-slate-dark max-w-lg"
            >
              <div className="flex items-center gap-2.5 p-2 bg-white border-2 border-brand-slate-dark">
                <div className="p-1 rounded-sm bg-brand-red/10 text-brand-red">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-brand-slate-dark font-black text-[11px] leading-tight">100% HALAL</p>
                  <p className="text-stone-500 text-[9px] font-bold">MUI CERTIFIED</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2 bg-white border-2 border-brand-slate-dark">
                <div className="p-1 rounded-sm bg-brand-yellow/10 text-brand-slate-dark">
                  <Star size={18} className="fill-brand-yellow stroke-brand-slate-dark" />
                </div>
                <div>
                  <p className="text-brand-slate-dark font-black text-[11px] leading-tight">4.8 / 5.0</p>
                  <p className="text-stone-500 text-[9px] font-bold">GOOGLE MAPS</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2 bg-white border-2 border-brand-slate-dark">
                <div className="p-1 rounded-sm bg-brand-yellow text-brand-slate-dark">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-brand-slate-dark font-black text-[11px] leading-tight">50+ TAHUN</p>
                  <p className="text-stone-500 text-[9px] font-bold">WONOGIRI PRIDE</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visuals representing the feast */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-none overflow-hidden border-8 border-brand-slate-dark shadow-[10px_10px_0px_0px_rgba(185,28,28,1)] aspect-[4/3]"
            >
              <img
                src={HERO_IMAGE}
                alt="Bakso Titoti Feast"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Blur-overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating review card inside image - sharp block style */}
              <div className="absolute bottom-4 left-4 right-4 bg-white p-3 border-2 border-brand-slate-dark flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <span className="flex-shrink-0 bg-brand-yellow text-brand-slate-dark px-2 py-1 border border-brand-slate-dark font-black text-[10px] uppercase">
                  ★ 4.8
                </span>
                <div>
                  <p className="text-[10px] font-black text-brand-slate-dark">“Kaldu sapinya melimpah, bakso uratnya mantap!”</p>
                  <p className="text-[8px] uppercase font-bold text-stone-500">Bambang S., Pelanggan Kebon Jeruk</p>
                </div>
              </div>
            </motion.div>

            {/* Stark Badge */}
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-brand-yellow border-4 border-brand-slate-dark flex items-center justify-center font-black text-brand-slate-dark text-[11px] uppercase shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-full select-none transform rotate-12 animate-pulse">
              HOT!
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
