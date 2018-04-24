
import React, { Component } from 'react';
import Input from '../Search/input';
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
    yelpSearch:null
  }
  componentWillReceiveProps() {
    const { yelpSearch } = this.props;
    this.setState({
      yelpSearch: yelpSearch,
    });
    console.log(this.state.yelpSearch);
    this.state.yelpSearch ? this.reCenter():console.log("wait")
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
  reCenter=()=>{
    this.setState({
      currentLat: this.state.yelpSearch[0].coordinates[0],
      currentLng: this.state.yelpSearch[0].coordinates[1],
    })
  }
  render() {
    const style = {
      width: '40%',
      height: '75%'
    }
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 38.9072,
            lng: -77.0369
          }}
          center={{
            lat: this.state.currentLat,
            lng: this.state.currentLng
          }}
          zoom={13}
          onClick={this.onMapClicked}
        >
        {!this.state.yelpSearch ? (
            <Marker
              name={'Nothing selected'}
              onClick={this.onMarkerClick}
              position={{lat: 38.9072, lng: -77.0369}} />
          ) : (this.state.yelpSearch.map(({_id, name, location, url, price, phone, coordinates}) => {
              return (
                  <Marker
                    key={`${name}`}
                    name={`${name}`}
                    phone={`${phone}`}
                    location={`${location}`}
                    url={`${url}`}
                    onClick={this.onMarkerClick}
                    label={`${_id}`}
                    position={{lat: `${coordinates[0]}`, lng: `${coordinates[1]}`}}
                  />
              );
            }))
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <a href={this.state.selectedPlace.url}>
                <h5>{this.state.selectedPlace.name}</h5>
                <p>{this.state.selectedPlace.phone}</p>
                <p>{this.state.selectedPlace.location}</p>
              </a>
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
