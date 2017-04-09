import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import reducers from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
	reducers,
	window.__PRELOADED_STATE__,
	applyMiddleware(middleware)
);

ReactDOM.render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Root />
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'));