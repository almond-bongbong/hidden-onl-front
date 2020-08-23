import React, { ReactElement, ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Container = styled.div``;

function MainLayout({ children }: Props): ReactElement {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default MainLayout;
