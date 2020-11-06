import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { LOGIN_STATE_KEY } from '../constants/storageKeys';
import qs from 'query-string';

interface Return {
  loginWithKakao: () => Promise<void>;
}

function useLogin(): Return {
  const loginWithKakao = useCallback(async () => {
    const state = uuid();
    const params = {
      client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
      redirect_uri: `${window.location.origin}${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_PATH}`,
      response_type: 'code',
      state,
    };

    sessionStorage.setItem(LOGIN_STATE_KEY, state);
    window.location.href = `https://kauth.kakao.com/oauth/authorize?${qs.stringify(params)}`;
  }, []);

  return {
    loginWithKakao,
  };
}

export default useLogin;
