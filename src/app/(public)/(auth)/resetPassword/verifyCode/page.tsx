import VerifyCode from '@/components/Auth/resetPassword/VerifyCode'
import { postVerify } from '@/core/api/auth/postVerify(reset)'
import { Metadata } from 'next';
import React from 'react'

export interface IResetVerifyResponse {
    message?: string;
    userId?: string;
    resetCode?: string;
    error?: string;
}
export const metadata: Metadata = {
  title: "بازیابی رمز عبور",
};
const VerifyCodePage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <VerifyCode action={postVerify} />
    </div>
  )
}

export default VerifyCodePage