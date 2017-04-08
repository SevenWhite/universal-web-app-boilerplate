import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

ReactDOM.render((
	<Router history={history}>
		<Root />
	</Router>
), document.getElementById('root'));