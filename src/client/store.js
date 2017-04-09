import {createStore, combineReducers, applyMiddleware} from 'redux';
import history from './browserHistory';
import {routerMiddleware, routerReducer, ConnectedRouter} from 'react-router-redux';

const middleware = routerMiddleware(history);

export default createStore(
	combineReducers({
		// ...reducers,
		router: routerReducer
	}),
	applyMiddleware(middleware)
);