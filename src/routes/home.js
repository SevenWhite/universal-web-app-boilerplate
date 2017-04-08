const Router = require('koa-router');
const getString = require('../client/client.index');

const router = new Router();

router.get('/', async function(ctx, next) {
	const body = getString();
	await ctx.render('index', {body})
});

module.exports = router;