import React from 'react';
import { ReactRouter } from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { hashHistory } from 'react-router';
import { IndexRoute } from 'react-router';
import { IndexRedirect } from 'react-router';

import MainContainer from '../containers/main/MainContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRedirect to='/home' />
      <Route path='home' component={MainContainer} />
      <Route path='directory' component={MainContainer} />
      <Route path='howto' component={MainContainer} />
    </Route>
  </Router>
);

export default routes;
