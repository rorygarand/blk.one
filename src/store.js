import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import {analytics, firebase} from './middleware';
import reducers from './reducers';
import sagas from './sagas';

const base = createSagaMiddleware();
const history = createHistory({ basename: '/' });

const storeInstance = (initialValues = {}) => {
	const middleware = [base, firebase, analytics, routerMiddleware(history)];
	const store = createStore(
		reducers,
		initialValues,
		compose(applyMiddleware(...middleware))
	);
	base.run(sagas);

	return store;
};

export default storeInstance();
export { storeInstance, history };
