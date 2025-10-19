import SignupForm from '@/components/Auth/register/SignupForm'
import { PostUserEmail } from '@/core/api/auth/postEmail';
import { Metadata } from 'next';
import React from 'react'
export interface IRegisterResponse {
  message?: string;
  tempUserId?: string;
  email?: string;
  error?: string;
}
export const metadata: Metadata = {
  title: "ثبت نام",
};
const RegisterPage = () => {
  return (
    <div>
      <SignupForm action={PostUserEmail}/>
    </div>
  )
}

export default RegisterPage