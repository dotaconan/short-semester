import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage/index.jsx';
import TestPage from './routes/testPage.jsx';
import UserManage from './components/UserManageTable/index.jsx'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <HomePage>
        <Switch>
          <Route path="/" exact component={TestPage} />
          <Route path="/user" component={UserManage} />
          <Route path="/test2" component={TestPage} />
          <Route path="/test3" component={TestPage} />
        </Switch>
      </HomePage>
    </Router>
  );
}

export default RouterConfig;
