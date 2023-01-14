import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.3822116,
      lng: -122.0341482
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC04FgEDdjAK_hNbfZ70T3B70VS2FirT5g" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.3822116}
            lng={-122.0341482}
            text="Office Twitter"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;