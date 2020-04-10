import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import ProSkill from './Pages/ProSkill';
import EduSkill from './Pages/EduSkill';
import Skill from './Pages/Skill';
import Description from './Pages/Description';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/proskill" component={ProSkill} />
                <Route path="/eduskill" component={EduSkill} />
                <Route path="/skill" component={Skill} />
                <Route path="/description" component={Description} />
            </Switch>
        </BrowserRouter>
    );
}