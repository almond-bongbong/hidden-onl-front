import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Button, Input, message, Select } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ErrorName, MutationRegisterPlaceArgs, MutationResponse, Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import InfluencerOption from '../form/InfluencerOption';
import FormField from '../form/FormField';
import SearchAddressMapModal from '../modal/SearchAddressMapModal';
import useModal from '../../hooks/useModal';
import useInput from '../../hooks/useInput';
import { AddressValues } from '../../types/common';
import { REGISTER_PLACE } from '../../queries/placeQueries';

const { Search } = Input;

const Container = styled.div``;

const ButtonWrap = styled.div`
  margin-top: 50px;
`;

function LocationRegisterForm(): ReactElement {
  const { data } = useQuery<Query>(GET_INFLUENCERS);
  const [name, handleName] = useInput('');
  const [visibleSearchAddress, openSearchAddress, closeSearchAddress] = useModal();
  const [influencer, setInfluencer] = useState('');
  const [addressData, setAddressData] = useState<AddressValues>();
  const [link, handleLink] = useInput('');
  const [createPlaceMutation, { loading }] = useMutation<MutationResponse, MutationRegisterPlaceArgs>(REGISTER_PLACE);
  const { roadAddress, address } = addressData || {};
  const roadAddressString = roadAddress && `${roadAddress.address_name} ${roadAddress.building_name}`;
  const addressString = address?.address_name;

  const searchAddress = () => {
    openSearchAddress();
  };

  const handleSearchResult = (addressValues: AddressValues) => {
    setAddressData(addressValues);
    closeSearchAddress();
  };

  const handleInfluencer = (v: string) => {
    setInfluencer(v);
  };

  const handleSubmit = async () => {
    if (!addressData?.latitude || !addressData?.longitude) {
      return message.warning('주소를 선택해주세요.');
    }

    try {
      const result = await createPlaceMutation({
        variables: {
          name,
          influencerId: influencer,
          link,
          location: {
            latitude: addressData.latitude,
            longitude: addressData.longitude,
          },
        },
      });

      console.log(result.data?.ok);
      message.success('성공적으로 등록되었습니다.');
    } catch (e) {
      console.log('hello', e.name);
      if (e.graphQLErrors[0].name === ErrorName.Unauthenticated) {
        message.error('로그인 후 이용가능 합니다.');
      } else {
        message.error('등록 중 문제가 발생했습니다.');
      }
    }
  };

  return (
    <Container>
      <FormField label="장소명">
        <Input value={name} size="large" onChange={handleName} />
      </FormField>
      <FormField label="위치">
        <Search
          size="large"
          placeholder="주소를 검색해 주세요"
          value={roadAddressString || addressString}
          onSearch={searchAddress}
          readOnly
          enterButton
        />
      </FormField>
      <FormField label="인플루언서">
        <Select
          size="large"
          style={{ width: '100%' }}
          value={influencer}
          onChange={handleInfluencer}
          options={data?.getInfluencers.map((i) => ({
            value: i.id,
            label: <InfluencerOption thumbnailUrl={i.thumbnail?.url} name={i.name} />,
          }))}
        />
      </FormField>
      <FormField label="링크">
        <Input size="large" value={link} onChange={handleLink} />
      </FormField>

      <ButtonWrap>
        <Button block type="primary" size="large" loading={loading} onClick={handleSubmit}>
          등록
        </Button>
      </ButtonWrap>

      <SearchAddressMapModal visible={visibleSearchAddress} onCancel={closeSearchAddress} onOk={handleSearchResult} />
    </Container>
  );
}

export default LocationRegisterForm;
