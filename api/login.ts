import axios, { AxiosPromise } from 'axios';
import { getKakaoRedirectUri } from '../utils/url';

export const getKakaoToken = (code: string): AxiosPromise =>
  axios.post('https://kauth.kakao.com/oauth/token', null, {
    params: {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
      redirect_uri: getKakaoRedirectUri(),
      code,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
    },
  });
