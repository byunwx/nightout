import React, {Component} from "react";


// import components

import Itinerary from '../Itinerary/itinerary';
// import Search from '../Search/search';
// import MapContainer from '../mapView/mapView';

class Home extends Component {
    render() {
        return (
            <div>

                {/*  Left Column
                    tabs: upcoming | Planning | Past
                    Render array of itins*/}
                <div className="center-align">
                    <button >
                          <a href= "/search">  Plan Your Next Date</a>
                        </button>
            </div>
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
                    <div className=" col m8">
                    
                        <Itinerary/>
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;
