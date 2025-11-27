import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import Button from './components/Button';
import Sommelier from './components/Sommelier';
import { MENU_ITEMS, HISTORY_FACTS } from './constants';
import { PageView } from './types';
import { ChevronDown, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'seafood', label: 'Fruits de Mer' },
    { id: 'starter', label: 'Entrées' },
    { id: 'main', label: 'Plats' },
    { id: 'dessert', label: 'Desserts' }
  ];

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="La Cigale Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cigale-teal/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-cigale-gold/50 text-cigale-gold uppercase tracking-[0.4em] text-xs md:text-sm backdrop-blur-sm">
              Depuis 1895
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-lg leading-tight">
            L'Art de Vivre <br/><span className="italic text-cigale-gold font-light">à la Nantaise</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Plus qu'une brasserie, un monument. Découvrez une cuisine authentique dans un écrin Art Nouveau classé.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => setCurrentView(PageView.MENU)}>
              Découvrir la Carte
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cigale-teal" onClick={() => setCurrentView(PageView.RESERVATION)}>
              Réserver une Table
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-cigale-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-cigale-teal font-bold">
              Un joyau <span className="italic text-cigale-gold">Art Nouveau</span>
            </h2>
            <div className="w-20 h-1 bg-cigale-gold"></div>
            <p className="text-stone-600 text-lg leading-relaxed">
              Inaugurée le 1er avril 1895, La Cigale est bien plus qu'un restaurant : c'est une véritable institution. Conçue par l'architecte-céramiste Émile Libaudière, elle offre à ses convives un décor exubérant où faïences, miroirs et boiseries racontent l'histoire de la gourmandise.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Dans l'assiette, la tradition brasserie est à l'honneur, sublimée par la fraîcheur des produits de l'Atlantique et du terroir nantais.
            </p>
            <Button variant="ghost" className="pl-0" onClick={() => setCurrentView(PageView.HISTORY)}>
              En savoir plus sur notre histoire &rarr;
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-cigale-gold transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/id/225/600/800" 
              alt="Detail Architecture" 
              className="relative w-full h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Chef's Suggestion Preview */}
      <section className="py-20 bg-cigale-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">La Suggestion du Chef</h2>
            <p className="text-cigale-gold uppercase tracking-widest text-sm">Une cuisine de saison</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {MENU_ITEMS.filter(i => i.highlight).slice(0, 3).map(item => (
              <div key={item.id} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-cigale-gold">{item.name}</h3>
                  <span className="text-white font-bold">{item.price}€</span>
                </div>
                <p className="text-gray-300 font-serif italic">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button variant="outline" className="border-cigale-gold text-cigale-gold hover:bg-cigale-gold hover:text-white" onClick={() => setCurrentView(PageView.MENU)}>
               Voir toute la carte
             </Button>
          </div>
        </div>
      </section>
    </>
  );

  const renderMenu = () => (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-cigale-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-cigale-teal font-bold mb-4">La Carte</h2>
          <div className="w-24 h-1 bg-cigale-gold mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Une cuisine de brasserie authentique, faisant la part belle aux produits de la mer et aux spécialités régionales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-24 z-20 bg-cigale-cream/95 py-4 backdrop-blur-sm border-b border-stone-200">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all
                ${activeCategory === cat.id 
                  ? 'bg-cigale-teal text-white shadow-md' 
                  : 'bg-white text-stone-500 hover:text-cigale-teal border border-stone-200'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-stone-100">
      <div className="max-w-4xl mx-auto">
         <h2 className="text-5xl font-serif text-cigale-teal font-bold mb-8 text-center">Notre Histoire</h2>
         <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-cigale-gold">
            <div className="float-right ml-8 mb-8 w-1/3">
              <img src="https://picsum.photos/id/405/400/500" alt="Vintage Cigale" className="shadow-lg border-4 border-white" />
              <p className="text-xs text-stone-400 mt-2 text-center italic">Archives, circa 1900</p>
            </div>
            <p className="text-lg text-stone-700 leading-loose mb-6 font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-cigale-gold first-letter:float-left first-letter:mr-2">
              Née de la volonté d'offrir à Nantes un lieu de ravissement pour les yeux et les papilles, La Cigale traverse les époques sans prendre une ride.
            </p>
            <ul className="space-y-6 mt-8">
              {HISTORY_FACTS.map((fact, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-cigale-gold font-bold text-xl">✦</span>
                  <p className="text-stone-600">{fact}</p>
                </li>
              ))}
            </ul>
         </div>
      </div>
    </div>
  );

  const renderReservation = () => (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-cigale-dark flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-cigale-gold"></div>
        <h2 className="text-4xl font-serif text-cigale-teal font-bold mb-2 text-center">Réserver une table</h2>
        <p className="text-center text-stone-500 mb-8 italic">Rejoignez-nous pour un moment d'exception</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Date</label>
              <input type="date" className="w-full border-b-2 border-stone-200 focus:border-cigale-teal py-2 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Heure</label>
              <select className="w-full border-b-2 border-stone-200 focus:border-cigale-teal py-2 outline-none bg-white transition-colors">
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Couverts</label>
            <select className="w-full border-b-2 border-stone-200 focus:border-cigale-teal py-2 outline-none bg-white transition-colors">
                <option>2 Personnes</option>
                <option>3 Personnes</option>
                <option>4 Personnes</option>
                <option>5+ Personnes</option>
              </select>
          </div>
          <div className="pt-4">
             <Button fullWidth onClick={() => alert("Fonctionnalité de démonstration. Merci de votre intérêt !")}>
               Confirmer la demande
             </Button>
          </div>
          <p className="text-xs text-center text-stone-400 mt-4">
            Pour les groupes de plus de 8 personnes, merci de nous contacter directement par téléphone.
          </p>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans text-cigale-text">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === PageView.HOME && renderHome()}
        {currentView === PageView.MENU && renderMenu()}
        {currentView === PageView.HISTORY && renderHistory()}
        {currentView === PageView.RESERVATION && renderReservation()}
      </main>

      {/* Footer */}
      <footer className="bg-cigale-dark text-white py-16 border-t border-cigale-gold/30">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cigale-gold mb-6">La Cigale</h3>
            <div className="space-y-4 text-stone-300">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-cigale-gold" />
                4 Place Graslin, 44000 Nantes
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-cigale-gold" />
                +33 2 51 84 94 94
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Horaires</h3>
            <ul className="space-y-2 text-stone-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                 <Clock size={16} className="text-cigale-gold" />
                 Tous les jours
              </li>
              <li>7h30 - 00h30</li>
              <li className="text-sm italic text-stone-500 mt-2">Service continu</li>
            </ul>
          </div>

          <div>
             <h3 className="font-serif text-xl font-bold mb-6">Suivez-nous</h3>
             <div className="flex justify-center md:justify-start gap-6">
               <a href="#" className="hover:text-cigale-gold transition-colors"><Instagram /></a>
               <a href="#" className="hover:text-cigale-gold transition-colors"><Facebook /></a>
             </div>
             <p className="text-xs text-stone-500 mt-8">
               © {new Date().getFullYear()} La Cigale. Design Concept.
             </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <Sommelier />
    </div>
  );
};

export default App;