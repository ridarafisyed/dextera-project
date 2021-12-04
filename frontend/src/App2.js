/** @format */

import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MatterDashboard from "./containers/Matters/MatterDashboard";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";

import { UserProvider } from "./context/User";
import Matters from "./containers/Matters/Matters";
import MatterDetail from "./components/Matter/MatterDetail";
import NewMatter from "./components/Matter/NewMatter";

const App2 = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/matter-dashboard" component={MatterDashboard} />
              <Route path="/matters" component={Matters} />
              <Route path="/matter-detail" component={MatterDetail} />
              <Route path="/create-matter" component={NewMatter} />
            </Switch>
          </Layout>
        </Router>
      </UserProvider>
    </Provider>
  );
};

export default App2;
