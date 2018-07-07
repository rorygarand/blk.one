import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_BLOCKS,
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../actions/block';

function* getBlocks({ payload = {} }) {
  payload.eos = true;

  yield put({
    types: [GET_BLOCKS_SUCCESS, GET_BLOCKS_ERROR, GET_BLOCKS_LOADING],
    payload
  });
}

export default function* blockSaga() {
  yield takeLatest(GET_BLOCKS, getBlocks);
}
export { blockSaga, getBlocks };
