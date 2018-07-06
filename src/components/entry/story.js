import React from 'react';
import { storiesOf } from '@storybook/react';
import Entry from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

storiesOf('Entry', module)
  .add('zero actions, odd', () => <Entry block={blockZeroActions} odd={true} />)
  .add('zero actions, even', () => (
    <Entry block={blockZeroActions} odd={false} />
  ))
  .add('non-zero actions, odd', () => (
    <Entry block={blockNonZeroActions} odd={true} />
  ))
  .add('non-zero actions, even', () => (
    <Entry block={blockNonZeroActions} odd={false} />
  ));
