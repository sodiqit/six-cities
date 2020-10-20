import React from 'react';
import renderer from 'react-test-renderer';
import { RoomCard } from './RoomСard';

describe('Room card', () => {
  it('correctly render', () => {
    const fn = jest.fn();
    const fn1 = jest.fn();
    const mockRoom = {
      id: '0',
      coordinate: [0, 0] as [number, number],
      city: 'amsterdam',
      title: 'Beautiful & luxurious apartment at great location',
      price: 120,
      rating: 4,
      typeRoom: 'Apartment',
      img: 'img/apartment-01.jpg',
      isPremium: true,
      isBookmark: false,
    };
    const tree = renderer
      .create(<RoomCard room={mockRoom} onMouseEnter={fn} onMouseLeave={fn1} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
