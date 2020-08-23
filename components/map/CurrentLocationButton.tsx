import React, { ReactElement } from 'react';
import { Compass } from 'react-feather';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

interface Props {
  onClick: () => void;
}

const CurrentLocation = styled.button`
  display: block;
  position: absolute;
  right: 20px;
  bottom: 80px;
  z-index: 100;
  padding: 5px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  font-size: 0;
`;

function CurrentLocationButton({ onClick }: Props): ReactElement {
  return (
    <CurrentLocation onClick={onClick}>
      <Compass color={theme.primaryColor} />
    </CurrentLocation>
  );
}

export default CurrentLocationButton;
