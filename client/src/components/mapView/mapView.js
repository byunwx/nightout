
import React, { Component } from 'react';
import "./mapView.css";
import Input from '../Search/input'
// import the Google Maps API Wrapper from google-maps-react
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import child component

class Container extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLat: 38.9072,
    currentLng:  -77.0369,
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '40%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75%' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }
    return (
      <div style={style}>
        {/* <h1> Google Maps API + React </h1> */}
        <form>
          <Input
            onChange={this.handleInputChange}
            name="currentLat"
            placeholder="38.9072"/>
          <Input
            onChange={this.handleInputChange}
            name="currentLng"
            placeholder="-77.0369"/>
        </form>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: this.state.currentLat,
            lng: this.state.currentLng
          }}
          center={{
            lat: this.state.currentLat,
            lng: this.state.currentLng
          }}
          zoom={13}
          onClick={this.onMapClicked}
        >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'Current location'}
            onClick={this.onMarkerClick}
            position={{lat: 38.9072, lng: -77.0369}} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}




export default GoogleApiWrapper({apiKey: "AIzaSyDNlVbpXn5uOh3REZ7tpw_qvmVcqcpWRgM"})(Container)

/* **THIS IS THE LAST LINE OF CODE** */
// export default MapView;
