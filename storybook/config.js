import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/stories.js');
  // require('../src/views/stories.js');
}

configure(loadStories, module);