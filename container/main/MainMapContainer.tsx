import React, { ReactElement, useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import Map from '../../components/map/MainMap';
import CurrentLocationButton from '../../components/map/CurrentLocationButton';

function MainMapContainer(): ReactElement {
  const { data } = useQuery<Query>(GET_INFLUENCERS);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [markerLatitude, setMarkerLatitude] = useState<number | null>(null);
  const [markerLongitude, setMarkerLongitude] = useState<number | null>(null);

  const handleGeoSuccess: PositionCallback = useCallback((position: Position) => {
    const {
      coords: { latitude, longitude },
    } = position;

    console.log(latitude, longitude);

    setLatitude(latitude);
    setLongitude(longitude);
    setMarkerLatitude(latitude);
    setMarkerLongitude(longitude);
  }, []);

  const handleGeoError: PositionErrorCallback = useCallback((e) => {
    console.error(e);
  }, []);

  const handleGeoWatchSuccess: PositionCallback = useCallback((position: Position) => {
    const {
      coords: { latitude, longitude },
    } = position;

    setMarkerLatitude(latitude);
    setMarkerLongitude(longitude);
  }, []);

  const detectLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    navigator.geolocation.watchPosition(handleGeoWatchSuccess, handleGeoError, {
      enableHighAccuracy: true,
    });
  }, [handleGeoSuccess, handleGeoWatchSuccess, handleGeoError]);

  console.log(data);

  return (
    <div>
      <Map
        latitude={latitude}
        longitude={longitude}
        markerLatitude={markerLatitude}
        markerLongitude={markerLongitude}
      />

      <CurrentLocationButton onClick={detectLocation} />
    </div>
  );
}

export default MainMapContainer;
