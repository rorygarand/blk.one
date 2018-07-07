import store from './store';

describe('store', () => {
  it('returns store instance', () => {
    const getState = () => {};
    const replaceReducer = () => {};
    const subscribe = () => {};

    expect(store).toHaveProperty('dispatch');
    expect(store).toHaveProperty('getState');
    expect(store).toHaveProperty('replaceReducer');
    expect(store).toHaveProperty('subscribe');
  });
});
