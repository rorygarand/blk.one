import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
  it('renders without crashing', () => {
    const component = shallow(<Loader />);
    expect(component.find('#loader').exists()).toBe(true);
  });
});
