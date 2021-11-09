import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import DashBoard from './containers/DashBoard';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';


import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

import './App.css'

const App = () => (
    <Provider store={store} >
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/login' component={Login} />
                    <Route  path='/signup' component={Signup} />
                    <Route  path="/dashboard" component={DashBoard}/>
                    <Route  path='/reset-password' component={ResetPassword} />
                    <Route  path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route  path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;