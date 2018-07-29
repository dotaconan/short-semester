import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage/index.jsx';
import TestPage from './routes/TestPage.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <HomePage>
        <Switch>
          <Route path="/test1" exact component={TestPage} />
          <Route path="/test2" exact component={TestPage} />
          <Route path="/test3" exact component={TestPage} />
        </Switch>
      </HomePage>
    </Router>
  );
}

export default RouterConfig;
