import { createSelector } from 'reselect';
import get from 'lodash/get';

/**
 * db selectors
 */

export const blocksCurrentNumsSelector = state => state.db.block.currentNums;
export const blocksByNumSelector = state => state.db.block.byNum;
export const blockErrorSelector = state => state.db.block.isError;
export const blockLoadingSelector = state => state.db.block.isLoading;

/**
 * ui selectors
 */

export const blocksSelector = createSelector(
  [blocksByNumSelector, blocksCurrentNumsSelector],
  (blocksByNum, currentNums) => {
    if (currentNums.length === 0) return [];

    const blocks = [];
    currentNums.forEach(num => {
      const block = get(blocksByNum, num, {});
      blocks.push(block);
    });
    return blocks;
  }
);
