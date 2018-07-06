import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { api } from './middleware';
import reducers from './reducers';
import sagas from './sagas';

const base = createSagaMiddleware();

const storeInstance = (initialValues = {}) => {
  const middleware = [base, api];

  const devtoolsEnabled = Boolean(
    process.env.NODE_ENV === 'development' &&
      global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  );
  const reduxDevToolExtConfig = {
    name: 'blk.one'
  };
  const composeEnhancers = devtoolsEnabled
    ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(reduxDevToolExtConfig)
    : compose;

  const store = createStore(
    reducers,
    initialValues,
    composeEnhancers(applyMiddleware(...middleware))
  );
  base.run(sagas);

  return store;
};

export default storeInstance();
