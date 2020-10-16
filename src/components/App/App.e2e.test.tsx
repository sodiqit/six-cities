import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should correct click on title', () => {
    const clickHandler = jest.fn();
    const app = shallow(<App onClick={clickHandler} rooms={['1', '2']} />);

    const title = app.find('.place-card__name a').first();
    title.simulate('click');

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalled();
  });
});
