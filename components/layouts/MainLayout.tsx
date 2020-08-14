import React, { ReactElement, ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { SideBarProvider } from '../../contexts/SideBarContext';
import SideBar from './SideBar';

interface Props {
  children: ReactNode;
}

const Container = styled.div``;

function MainLayout({ children }: Props): ReactElement {
  return (
    <SideBarProvider>
      <Container>
        <Header />
        {children}
        <SideBar />
      </Container>
    </SideBarProvider>
  );
}

export default MainLayout;
