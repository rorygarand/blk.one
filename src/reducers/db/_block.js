import dotProp from 'dot-prop-immutable';
import keyBy from 'lodash/keyBy';

import {
  GET_BLOCKS_ERROR,
  GET_BLOCKS_LOADING,
  GET_BLOCKS_SUCCESS
} from '../../actions/block';

const initialState = {
  byId: {},
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
      const byId = {
        ...state.byId,
        ...keyBy(payload.data, 'id')
      };
      const nextState = dotProp.merge(state, 'byId', byId);
      const currentIds = payload.data.map(({ id }) => id);
      return {
        ...nextState,
        currentIds,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default block;
