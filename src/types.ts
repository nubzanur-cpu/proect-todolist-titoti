export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bakso' | 'mie' | 'minuman' | 'side';
  tags: string[];
  isPopular?: boolean;
}

export interface OutletLocation {
  id: string;
  name: string;
  address: string;
  city: 'Jakarta' | 'Wonogiri' | 'Sragen' | 'Tangerang' | 'Depok';
  phone: string;
  mapUrl: string;
  amenities: string[];
  hours: string;
}

export interface Review {
  id: string;
  user: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}
