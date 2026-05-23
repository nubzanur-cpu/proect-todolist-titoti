import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Phone, Sparkles, HelpCircle, ChevronDown, Calculator, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { FAQ_QUESTIONS } from '../data';

export default function HoursAndContact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Catering Calculator states
  const [eventType, setEventType] = useState<string>('arisan');
  const [portions, setPortions] = useState<number>(100);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [showFormSuccess, setShowFormSuccess] = useState<boolean>(false);

  // FAQ Accordion Toggle
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Catering Price calculation logic
  const pricePerPortion = 25000; // special catering price rate
  const rawTotal = portions * pricePerPortion;
  const discountRate = portions >= 500 ? 0.12 : portions >= 250 ? 0.08 : portions >= 150 ? 0.05 : 0;
  const discountSum = rawTotal * discountRate;
  const finalTotal = rawTotal - discountSum;

  const handleCateringContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    const formattedTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(finalTotal);
    const formattedUnitPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pricePerPortion);

    const message = `Halo Admin Katering Bakso Titoti! 🎪\n\nSaya ingin berkonsultasi mengenai pesanan katering:\n\n👤 Nama Pengguna: *${clientName}*\n📞 No. Whatsapp: *${clientPhone}*\n🎈 Acara: *Catering ${eventType.toUpperCase()}*\n📊 Estimasi: *${portions} Porsi*\n💵 Harga Per Porsi: *${formattedUnitPrice}*\n🎁 Potongan Diskon: *${discountRate * 100}%*\n💰 Estimasi Total: *${formattedTotal}*\n\nMohon hubungi saya kembali untuk mendiskusikan detil menu dan pramusajinya. Terima kasih!`;
    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281329458822?text=${encodedMsg}`;

    window.open(waUrl, '_blank', 'noreferrer');
    setShowFormSuccess(true);
    setTimeout(() => {
      setShowFormSuccess(false);
      setClientName('');
      setClientPhone('');
    }, 5000);
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="contact" className="py-20 bg-brand-cream/40 relative border-b-8 border-brand-slate-dark">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Opening Hours Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20 bg-white rounded-none border-4 border-brand-slate-dark p-6 md:p-10 relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/15 blur-xl pointer-events-none" />
          
          {/* Opening info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-brand-cream bg-brand-red border-2 border-brand-slate-dark text-xs uppercase px-4 py-2 font-black tracking-widest shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block mb-3">
                WAKTU OPERASIONAL
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black font-serif text-brand-slate-dark tracking-tight leading-none uppercase italic">
              Kami Selalu Siap Menyajikan Kehangatan
            </h3>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-semibold">
              Seluruh warung cabang Bakso Titoti Wonogiri buka setiap hari, termasuk hari libur nasional dan akhir pekan. Datanglah lebih awal untuk menghindari antrean panjang jam makan malam!
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3.5 p-4 rounded-none bg-brand-cream border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <Clock className="text-brand-red w-6 h-6 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="text-brand-slate-dark font-black text-sm md:text-base uppercase tracking-tight">Senin - Minggu (Buka Tiap Hari)</p>
                  <p className="text-stone-700 text-xs font-semibold uppercase font-mono tracking-tight">Reguler: 10:00 - 21:30 WIB (Cabang Jakarta/Depok)</p>
                  <p className="text-stone-700 text-xs font-semibold uppercase font-mono tracking-tight">Pusat Wonogiri: 09:00 - 21:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening board illustration styling */}
          <div className="lg:col-span-7 bg-brand-red text-brand-cream p-6 md:p-8 rounded-none border-4 border-brand-slate-dark shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-brand-red-dark rounded-full opacity-60 pointer-events-none" />
            
            <div className="space-y-4">
              <h4 className="font-serif font-black text-xl text-brand-yellow tracking-widest uppercase">INFORMASI PENTING HARI INI:</h4>
              <p className="text-xs md:text-sm leading-relaxed text-brand-cream/90 font-bold uppercase tracking-tight">
                Pencincangan daging sapi murni dilakukan mandiri 3 kali sehari (Subuh, Siang, Sore) untuk menjamin kesegaran bulatan bakso yang dipesan di meja makan Anda. Kuah kaldu disajikan tanpa penyedap berlebih sehingga aman untuk balita maupun lansia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t-2 border-brand-cream/20">
              <div>
                <p className="text-brand-yellow font-mono text-[10px] tracking-widest uppercase font-black">Sajian Utama</p>
                <p className="text-sm font-black text-white mt-0.5 uppercase tracking-wide">Segar & Panas</p>
              </div>
              <div>
                <p className="text-brand-yellow font-mono text-[10px] tracking-widest uppercase font-black">Pengolahan Daging</p>
                <p className="text-sm font-black text-white mt-0.5 uppercase tracking-wide">Higienis & Halal</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower FAQs and Catering Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section left FAQ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <HelpCircle className="text-brand-red w-8 h-8" />
              <h3 className="text-2xl md:text-3xl font-black font-serif text-brand-slate-dark tracking-tight uppercase leading-none italic">
                Pertanyaan yang Sering Diajukan
              </h3>
              <p className="text-stone-700 text-xs md:text-sm font-semibold leading-relaxed">
                Berikut jawaban atas segala keingintahuan Anda tentang resep warisan dan cabang Bakso Titoti.
              </p>
            </div>

            {/* Accordion FAQ lines */}
            <div className="space-y-3 pt-2">
              {FAQ_QUESTIONS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-brand-slate-dark rounded-none overflow-hidden transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 hover:bg-brand-cream/30 cursor-pointer transition-colors"
                    >
                      <span className="font-black text-brand-slate-dark text-xs md:text-sm leading-snug uppercase tracking-tight">
                        {faq.q}
                      </span>
                      <span className={`p-1.5 border border-brand-slate-dark rounded-none bg-brand-cream text-brand-red transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-red text-white' : ''
                      }`}>
                        <ChevronDown size={14} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 pt-0 border-t-2 border-brand-slate-dark/10 bg-brand-cream/10">
                            <p className="text-stone-700 text-xs md:text-sm mt-3.5 leading-relaxed font-semibold">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section right Catering Calculator */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-none border-4 border-brand-slate-dark shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative">
            <div className="absolute top-4 right-4 bg-brand-yellow border-2 border-brand-slate-dark text-brand-slate-dark p-2 rounded-none shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              <Calculator size={18} strokeWidth={2.5} />
            </div>

            <div className="space-y-1 mb-6">
              <h3 className="font-black text-brand-slate-dark font-serif text-lg md:text-2xl uppercase tracking-tight leading-none italic">
                Kalkulator Katering & Hajatan
              </h3>
              <p className="text-stone-700 text-xs font-semibold">
                Dapatkan estimasi penawaran harga diskon khusus untuk kuota besar secara instan.
              </p>
            </div>

            {/* Catering Calculator Forms list */}
            <form onSubmit={handleCateringContact} className="space-y-4">
              
              {/* Event Type selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-brand-slate-dark uppercase tracking-wider block">Tipe Hajatan / Acara</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-stone-50 border-2 border-brand-slate-dark rounded-none px-4 py-2.5 text-xs md:text-sm text-stone-800 font-black uppercase tracking-wider focus:outline-none"
                >
                  <option value="pernikahan">Pesta Pernikahan (Resepsi)</option>
                  <option value="kantor">Corporate / Gathering Kantor</option>
                  <option value="khitanan">Pesta Khitanan / Syukuran Rumah</option>
                  <option value="arisan">Arisan Keluarga / Reuni Sekolah</option>
                </select>
              </div>

              {/* Portions range controller */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black text-brand-slate-dark uppercase tracking-wider">Estimasi Jumlah Porsi</label>
                  <span className="text-xs font-black text-white bg-brand-red px-2.5 py-1 rounded-none border-2 border-brand-slate-dark shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-mono">
                    {portions} Porsi
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={1000}
                  step={50}
                  value={portions}
                  onChange={(e) => setPortions(parseInt(e.target.value))}
                  className="w-full accent-brand-red h-2 bg-stone-100 rounded-none border border-brand-slate-dark cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-stone-500 font-black uppercase tracking-tight">
                  <span>Min: 50 porsi</span>
                  <span>Diskon 5% (&gt;150)</span>
                  <span>Diskon 8% (&gt;250)</span>
                  <span>Diskon 12% (&gt;500)</span>
                </div>
              </div>

              {/* Live Quotation Summary panel card */}
              <div className="bg-brand-cream border-2 border-brand-slate-dark rounded-none p-4 md:p-5 grid grid-cols-2 gap-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <div>
                  <p className="text-[10px] text-stone-500 font-extrabold uppercase tracking-widest leading-none mb-1">Harga Per Porsi</p>
                  <p className="text-xs md:text-sm font-black text-brand-slate-dark">{formatIDR(pricePerPortion)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 font-extrabold uppercase tracking-widest leading-none mb-1">Potongan Diskon</p>
                  <p className="text-xs md:text-sm font-black text-green-700">
                    {discountRate > 0 ? `${discountRate * 100}% (-${formatIDR(discountSum)})` : '0% (Tanpa Diskon)'}
                  </p>
                </div>
                <div className="col-span-2 pt-2.5 border-t-2 border-brand-slate-dark/10">
                  <p className="text-[10px] text-stone-500 font-extrabold uppercase tracking-widest leading-none mb-1">Estimasi Total Biaya</p>
                  <p className="text-xl md:text-2xl font-black text-brand-red font-sans leading-none">{formatIDR(finalTotal)}</p>
                </div>
              </div>

              {/* Informational inputs to make submitting valid */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <input
                      type="text"
                      required
                      placeholder="NAMA ANDA"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-stone-50 border-2 border-brand-slate-dark rounded-none px-3.5 py-2.5 text-xs font-black uppercase text-stone-800 placeholder-stone-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="tel"
                      required
                      placeholder="NO. WHATSAPP ANDA"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-stone-50 border-2 border-brand-slate-dark rounded-none px-3.5 py-2.5 text-xs font-black uppercase text-stone-800 placeholder-stone-400 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-black text-xs uppercase tracking-widest border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} className="fill-white stroke-none" />
                  Hubungi Admin Katering via WA
                </button>
              </div>

              {/* Interactive Submission Success Toast simulation inside block */}
              <AnimatePresence>
                {showFormSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 bg-emerald-50 border-2 border-emerald-600 text-emerald-800 rounded-none flex items-center gap-2.5 shadow-[2px_2px_0px_0px_rgba(16,185,129,1)]"
                  >
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 animate-bounce" />
                    <p className="text-[11px] font-black uppercase tracking-tight">
                      Berhasil membuka formulir WhatsApp katering Anda. Silakan lanjutkan pesan di aplikasi WhatsApp!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
