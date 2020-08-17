import React, { ReactElement, useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import styled from 'styled-components';
import { Compass } from 'react-feather';
import Map from '../../components/main/MainMap';

const CurrentLocation = styled.button`
  display: block;
  position: absolute;
  right: 20px;
  bottom: 80px;
  z-index: 100;
  padding: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.43);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  font-size: 0;
`;

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
      <CurrentLocation onClick={detectLocation}>
        <Compass color="#fff" />
      </CurrentLocation>
    </div>
  );
}

export default MainMapContainer;
