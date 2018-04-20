/*dependencies*/
import React, {Component} from "react";
// import SearchRouter from "./Routers/SearchRouter.js"

//Import Components

import sbMeal from '../sbMeal/sbMeal';
import sbLocation from '../sbLocation/sbLocation';
import sbEvent from '../sbEvent/sbEvent';
import Itinerary from '../Itinerary/itinerary';
import "./search.css";




//Right Column
    // Map 
    //Itinerary preview

    class Search extends Component {
        render() {
            return (
                <div>
    
                    {/*  Left Column
                        tabs: upcoming | Planning | Past
                        Render array of itins*/}
                    <div className="row">
                        <div className=" col m3 offset-m1">
                         
                                <p>
                                   Search tabs router goes here
                                </p>
                        
                                < sbLocation/>
                                < sbMeal/>
                                < sbEvent/>
                          
                        </div>
                        <div className=" center-align col m8">
                            <h2> MAP </h2>
                            <Itinerary/>
                        </div>
                    </div>
                </div>
    
            )
        }
    };
        






/* **THIS IS THE LAST LINE OF CODE** */ 
export default Search;
