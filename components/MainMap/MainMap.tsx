import React, { ReactElement, useCallback, useEffect, useRef } from 'react';

function MainMap(): ReactElement {
  const mapRef = useRef(null);
  // const [latitude, setLatitude] = useState<number | null>(null);
  // const [longitude, setLongitude] = useState<number | null>(null);
  // const [markerLatitude, setMarkerLatitude] = useState<number | null>(null);
  // const [markerLongitude, setMarkerLongitude] = useState<number | null>(null);

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
    const kakao = (window as any).kakao;
    console.log(kakao);
    if (kakao) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      new kakao.maps.Map(mapRef.current, options);
    }
  }, []);

  return (
    <div>
      <p>{process.env.KAKAO_APP_KEY || '없음'}</p>
      <div id="map" style={{ width: 500, height: 400 }} ref={mapRef} />
    </div>
  );
}

export default MainMap;
