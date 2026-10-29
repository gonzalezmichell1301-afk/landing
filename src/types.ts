export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'infusion' | 'alimento' | 'miel';
  priceCOP: number;
  priceUSD: number;
  weight: string;
  highlighted?: boolean;
  benefits: string[];
  ingredients: string[];
  preparation?: {
    time: string;
    temperature: string;
    serving: string;
  };
  accentColor: string;
  badgeText?: string;
}

export interface ServiceExperience {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  includedInLaunch: boolean;
  instructor: string;
  highlights: string[];
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  modality: 'presencial' | 'virtual';
  preferredProduct: string;
  guestsCount: number;
  receiveUpdates: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}
