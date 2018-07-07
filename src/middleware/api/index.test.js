import nock from 'nock';

import api from './index';
import config from '../../config';

import EosMock from '../../middleware/api/eos.mock.js';

describe('api middleware', () => {
  beforeEach(() => {
    nock(config.httpEndpoint)
      .post('/v1/chain/get_info')
      .reply(200, EosMock.getInfo());
    nock(config.httpEndpoint)
      .post('/v1/history/get_actions')
      .reply(200, EosMock.getActions());
    nock(config.httpEndpoint)
      .post('/v1/chain/get_block')
      .reply(200, EosMock.getBlock());
  });

  it('skips non-api actions', () => {
    const action = { type: 'BOGUS', payload: {} };
    const next = jest.fn();

    api()(next)(action);

    expect(next).toHaveBeenCalled();
    expect(next.mock.calls.length).toBe(1);
  });

  // it('handles api actions', () => {
  // 	const action = { types: ['SUCCESS', 'ERROR', 'LOADING'], payload: { eos: true } };
  // 	const next = jest.fn();

  // 	api()(next)(action);

  //   expect(next).toHaveBeenCalled();
  //   expect(next.mock.calls.length).toBe(2);
  // });
});
