import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CityName } from 'services/types';
import RoomCard from './RoomСard';

Enzyme.configure({ adapter: new Adapter() });

describe('Room card', () => {
  it('correctly hover', () => {
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
    const roomCard = shallow(
      <RoomCard
        href=""
        room={mockRoom}
        onMouseEnter={fn}
        onMouseLeave={fn1}
        onFavoriteClick={fn1}
      />,
    );

    roomCard.simulate('mouseenter');
    roomCard.simulate('mouseleave');

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalled();
    expect(fn1).toHaveBeenCalledTimes(1);
  });
});
