import React from 'react'
import Header from './Header'
import { getUserDetail } from '@/core/api/LandingPage/userDetail'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
const MainHeader = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    let userInfo
    let userId: string | undefined;
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as { id: string };
        userId = findUserId.id;
        userInfo = await getUserDetail(String(userId))
    }
    return (
        <>
            {userInfo ? (
                <Header userInfo={userInfo} />

            ) : (
                <Header />
            )}
        </>
    )
}

export default MainHeader