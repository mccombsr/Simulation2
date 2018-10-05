import React, {Components} from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';


export default (
    <Switch>
        <Route component={Dashboard} exact path="/"/>
        <Route component={Wizard} path="/wizard"/>
    </Switch>
)