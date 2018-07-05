import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('renders without crashing', () => {
    const component = shallow(<Button />);
    expect(component.find('#button').exists()).toBe(true);
  });

  it('renders in enabled state', () => {
    const component = shallow(<Button />);
    expect(component.find('#button').props().disabled).toBe(false);
  });

  it('renders in disabled state', () => {
    const component = shallow(<Button disabled />);
    expect(component.find('#button').props().disabled).toBe(true);
  });

  it('renders without a title', () => {
    const component = shallow(<Button />);
    expect(
      component
        .find('#button')
        .dive()
        .text()
    ).toBe('');
  });

  it('renders with a title', () => {
    const title = 'my title';
    const component = shallow(<Button title={title} />);
    expect(
      component
        .find('#button')
        .dive()
        .text()
    ).toBe(title);
  });

  it('handles click events', () => {
    const mock = jest.fn();
    const component = shallow(<Button onClick={mock} />);
    component.simulate('click');
    expect(mock).toHaveBeenCalled();
  });
});
