import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import ProSkill from './Pages/ProSkill';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/proskill" component={ProSkill} />
            </Switch>
        </BrowserRouter>
    );
}