import React from 'react';
import {
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Counter from './Counter';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Topics = () => <h1>Topics</h1>;
const NoMatch = ({location}) => <h1>No match <code>{location.pathname}</code></h1>;

const Root = () => (
	<div>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/counter">Counter</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/topics">Topics</Link></li>
			<li><Link to="/no-match">No match route</Link></li>
		</ul>

		<hr/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/counter" component={Counter}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
			<Route component={NoMatch} />
		</Switch>
	</div>
);

export default Root;