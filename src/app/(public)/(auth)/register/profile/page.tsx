import ProfileForm from '@/components/Auth/register/ProfileForm'
import { ProfileFetch } from '@/core/api/auth/ProfileFetch'
import { Metadata } from 'next';
import React from 'react'
export interface IProfileResponse {
    message?: string,
    user?: object;
    error?: string;
    success?: boolean;
}

export const metadata: Metadata = {
  title: "ثبت نام",
};
const ProfilePage = () => {
  return (
     <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <ProfileForm action={ProfileFetch} />
    </div>
  )
}

export default ProfilePage