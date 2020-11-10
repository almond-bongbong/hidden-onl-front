import React, { ReactElement, useCallback, useEffect } from 'react';
import { message, Modal } from 'antd';
import { useRouter } from 'next/router';
import { LOGIN_STATE_KEY, TOKEN_KEY } from '../../constants/storageKeys';
import { GetServerSideProps } from 'next';
import { getKakaoToken } from '../../api/login';
import { useMutation } from '@apollo/client';
import { LoginPlatform, LoginResponse, MutationLoginArgs } from '../../types/api';
import { LOGIN } from '../../queries/loginQueries';

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
  const [loginMutation] = useMutation<{ login: LoginResponse }, MutationLoginArgs>(LOGIN);

  const login = useCallback(
    async (token) => {
      const { data } = await loginMutation({
        variables: {
          accessToken: token,
          platform: LoginPlatform.Kakao,
        },
      });

      if (data?.login.ok && data.login.token) {
        message.success('로그인 성공!');
        localStorage.setItem(TOKEN_KEY, data.login.token);
        router.replace('/');
      } else {
        message.error('인증에 실패했습니다.');
        Modal.error({
          title: '인증에 실패했습니다.',
          onOk: () => {
            router.replace('/');
          },
        });
      }
    },
    [loginMutation, router],
  );

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

    login(token);
  }, [router, login, token]);

  return <div>loading...</div>;
}

export default Kakao;
