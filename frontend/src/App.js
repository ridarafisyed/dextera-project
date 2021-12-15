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

import Invoice from "./containers/Invoice/Invoice";
import CreateInvoice from "./components/Invoice/CreateInvoice";

import Payment from "./components/Invoice/Payment";
import ManageCategory from "./components/Category/ManageCategory";
import CreateUser from "./components/User/CreateUser";
import Time from "./components/Legder/Time";
import LedgerTImeList from "./components/Legder/LedgerTImeList";
import LedgerActivity from "./components/Legder/LedgerActivity";
import LegderDashbard from "./components/Legder/LegderDashbard";
import CreateTask from "./components/Tasks/CreateTask";
import ViewTasks from "./components/Tasks/ViewTasks";
import LedgerDoc from "./components/Legder/LedgerDoc";
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
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/profile" component={Profile} />

            <Route path="/matter-dashboard" component={MatterDashboard} />
            {/* <PrivateRoutes path="/matters" component={Matters} />
            <PrivateRoutes path="/matter-detail" component={MatterDetail} />
            <PrivateRoutes path="/create-matter" component={NewMatter} /> */}

            <Route path="/matters" component={Matters} />
            <Route path="/matter-detail" component={MatterDetail} />
            <Route path="/create-matter" component={NewMatter} />

            <Route path="/invoices" component={Invoice} />
            <Route path="/create-invoice" component={CreateInvoice} />
            <Route path="/recive-invoice" component={Payment} />
            <Route path="/create-user" component={CreateUser} />

            <Route path="/manage-categories" component={ManageCategory} />
            <Route path="/ledger-documents" component={LedgerDoc} />
            <Route path="/time" component={Time} />
            <Route path="/ledgers" component={LegderDashbard} />
            <Route path="/ledger-list" component={LedgerTImeList} />
            <Route path="/activity-list" component={LedgerActivity} />

            <Route path="/create-task" component={CreateTask} />
            <Route path="/view-tasks" component={ViewTasks} />
          </Switch>
        </Layout>
      </Router>
    </UserProvider>
  </Provider>
);

export default App;
