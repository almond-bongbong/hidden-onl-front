import { ReactElement } from 'react';
import MainMapContainer from '../container/main/MainMapContainer';
import MainLayout from '../components/layouts/MainLayout';

function IndexPage(): ReactElement {
  return (
    <MainLayout>
      <MainMapContainer />
    </MainLayout>
  );
}

export default IndexPage;
