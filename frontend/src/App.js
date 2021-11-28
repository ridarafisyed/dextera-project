/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import DashBoard from './containers/DashBoard';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import MatterDashboard from './components/Matter/MatterDashboard';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';
import PrivateRoutes from './utils/PrivateRoute';
import Profile from './components/Profile/Profile';

import { UserProvider } from './context/User';

const App = () => (
  <Provider store={store}>
    <UserProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* loging regierter routes */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/matter" component={MatterDashboard} />
            {/* authentication routes  */}
            <Route path="/reset-password" component={ResetPassword} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              component={ResetPasswordConfirm}
            />
            <Route path="/activate/:uid/:token" component={Activate} />
            {/* private route after login  */}
            <PrivateRoutes path="/dashboard" component={DashBoard} />
            <PrivateRoutes path="/profile" component={Profile} />
            <PrivateRoutes path="/matters" component={MatterDashboard} />

            {/* <Route path="/dashboard" component={DashBoard} />
            <Route path="/profile" component={Profile} />
            <Route path="/matters" component={MatterDashboard} /> */}
          </Switch>
        </Layout>
      </Router>
    </UserProvider>
  </Provider>
);

export default App;
