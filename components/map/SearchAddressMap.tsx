import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import useInput from '../../hooks/useInput';
import { searchAddressByCoords, searchAddressByKeyword } from '../../utils/kakaoMap';
import { Address, KakaoMap, RoadAddress } from '../../types/kakaoMap';
import { AddressValues } from '../../types/common';

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
  top: 50%;
  left: 50%;
  z-index: 10;
  height: 40px;
  margin-top: 10px;
  transform: translate(-50%, -50%);
`;

const AddressWrap = styled.div`
  margin-top: 15px;
`;

interface Props {
  defaultAddress?: string;
  onChangeAddress: (data: AddressValues) => void;
}

function SearchAddressMap({ defaultAddress = '', onChangeAddress }: Props): ReactElement {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<KakaoMap | null>(null);
  const [keyword, handleKeyword] = useInput(defaultAddress);
  const coordsRef = useRef([37.5546788388674, 126.970606917394]);
  const [address, setAddress] = useState<Address>();
  const [roadAddress, setRoadAddress] = useState<RoadAddress>();

  const initAddressByCoords = useCallback(async (coords) => {
    try {
      const result = await searchAddressByCoords(coords);
      const firstResult = result?.[0];

      if (firstResult) {
        setAddress(firstResult.address);
        setRoadAddress(firstResult.road_address);
      }
    } catch (e) {
      setAddress(undefined);
      setRoadAddress(undefined);
    }
  }, []);

  useEffect(() => {
    onChangeAddress({ address, roadAddress });
  }, [onChangeAddress, address, roadAddress]);

  useEffect(() => {
    if (mapContainerRef.current) {
      const defaultCenter = new window.kakao.maps.LatLng(coordsRef.current[0], coordsRef.current[1]);
      const mapOption = {
        center: defaultCenter,
        level: 3,
      };
      mapRef.current = new window.kakao.maps.Map(mapContainerRef.current, mapOption);
      window.kakao.maps.event.addListener(mapRef.current, 'dragend', () => {
        initAddressByCoords(mapRef.current?.getCenter());
      });

      initAddressByCoords(defaultCenter);
    }
  }, [initAddressByCoords]);

  const search = async () => {
    const result = await searchAddressByKeyword(keyword);

    if (result) {
      const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
      mapRef.current?.setCenter(coords);
      initAddressByCoords(coords);
    }
  };

  return (
    <Container>
      <InputArea>
        <Search
          size="large"
          placeholder="주소를 입력해 주세요"
          value={keyword}
          onChange={handleKeyword}
          onSearch={search}
          enterButton
        />
      </InputArea>
      <Map ref={mapContainerRef} />
      <CenterMarker src="/images/map/marker.png" alt="marker" />
      <AddressWrap>
        {address?.address_name}
        <br />
        {roadAddress?.address_name}
      </AddressWrap>
    </Container>
  );
}

export default SearchAddressMap;
