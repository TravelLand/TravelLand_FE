import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const KakaoRedirect: React.FC = () => {
  const cookie = new Cookies();
  // const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    // const authToken = res.headers['authorization']; // Headers are generally case-insensitive but depend on server configuration
    if (params) {
      cookie.set('Authorization', params.Authorization, { path: '/' });
    } else {
      console.log('Authorization token not found in the response headers.');
    }
  });
  //
  // const navigate = useNavigate();
  // const code = new URL(window.location.href).searchParams.get('code');
  // const response = async (code: string | null) => {
  //   if (!code) {
  //     console.log('Authorization code not found.');
  //     navigate('/'); // Navigate to home if no code is found
  //     return;
  //   }
  //   try {
  //     const res: AxiosResponse = await instance.get('/users/login/kakao', {
  //       params: { code },
  //     });
  //     // console.log(res);
  //     // Correct way to access custom headers - make sure the header names are correctly handled
  //     const authToken = res.headers['authorization']; // Headers are generally case-insensitive but depend on server configuration
  //     if (authToken) {
  //       cookie.set('Authorization', authToken, { path: '/' });
  //     } else {
  //       console.log('Authorization token not found in the response headers.');
  //     }
  //     navigate('/');
  //   } catch (error: any) {
  //     console.error(
  //       'An error occurred during the authentication process:',
  //       error,
  //     );
  //     navigate('/');
  //   }
  // };
  // useEffect(() => {
  //   response(code);
  // }, [code]);
  return null; // Since this component does not render anything, return null
};

export default KakaoRedirect;
