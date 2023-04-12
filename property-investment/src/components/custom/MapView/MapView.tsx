import React, { useState, useEffect } from "react";
import styles from '@/styles/PropertyView.module.css';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { calculateLatLng } from '../../../data/functions';
import { AddressCoordinates } from '../../../utils/interfaces';

// TODO: Hide this
const apiKey = "AIzaSyD7ZdX3iwm2kn31nX_Wumdazj2iMyfv78U"

const containerStyle = {
  width: '500px',
  height: '350px',
};

const center = {
  lat: 40.730610,
  lng: -73.935242,
};

interface MapProps {
  addresses: string[];
}
// TODO: Fix here, markers not showing
const MapView: React.FC<MapProps>  = ({ addresses }) => {
  const [locations, setLocations] = useState<AddressCoordinates[]>([]);
  const [initCoordinates, setInitCoordinates] = useState({ lat: 1, lng: 1})
  
  useEffect(() => {
    calculateLatLng(addresses)
      .then((response) => {
        setLocations(response);
      }
    )
  }, [])

  useEffect(() => {
    if (locations.length > 0) {
      setInitCoordinates({
        lat: locations[0]?.position.lat,
        lng: locations[0]?.position.lng
      })
    }
  }, [locations])
  
  // const renderIcons = (map, maps) => {
  //   locations.forEach(location => {
  //     const position = new maps.LatLng(location.position.lat, location.position.lng);

  //     const customIcon = {
  //       url: "https://path-to-your-image/icon.png",
  //       scaledSize: new maps.Size(40, 40),
  //       origin: new maps.Point(0, 0),
  //       anchor: new maps.Point(20, 20),
  //     };

  //     new maps.Marker({
  //       position: position,
  //       icon: customIcon,
  //       map: map,
  //     });
  //   });
  // };

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  const customMarker = (marker: AddressCoordinates) => {
    const icon = {
      url: iconBase + "info-i_maps.png",
      scaledSize: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20, 20),
    };

    return (
      <Marker
        key={`${marker.position.lat}-${marker.position.lng}`}
        position={{ lat: marker.position.lat, lng: marker.position.lng }}
        icon={icon}
      />
    );
  };

  return (
    <div className={styles.mapContainer}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap 
          mapContainerStyle={containerStyle} 
          center={{ lat: initCoordinates.lat, lng: initCoordinates.lng }}
          zoom={10}
        >
          {locations.map((location) => customMarker(location))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;