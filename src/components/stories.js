import { configure } from '@storybook/react';

function loadStories() {
  require('./button/story.js');
  require('./header/story.js');
}

configure(loadStories, module);
