import React, {Component} from "react";


// import components

import Itinerary from '../Itinerary/itinerary';
import Search from '../Search/search';
// import MapContainer from '../mapView/mapView';

class Home extends Component {
    render() {
        return (
            <div>

                {/*  Left Column
                    tabs: upcoming | Planning | Past
                    Render array of itins*/}
                <div className="row">
                    <div className=" col m3 offset-m1">

                        <p>
                            Itinerary tabs router goes here
                        </p>

                        <p>
                            Upcoming/planning/past here
                        </p>
                        {/* < MapContainer/> */}
                    </div>
                    <div className=" center-align col m8">
                        <button className="center-align">
                          <a href= "/search">  Make a new Itinerary</a>
                        </button>
                        <Itinerary/>
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;
