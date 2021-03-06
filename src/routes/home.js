const Router = require('koa-router');
const getString = require('../client/client.index');

const router = new Router();

router.get('/*', async function(ctx, next) {
	const {context, html, state} = getString(ctx);
	if (context.url) {
		ctx.redirect(context.url);
		return
	}

	await ctx.render('index', {html, state})
});

module.exports = router;