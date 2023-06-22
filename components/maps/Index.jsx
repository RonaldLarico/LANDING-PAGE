import React from "react";
import GoogleMapReact from 'google-map-react';

const Maps = () => {

    const defaultProps = {
        center: {
          lat: -15.475365,
          lng: -70.155118,
        },
        zoom: 16,
        markers: {
            lat: -15.475365,
            lng: -70.155118,
        }
      };
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '30vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            defaultMarkers={defaultProps.markers}
          >
          </GoogleMapReact>
        </div>
      );
  }

export default Maps;
