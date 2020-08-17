import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isBrowser } from '../../libs/validation';
import { Map, Marker, MarkerClusterer } from '../../types/common';

interface MapProps {
  latitude: number | null;
  longitude: number | null;
  markerLatitude: number | null;
  markerLongitude: number | null;
}

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const kakao = isBrowser() && window.kakao;

function MainMap({ latitude, longitude, markerLatitude, markerLongitude }: MapProps) {
  const initialized = useRef<boolean>(false);
  const mapEl = useRef<HTMLDivElement>(null);
  const map = useRef<Map>(null);
  const clusterer = useRef<MarkerClusterer>(null);
  const currentLocationMarker = useRef<Marker>(null);

  useEffect(() => {
    if (!initialized.current) {
      const container = mapEl.current;
      const options = {
        center: new kakao.maps.LatLng(37.5646854, 126.9742512),
        level: 5,
      };
      map.current = new kakao.maps.Map(container, options);
      map.current.setMaxLevel(10);

      clusterer.current = new kakao.maps.MarkerClusterer({
        map: map.current,
        averageCenter: true,
        minLevel: 7,
      });
    }

    initialized.current = true;
  }, [initialized]);

  useEffect(() => {
    if (latitude && longitude && map.current) {
      const latlng = new kakao.maps.LatLng(latitude, longitude);
      map.current.setCenter(latlng);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (markerLatitude && markerLongitude) {
      if (currentLocationMarker.current) {
        currentLocationMarker.current.setPosition(new kakao.maps.LatLng(markerLatitude, markerLongitude));
      } else {
        currentLocationMarker.current = new kakao.maps.Marker({
          map: map.current,
          position: new kakao.maps.LatLng(markerLatitude, markerLongitude),
        });
      }
    }
  }, [markerLatitude, markerLongitude]);

  return <MapContainer className="map-container" ref={mapEl} />;
}

export default memo(MainMap);
