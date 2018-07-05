import { configure } from '@storybook/react';

function loadStories() {
  require('./header/story.js');
}

configure(loadStories, module);
