export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'seafood' | 'dessert' | 'wine';
  highlight?: boolean;
  image?: string;
  tags?: string[];
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageView {
  HOME = 'HOME',
  MENU = 'MENU',
  HISTORY = 'HISTORY',
  RESERVATION = 'RESERVATION'
}