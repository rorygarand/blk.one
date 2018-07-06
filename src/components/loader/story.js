import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './index';

storiesOf('Loader', module)
  .add('with default props', () => <Loader />)
  .add('with smaller size', () => <Loader size={50} />)
  .add('with larger size', () => <Loader size={500} />);
