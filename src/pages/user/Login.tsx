import Button from '@/components/commons/buttons/Button';
import { LoginModal } from '@/components/commons/modals/Modal';
import * as S from './User.styles';

const base_url = import.meta.env.VITE_APP_BASE_URL;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const loginWithKakao = () => {
    window.location.href = `${base_url}oauth2/authorization/kakao`;
  };

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={onClose}>
        <S.LoginStyle>
          <div>
            <h2>SNS 계정으로 로그인 하기</h2>
            <Button
              text="X"
              onClick={() => {
                onClose();
              }}
              borderColor="transparent"
              borderRadius="50%"
              width="50px"
              height="50px"
              color="white"
              textColor="black"
            />
          </div>
          <img
            src="/assets/kakao/kakao_login_medium_wide.png"
            onClick={loginWithKakao}
            style={{ borderRadius: '25px' }}
          />
          <p> "떠나볼까"는 소셜 로그인 기반으로 정보를 수집합니다.</p>
        </S.LoginStyle>
      </LoginModal>
    </>
  );
};

export default Login;
