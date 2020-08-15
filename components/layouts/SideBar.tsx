import { MouseEvent, ReactElement, useCallback, useEffect } from 'react';
import Portal from '../common/Portal';
import styled from 'styled-components';
import { useSideBarContext } from '../../contexts/SideBarContext';
import Link from 'next/link';

const Container = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 200px;
  padding-top: 40px;
  background-color: rgba(255, 255, 255, 0.75);
  transform: translateX(${({ active }) => (active ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;

  li {
    a {
      display: block;
      padding: 10px 20px;
      font-size: 16px;
      color: #555;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;

function SideBar(): ReactElement {
  const { active, closeSideBar } = useSideBarContext();

  const handleClose = useCallback(() => {
    closeSideBar();
  }, [closeSideBar]);

  useEffect(() => {
    if (active) document.addEventListener('click', handleClose);
    else document.removeEventListener('click', handleClose);
  }, [active, handleClose]);

  const handleClickContainer = (e: MouseEvent): void => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
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
    </Portal>
  );
}

export default SideBar;
