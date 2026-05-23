import React from 'react';
import { Heart, Utensils, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-slate-dark text-stone-300 pt-16 pb-8 border-t-8 border-brand-red relative overflow-hidden">
      {/* Absolute top grid line accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Branding block */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <span className="bg-brand-red p-2 border-2 border-brand-yellow rounded-none flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                <span className="text-brand-cream font-black text-sm tracking-widest font-sans">BT</span>
              </span>
              <span className="text-xl font-black font-serif tracking-tight text-brand-cream uppercase italic">
                BAKSO <span className="text-brand-yellow">TITOTI</span>
              </span>
            </div>
            
            <p className="text-xs text-stone-300 leading-relaxed font-semibold uppercase tracking-tight">
              Pelopor bakso urat sapi murni khas Kabupaten Wonogiri dengan resep legendaris rahasia keluarga sejak era tahun 1971. Kenyal alami tanpa pengawet kimia.
            </p>

            <div className="flex items-center gap-1.5 bg-brand-red border-2 border-brand-yellow p-2 rounded-none w-fit shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <ShieldCheck size={14} className="text-brand-yellow" />
              <span className="text-[9px] text-white font-black uppercase tracking-widest font-mono">
                100% HALAL CERTIFIED
              </span>
            </div>
          </div>

          {/* Col 2: Navigation map quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-yellow uppercase tracking-widest font-mono border-b-2 border-white/10 pb-1">PETA SITUS</h4>
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => handleScrollTo('home')}
                className="text-xs text-stone-300 hover:text-brand-yellow transition-colors text-left font-black uppercase tracking-tight cursor-pointer"
              >
                Beranda Depan
              </button>
              <button
                onClick={() => handleScrollTo('about')}
                className="text-xs text-stone-300 hover:text-brand-yellow transition-colors text-left font-black uppercase tracking-tight cursor-pointer"
              >
                Kisah & Warisan Wonogiri
              </button>
              <button
                onClick={() => handleScrollTo('menu')}
                className="text-xs text-stone-300 hover:text-brand-yellow transition-colors text-left font-black uppercase tracking-tight cursor-pointer"
              >
                Menu Bakso & Mie Ayam
              </button>
              <button
                onClick={() => handleScrollTo('locations')}
                className="text-xs text-stone-300 hover:text-brand-yellow transition-colors text-left font-black uppercase tracking-tight cursor-pointer"
              >
                Daftar Outlet Cabang
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="text-xs text-stone-300 hover:text-brand-yellow transition-colors text-left font-black uppercase tracking-tight cursor-pointer"
              >
                Katering & Hubungi Kami
              </button>
            </div>
          </div>

          {/* Col 3: Outlets brief listing */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-yellow uppercase tracking-widest font-mono border-b-2 border-white/10 pb-1">KANTOR & CABANG UTAMA</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-black text-brand-cream flex items-center gap-1 uppercase tracking-tight">
                  <MapPin size={12} className="text-brand-red" />
                  Wonogiri (Pusat)
                </p>
                <p className="text-[10px] text-stone-300 leading-relaxed mt-1 font-semibold uppercase tracking-tight">
                  Jl. Raya Wonogiri-Ponorogo KM 3, Ngadirojo, Wonogiri, Jawa Tengah.
                </p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs font-black text-brand-cream flex items-center gap-1 uppercase tracking-tight">
                  <MapPin size={12} className="text-brand-red" />
                  Jakarta Barat
                </p>
                <p className="text-[10px] text-stone-300 leading-relaxed mt-1 font-semibold uppercase tracking-tight">
                  Jl. Raya Kebon Jeruk No.44, Sukabumi Utara, Kebon Jeruk, Jakarta Barat.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Online Orders Delivery partners */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-brand-yellow uppercase tracking-widest font-mono border-b-2 border-white/10 pb-1">PESAN ANTAR ONLINE</h4>
            <p className="text-xs text-stone-300 leading-relaxed font-semibold uppercase tracking-tight">
              Kunjungi aplikasi layanan favorit Anda untuk menikmati sajian hangat Bakso Titoti langsung di rumah Anda:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-black uppercase tracking-widest text-brand-cream font-mono">
              <span className="bg-white/5 border-2 border-white/15 px-3 py-2 rounded-none text-center">GrabFood</span>
              <span className="bg-white/5 border-2 border-white/15 px-3 py-2 rounded-none text-center">GoFood</span>
              <span className="bg-white/5 border-2 border-white/15 px-3 py-2 rounded-none text-center">ShopeeFood</span>
              <span className="bg-white/5 border-2 border-white/15 px-3 py-2 rounded-none text-center flex items-center justify-center gap-1">
                WhatsApp
                <ExternalLink size={10} />
              </span>
            </div>
          </div>

        </div>

        {/* Brand credit and copyright line */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Bakso Titoti Wonogiri. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest inline-flex items-center justify-center gap-1">
            Dibuat penuh rasa cinta di Wonogiri <Heart size={10} className="fill-brand-red stroke-none" /> untuk Indonesia
          </p>
        </div>

      </div>
    </footer>
  );
}
