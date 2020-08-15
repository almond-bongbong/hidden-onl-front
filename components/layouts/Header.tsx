import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSideBarContext } from '../../contexts/SideBarContext';
import HamburgerButton from './HamburgerButton';

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
  box-shadow: 0 2px 3px 1px rgba(100, 100, 100, 0.3);
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.primaryRgba(0.7)};
  color: #fff;

  h1 {
    font-size: 16px;
  }
`;

function Header(): ReactElement {
  const { active, openSideBar, closeSideBar } = useSideBarContext();

  const handleMenu = () => {
    if (active) closeSideBar();
    else openSideBar();
  };

  return (
    <Container>
      <h1>
        <Link href="/">
          <a>오늘,</a>
        </Link>
      </h1>
      <HamburgerButton active={active} onClick={handleMenu} />
    </Container>
  );
}

export default Header;
