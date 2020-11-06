import React, { ReactElement } from 'react';
import Head from 'next/head';

function Meta(): ReactElement {
  return (
    <Head>
      <title>오늘,</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=clusterer,services`}
      />
    </Head>
  );
}

export default Meta;
