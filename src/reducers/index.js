import { combineReducers } from 'redux';

import { block } from './db';
// import { something } from './ui';

export default combineReducers({
  db: combineReducers({
    block
  })
  // ui: combineReducers({
  // 	something
  // })
});
