import keyBy from 'lodash/keyBy';

import block, { initialState } from './index';
import EosMock from '../../../middleware/api/eos.mock.js';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../../actions/block';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

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
    let data = [];
    for (let i = 0; i < 5; i++) {
      currentNums.push(blockZeroActions.block_num);
      currentNums.push(blockNonZeroActions.block_num);
      data.push(blockZeroActions);
      data.push(blockNonZeroActions);
    }

    const action = { type: GET_BLOCKS_SUCCESS, payload: { data } };

    const byNum = keyBy(data, 'block_num');

    const state = { byNum, currentNums, isLoading: false };
    expect(block({}, action)).toEqual(state);
  });
});
