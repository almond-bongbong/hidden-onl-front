import React, { ReactElement, useEffect } from 'react';
import { message, Modal } from 'antd';
import { useRouter } from 'next/router';
import { LOGIN_STATE_KEY } from '../../constants/storageKeys';
import { GetServerSideProps } from 'next';
import { getKakaoToken } from '../../api/login';

interface Props {
  token?: string | null;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const props = { token: null };

  if (query.code) {
    try {
      const { data } = await getKakaoToken(query.code as string);
      props.token = data.access_token;
    } catch (e) {
      console.log('Get token for kakao failure');
    }
  }

  return {
    props,
  };
};

function Kakao({ token }: Props): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const { state } = router.query;
    const myState = sessionStorage.getItem(LOGIN_STATE_KEY);

    if (myState !== state || !token) {
      Modal.error({
        title: '잘못된 접근입니다.',
        onOk: () => {
          router.replace('/');
        },
      });
      return;
    }

    console.log(token);
  }, [router, token]);

  return <div>loading...</div>;
}

export default Kakao;
