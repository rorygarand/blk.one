import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

storiesOf('Header', module)
  .add('without a name', () => <Header />)
  .add('with a name', () => <Header name="EOS User" />);
