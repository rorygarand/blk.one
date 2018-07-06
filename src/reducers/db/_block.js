import dotProp from 'dot-prop-immutable';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../actions/block';

const initialState = {
  isError: false,
  isLoading: true
};

const block = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS_ERROR:
      const nextState = dotProp.merge(state, 'isError', true);
      return {
        nextState,
        isLoading: false
      };
    case GET_BLOCKS_LOADING:
      const nextState = dotProp.merge(state, 'isLoading', true);
      return {
        nextState,
        isError: false
      };
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