import React from 'react';
import renderer from 'react-test-renderer';
import { offers } from 'mocks/offers';
import { App } from './App';

describe('App', () => {
  it('should correct render', () => {
    const tree = renderer.create(<App rooms={offers} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
