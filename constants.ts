import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Seafood
  {
    id: 's1',
    name: 'Le Grand Plateau Royal',
    description: '1/2 homard, 1 tourteau, 4 langoustines, 6 huîtres n°3, crevettes roses, bigorneaux, bulots.',
    price: 68,
    category: 'seafood',
    highlight: true,
    tags: ['Signature', 'Partager'],
    image: 'https://picsum.photos/id/42/400/300'
  },
  {
    id: 's2',
    name: 'Huîtres Creuses de Bretagne n°3',
    description: 'Servies sur glace pilée, vinaigre à l\'échalote, beurre demi-sel.',
    price: 18,
    category: 'seafood',
    tags: ['Frais']
  },
  // Starters
  {
    id: 'st1',
    name: 'Tartare de Bar à la Mangue',
    description: 'Bar frais coupé au couteau, marinade citron vert, coriandre et dés de mangue fraîche.',
    price: 16,
    category: 'starter',
    image: 'https://picsum.photos/id/493/400/300'
  },
  {
    id: 'st2',
    name: 'Foie Gras de Canard Maison',
    description: 'Cuit au torchon, chutney de figues, toast brioché tiède.',
    price: 22,
    category: 'starter',
    tags: ['Maison']
  },
  {
    id: 'st3',
    name: 'Escargots de Bourgogne (x12)',
    description: 'Beurre persillé à l\'ail, servis très chauds.',
    price: 14,
    category: 'starter',
    tags: ['Classique']
  },
  // Mains
  {
    id: 'm1',
    name: 'Sole Meunière "Petit Bateau"',
    description: 'Sole entière (env. 400g), beurre citronné, pommes vapeur.',
    price: 38,
    category: 'main',
    highlight: true,
    tags: ['Pêche locale']
  },
  {
    id: 'm2',
    name: 'Le Tartare de Bœuf Charolais',
    description: 'Préparé en salle selon vos goûts, frites maison, salade verte.',
    price: 24,
    category: 'main',
    image: 'https://picsum.photos/id/1080/400/300'
  },
  {
    id: 'm3',
    name: 'Choucroute de la Mer',
    description: 'Sélection de poissons (saumon, haddock, poisson blanc), beurre blanc nantais.',
    price: 26,
    category: 'main',
    tags: ['Spécialité Nantaise']
  },
  {
    id: 'm4',
    name: 'Magret de Canard Rôti',
    description: 'Sauce au miel et épices douces, gratin dauphinois.',
    price: 28,
    category: 'main'
  },
  // Desserts
  {
    id: 'd1',
    name: 'Le Fameux Gâteau Nantais',
    description: 'Biscuit moelleux aux amandes et rhum des Antilles.',
    price: 9,
    category: 'dessert',
    tags: ['Incontournable']
  },
  {
    id: 'd2',
    name: 'Profiteroles au Chocolat Chaud',
    description: 'Choux maison, glace vanille Bourbon, sauce chocolat Valrhona.',
    price: 11,
    category: 'dessert',
    image: 'https://picsum.photos/id/292/400/300'
  },
  {
    id: 'd3',
    name: 'Crêpe Suzette Flambée',
    description: 'Flambée au Grand Marnier devant vous.',
    price: 12,
    category: 'dessert'
  }
];

export const HISTORY_FACTS = [
  "Inaugurée le 1er avril 1895, La Cigale est classée Monument Historique.",
  "Son décor Art Nouveau est l'œuvre de l'architecte céramiste Émile Libaudière.",
  "C'est l'une des plus belles brasseries de France, véritable institution nantaise.",
  "Le réalisateur Jacques Demy y a tourné des scènes du film 'Lola' en 1961."
];
