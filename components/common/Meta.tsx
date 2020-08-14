import React, { ReactElement } from 'react';
import Head from 'next/head';

function Meta(): ReactElement {
  return (
    <Head>
      <title>오늘</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <script src={`/js/kakao_map_sdk.js?appkey=${process.env.KAKAO_APP_KEY}`} />
    </Head>
  );
}

export default Meta;
