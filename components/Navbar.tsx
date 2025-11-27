import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', view: PageView.HOME },
    { label: 'La Carte', view: PageView.MENU },
    { label: 'L\'Histoire', view: PageView.HISTORY },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-cigale-teal/95 shadow-lg py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => onNavigate(PageView.HOME)}
            className="cursor-pointer group flex flex-col items-center"
          >
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-cigale-gold' : 'text-white'}`}>
              La Cigale
            </h1>
            <span className={`text-[10px] tracking-[0.3em] uppercase ${scrolled ? 'text-white' : 'text-white/80'}`}>
              Nantes • 1895
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`uppercase tracking-widest text-xs font-bold transition-all duration-300 relative py-1
                  ${currentView === item.view ? 'text-cigale-gold' : scrolled ? 'text-white hover:text-cigale-gold' : 'text-white hover:text-cigale-gold'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cigale-gold after:transition-all hover:after:w-full
                  ${currentView === item.view ? 'after:w-full' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => onNavigate(PageView.RESERVATION)}
              className={`px-6 py-2 border border-cigale-gold text-cigale-gold uppercase text-xs font-bold tracking-widest hover:bg-cigale-gold hover:text-white transition-all duration-300`}
            >
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cigale-gold transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-30 bg-cigale-teal transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              onNavigate(item.view);
              setMobileMenuOpen(false);
            }}
            className="text-2xl font-serif text-white hover:text-cigale-gold transition-colors"
          >
            {item.label}
          </button>
        ))}
        <button
           onClick={() => {
            onNavigate(PageView.RESERVATION);
            setMobileMenuOpen(false);
          }}
           className="mt-8 px-8 py-3 bg-cigale-gold text-white font-bold uppercase tracking-widest"
        >
          Réserver
        </button>
      </div>
    </nav>
  );
};

export default Navbar;