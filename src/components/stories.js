import { configure } from '@storybook/react';

function loadStories() {
  require('./button/story.js');
  require('./header/story.js');
  require('./loader/story.js');
}

configure(loadStories, module);
