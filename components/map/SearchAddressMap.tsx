import React, { ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import useInput from '../../hooks/useInput';

const { Search } = Input;

const Container = styled.div`
  position: relative;
`;

const Map = styled.div`
  height: 500px;
`;

const InputArea = styled.div`
  margin-bottom: 20px;
`;

const CenterMarker = styled.img`
  display: block;
  position: absolute;
  z-index: 10;
`;

interface Props {
  defaultAddress?: string;
}

function SearchAddressMap({ defaultAddress = '' }: Props): ReactElement {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<{ setCenter: (coords: unknown) => void } | null>(null);
  const [address, handleAddress] = useInput(defaultAddress);
  const coordsRef = useRef([33.450701, 126.570667]);

  useEffect(() => {
    if (mapContainerRef.current) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(coordsRef.current[0], coordsRef.current[1]), // 지도의 중심좌표
        level: 3,
      };
      mapRef.current = new window.kakao.maps.Map(mapContainerRef.current, mapOption);
    }
  }, []);

  const search = () => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(
      address,
      (result: Record<string, unknown>[], status: typeof window.kakao.maps.services.Status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          console.log(result, coords);

          new window.kakao.maps.Marker({
            map: mapRef.current,
            position: coords,
          });

          mapRef.current?.setCenter(coords);
        }
      },
    );
  };

  return (
    <Container>
      <InputArea>
        <Search
          size="large"
          placeholder="주소를 입력해 주세요"
          value={address}
          onChange={handleAddress}
          onSearch={search}
          enterButton
        />
      </InputArea>
      <Map ref={mapContainerRef} />
      <CenterMarker />
    </Container>
  );
}

export default SearchAddressMap;
