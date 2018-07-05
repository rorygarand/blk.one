import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .add('with default props', () => <Button />)
  .add('with a title', () => <Button title="test" />)
  .add('as disabled', () => <Button title="test" disabled />);
