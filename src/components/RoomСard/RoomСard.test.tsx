import React from 'react';
import renderer from 'react-test-renderer';
import { CityName } from 'services/types';
import RoomCard from './RoomСard';

describe('Room card', () => {
  it('correctly render', () => {
    const fn = jest.fn();
    const fn1 = jest.fn();
    const mockRoom = {
      bedrooms: 1,
      city: {
        name: 'Amsterdam' as CityName,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        },
      },
      description: 'description',
      goods: ['1'],
      host: {
        id: 0,
        name: '',
        is_pro: true,
        avatar_url: '',
      },
      id: 0,
      images: ['1'],
      is_favorite: true,
      is_premium: true,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      max_adults: 0,
      preview_image: '',
      price: 0,
      rating: 0,
      title: 'room',
      type: 'mock room',
    };
    const tree = renderer
      .create(
        <RoomCard
          href=""
          room={mockRoom}
          onMouseEnter={fn}
          onMouseLeave={fn1}
          onFavoriteClick={fn1}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
