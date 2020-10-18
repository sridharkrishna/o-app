import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import DashView from '../components/DashView.js';
import EngageView from '../components/EngageView.js';

const Routes = () => {
  return (
      <Switch>
        <Route exact path={"/"} component={DashView} />
        <Route path={"/engage"} exact component={EngageView} />
      </Switch>
  );
}

export default Routes;