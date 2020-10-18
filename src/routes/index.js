import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import DashView from '../components/DashView.js';
import EngageView from '../components/EngageView.js';

const Routes = () => {
  return (
    <Router>
      {/* Switch to render the first child which matches the path */}
      <Switch>
        <Route path="/" exact component={DashView} />
        <Route path="/engage" component={EngageView} />
      </Switch>
    </Router>
  );
}

export default Routes;