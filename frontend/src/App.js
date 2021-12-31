/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import Layout from "./hocs/Layout";

// import PrivateRoutes from "./utils/PrivateRoute";

import { UserProvider } from "./context/User";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./hocs/Theme";

import Home from "./containers/Home";

// Authentication links
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Activate from "./containers/Auth/Activate";
import ResetPassword from "./containers/Auth/ResetPassword";
import ResetPasswordConfirm from "./containers/Auth/ResetPasswordConfirm";

import Profile from "./components/Profile/Profile";
import Company from "./components/Profile/Company";

import Matter from "./components/Matter";

import Matters from "./containers/Matters/Matters";
import MatterDetail from "./components/Matter/MatterDetail";
import NewMatter from "./components/Matter/NewMatter";

import Invoice from "./components/Invoice";
// import Invoice from "./containers/Invoice/Invoice";
import CreateInvoice from "./components/Invoice/CreateInvoice";

import Payment from "./components/Invoice/Payment";
import ManageCategory from "./components/Category/ManageCategory";

import CreateUser from "./components/User/CreateUser";
import User from "./components/User";

import Time from "./components/Ledger/Time";
import TimeList from "./components/Ledger/TimeList";

import Ledger from "./components/Ledger";

import LedgerTImeList from "./components/Ledger/LedgerTImeList";
import LedgerActivity from "./components/Ledger/LedgerActivity";
import LedgerDashbard from "./components/Ledger/LedgerDashbard";
import CreateTask from "./components/Tasks/CreateTask";
import ViewTasks from "./components/Tasks/ViewTasks";
import LedgerDoc from "./components/Ledger/LedgerDoc";
import Search from "./components/Job/Ssearch";
import Result from "./components/Job/Result";
import JobView from "./components/Job/JobView";
import Templates from "./components/Template/Templates";

import Contact from "./components/Contact/Contact";

const App = () => (
  <Provider store={store}>
    <UserProvider>
      <ThemeProvider theme={theme}>
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

              <Route path="/profile" component={Profile} />
              <Route path="/company-detail" component={Company} />

              <Route path="/matter-dashboard" component={Matter} />
              <Route path="/matters" component={Matters} />
              <Route path="/matter-detail" component={MatterDetail} />
              <Route path="/create-matter" component={NewMatter} />

              <Route path="/invoices" component={Invoice} />
              <Route path="/create-invoice" component={CreateInvoice} />
              <Route path="/recive-invoice" component={Payment} />

              <Route path="/create-user" component={CreateUser} />
              <Route path="/users" component={User} />

              <Route path="/manage-categories" component={ManageCategory} />
              <Route path="/ledger-documents" component={LedgerDoc} />
              <Route path="/time" component={Time} />
              <Route path="/time-list" component={TimeList} />
              <Route path="/ledgers" component={Ledger} />
              <Route path="/ledger-list" component={LedgerTImeList} />
              <Route path="/activity-list" component={LedgerActivity} />

              <Route path="/create-task" component={CreateTask} />
              <Route path="/view-tasks" component={ViewTasks} />

              <Route path="/job-search" component={Search} />
              <Route path="/job-result" component={Result} />
              <Route path="/job-view" component={JobView} />
              <Route path="/templates" component={Templates} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Layout>
        </Router>{" "}
      </ThemeProvider>
    </UserProvider>
  </Provider>
);

export default App;
