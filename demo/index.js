import express from 'express';
import beautify from 'express-beautify';
import routes from './routes';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

const app = express();
app.use(beautify());
app.use('/css', express.static('demo/css'));

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const { staticmarkup, pretty } = renderProps.location.query;

            const render = (staticmarkup ? renderToStaticMarkup : renderToString);
            const send = (pretty ? res.sendHTML : res.send).bind(res);

            send(render(<RouterContext {...renderProps} />));
        } else {
            res.status(404).send('Not found');
        }
    });

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
