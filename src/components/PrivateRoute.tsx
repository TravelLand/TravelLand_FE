// components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import { Cookies } from 'react-cookie';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const cookie = new Cookies();
  const hasCookie = cookie.get('Authorization');

  if (!isLoggedIn && hasCookie === undefined) {
    // 로그인 상태가 아니면 로그인 페이지로 리디렉션
    alert('로그인이 필요합니다.');
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
