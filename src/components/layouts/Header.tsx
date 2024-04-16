import Login from '@/pages/user/Login';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 추가

  const navigate = useNavigate();
  // 로그인 모달
  const handleOpenLogin = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // mypage 이동
  const handleOpenMypage = () => {
    navigate('/user/myPage');
  };
  // 로고 클릭 시 메인 페이지 이동
  const handleMainPage = () => {
    navigate('/');
  };
  // 로그인 상태에 따라 보여지는 컨텐츠가 달라지도록 조건부 렌더링 처리
  return (
    <>
      <Container>
        <Title onClick={handleMainPage}>떠나볼까</Title>
        <Users>
          {isLoggedIn ? (
            <>
              <UserAction onClick={handleOpenMypage}>마이페이지</UserAction>
              <UserAction onClick={() => setIsLoggedIn(false)}>
                로그아웃
              </UserAction>
            </>
          ) : (
            <>
              <UserAction onClick={handleOpenLogin}>로그인</UserAction>
              {/* <UserAction>회원가입</UserAction> */}
            </>
          )}
        </Users>
      </Container>
      <Login isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  /* border-bottom: 1px solid #000; */
  position: relative;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const Users = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 40px;
  font-weight: 600;
`;

const UserAction = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
