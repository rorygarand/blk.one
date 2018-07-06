import React from 'react';
import { shallow } from 'enzyme';
import Entry from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

describe('Entry', () => {
  it('renders without crashing', () => {
    const component = shallow(<Entry block={blockZeroActions} />);
    expect(component.find('#entry').exists()).toBe(true);
  });

  it('counts the correct number of actions', () => {
    const nonZeroComponent = shallow(<Entry block={blockNonZeroActions} />);
    const zeroComponent = shallow(<Entry block={blockZeroActions} />);
    expect(
      nonZeroComponent
        .find('#entry')
        .childAt(0)
        .childAt(2)
        .dive()
        .text()
    ).toBe('2');
    expect(
      zeroComponent
        .find('#entry')
        .childAt(0)
        .childAt(2)
        .dive()
        .text()
    ).toBe('0');
  });

  it('handles click events', () => {
    const component = shallow(<Entry block={blockZeroActions} />);
    expect(component.find('#entry').children().length).toBe(1);
    component.simulate('click');
    expect(component.find('#entry').children().length).toBe(2);
    component.simulate('click');
    expect(component.find('#entry').children().length).toBe(1);
  });
});
