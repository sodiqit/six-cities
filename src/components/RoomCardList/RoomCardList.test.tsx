import React from 'react';
import renderer from 'react-test-renderer';
import { offers } from 'mocks/offers';
import { RoomCardList } from './RoomCardList';

describe('App', () => {
  it('should correct render', () => {
    const tree = renderer.create(<RoomCardList rooms={offers} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
