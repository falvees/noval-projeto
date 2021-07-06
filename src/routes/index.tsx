import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Homepage';
import ListUsers from '../pages/ListUsers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/listusers" exact component={ListUsers} />
    <Route path="/" exact component={HomePage} />
  </Switch>
);
export default Routes;
