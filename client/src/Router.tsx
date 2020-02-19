import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from './pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={routes.Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
