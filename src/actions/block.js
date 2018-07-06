export const GET_BLOCKS = 'GET_BLOCKS';
export const GET_BLOCKS_ERROR = 'GET_BLOCKS_ERROR';
export const GET_BLOCKS_LOADING = 'GET_BLOCKS_LOADING';
export const GET_BLOCKS_SUCCESS = 'GET_BLOCKS_SUCCESS';

export const getBlocks = payload => ({
  type: GET_BLOCKS,
  payload
});
