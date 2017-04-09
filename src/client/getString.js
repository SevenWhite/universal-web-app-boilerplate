import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './containers/Root';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createHistory from 'history/createMemoryHistory';
import {routerMiddleware} from 'react-router-redux';
import reducers from './reducers';
import {increase, decrease} from './actions';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
	reducers,
	applyMiddleware(middleware)
);

// todo test
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(increase());
store.dispatch(increase());

module.exports = (ctx) => {
	const context = {};
	const html = renderToString((
		<Provider store={store}>
			<StaticRouter
				location={ctx.req.url}
				context={context}
			>
				<Root />
			</StaticRouter>
		</Provider>
	));

	const state = JSON.stringify(store.getState());

	return {context, html, state};
};