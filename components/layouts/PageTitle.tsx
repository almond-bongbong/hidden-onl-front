import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 400;
  text-shadow: ${({ theme }) => theme.basicTextShadow};
`;

interface Props {
  title: string;
}

function PageTitle({ title }: Props): ReactElement {
  return <Title>{title}</Title>;
}

export default PageTitle;
