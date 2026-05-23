import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, MapPin, Clock, Phone, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = ['home', 'hero', 'about', 'menu', 'locations', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Warisan Kami', href: '#about', id: 'about' },
    { name: 'Menu Juara', href: '#menu', id: 'menu' },
    { name: 'Cabang & Lokasi', href: '#locations', id: 'locations' },
    { name: 'Hubungi', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream border-b-4 border-brand-red shadow-md py-3'
          : 'bg-brand-cream/80 border-b-2 border-brand-red/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end">
          {/* Logo Brand */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex flex-col group">
              <span className="text-brand-red font-black text-2xl md:text-3xl tracking-tighter leading-none italic uppercase transition-colors group-hover:text-brand-red-dark">
                BAKSO <span className="text-brand-slate-dark group-hover:text-brand-red">TITOTI</span>
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-red-dark font-black font-mono mt-1">
                Authentic Wonogiri Heritage
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`px-3 py-1 text-xs font-black uppercase tracking-widest transition-all duration-200 border-b-2 ${
                    activeSection === link.id
                      ? 'text-brand-red border-brand-red'
                      : 'text-stone-700 hover:text-brand-red border-transparent hover:border-brand-red/30'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, 'menu')}
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-slate-dark font-black px-5 py-2.5 border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 text-xs tracking-widest uppercase flex items-center gap-1.5"
            >
              <Utensils size={13} strokeWidth={2.5} />
              Pesan Sekarang
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 text-brand-red hover:bg-brand-yellow-light/40 focus:outline-none transition-colors border-2 border-brand-red"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-brand-cream border-b-4 border-brand-red shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`block px-4 py-3 text-sm font-black uppercase tracking-widest border-l-4 ${
                activeSection === link.id
                  ? 'border-brand-red bg-brand-yellow-light/30 text-brand-red'
                  : 'border-transparent text-stone-700 hover:border-brand-red/30'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t-2 border-stone-200">
            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, 'menu')}
              className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-light text-brand-slate-dark font-black px-4 py-3.5 border-2 border-brand-slate-dark shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
            >
              <Utensils size={16} strokeWidth={2.5} />
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
