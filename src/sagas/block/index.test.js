import { takeLatest, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import {
  GET_BLOCKS,
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../actions/block';
import { blockSaga, getBlocks } from './index';

describe('block saga', () => {
  it('should dispatch get blocks saga', () => {
    const generator = cloneableGenerator(blockSaga)({});
    expect(generator.next().value).toEqual(takeLatest(GET_BLOCKS, getBlocks));
  });

  it('should dispatch get block actions', () => {
    const generator = cloneableGenerator(getBlocks)({});
    expect(generator.next().value).toEqual(
      put({
        payload: { eos: true },
        types: [GET_BLOCKS_SUCCESS, GET_BLOCKS_ERROR, GET_BLOCKS_LOADING]
      })
    );
  });
});
