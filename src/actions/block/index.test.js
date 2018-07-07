import { GET_BLOCKS, getBlocks } from './index';

describe('block actions', () => {
  it('should dispatch GET_BLOCKS', () => {
    const data = 'data';
    expect(getBlocks({ data })).toEqual({
      type: GET_BLOCKS,
      payload: {
        data
      }
    });
  });
});
