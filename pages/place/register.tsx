import { ReactElement } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import styled from 'styled-components';
import PageTitle from '../../components/layouts/PageTitle';
import LocationRegisterForm from '../../components/location/LocationRegisterForm';

const Container = styled.div`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  padding: 70px 20px 50px;
`;

function PlaceRegister(): ReactElement {
  return (
    <MainLayout>
      <Container>
        <PageTitle title="장소 등록" />
        <LocationRegisterForm />
      </Container>
    </MainLayout>
  );
}

export default PlaceRegister;
