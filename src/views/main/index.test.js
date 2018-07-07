import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

describe('Main', () => {
  it('renders without crashing', () => {
    const component = shallow(<Main getBlocks={jest.fn()} />);
    expect(component.find('#main').exists()).toBe(true);
  });

  it('renders with loader', () => {
    const component = shallow(<Main getBlocks={jest.fn()} />);
    expect(component.find('#loading').exists()).toBe(true);
  });

  it('renders with error', () => {
    const component = shallow(<Main getBlocks={jest.fn()} isError />);
    expect(component.find('#error').exists()).toBe(true);
  });

  it('renders with blocks', () => {
    const blocks = [];
    const length = 10;
    for (let i = 0; i < length / 2; i++) {
      blocks.push(blockZeroActions);
      blocks.push(blockNonZeroActions);
    }
    const component = shallow(
      <Main getBlocks={jest.fn()} blocks={blocks} isLoading={false} />
    );
    expect(component.find('#ready').children().length).toBe(length);
  });

  it('gets blocks on mount', () => {
    const mock = jest.fn();
    const component = shallow(<Main getBlocks={mock} />);
    expect(mock).toHaveBeenCalled();
  });
});
