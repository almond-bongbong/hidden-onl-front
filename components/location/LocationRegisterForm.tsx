import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, Input, Select } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import InfluencerOption from '../form/InfluencerOption';
import FormField from '../form/FormField';
import SearchAddressMapModal from '../modal/SearchAddressMapModal';
import useModal from '../../hooks/useModal';
import useInput from '../../hooks/useInput';

const { Search } = Input;

const Container = styled.div``;

const ButtonWrap = styled.div`
  margin-top: 50px;
`;

function LocationRegisterForm(): ReactElement {
  const { data } = useQuery<Query>(GET_INFLUENCERS);
  const [visibleSearchAddress, openSearchAddress, closeSearchAddress] = useModal();
  const [address, handleAddress] = useInput('');

  const searchAddress = () => {
    openSearchAddress();
  };

  return (
    <Container>
      <FormField label="장소명">
        <Input value="" size="large" />
      </FormField>
      <FormField label="위치">
        <Search
          size="large"
          placeholder="주소를 검색해 주세요"
          value={address}
          onChange={handleAddress}
          onSearch={searchAddress}
          enterButton
        />
      </FormField>
      <FormField label="인플루언서">
        <Select
          showSearch
          size="large"
          defaultActiveFirstOption={false}
          showArrow={false}
          style={{ width: '100%' }}
          options={data?.getInfluencers.map((i) => ({
            value: i.id,
            label: <InfluencerOption thumbnailUrl={i.thumbnail?.url} name={i.name} />,
          }))}
        />
      </FormField>

      <ButtonWrap>
        <Button block type="primary" size="large">
          등록
        </Button>
      </ButtonWrap>

      <SearchAddressMapModal visible={visibleSearchAddress} onCancel={closeSearchAddress} defaultAddress={address} />
    </Container>
  );
}

export default LocationRegisterForm;
