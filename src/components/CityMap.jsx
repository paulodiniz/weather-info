import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";

const CityMap = (props) => {
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: props.lat, lng: props.lng }}>
          <Marker position={{ lat: props.lat, lng: props.lng }} />
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(CityMap));
