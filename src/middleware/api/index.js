import EOS from 'eosjs';

import config from '../../config';

const eos = EOS(config);

const shouldHandle = ({ payload, types }) =>
  types && types.length > 0 && payload.eos;

const handle = async (action, next) => {
  const { types } = action;
  const [SUCCESS, ERROR, LOADING] = types;

  next({ type: LOADING });

  try {
    const { last_irreversible_block: num } = await eos.getActions({
      pos: 0,
      offset: 0
    });

    // there has to be a better way than looping...
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises[i] = eos.getBlock(num - i);
    }

    const data = await Promise.all(promises);

    next({ type: SUCCESS, payload: { data } });
  } catch (err) {
    console.error('Problem in API middleware.');
    next({ type: ERROR, err });
  }
};

const api = () => next => action =>
  shouldHandle(action) ? handle(action, next) : next(action);

export default api;
