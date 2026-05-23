import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Compass, Car, Wifi, Flame, CreditCard, Coffee, Sparkles } from 'lucide-react';
import { OUTLETS } from '../data';
import { OutletLocation } from '../types';

export default function Locations() {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [activeOutlet, setActiveOutlet] = useState<OutletLocation>(OUTLETS[0]);

  const citiesList = [
    { value: 'all', label: 'Semua Kota' },
    { value: 'Jakarta', label: 'Jakarta Barat' },
    { value: 'Depok', label: 'Depok' },
    { value: 'CentralJava', label: 'Jawa Tengah (Pusat & Sragen)' }
  ];

  // Filtering outlets based on custom categories
  const filteredOutlets = OUTLETS.filter((outlet) => {
    if (selectedCity === 'all') return true;
    if (selectedCity === 'Jakarta') return outlet.city === 'Jakarta';
    if (selectedCity === 'Depok') return outlet.city === 'Depok';
    if (selectedCity === 'CentralJava') return outlet.city === 'Wonogiri' || outlet.city === 'Sragen';
    return true;
  });

  // Icon mapping helper for amenities
  const getAmenityIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('ac')) return <Sparkles size={14} className="text-blue-500" />;
    if (n.includes('parkir') || n.includes('bis')) return <Car size={14} className="text-amber-500" />;
    if (n.includes('wifi')) return <Wifi size={14} className="text-indigo-500" />;
    if (n.includes('qris') || n.includes('debit')) return <CreditCard size={14} className="text-emerald-500" />;
    if (n.includes('lesehan') || n.includes('pendopo')) return <Coffee size={14} className="text-orange-500" />;
    return <Compass size={14} className="text-stone-500" />;
  };

  const handleSelectOutlet = (outlet: OutletLocation) => {
    setActiveOutlet(outlet);
  };

  return (
    <section id="locations" className="py-20 bg-white relative border-b-8 border-brand-slate-dark">
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-xl mx-auto mb-16">
          <span className="text-brand-cream bg-brand-red border-2 border-brand-slate-dark text-xs uppercase px-4 py-2 font-black tracking-widest shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block mb-4">
            DESTINASI KULINER
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-brand-slate-dark tracking-tight leading-tight uppercase font-sans">
            WARUNG LEGENDARIS TERDEKAT
          </h2>
          <p className="text-stone-700 text-xs md:text-sm mt-3 font-semibold leading-relaxed">
            Temukan kenyamanan bersantap bersama keluarga di outlet-outlet resmi kami yang bersih, sejuk, ramah anak, dan berkapasitas besar.
          </p>
          <div className="h-2 w-28 bg-brand-yellow mx-auto mt-4 border-y-2 border-brand-slate-dark" />
        </div>

        {/* City Selectors */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {citiesList.map((city) => (
            <button
              key={city.value}
              onClick={() => {
                setSelectedCity(city.value);
                // Reset active outlet to the first matching filtered outlet
                const firstMatch = OUTLETS.find(o => 
                  city.value === 'all' || 
                  (city.value === 'Jakarta' && o.city === 'Jakarta') ||
                  (city.value === 'Depok' && o.city === 'Depok') ||
                  (city.value === 'CentralJava' && (o.city === 'Wonogiri' || o.city === 'Sragen'))
                );
                if (firstMatch) setActiveOutlet(firstMatch);
              }}
              className={`px-5 py-3 border-2 border-brand-slate-dark rounded-none text-xs font-black transition-all tracking-widest uppercase ${
                selectedCity === city.value
                  ? 'bg-brand-red text-brand-cream shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                  : 'bg-white text-stone-700 hover:bg-brand-yellow shadow-[3px_3px_1px_0px_rgba(15,23,42,0.3)]'
              }`}
            >
              {city.label}
            </button>
          ))}
        </div>

        {/* Outlet Core Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Outlet List Panel */}
          <div className="lg:col-span-12 lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            <AnimatePresence mode="popLayout">
              {filteredOutlets.map((outlet) => {
                const isSelected = activeOutlet.id === outlet.id;
                return (
                  <motion.div
                    layout
                    key={outlet.id}
                    onClick={() => handleSelectOutlet(outlet)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`p-5 rounded-none border-4 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-brand-yellow/10 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(185,28,28,1)]'
                        : 'bg-white border-brand-slate-dark/45 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:border-brand-slate-dark'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`font-black text-base uppercase transition-colors tracking-tight ${
                          isSelected ? 'text-brand-red' : 'text-brand-slate-dark'
                        }`}>
                          {outlet.name}
                        </h3>
                        <span className={`px-2 py-0.5 rounded-none text-[10px] font-black uppercase font-mono border-2 border-brand-slate-dark shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] ${
                          outlet.city === 'Jakarta' || outlet.city === 'Depok'
                            ? 'bg-brand-yellow-light text-brand-slate-dark'
                            : 'bg-brand-red text-white'
                        }`}>
                          {outlet.city}
                        </span>
                      </div>

                      {/* Info lines */}
                      <p className="text-stone-700 font-semibold text-xs flex items-start gap-1.5 leading-relaxed line-clamp-2">
                        <MapPin size={14} className="text-brand-red flex-shrink-0 mt-0.5" />
                        {outlet.address}
                      </p>

                      <div className="flex items-center justify-between text-[10px] text-brand-slate-dark font-black uppercase tracking-tight pt-1">
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-brand-red" />
                          {outlet.hours}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone size={12} className="text-brand-red" />
                          {outlet.phone}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right: Active Outlet Detailed Map Simulation view panel */}
          <div className="lg:col-span-12 lg:col-span-7 bg-brand-cream border-4 border-brand-slate-dark p-6 md:p-8 rounded-none flex flex-col justify-between space-y-6 shadow-[8px_8px_0px_0px_rgba(185,28,28,1)]">
            
            {/* Header info */}
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-black text-brand-slate-dark uppercase tracking-widest font-mono flex items-center gap-1.5 bg-brand-yellow border-2 border-brand-slate-dark px-3 py-1.5 rounded-none w-fit shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                <Compass size={14} className="text-brand-red animate-spin-slow" />
                SAMBUT KEHANGATAN RASA DI SINI
              </span>
              <h3 className="font-black text-brand-slate-dark text-xl md:text-3xl tracking-tight leading-none uppercase italic">
                {activeOutlet.name}
              </h3>
              <p className="text-stone-700 font-semibold text-xs md:text-sm leading-relaxed border-l-4 border-brand-red pl-4">
                {activeOutlet.address}
              </p>
            </div>

            {/* Simulated interactive minimalist vector direction map illustration */}
            <div className="bg-stone-100 rounded-none overflow-hidden aspect-[16/9] border-4 border-brand-slate-dark relative flex items-center justify-center select-none shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              
              {/* Fake aesthetic coordinate abstract grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
              
              {/* Fake stylized streets */}
              <div className="absolute top-[25%] left-0 right-0 h-4 bg-white border-y-2 border-brand-slate-dark" />
              <div className="absolute top-0 bottom-0 left-[35%] w-6 bg-white border-x-2 border-brand-slate-dark" />
              <div className="absolute top-1/2 bottom-0 right-[20%] w-5 bg-white border-x-2 border-brand-slate-dark rotate-12" />
              
              {/* Fake location pins */}
              <div className="absolute top-[45%] left-[32%] z-10 flex flex-col items-center">
                <div className="bg-brand-red p-2.5 rounded-full text-brand-yellow shadow-lg animate-bounce border-2 border-brand-slate-dark">
                  <MapPin size={18} className="fill-brand-red stroke-brand-slate-dark" />
                </div>
                <div className="bg-brand-slate-dark text-brand-yellow text-[9px] font-black px-2 py-1 mt-1 border border-brand-slate-dark tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  BAKSO TITOTI
                </div>
              </div>

              {/* Decorative side indicators */}
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 border-2 border-brand-slate-dark text-[10px] space-y-1 block shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-sans">
                <p className="font-black text-brand-slate-dark uppercase">📌 Panduan Akses:</p>
                <p className="text-stone-700 font-semibold font-sans">Cabang Terverifikasi & Lahan Parkir</p>
              </div>

              <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1.5 border border-brand-slate-dark">
                BUKA TIAP HARI
              </div>
            </div>

            {/* Amenities listing as badges */}
            <div className="space-y-2 pt-2">
              <h4 className="font-black text-brand-slate-dark text-xs uppercase tracking-tight">Fasilitas & Layanan Kami:</h4>
              <div className="flex flex-wrap gap-2">
                {activeOutlet.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 bg-white border-2 border-brand-slate-dark rounded-none py-1.5 px-3.5 text-xs font-black uppercase tracking-tight shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] text-stone-800"
                  >
                    {getAmenityIcon(amenity)}
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Maps & Phone connection row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-brand-slate-dark/10">
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-brand-slate-dark bg-brand-yellow text-brand-slate-dark shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <Phone size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 font-extrabold uppercase font-mono leading-none mb-1">Telepon Outlet</p>
                  <p className="text-xs md:text-sm font-black text-brand-slate-dark uppercase leading-none">{activeOutlet.phone}</p>
                </div>
              </div>

              <a
                href={activeOutlet.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow hover:bg-brand-yellow-light text-brand-slate-dark font-black py-4 px-5 rounded-none border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs tracking-wider uppercase text-center flex items-center justify-center gap-1.5"
              >
                Penunjuk Arah Google Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
