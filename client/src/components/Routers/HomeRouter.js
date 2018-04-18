import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './Search';
import UserHome from './UserHome';
import Landing from './Landing';


const HomeRouter = () => (
    <Switch> 
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Search" component={Search} />
    </Switch>
)

export default HomeRouter;