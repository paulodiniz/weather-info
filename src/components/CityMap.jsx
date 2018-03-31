import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";

const CityMap = ({lat, lng}) => {
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: lat, lng: lng }}>
          <Marker position={{ lat: lat, lng: lng }} />
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(CityMap));
