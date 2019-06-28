import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Public from '../containers/public';
import Register from '../containers/register';
import Dashboard from '../containers/dashboard';
import PrivateRoute from './util/private-route';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <Public />} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={ Dashboard } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
