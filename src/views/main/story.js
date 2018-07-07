import React from 'react';
import { storiesOf } from '@storybook/react';
import { Main } from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blocks = EosMock.getBlocksWithLengthOf(30);

storiesOf('Main', module)
  .add('with nothing', () => <Main getBlocks={() => {}} isLoading={false} />)
  .add('with a loader', () => <Main getBlocks={() => {}} />)
  .add('with an error', () => (
    <Main getBlocks={() => {}} isError isLoading={false} />
  ))
  .add('with scrolling', () => (
    <Main getBlocks={() => {}} isLoading={false} blocks={blocks} />
  ));
