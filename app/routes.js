'use strict';

import React    from 'react';
import App      from './components/App';
import One      from './components/One';
import Two      from './components/Two';
import Three    from './components/Three';
import {
  Route,
  DefaultRoute,
} from 'react-router';

export default (
    <Route name="top" handler={App} path="/">
      <DefaultRoute handler={One} />
      <Route name="two"  handler={Two} />
      <Route name="three"  handler={Three} />
    </Route>
)
