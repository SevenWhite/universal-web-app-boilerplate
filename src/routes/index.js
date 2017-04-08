let routes = [
	require('./home')
];

module.exports = function (app) {
	routes.forEach(route => {
		app.use(route.routes());
		app.use(route.allowedMethods());
	});
};