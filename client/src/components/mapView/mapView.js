
import React, { Component } from 'react';
import "./mapView.css";
// import the Google Maps API Wrapper from google-maps-react
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import child component

class Container extends Component {
  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '40%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75%' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }
    return (
      <div className="row" style={style}>
        {/* <h1> Google Maps API + React </h1> */}
        <Map style={style} google={this.props.google} />
      </div>
    );
  }
}


export default GoogleApiWrapper({apiKey: "AIzaSyDNlVbpXn5uOh3REZ7tpw_qvmVcqcpWRgM"})(Container)

/* **THIS IS THE LAST LINE OF CODE** */
// export default MapView;
