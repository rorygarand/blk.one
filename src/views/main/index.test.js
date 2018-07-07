import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const LENGTH = 10;
const blocks = EosMock.getBlocksWithLengthOf(LENGTH);

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
    const component = shallow(
      <Main getBlocks={jest.fn()} blocks={blocks} isLoading={false} />
    );
    expect(component.find('#ready').children().length).toBe(LENGTH);
  });

  it('gets blocks on mount', () => {
    const mock = jest.fn();
    const component = shallow(<Main getBlocks={mock} />);
    expect(mock).toHaveBeenCalled();
  });
});
