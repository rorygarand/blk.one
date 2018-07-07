import React from 'react';
import { storiesOf } from '@storybook/react';
import { Main } from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

const blocks = [];
for (let i = 0; i < 30; i++) {
  blocks.push(blockZeroActions);
  blocks.push(blockNonZeroActions);
}

storiesOf('Main', module)
  .add('with nothing', () => <Main getBlocks={() => {}} isLoading={false} />)
  .add('with a loader', () => <Main getBlocks={() => {}} />)
  .add('with an error', () => (
    <Main getBlocks={() => {}} isError isLoading={false} />
  ))
  .add('with scrolling', () => (
    <Main getBlocks={() => {}} isLoading={false} blocks={blocks} />
  ));
