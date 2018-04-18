/*dependencies*/
import React from "react";
import { Switch, Route } from 'react-router-dom';

import sbEvent from './sbEvent';
import sbLocation from './sbLocation';
import sbMeal from './sbMeal';


const SearchRouter = () => (
    <Switch> 
        <Route exact path="/location" component={sbLocation} />
        <Route exact path="/event" component={sbEvent} />
        <Route exact path="/restaurant" component={sbMeal} />

    </Switch>
)









/* **THIS IS THE LAST LINE OF CODE** */ 
export default SearchRouter;
