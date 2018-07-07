import keyBy from 'lodash/keyBy';

import {
  blockErrorSelector,
  blockLoadingSelector,
  blocksSelector
} from './index';

import EosMock from '../../middleware/api/eos.mock.js';

const blockZeroActions = EosMock.getBlock(0);
const blockNonZeroActions = EosMock.getBlock(1);

describe('block selector', () => {
  it('should return isError flag', () => {
    const state = {
      db: {
        block: {
          isError: true
        }
      }
    };
    expect(blockErrorSelector(state)).toEqual(true);
    state.db.block.isError = false;
    expect(blockErrorSelector(state)).toEqual(false);
  });

  it('should return isLoading flag', () => {
    const state = {
      db: {
        block: {
          isLoading: true
        }
      }
    };
    expect(blockLoadingSelector(state)).toEqual(true);
    state.db.block.isLoading = false;
    expect(blockLoadingSelector(state)).toEqual(false);
  });

  it('should return array of blocks', () => {
    const state1 = {
      db: {
        block: {
          byNum: {},
          currentNums: []
        }
      }
    };
    expect(blocksSelector(state1)).toEqual([]);

    const data = [blockNonZeroActions, blockZeroActions];
    const byNum = keyBy(data, 'block_num');
    const currentNums = Object.keys(byNum);
    const state2 = {
      db: {
        block: {
          byNum,
          currentNums
        }
      }
    };
    expect(blocksSelector(state2)).toEqual(data);
  });
});
