import { Router, Route, IndexRoute } from 'react-router';
import React from 'react';
import Page from './Page';
import Basic from './Basic';

export default (
    <Router>
        <Route component={ Page } path='/'>
            <IndexRoute component={ Basic } />,
        </Route>
    </Router>
);
