import { all, fork } from 'redux-saga/effects';

import block from './_block';

export default function* sagas() {
  yield all([fork(block)]);
}
