import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Input from '../form/Input';
import Select from '../form/Select';

const Container = styled.div``;

function LocationRegisterForm(): ReactElement {
  return (
    <Container>
      <Input
        label="장소명"
        value=""
        onChange={(e) => {
          console.log(e);
        }}
      />
      <Select options={[]} />
    </Container>
  );
}

export default LocationRegisterForm;
