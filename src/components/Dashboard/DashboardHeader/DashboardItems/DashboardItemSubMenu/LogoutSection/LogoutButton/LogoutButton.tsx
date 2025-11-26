import { logout } from '@/core/api/auth/logout'
import { useCookies } from 'next-client-cookies'
import { redirect } from 'next/navigation'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'

interface IProps {
    closeLogout: Dispatch<SetStateAction<boolean>>
}
const LogoutButton: FC<IProps> = ({ closeLogout }) => {
    const cookieStore = useCookies()
    const accessToken = cookieStore.get('accessToken')
    const handleLogout = async () => {
        const sendLogout = await logout(String(accessToken))
        if (sendLogout.message === 'Logout successful') {
            closeLogout(false)
            toast.success('با موفقیت خارج شدید', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            await new Promise(resolve => setTimeout(resolve, 2700));
            toast.loading('در حال انتقال به صفحه اصلی...', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            setTimeout(() => {
                cookieStore.remove('accessToken')
                cookieStore.remove('refreshToken')
                redirect('/');
            }, 2000);
        }
    }
    return (
        <>
            <span onClick={handleLogout} className='text-black text-[14px] font-[400] cursor-pointer bg-[#F79000] px-4 py-2 rounded-[12px] '>خروج</span>
        </>
    )
}

export default LogoutButton