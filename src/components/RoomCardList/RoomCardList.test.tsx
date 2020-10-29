import React from 'react';
import renderer from 'react-test-renderer';
import RoomCardList from './RoomCardList';

describe('App', () => {
  it('should correct render', () => {
    const fn = jest.fn();
    const tree = renderer
      .create(<RoomCardList rooms={[]} onChangeActiveRoom={fn} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
