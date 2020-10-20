import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RoomCard } from './RoomСard';

Enzyme.configure({ adapter: new Adapter() });

describe('Room card', () => {
  it('correctly hover', () => {
    const fn = jest.fn();
    const fn1 = jest.fn();
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
    const roomCard = shallow(
      <RoomCard room={mockRoom} onMouseEnter={fn} onMouseLeave={fn1} />,
    );

    roomCard.simulate('mouseenter');
    roomCard.simulate('mouseleave');

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalled();
    expect(fn1).toHaveBeenCalledTimes(1);
  });
});
