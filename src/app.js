const Koa = require('koa');
const routes = require('./routes');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(path.resolve(__dirname, '../public')));

// todo cache and debug must be correct for current environment
render(app, {
	root: path.join(__dirname, 'views'),
	layout: false,
	viewExt: 'html',
	cache: false,
	debug: true
});
routes(app);

module.exports = app;