import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, ChevronRight, History } from 'lucide-react';

export default function About() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  const timelineData = [
    {
      year: '1971',
      title: 'Pikulan Sederhana',
      description: 'Bapak Sugarno memulai usahanya dari kota Ngadirojo, Wonogiri dengan memikul keranjang bambu tradisional berkeliling kampung menjajakan bakso sapi hangat buatan tangannya sendiri.'
    },
    {
      year: '1982',
      title: 'Merantau ke Jakarta',
      description: 'Dengan tekad besar dan resep orisinal yang semakin sempurna, beliau merantau ke Jakarta membawa gerobak pertama, berjualan di area Kebon Jeruk yang legendaris.'
    },
    {
      year: '1995',
      title: 'Kios Cabang Utama',
      description: 'Mendirikan depot makan permanen pertama dengan nama "Bakso Titoti", diambil dari gabungan nama buah hatinya. Cita rasa bakso urat yang padat dan gurih mulai viral.'
    },
    {
      year: '2010',
      title: 'Ekspansi Antar Kota',
      description: 'Cabang-cabang baru resmi dibuka di area Depok, Solo, Sragen, dan Tangerang untuk memenuhi kerinduan para pecinta kuliner Wonogiri akan cita rasa asli tradisi jawa.'
    },
    {
      year: '2026',
      title: 'Melegenda Selamanya',
      description: 'Kini dikelola oleh generasi kedua dengan tetap mempertahankan resep kaldu purba serta kuantitas daging sapi segar 100% murni tanpa reduksi kualitas sedikit pun.'
    }
  ];

  const valueHighlights = [
    {
      icon: <Award className="text-brand-red w-6 h-6" />,
      title: 'Daging Pilihan Segar',
      desc: 'Hanya menggunakan karkas daging sapi belakang prima yang dipotong subuh hari untuk kesegaran dan kekenyalan bakso alami maksimal.'
    },
    {
      icon: <ShieldCheck className="text-brand-red w-6 h-6" />,
      title: 'Tanpa Bahan Kimia',
      desc: 'Sama sekali bebas dari boraks, formalin, pengawet, maupun pengering kimiawi. Aman dan sehat disantap oleh seluruh anggota keluarga.'
    },
    {
      icon: <Sparkles className="text-brand-red w-6 h-6" />,
      title: 'Warisan Kaldu Purba',
      desc: 'Kuah kaldu direbus perlahan bersama sumsum dan tulang iga sapi selama 8 jam nonstop di setiap outlet untuk sari pati gurih alami.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative border-b-8 border-brand-slate-dark">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section - sharp theme */}
        <div className="text-center md:max-w-3xl mx-auto mb-16">
          <span className="text-brand-cream bg-brand-red border-2 border-brand-slate-dark text-xs uppercase px-4 py-2 font-black tracking-widest shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block mb-4">
            KISAH RASA SEJAK 1971
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-brand-slate-dark tracking-tight leading-tight uppercase">
            WARISAN AUTENTIK WONOGIRI YANG TERAJUT DALAM BULATAN RINDU
          </h2>
          <div className="h-2 w-28 bg-brand-yellow mx-auto mt-4 border-y-2 border-brand-slate-dark" />
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-black text-brand-slate-dark font-sans leading-tight uppercase italic border-l-4 border-brand-red pl-4">
              Dari Keranjang Pikul Bambu Menuju Meja Makan Nusantara
            </h3>
            <p className="text-stone-700 leading-relaxed font-semibold text-sm md:text-base">
              Nama <strong>"Titoti"</strong> bukanlah nama asing bagi pecinta kuliner bakso urat di Indonesia. Bapak Sugarno meracik setiap bulatan bakso uratnya dengan memadukan kekenyalan serat otot sapi pilihan serta bumbu bawang putih goreng rahasia yang harum.
            </p>
            <p className="text-stone-700 leading-relaxed font-normal text-xs md:text-sm">
              Di Wonogiri, tradisi membuat bakso diwariskan dari ayah ke anak dengan kebanggaan tinggi. Keistimewaan Bakso Titoti terletak pada kejujuran resep: kuah sup yang bening, bersih, bebas dari minyak berlebih, namun menyemburkan aroma kaldu sapi murni saat pertama kali diseruput panas-panas dari mangkuknya.
            </p>
            
            {/* Visual Callout block - sharp with box-shadow */}
            <div className="p-6 rounded-none bg-brand-yellow/10 border-4 border-brand-slate-dark relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(185,28,28,1)]">
              <span className="absolute -right-6 -bottom-6 text-brand-yellow/30 font-serif font-black text-8xl pointer-events-none select-none">
                1971
              </span>
              <p className="text-brand-red font-black text-base uppercase tracking-wider mb-2 inline-flex items-center gap-1.5 z-10 relative">
                <Heart className="fill-brand-red stroke-brand-slate-dark w-5 h-5" />
                "Cita rasa yang jujur"
              </p>
              <p className="text-stone-800 text-xs md:text-sm italic font-medium leading-relaxed z-10 relative">
                Kami selalu menyajikan kualitas kualitas rasa yang konsisten. Hingga detik ini kami terus menjaga berat takaran adonan daging sapi yang sama persis seperti yang diresepkan oleh Bapak Sugarno puluhan tahun silam.
              </p>
            </div>
          </div>

          {/* Timeline Interactables - block outline */}
          <div className="lg:col-span-6 bg-brand-cream border-4 border-brand-slate-dark p-6 md:p-8 rounded-none shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
            <div className="flex items-center gap-2 mb-6">
              <History className="text-brand-red w-5 h-5 animate-pulse" />
              <h4 className="font-black text-brand-slate-dark text-lg uppercase tracking-wider">Garasi Waktu Tradisi Tradisional</h4>
            </div>

            {/* Horizontal progress lines */}
            <div className="flex justify-between items-center relative mb-8 px-2">
              <div className="absolute left-0 right-0 h-1.5 bg-brand-slate-dark top-1/2 -translate-y-1/2 z-0" />
              {timelineData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimelineIdx(index)}
                  className={`relative z-10 px-3 py-1.5 rounded-none font-black text-xs transition-all duration-200 border-2 border-brand-slate-dark ${
                    activeTimelineIdx === index
                      ? 'bg-brand-red text-brand-cream scale-110 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                      : 'bg-white text-brand-slate-dark hover:bg-brand-yellow hover:scale-105 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Interactive timeline description box - sharp outline */}
            <div className="bg-white p-5 rounded-none border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] min-h-[140px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimelineIdx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  <p className="font-mono text-brand-red font-black text-xs uppercase tracking-widest">
                    FASE {activeTimelineIdx + 1} &bull; TAHUN {timelineData[activeTimelineIdx].year}
                  </p>
                  <h5 className="font-black text-brand-slate-dark text-lg uppercase tracking-tight">
                    {timelineData[activeTimelineIdx].title}
                  </h5>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                    {timelineData[activeTimelineIdx].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Dynamic Highlight Cards - bold grids and boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueHighlights.map((val, idx) => (
            <div
              key={idx}
              className="bg-brand-cream border-4 border-brand-slate-dark p-6 md:p-8 rounded-none shadow-[6px_6px_0px_0px_rgba(185,28,28,1)] hover:bg-white transition-all flex flex-col space-y-4"
            >
              <div className="bg-white rounded-none border-2 border-brand-slate-dark p-3 w-fit shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                {val.icon}
              </div>
              <h4 className="font-black text-brand-slate-dark text-lg uppercase tracking-tight">{val.title}</h4>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
