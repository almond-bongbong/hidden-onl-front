import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import useLogin from '../../hooks/useLogin';

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
`;

const Title = styled.em`
  font-style: normal;
  font-size: 24px;
`;

const Description = styled.p`
  color: #666;
`;

const LoginButton = styled.button`
  width: 300px;
  margin-top: 30px;
`;

function LoginForm(): ReactElement {
  const { loginWithKakao } = useLogin();

  return (
    <Container>
      <Title>간편하게 시작해 보세요.</Title>
      <Description>5초면 시작하실 수 있습니다.</Description>
      <LoginButton type="button" onClick={loginWithKakao}>
        <Image src="/images/login/login_kakao.png" alt="카카오로 시작하기" width={300} height={45} />
      </LoginButton>
    </Container>
  );
}

export default LoginForm;
