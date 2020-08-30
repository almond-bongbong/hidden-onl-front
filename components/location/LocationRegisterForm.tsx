import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Input, Select } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '../../types/api';
import { GET_INFLUENCERS } from '../../queries/influencerQueries';
import InfluencerOption from '../form/InfluencerOption';
import FormField from '../form/FormField';

const Container = styled.div``;

function LocationRegisterForm(): ReactElement {
  const { data } = useQuery<Query>(GET_INFLUENCERS);

  return (
    <Container>
      <FormField label="장소명">
        <Input value="" size="large" />
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
    </Container>
  );
}

export default LocationRegisterForm;
