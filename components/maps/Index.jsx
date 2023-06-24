import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const points = [
  { id: 1, title: "JESAC Metalúrgica", lat: -15.475365, lng: -70.155118 },
];

const Maps = () => {

    const defaultProps = {
        center: {
          lat: -15.475365,
          lng: -70.155118,
        },
        zoom: 16,
      };
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '30vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>

            {points.map(({ lat, lng, id, title }) => {
            return (
            <Marker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}

          </GoogleMapReact>
        </div>
      );
  }

export default Maps;
