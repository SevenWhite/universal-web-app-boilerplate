const Router = require('koa-router');

const router = new Router();

router.get('/', async function(ctx, next) {
	await ctx.render('index')
});

module.exports = router;