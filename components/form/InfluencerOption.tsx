import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  thumbnailUrl?: string;
  name: string;
}

const Container = styled.div``;

const Thumbnail = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;

  img {
    display: block;
    width: 100%;
  }
`;

const Name = styled.span`
  vertical-align: middle;
`;

function InfluencerOption({ thumbnailUrl, name }: Props): ReactElement {
  return (
    <Container>
      <Thumbnail>{thumbnailUrl ? <img src={thumbnailUrl} alt="" /> : <span>no image</span>}</Thumbnail>
      <Name>{name}</Name>
    </Container>
  );
}

export default InfluencerOption;
