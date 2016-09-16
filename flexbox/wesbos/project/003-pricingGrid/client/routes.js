import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PricingGrid from './components/pricingGrid/pricingGrid';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PricingGrid} />
  </Route>
  );
