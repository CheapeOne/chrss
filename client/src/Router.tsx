import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as routes from './pages';

const Router: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={routes.Main} />
    </Switch>
  </HashRouter>
);

export default Router;
