import { ReactElement } from 'react';
import Portal from '../common/Portal';
import styled from 'styled-components';
import { useSideBarContext } from '../../contexts/SideBarContext';

const Container = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20000;
  width: 200px;
  background-color: #fff;
  transform: translateX(${({ active }) => (active ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

function SideBar(): ReactElement {
  const { active } = useSideBarContext();
  return (
    <Portal>
      <Container active={active}>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </Container>
    </Portal>
  );
}

export default SideBar;
