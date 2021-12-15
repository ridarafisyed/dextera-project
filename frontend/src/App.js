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
import Company from "./components/Profile/Company";

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
import ManageUser from "./components/User/ManageUser";
import ManageUserGroup from "./components/User/ManageUserGroup";
import UserRole from "./components/User/UserRole";

import Time from "./components/Legder/Time";
import TimeList from "./components/Legder/TimeList";

import LedgerTImeList from "./components/Legder/LedgerTImeList";
import LedgerActivity from "./components/Legder/LedgerActivity";
import LegderDashbard from "./components/Legder/LegderDashbard";
import CreateTask from "./components/Tasks/CreateTask";
import ViewTasks from "./components/Tasks/ViewTasks";
import LedgerDoc from "./components/Legder/LedgerDoc";
import Search from "./components/Job/Ssearch";
import Result from "./components/Job/Result";
import JobView from "./components/Job/JobView";
import Templates from "./components/Template/Templates";

import Contact from "./components/Contact/Contact";

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
            <PrivateRoutes path="/company-detail" component={Company} />

            <PrivateRoutes
              path="/matter-dashboard"
              component={MatterDashboard}
            />
            <PrivateRoutes path="/matters" component={Matters} />
            <PrivateRoutes path="/matter-detail" component={MatterDetail} />
            <PrivateRoutes path="/create-matter" component={NewMatter} />

            <PrivateRoutes path="/invoices" component={Invoice} />
            <PrivateRoutes path="/create-invoice" component={CreateInvoice} />
            <PrivateRoutes path="/recive-invoice" component={Payment} />

            <PrivateRoutes path="/create-user" component={CreateUser} />
            <PrivateRoutes path="/users" component={ManageUser} />
            <PrivateRoutes path="/user-group" component={ManageUserGroup} />
            <PrivateRoutes path="/user-role" component={UserRole} />

            <PrivateRoutes
              path="/manage-categories"
              component={ManageCategory}
            />
            <PrivateRoutes path="/ledger-documents" component={LedgerDoc} />
            <PrivateRoutes path="/time" component={Time} />
            <PrivateRoutes path="/time-list" component={TimeList} />
            <PrivateRoutes path="/ledgers" component={LegderDashbard} />
            <PrivateRoutes path="/ledger-list" component={LedgerTImeList} />
            <PrivateRoutes path="/activity-list" component={LedgerActivity} />

            <PrivateRoutes path="/create-task" component={CreateTask} />
            <PrivateRoutes path="/view-tasks" component={ViewTasks} />

            <PrivateRoutes path="/job-search" component={Search} />
            <PrivateRoutes path="/job-result" component={Result} />
            <PrivateRoutes path="/job-view" component={JobView} />
            <PrivateRoutes path="/templates" component={Templates} />
            <PrivateRoutes path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </UserProvider>
  </Provider>
);

export default App;
