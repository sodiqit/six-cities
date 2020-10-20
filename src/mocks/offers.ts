interface Offer {
  id: string;
  coordinate: [number, number];
  city: string;
  title: string;
  price: number;
  rating: number;
  typeRoom: string;
  img: string;
  isPremium: boolean;
  isBookmark: boolean;
}

const offers: Offer[] = [
  {
    id: '0',
    coordinate: [52.3909553943508, 4.85309666406198],
    city: 'amsterdam',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    rating: 4,
    typeRoom: 'Apartment',
    img: 'img/apartment-01.jpg',
    isPremium: true,
    isBookmark: false,
  },
  {
    id: '1',
    coordinate: [52.369553943508, 4.85309666406198],
    city: 'amsterdam',
    title: 'Wood and stone place',
    price: 80,
    rating: 4,
    typeRoom: 'Private room',
    img: 'img/apartment-02.jpg',
    isPremium: false,
    isBookmark: true,
  },
  {
    id: '2',
    coordinate: [52.3909553943508, 4.929309666406198],
    city: 'amsterdam',
    title: 'Canal View Prinsengracht',
    price: 132,
    rating: 4,
    typeRoom: 'Apartment',
    img: 'img/apartment-03.jpg',
    isPremium: false,
    isBookmark: false,
  },
  {
    id: '3',
    coordinate: [52.3809553943508, 4.939309666406198],
    city: 'amsterdam',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    rating: 5,
    typeRoom: 'Apartment',
    img: 'img/room.jpg',
    isPremium: true,
    isBookmark: false,
  },
];

export { offers, Offer };
