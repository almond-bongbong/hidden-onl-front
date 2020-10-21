import React, { MouseEvent, ReactElement, useCallback, useEffect } from 'react';
import Portal from '../common/Portal';
import styled from 'styled-components';
import { useSideBarContext } from '../../contexts/SideBarContext';
import Link from 'next/link';
import HamburgerButton from './HamburgerButton';

const Container = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 200px;
  padding-top: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: -1px 0 3px 1px rgba(100, 100, 100, 0.1);
  transform: translateX(${({ active }) => (active ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    a {
      display: block;
      padding: 10px 20px;
      font-size: 16px;
      color: #444;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
    }
  }
`;

function SideBar(): ReactElement {
  const { active, openSideBar, closeSideBar } = useSideBarContext();

  const handleClose = useCallback(() => {
    closeSideBar();
  }, [closeSideBar]);

  useEffect(() => {
    if (active) document.addEventListener('click', handleClose);
    else document.removeEventListener('click', handleClose);

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [active, handleClose]);

  const handleClickContainer = (e: MouseEvent): void => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleMenu = () => {
    if (active) closeSideBar();
    else openSideBar();
  };

  return (
    <Portal>
      <Container active={active} onClick={handleClickContainer}>
        <ul>
          <li>
            <Link href="/place/register">
              <a>장소 등록하기</a>
            </Link>
          </li>
        </ul>
      </Container>

      <HamburgerButton active={active} onClick={handleMenu} />
    </Portal>
  );
}

export default SideBar;
