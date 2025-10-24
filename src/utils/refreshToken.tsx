'use client';

import { useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import jwtDecode from 'jsonwebtoken';
import { postRefreshToken } from '@/core/api/auth/RefreshToken';

const TokenRefresher = () => {
  const cookies = useCookies();
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');

  useEffect(() => {
    if (!accessToken || !refreshToken) return;
    const refreshAccessToken = async () => {
      const newToken = await postRefreshToken(refreshToken)
      if(newToken.accessToken){
        cookies.set('accessToken' , newToken.accessToken)
      }
    }
    
    const checkTokenExpiration = () => {
      try {
        const decoded = jwtDecode.decode(accessToken);
        if (!decoded || typeof decoded === 'string' || !decoded.exp) return;

        const expTime = decoded.exp * 1000;
        const currentTime = Date.now();
        const oneMinuteBeforeExp = expTime - 60 * 1000; 

        if (currentTime >= oneMinuteBeforeExp) {
          refreshAccessToken();
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    };
    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 30 * 1000);
    return () => clearInterval(interval);
  }, [accessToken, refreshToken, cookies]);

  return null;
};

export default TokenRefresher;