import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('renders without crashing', () => {
    const component = shallow(<Header />);
    expect(component.find('#header').exists()).toBe(true);
  });

  it('renders without a name', () => {
    const component = mount(<Header />);
    expect(
      component
        .find('#header')
        .find('div')
        .text()
    ).toBe('');
  });

  it('renders with a name', () => {
    const name = 'my name';
    const component = mount(<Header name={name} />);
    expect(
      component
        .find('#header')
        .find('div')
        .text()
    ).toBe(name);
  });
});
