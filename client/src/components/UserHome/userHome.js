import React, {Component} from "react";

// import components

import Itinerary from '../Itinerary/itinerary';
// import Search from '../Search/search'; import MapContainer from
// '../mapView/mapView';

class Home extends Component {
    render() {
        return (
            <div>
  <video autoPlay muted id="homeVideo">
                    <source src='http://www.coverr.co/s3/mp4/The-Bowling-Alley.mp4'
                        type="video/mp4" />
                    </video>
                {/*  Left Column
                    tabs: upcoming | Planning | Past
                    Render array of itins*/}
                <div className="center-align">
                    <button className=" search-btn">
                        <a href="/search">
                            Plan Your Next Date
                        </a>
                    </button>
                </div>
                <div className="row">
                    <div className="sidebar col s12 m3 offset-m1">

                        <p>
                            Itinerary tabs router goes here
                        </p>

                        <p>
                            Upcoming/planning/past here
                        </p>
                        {/* < MapContainer/> */}
                    </div>
                    <div className="main-content col s12 m7">

                        <Itinerary/>
                    </div>
                </div>
            </div>

        )
    }
};

export default Home;
