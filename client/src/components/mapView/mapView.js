//dependencies
import React, {Component} from "react";
import "./mapView.css";
import {Map, GoogleApiComponent} from 'google-maps-react';

export class Container extends Component {
    render() {
        const style = {
            width: '25vw',
            height: '25vh'
        }
        
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        return (
            <div style={style}>
                <Map google={this.props.google}/>
            </div>
        )
    }
}

export class Map extends React.Component {
    render() {
      return (
        <div ref='map'>
          Loading map...
        </div>
      )
    }
  }
export default GoogleApiComponent({apiKey: "AIzaSyDNlVbpXn5uOh3REZ7tpw_qvmVcqcpWRgM"})(Container)

/* **THIS IS THE LAST LINE OF CODE** */
// export default MapView;