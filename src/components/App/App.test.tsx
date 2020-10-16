import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';

describe('App', () => {
  it('should correct render', () => {
    const mockFn = jest.fn();
    const tree = renderer.create(<App onClick={mockFn} rooms={['1', '2']} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
