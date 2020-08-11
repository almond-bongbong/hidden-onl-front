import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function MainMap(): ReactElement {
  const mapRef = useRef(null);
  const { data } = useQuery<Query>(GET_INFLUENCERS);
  // const [latitude, setLatitude] = useState<number | null>(null);
  // const [longitude, setLongitude] = useState<number | null>(null);
  // const [markerLatitude, setMarkerLatitude] = useState<number | null>(null);
  // const [markerLongitude, setMarkerLongitude] = useState<number | null>(null);

  console.log(data);

  const handleGeoSuccess: PositionCallback = useCallback(
    (position: Position) => {
      const {
        coords: { latitude, longitude },
      } = position;

      console.log(latitude, longitude);

      // setLatitude(latitude);
      // setLongitude(longitude);
      // setMarkerLatitude(latitude);
      // setMarkerLongitude(longitude);
    },
    [],
  );

  const handleGeoError: PositionErrorCallback = useCallback((e) => {
    console.error(e);
  }, []);

  const handleGeoWatchSuccess: PositionCallback = useCallback(
    (position: Position) => {
      const {
        coords: { latitude, longitude },
      } = position;

      console.log(latitude, longitude);
      // setMarkerLatitude(latitude);
      // setMarkerLongitude(longitude);
    },
    [],
  );

  const detectLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    navigator.geolocation.watchPosition(handleGeoWatchSuccess, handleGeoError, {
      enableHighAccuracy: true,
    });
  }, [handleGeoSuccess, handleGeoWatchSuccess, handleGeoError]);

  useEffect(() => {
    detectLocation();
    const kakao = window.kakao;
    if (kakao) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new kakao.maps.Map(mapRef.current, options);
      console.log('init');
    }
  }, []);

  return (
    <div>
      <MapContainer ref={mapRef} />
    </div>
  );
}

export default MainMap;
