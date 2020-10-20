import React from 'react';
import renderer from 'react-test-renderer';
import { RoomCard } from './RoomСard';

describe('Room card', () => {
  it('correctly render', () => {
    const fn = jest.fn();
    const mockRoom = {
      id: '0',
      city: 'amsterdam',
      title: 'Beautiful & luxurious apartment at great location',
      price: 120,
      rating: 4,
      typeRoom: 'Apartment',
      img: 'img/apartment-01.jpg',
      isPremium: true,
      isBookmark: false,
    };
    const tree = renderer.create(<RoomCard room={mockRoom} onMouseEnter={fn} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
