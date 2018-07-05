import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';

describe('Main', () => {
  it('renders without crashing', () => {
    const component = shallow(<Main />);
    expect(component.find('#main').exists()).toBe(true);
  });
});
