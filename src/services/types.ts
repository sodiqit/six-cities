type CityName = 'Amsterdam' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf' | 'Paris';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityInfo = {
  name: CityName;
  location: Location;
};

type HostInfo = {
  id: number;
  name: string;
  is_pro: boolean;
  avatar_url: string;
};

interface Comment {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: HostInfo;
}

interface Room {
  bedrooms: number;
  city: CityInfo;
  description: string;
  goods: string[];
  host: HostInfo;
  id: number;
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  location: Location;
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type { CityName, Room, Comment, Location };
