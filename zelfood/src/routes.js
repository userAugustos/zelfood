import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Foods from './pages/Foods';
import Home from './pages/Home';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/foods" component={Foods} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;