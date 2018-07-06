import dotProp from 'dot-prop-immutable';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../actions/block';

const block = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case GET_BLOCKS_ERROR:
      return dotProp.merge(state, 'isLoading', false);
    case GET_BLOCKS_LOADING:
      return dotProp.merge(state, 'isLoading', true);
    case GET_BLOCKS_SUCCESS: {
      const nextState = dotProp.merge(state, 'data', action.payload.data);
      return {
        nextState,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default block;
