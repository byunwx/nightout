/*dependencies*/
import React, {Component} from "react";
// import SearchRouter from "./Routers/SearchRouter.js" Import Components
import SbMeal from '../sbMeal/sbMeal';
import SbLocation from '../sbLocation/sbLocation';
import SbEvent from '../sbEvent/sbEvent';
import Itinerary from '../Itinerary/itinerary';
import "./search.css";
import MapView from '../mapView/mapView';
import YelpSearch from '../Results/yelpResults';
import client from '../Results/client';

//Import Apollo
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import {ApolloProvider} from "react-apollo";
import {Query} from "react-apollo";

//Right Column Map Itinerary preview yarn install react-mdl for tabs

class Search extends Component {
    render() {
        return (
            <div>
                {/*  Left Column
                        tabs: upcoming | Planning | Past
                        Render array of itins*/}
                <div className="row">
                    <div className=" col m3 offset-m1">
                        <div className="row">
                            <p>
                                Search tabs router goes here
                            </p>

                            < SbLocation/>
                            < SbMeal/>
                            < SbEvent/> {/* <Tabs className="tabs">
                            <Tab className="tabs">
                              Location
                            </Tab>
                            <Tab className="tabs">
                                Event
                            </Tab>
                            <Tab className="tabs">
                                Restaurant or Food
                            </Tab>
                        </Tabs>*/}
                        </div>
                        <div className="row">
                            <ApolloProvider client={client}>
                                <YelpSearch/>
                            </ApolloProvider>
                        </div>
                    </div>
                    <div className="col m7 offset-m1">
                        <div className="row">
                            <MapView />
                        </div>
                    </div>
                </div>
                <div className="row">
                            <Itinerary />
                        </div>    
            </div>
        )
    }
};

 //** THIS IS THE LAST LINE OF CODE ** 
export default Search;