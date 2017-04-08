import React from 'react';
import {renderToString} from 'react-dom/server';
import Root from './routes';
import {StaticRouter} from 'react-router';

module.exports = (ctx) => {
	const context = {};
	const html = renderToString((
		<StaticRouter
			location={ctx.req.url}
			context={context}
		>
			<Root />
		</StaticRouter>
	));

	return {context, html};
};