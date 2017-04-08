import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Topics = () => <h1>Topics</h1>;

const Root = () => (
	<div>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/topics">Topics</Link></li>
		</ul>

		<hr/>

		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/topics" component={Topics}/>
	</div>
);

export default Root;