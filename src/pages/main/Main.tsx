import React, { useState } from 'react';
import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
import Search from '@/components/search/Search';
import Button, {
  SmallButton,
  // TabButton,
} from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import ReDesignHeader from '@/components/layouts/Header2';
import SearchModal from './SearchPage';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  useGetMainHashtagListQuery,
  useGetMainRankListQuery,
} from '@/hooks/useQuery';
// import SearchModal from '@/components/SearchModal';

interface MainProps {
  onClick?: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // 모달을 토글하는 함수
  const toggleSearchModal = () => setSearchModalOpen(!isSearchModalOpen);

  // TopTen
  const { data: TopTenData, isLoading, isError } = useGetMainRankListQuery();

  console.log(TopTenData);

  // 해시태그
  const { data: hashTagData } = useGetMainHashtagListQuery();

  console.log(hashTagData);

  // 모달을 여는 함수
  // const openSearchModal = () => {
  //   setSearchModalOpen(true);
  // };

  // // 모달을 닫는 함수
  // const closeSearchModal = () => {
  //   setSearchModalOpen(false);
  // };

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  // 메인 헤더 카드 임시 데이터
  const MainCardsData = [
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트', '#가족여행', '#역사', '#역사'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트', '#가족여행', '#역사', '#역사'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
  ];

  // 메인 TOP 10 리스트 임시 데이터
  // const tempData: ListItemProps[] = [...Array(10)].map((_, index) => ({
  //   title: `${index + 1} 서울`,
  //   location: '서울 > 남산타워( N서울타워)',
  //   description: '멋진 도시 전망을 볼 수 있는 곳',
  //   likes: 77,
  //   imageUrl: '/assets/namsantower_720.jpg',
  // }));

  const items = [
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error occured</div>;
  }

  return (
    <>
      <ReDesignHeader />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={toggleSearchModal}
      />
      <ButtonContainer>
        {/* 버튼 이벤트 핸들러 로직 */}
        {/* ... */}
      </ButtonContainer>
      <ButtonsWrapper1>
        <Button text="떠돌이랜드" onClick={handleReviewPageClick} />
        <Button text="어디 갈랜?" onClick={handleMakePlanClick} />
      </ButtonsWrapper1>
      <Maintitle />
      <ButtonsWrapper>
        <SmallButton text="전체" />
        <SmallButton text="가족 여행" />
        <SmallButton text="커플 여행" />
      </ButtonsWrapper>
      {/* 해시태그 영역 */}
      <MainCard cards={MainCardsData} />
      <ListTitle />
      {/* 탑텐 데이터 전달 */}
      <MainList items={items} />
      <SearchModal isOpen={isSearchModalOpen} onClose={toggleSearchModal} />
    </>
  );
};

export default Main;

const ButtonsWrapper1 = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100px; /* 버튼을 중앙에 위치시키기 위한 높이 지정 */
`;
