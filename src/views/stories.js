import { configure } from '@storybook/react';

function loadStories() {
  require('./main/story.js');
}

configure(loadStories, module);
