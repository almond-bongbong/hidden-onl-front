import { ReactElement } from 'react';
import MainMap from '../components/main/MainMap';
import MainLayout from '../components/layouts/MainLayout';

function IndexPage(): ReactElement {
  return (
    <MainLayout>
      <MainMap />
    </MainLayout>
  );
}

export default IndexPage;
