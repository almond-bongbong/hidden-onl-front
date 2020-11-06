import { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import LoginForm from '../components/login/LoginForm';

function Login(): ReactElement {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}

export default Login;
