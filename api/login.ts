import axios, { AxiosPromise } from 'axios';

export const authorizeKakao = (): AxiosPromise =>
  axios.get('https://kauth.kakao.com/oauth/authorize', {
    params: {
      client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
      redirect_uri: `${window.location.origin}${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_PATH}`,
      response_type: 'code',
    },
  });
