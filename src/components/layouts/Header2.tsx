import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../search/Search';
import Login from '@/pages/user/Login'; // 로그인 모달 import
import MainModal from '../commons/modals/MainModal';
import logoImage from '@/icons/logo.svg';
import burgerIcon from '@/icons/burger.svg';
import SearchModal from '@/pages/main/SearchPage';

interface SearchInputContainerProps {
  isScrolled: boolean;
}

// interface UsersProps {
//   isLoggedIn: boolean;
// }

const ReDesignHeader: React.FC = () => {
  // 메뉴 모달
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  // 로그인 모달
  const [isModalOpen, setIsModalOpen] = useState(false); // 로그인 모달 상태 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 추가
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // 검색 모달 상태 추가

  const navigate = useNavigate();

  // 모달을 토글하는 함수
  // const toggleModal = () => setIsModalOpen((prevState) => !prevState);

  // 모달을 여는 함수
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  // 버거 메뉴 모달
  const handleBurgerIconClick = () => {
    setIsMenuModalOpen((prevState) => !prevState);
  };

  // 메뉴 모달 닫기
  // const closeMenuModal = () => {
  //   setIsMenuModalOpen(false);
  // };

  // 로그인 모달 열기
  const handleOpenLogin = () => {
    setIsModalOpen(true); // 로그인 모달 상태를 true로 변경
  };

  const closeModal = () => {
    console.log('closeModal 실행됨');
    setIsModalOpen(false);
    setIsMenuModalOpen(false); // 메인 모달도 닫히도록 추가
  };
  // mypage 이동
  const handleOpenMypage = () => {
    navigate('/user/myPage');
  };
  // 로고 클릭 시 메인 페이지 이동
  const handleMainPage = () => {
    navigate('/');
  };

  // 스크롤에 따라 상태 변경
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 로그인 상태에 따라 보여지는 컨텐츠가 달라지도록 조건부 렌더링 처리
  return (
    <Header>
      <StickyHeader isScrolled={isScrolled}>
        <Container>
          <Logo onClick={handleMainPage}>
            <img src={logoImage} alt="떠나볼까 로고" />
          </Logo>
          {isScrolled && (
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onIconClick={openSearchModal}
            />
          )}
          <MenuContainer>
            <BurgerMenuIcon onClick={handleBurgerIconClick}>
              <img src={burgerIcon} alt="메뉴 모달 열기" />
            </BurgerMenuIcon>
            {isMenuModalOpen && (
              <MainModal
                isLoggedIn={isLoggedIn}
                handleLogout={() => {
                  setIsLoggedIn(false);
                  setIsMenuModalOpen(false);
                }}
                handleLogin={handleOpenLogin}
              />
            )}
          </MenuContainer>
          {isLoggedIn ? (
            <>
              <UserAction onClick={handleOpenMypage}>마이페이지</UserAction>
              <UserAction onClick={() => setIsLoggedIn(false)}>
                로그아웃
              </UserAction>
            </>
          ) : (
            <></>
          )}
        </Container>
      </StickyHeader>
      {/* 로그인 모달 */}
      {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} />}
      {isSearchModalOpen && (
        <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
      )}
    </Header>
  );
};

export default ReDesignHeader;

const Header = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StickyHeader = styled.div<SearchInputContainerProps>`
  position: ${(props) => (props.isScrolled ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  transition: position 0.3s ease-in-out;
  z-index: 11;
  padding: 10px 0;
  box-shadow: ${(props) =>
    props.isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
`;

const Container = styled.div`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 60px 0 10px;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 80px;
  max-height: 60px;
  cursor: pointer;
`;

const UserAction = styled.div`
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

// 버거 메뉴 아이콘 스타일
const BurgerMenuIcon = styled.div`
  width: 40px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 12;
`;
