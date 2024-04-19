import { useAuthStore } from '@/store/useAuthStore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 타입 정의 추가
interface IMainModalProps {
  // isLoggedIn: boolean;
  handleLogout: () => void;
  handleLogin: () => void;
}

const MainModal: React.FC<IMainModalProps> = ({
  // isLoggedIn,
  handleLogout,
  handleLogin,
}) => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState<boolean>(false);
  const { isLoggedIn } = useAuthStore(); // Zustand에서 로그인 상태 가져오기

  // mypage 이동
  const handleOpenMypage = () => {
    navigate('/user/myPage');
  };
  // mypage 이동
  const handleOpenPlanCreate = () => {
    navigate('/planCreate/1');
  };
  // mypage 이동
  const handleOpenTripCreate = () => {
    navigate('/travelCreate');
  };

  useEffect(() => {
    setSlide(true);
    console.log('Modal opened');
  }, []);

  useEffect(() => {
    // 모달의 위치 조정 함수
    const adjustModalPosition = () => {
      const burgerButtonRect = document
        .querySelector('.BurgerMenuIcon')
        ?.getBoundingClientRect(); // 버거 버튼의 위치 정보

      const modal = document.getElementById('modal-root');
      if (burgerButtonRect && modal) {
        modal.style.top = `${
          burgerButtonRect.top + burgerButtonRect.height + window.scrollY
        }px`; // 모달을 버거 버튼 아래에 위치시킴
        modal.style.right = `${window.innerWidth - burgerButtonRect.right}px`; // 모달을 버거 버튼의 오른쪽 정렬
      }
    };

    // 모달이 열릴 때마다 위치 조정
    adjustModalPosition();

    // 창 크기 변경 시 위치 조정
    window.addEventListener('resize', adjustModalPosition);

    return () => {
      window.removeEventListener('resize', adjustModalPosition);
    };
  }, []);

  // 모달 외부 클릭 시 모달 닫기
  const handleCloseModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!(event.target as HTMLElement).closest('.ModalContainer')) {
      setSlide(false);
      // setTimeout(() => {
      //   handleLogout(); // 모달 닫힌 후 로그아웃 처리
      // }, 300);
    }
  };

  return ReactDOM.createPortal(
    <Modaldrop
      style={{ opacity: slide ? 1 : 0 }}
      onClick={handleCloseModal} // 모달 외부 클릭 시 handleCloseModal 호출
    >
      <ModalWrapper
        style={{
          opacity: slide ? 1 : 0,
          transform: slide ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <ModalContainer className="ModalContainer">
          {!isLoggedIn && (
            <>
              <MenuItem onClick={() => handleLogin()}>로그인</MenuItem>
              <MenuItem>회원가입</MenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <MenuItem onClick={handleOpenMypage}>마이페이지</MenuItem>
              <MenuItem onClick={handleOpenPlanCreate}>
                여행 플랜 작성하기
              </MenuItem>
              <MenuItem onClick={handleOpenTripCreate}>
                여행 정보 작성하기
              </MenuItem>
              <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
            </>
          )}
        </ModalContainer>
      </ModalWrapper>
    </Modaldrop>,
    document.getElementById('modal-root') || document.createElement('div'),
  );
};

export default MainModal;

const ModalWrapper = styled.div`
  position: fixed;
  width: 180px;
  right: 20%;
  top: 110px;
  z-index: 10;
  opacity: 0;
  transition:
    opacity 0.3s,
    transform 0.3s;
  transform-origin: top right;
`;

const Modaldrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: opacity 1s;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  /* overflow: hidden; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
    border-radius: 15px;
  }
`;
