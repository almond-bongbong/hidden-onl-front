import { ReactElement } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40px;
`;

function PlaceRegister(): ReactElement {
  return (
    <MainLayout>
      <Container>hello</Container>
    </MainLayout>
  );
}

export default PlaceRegister;
