import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome/welcomeMain';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
  </Route>
  );
