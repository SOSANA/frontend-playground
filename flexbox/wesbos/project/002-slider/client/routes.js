import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Slider from './components/slider/slider';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Slider} />
  </Route>
  );
