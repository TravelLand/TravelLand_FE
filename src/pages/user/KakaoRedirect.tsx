import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useAuthStore } from '@/store/useAuthStore';

const KakaoRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuthStore(); // 로그인 함수를 여기에서 가져옵니다.

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const authorizationToken = queryParams.get('Authorization');
    const cookie = new Cookies();

    if (authorizationToken) {
      const options = {
        path: '/',
        // 추가 옵션: secure, httpOnly, sameSite, expires 등
      };

      cookie.set('Authorization', authorizationToken, options);
      login(); // 로그인 상태를 true로 설정
      navigate('/'); // 메인 페이지로 이동
    } else {
      console.error('Authorization token not found in the query string.');
    }
  }, [location.search, navigate, login]); // login을 의존성 배열에 추가합니다.

  return null; // 이 컴포넌트는 아무것도 렌더링하지 않으므로 null을 반환합니다.
};

export default KakaoRedirect;
