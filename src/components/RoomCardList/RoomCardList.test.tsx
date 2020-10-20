import React from 'react';
import renderer from 'react-test-renderer';
import { offers } from 'mocks/offers';
import { RoomCardList } from './RoomCardList';

describe('App', () => {
  it('should correct render', () => {
    const fn = jest.fn();
    const tree = renderer
      .create(<RoomCardList rooms={offers} onChangeActiveRoom={fn} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
