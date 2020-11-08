export const getKakaoRedirectUri = (): string => {
  const origin = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
  return `${origin}${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_PATH}`;
};
