import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className={`
      relative p-6 border transition-all duration-300 group
      ${item.highlight ? 'border-cigale-gold bg-white shadow-lg transform md:-translate-y-2' : 'border-stone-200 bg-white/50 hover:border-cigale-teal hover:shadow-md'}
    `}>
      {item.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cigale-gold text-white text-xs px-3 py-1 uppercase tracking-widest font-bold">
          Suggestion du Chef
        </span>
      )}
      
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-serif text-xl text-cigale-teal font-bold group-hover:text-cigale-gold transition-colors">
          {item.name}
        </h3>
        <span className="font-serif text-lg font-bold text-stone-600 ml-4 shrink-0">
          {item.price}€
        </span>
      </div>
      
      <p className="text-stone-600 text-sm leading-relaxed mb-3 italic font-serif">
        {item.description}
      </p>

      {item.tags && (
        <div className="flex gap-2 flex-wrap">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-cigale-teal border border-cigale-teal/30 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCard;