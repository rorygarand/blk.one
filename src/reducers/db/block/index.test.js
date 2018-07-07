import keyBy from 'lodash/keyBy';

import block, { initialState } from './index';
import EosMock from '../../../middleware/api/eos.mock.js';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../../actions/block';

const data = EosMock.getBlocksWithLengthOf(10);

describe('block reducer', () => {
  it('should return initial state', () => {
    expect(block(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_BLOCKS_ERROR', () => {
    const action = { type: GET_BLOCKS_ERROR };
    const state = { isError: true, isLoading: false };
    expect(block({}, action)).toEqual(state);
  });

  it('should handle GET_BLOCKS_LOADING', () => {
    const action = { type: GET_BLOCKS_LOADING };
    const state = { isError: false, isLoading: true };
    expect(block({}, action)).toEqual(state);
  });

  it('should handle GET_BLOCKS_SUCCESS', () => {
    let currentNums = [];
    for (let i = 0; i < data.length; i++) {
      currentNums.push(data[i].block_num);
    }

    const action = { type: GET_BLOCKS_SUCCESS, payload: { data } };

    const byNum = keyBy(data, 'block_num');

    const state = { byNum, currentNums, isLoading: false };
    expect(block({}, action)).toEqual(state);
  });
});
