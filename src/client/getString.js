const React = require('react');
const {renderToString} = require('react-dom/server');

module.exports = () => {
	return renderToString(<h1>Hello, react</h1>);
};