/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import Layout from "./hocs/Layout";
import PrivateRoutes from "./utils/PrivateRoute";

import { UserProvider } from "./context/User";

import Home from "./containers/Home";

// Authentication links
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Activate from "./containers/Auth/Activate";
import ResetPassword from "./containers/Auth/ResetPassword";
import ResetPasswordConfirm from "./containers/Auth/ResetPasswordConfirm";

import Profile from "./components/Profile/Profile";

import DashBoard from "./containers/Dashboards/DashBoard";

import MatterDashboard from "./containers/Matters/MatterDashboard";
import Matters from "./containers/Matters/Matters";
import MatterDetail from "./components/Matter/MatterDetail";
import NewMatter from "./components/Matter/NewMatter";

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

            <PrivateRoutes
              path="/matter-dashboard"
              component={MatterDashboard}
            />
            <PrivateRoutes path="/matters" component={Matters} />
            <PrivateRoutes path="/matter-detail" component={MatterDetail} />
            <PrivateRoutes path="/create-matter" component={NewMatter} />
          </Switch>
        </Layout>
      </Router>
    </UserProvider>
  </Provider>
);

export default App;
