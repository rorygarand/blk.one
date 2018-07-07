import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { api } from './middleware';
import reducers from './reducers';
import sagas from './sagas';

const base = createSagaMiddleware();

const storeInstance = (initialValues = {}) => {
  const middleware = [base, api];

  const store = createStore(
    reducers,
    initialValues,
    compose(applyMiddleware(...middleware))
  );
  base.run(sagas);

  return store;
};

export default storeInstance();
