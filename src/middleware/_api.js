import axios from 'axios';

const URL = 'http://test.com';

const shouldHandle = ({ payload, types }) =>
  types && types.length > 0 && payload.endpoint;

const handle = async (action, next) => {
  const { payload, types } = action;
  const [SUCCESS, ERROR, LOADING] = types;

  next({ type: LOADING });

  try {
    const { data } = await axios.get(`${URL}${payload.endpoint}`);
    next({ type: SUCCESS, data });
  } catch (err) {
    console.error('Problem in API middleware.');
    next({ type: ERROR, err });
  }
};

const api = () => next => action =>
  shouldHandle(action) ? handle(action, next) : next(action);

export default api;
