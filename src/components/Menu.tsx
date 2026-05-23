import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Plus, Minus, Check, MessageCircle, X, Sparkles, Star } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Modal customization states
  const [quantity, setQuantity] = useState<number>(1);
  const [sambalLevel, setSambalLevel] = useState<string>('Sedang'); // Normal, Sedang, Pedas, Super Pedas
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [specialNotes, setSpecialNotes] = useState<string>('');

  const menuCategories = [
    { value: 'all', label: 'Semua Menu' },
    { value: 'bakso', label: 'Bakso Sapi' },
    { value: 'mie', label: 'Mie Ayam Wonogiri' },
    { value: 'minuman', label: 'Aneka Es Segar' },
    { value: 'side', label: 'Sampingan & Camilan' }
  ];

  const addonsList = [
    { id: 'add_tetelan', name: 'Ekstra Tetelan Daging Sapi', price: 6000 },
    { id: 'add_ceker', name: 'Ekstra Ceker Empuk', price: 4000 },
    { id: 'add_tahu', name: 'Satu Tahu Bakso', price: 4000 },
    { id: 'add_kerupuk', name: 'Ekstra Kerupuk Pangsit', price: 2000 }
  ];

  // Filtering Menu items
  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Open Modal logic
  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSambalLevel('Sedang');
    setSelectedAddons([]);
    setSpecialNotes('');
  };

  // Toggle addons
  const handleToggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculate current item total price
  const calcItemTotal = useMemo(() => {
    if (!selectedItem) return 0;
    const basePrice = selectedItem.price;
    const addonsPrice = selectedAddons.reduce((acc, currentId) => {
      const addon = addonsList.find(a => a.id === currentId);
      return acc + (addon ? addon.price : 0);
    }, 0);
    return (basePrice + addonsPrice) * quantity;
  }, [selectedItem, selectedAddons, quantity]);

  // Handle Order Submit via WhatsApp API
  const handlePlaceOrder = () => {
    if (!selectedItem) return;

    const addonsNames = selectedAddons
      .map(id => addonsList.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(calcItemTotal);

    const message = `Halo Bakso Titoti Wonogiri! 👋\n\nSaya mau pesan menu melalui website:\n\n🍜 *${selectedItem.name}*\n- Qty: *${quantity} porsi*\n- Sambal: *${sambalLevel}*\n${addonsNames ? `- Ekstra: *${addonsNames}*\n` : ''}${specialNotes ? `- Catatan: _${specialNotes}_\n` : ''}\n💵 Total Estimasi: *${formattedPrice}*\n\nMohon dikonfirmasi pesanannya ya. Terima kasih!`;
    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281329458822?text=${encodedMsg}`; // Autentik Wonogiri Wa Number (simulated standard link)
    
    window.open(waUrl, '_blank', 'noreferrer');
  };

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="menu" className="py-20 bg-brand-cream/30 relative border-b-8 border-brand-slate-dark">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 blur-3xl rounded-full translate-x-24 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center md:max-w-xl mx-auto mb-12">
          <span className="text-brand-cream bg-brand-red border-2 border-brand-slate-dark text-xs uppercase px-4 py-2 font-black tracking-widest shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block mb-4">
            MENU UNGGULAN KAMI
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-brand-slate-dark tracking-tight leading-tight uppercase">
            SENSASI BULATAN KENYAL & KUAH ISTIMEWA
          </h2>
          <p className="text-stone-700 text-xs md:text-sm mt-3 font-semibold leading-relaxed">
            Setiap racikan dimasak hangat sekuat dedikasi Wonogiri kami. Pilih menu kesukaanmu di bawah ini untuk memulai simulasi pesananmu.
          </p>
          <div className="h-2 w-28 bg-brand-yellow mx-auto mt-4 border-y-2 border-brand-slate-dark" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          
          {/* Categories Tab Buttons */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x -mx-4 px-4 lg:mx-0 lg:px-0">
            {menuCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-3 rounded-none text-xs font-black whitespace-nowrap tracking-widest uppercase snap-center cursor-pointer border-2 border-brand-slate-dark transition-all duration-150 ${
                  selectedCategory === cat.value
                    ? 'bg-brand-red text-brand-cream shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                    : 'bg-white text-stone-700 hover:text-brand-red hover:bg-brand-yellow shadow-[3px_3px_1px_0px_rgba(15,23,42,0.3)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Real-time search Box */}
          <div className="relative w-full lg:max-w-xs flex-shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-500">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="CARI MENU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-brand-slate-dark rounded-none pl-10 pr-4 py-2.5 text-xs font-black uppercase tracking-wider focus:outline-none placeholder-stone-400 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredMenuItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMenuItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                onClick={() => handleOpenModal(item)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-none border-4 border-brand-slate-dark shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden flex flex-col group cursor-pointer relative"
              >
                {/* Popular Badge overlay */}
                {item.isPopular && (
                  <div className="absolute top-4 left-4 z-10 bg-brand-yellow text-brand-slate-dark font-black text-[10px] tracking-widest uppercase px-3 py-1.5 border-2 border-brand-slate-dark shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] rounded-none flex items-center gap-1">
                    <Sparkles size={10} className="fill-brand-red stroke-none animate-pulse" />
                    Terlaris
                  </div>
                )}

                {/* Card thumbnail container */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-100 border-b-4 border-brand-slate-dark">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card description text details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-black text-brand-slate-dark group-hover:text-brand-red transition-colors text-base md:text-lg leading-snug uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-stone-600 text-xs line-clamp-2 md:line-clamp-3 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and Action overlay bottom row */}
                  <div className="flex items-center justify-between pt-3 border-t-2 border-brand-slate-dark/10">
                    <p className="text-brand-red font-black text-lg font-sans">
                      {formatIDR(item.price)}
                    </p>
                    <span className="bg-brand-yellow text-brand-slate-dark p-2 border-2 border-brand-slate-dark rounded-none transform group-hover:scale-105 group-hover:bg-brand-red group-hover:text-white transition-all text-xs font-black uppercase flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] group-hover:shadow-none">
                      <Plus size={12} strokeWidth={3} />
                      PESAN
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-none border-4 border-dashed border-brand-slate-dark">
            <p className="text-stone-700 font-bold">Tidak ada menu yang cocok dengan pencarian Anda.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-6 py-2.5 bg-brand-red text-white text-xs font-black uppercase tracking-widest border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none transition-all"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

      </div>

      {/* Modal - Configurator Drawer Backdrop */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 bg-brand-slate-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-none overflow-hidden shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] max-w-2xl w-full max-h-[90vh] flex flex-col border-4 border-brand-slate-dark"
            >
              
              {/* Image & Header content with close button */}
              <div className="relative aspect-[16/7] bg-stone-100 flex-shrink-0 border-b-4 border-brand-slate-dark">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-brand-red border-2 border-brand-slate-dark text-white p-2 rounded-none hover:bg-brand-red-dark cursor-pointer transition-colors z-10 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark via-brand-slate-dark/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-black text-brand-yellow bg-brand-slate-dark px-2.5 py-1 border border-brand-slate-dark inline-block mb-1">
                    {selectedItem.category === 'bakso' ? 'Kategori Bakso Wonogiri' : 'Hidangan Mie & Lainnya'}
                  </span>
                  <h3 className="text-xl md:text-3xl font-black tracking-tight text-white uppercase italic leading-none">
                    {selectedItem.name}
                  </h3>
                </div>
              </div>

              {/* Form Content body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
                <div>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">{selectedItem.description}</p>
                </div>

                {/* Step 1: Quantity selector */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-brand-slate-dark/10">
                  <div>
                    <h4 className="font-black text-brand-slate-dark text-sm uppercase tracking-tight">Tentukan Jumlah Porsi</h4>
                    <p className="text-xs text-stone-500 font-medium">Sesuaikan dengan porsi makan Anda</p>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-brand-cream border-2 border-brand-slate-dark p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="w-8 h-8 bg-white border border-brand-slate-dark hover:bg-brand-red hover:text-white transition-colors flex items-center justify-center text-brand-slate-dark font-black disabled:opacity-40"
                    >
                      <Minus size={12} strokeWidth={3} />
                    </button>
                    <span className="font-black text-brand-slate-dark text-sm w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-white border border-brand-slate-dark hover:bg-brand-yellow transition-colors flex items-center justify-center text-brand-slate-dark font-black"
                    >
                      <Plus size={12} strokeWidth={3} />
                    </button>
                  </div>
                </div>

                {/* Step 2: Sambal Level selection */}
                <div className="space-y-3 pb-4 border-b-2 border-brand-slate-dark/10">
                  <div>
                    <h4 className="font-black text-brand-slate-dark text-sm uppercase tracking-tight">Tingkat Kepedasan Sambal</h4>
                    <p className="text-xs text-stone-500 font-medium">Resep sambal rawit khas Wonogiri asli</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Bebas Sambal', 'Sedang', 'Pedas', 'Pedas Gila'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setSambalLevel(level)}
                        className={`py-2 px-1 text-[11px] font-black uppercase tracking-wider border-2 transition-all rounded-none ${
                          sambalLevel === level
                            ? 'bg-brand-red text-white border-brand-slate-dark shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-brand-yellow hover:text-brand-slate-dark hover:border-brand-slate-dark'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Add-ons checklist */}
                <div className="space-y-3 pb-4 border-b-2 border-brand-slate-dark/10">
                  <div>
                    <h4 className="font-black text-brand-slate-dark text-sm uppercase tracking-tight">Tambahkan Ekstra (Opsional)</h4>
                    <p className="text-xs text-stone-500 font-medium font-sans">Paling nikmat ditabur di atas mangkuk panas</p>
                  </div>
                  <div className="space-y-2.5">
                    {addonsList.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleToggleAddon(addon.id)}
                          className={`flex items-center justify-between p-3.5 border-2 transition-colors cursor-pointer rounded-none ${
                            isChecked
                              ? 'bg-brand-yellow-light/30 border-brand-slate-dark shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                              : 'bg-white border-stone-300 hover:border-brand-slate-dark'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded-none flex items-center justify-center border-2 transition-all ${
                              isChecked ? 'bg-brand-red border-brand-slate-dark text-white' : 'bg-white border-stone-300'
                            }`}>
                              {isChecked && <Check size={12} strokeWidth={4} />}
                            </span>
                            <span className="text-xs md:text-sm font-black text-stone-800 uppercase tracking-tight">{addon.name}</span>
                          </div>
                          <span className="text-xs md:text-sm font-black text-brand-red">
                            +{formatIDR(addon.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Special Note textarea */}
                <div className="space-y-2">
                  <h4 className="font-black text-brand-slate-dark text-sm uppercase tracking-tight">Catatan Spesial</h4>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Tolong daun bawang dipisah, kuah dibanyakin ya kak..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-stone-50 border-2 border-stone-200 rounded-none p-3 text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-slate-dark"
                  />
                </div>

              </div>

              {/* Sticky bottom price section and CTA button */}
              <div className="p-6 bg-brand-cream border-t-4 border-brand-slate-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0">
                <div className="space-y-0.5">
                  <p className="text-xs font-black text-stone-500 uppercase tracking-widest">Estimasi Total Harga:</p>
                  <p className="text-2xl font-black text-brand-red leading-none font-sans">
                    {formatIDR(calcItemTotal)}
                  </p>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-widest border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} className="fill-white stroke-none" />
                  Kirim Pesanan ke WhatsApp
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
