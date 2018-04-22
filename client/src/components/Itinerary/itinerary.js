/*dependencies*/
import React, {Component} from "react";
import "./itinerary.css";

class Itinerary extends Component {
    render() {
        return (
            <div >
                <h2 className="center-align">
                    Sample Itinerary
                </h2>
                <div className="row">
                    <div className="col m2 ">
                        <p>
                            7:00 PM
                        </p>
                    </div>
                    <div className="col  m8 ">
                        <p>
                            <strong>
                                Fare Well
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col  m8 offset-m4">
                        <p>426 H Street NE Washington DC, 20002</p>
                        <p>
                            vegan diner food
                        </p>
                        <p>
                            $$$</p>
                    </div>
                </div>

            </div >
        )
    }
}

/* **THIS IS THE LAST LINE OF CODE** */
export default Itinerary;
