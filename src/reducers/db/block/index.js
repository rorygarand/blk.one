import dotProp from 'dot-prop-immutable';
import keyBy from 'lodash/keyBy';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../../actions/block';

const initialState = {
  currentNums: [],
  byNum: {},
  isError: false,
  isLoading: true
};

const block = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_BLOCKS_ERROR: {
      const nextState = dotProp.set(state, 'isError', true);
      return {
        ...nextState,
        isLoading: false
      };
    }
    case GET_BLOCKS_LOADING: {
      const nextState = dotProp.set(state, 'isLoading', true);
      return {
        ...nextState,
        isError: false
      };
    }
    case GET_BLOCKS_SUCCESS: {
      // indexing by `block_num` since it's a little
      // easier to read than by `id`
      const byNum = {
        ...state.byNum,
        ...keyBy(payload.data, 'block_num')
      };
      const nextState = dotProp.merge(state, 'byNum', byNum);
      const currentNums = payload.data.map(({ block_num }) => block_num);
      return {
        ...nextState,
        currentNums,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default block;
export { block, initialState };
