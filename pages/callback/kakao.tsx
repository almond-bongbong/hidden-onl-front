import React, { ReactElement, useEffect } from 'react';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { LOGIN_STATE_KEY } from '../../constants/storageKeys';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

function Kakao(): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const { state } = router.query;
    const myState = sessionStorage.getItem(LOGIN_STATE_KEY);

    if (myState !== state) {
      Modal.error({
        title: '잘못된 접근입니다.',
        onOk: () => {
          router.replace('/');
        },
      });
      return;
    }

    try {
      console.log('get token');
    } catch (e) {
      console.error('에러!');
    }
  }, [router]);

  return <div>loading...</div>;
}

export default Kakao;
