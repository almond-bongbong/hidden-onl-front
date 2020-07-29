import React, { ReactElement } from 'react';

function MainMap(): ReactElement {
  return <div>{process.env.KAKAO_APP_KEY || '없음'}</div>;
}

export default MainMap;
