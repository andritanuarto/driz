import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Public from '../containers/public';
import Register from '../containers/register';
import Dashboard from '../containers/dashboard';
import Login from '../containers/login';
import PrivateRoute from './util/private-route';
import '../../dist/css/app.css';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" render={() => <Public />} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
