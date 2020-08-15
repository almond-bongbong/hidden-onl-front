import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  onClick: () => void;
}

const Container = styled.button<{ active: boolean }>`
  display: block;
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 10;
  padding: 10px;
  cursor: pointer;
  -webkit-touch-callout: none;
  transform: translateY(-50%);

  span {
    display: block;
    width: 24px;
    height: 2px;
    position: relative;
    background: #fff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;

    & + span {
      margin-top: 8px;
    }

    &:first-child {
      transform-origin: 0 0;
    }

    &:nth-last-child(2) {
      transform-origin: 0 100%;
    }

    ${({ active }) =>
      active &&
      `
      opacity: 1;
      transform: rotate(45deg) translate(-0.5px, -4px);
      
      &:nth-last-child(1) {
        transform: rotate(-45deg) translate(0, 2px);
      }
    `}
  }
`;

function HamburgerButton({ active, onClick }: Props): ReactElement {
  return (
    <Container type="button" onClick={onClick} title="메뉴 열기" active={active}>
      <span />
      <span />
    </Container>
  );
}

export default HamburgerButton;
