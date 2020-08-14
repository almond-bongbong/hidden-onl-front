import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSideBarContext } from '../../contexts/SideBarContext';

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  box-shadow: 0 2px 3px 1px rgba(100, 100, 100, 0.3);
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.primaryRgba(0.6)};
  color: #fff;

  h1 {
    font-size: 16px;
  }
`;

function Header(): ReactElement {
  const { openSideBar, closeSideBar } = useSideBarContext();
  return (
    <Container>
      <h1>
        <Link href="/">
          <a>오늘</a>
        </Link>
      </h1>
      <button type="button" onClick={openSideBar}>
        open
      </button>
      <button type="button" onClick={closeSideBar}>
        close
      </button>
    </Container>
  );
}

export default Header;
