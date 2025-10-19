import LoginForm from '@/components/Auth/login/Login'
import Top from '@/components/Auth/top/Top'
import { LoginFetch } from '@/core/api/auth/LoginFetch';
import { Metadata } from 'next';
import React from 'react'
export interface ILoginResponse {
  accessToken?: string;
  refreshToken?: string;
  error?: string
}
export const metadata: Metadata = {
  title: "ورود",
};
const LoginPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <Top />
      <LoginForm action={LoginFetch} />
    </div>
  )
}

export default LoginPage