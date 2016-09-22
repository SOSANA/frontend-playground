import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Content from './components/content';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Content} />
  </Route>
  );
