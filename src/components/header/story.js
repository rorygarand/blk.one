import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './index';

storiesOf('Header', module)
  .add('without a name', () => <Header />)
  .add('with a name', () => <Header name="EOS User" />);
