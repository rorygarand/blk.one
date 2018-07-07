import { all, fork } from 'redux-saga/effects';

import block from './block';

export default function* sagas() {
  yield all([fork(block)]);
}
