import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
import Header from '@/components/layouts/Header';
import Search from '@/components/search/Search';
import Button, { TabButton } from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard'; // ListItemProps,
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import { useNavigate } from 'react-router-dom';

interface MainProps {
  onClick: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  // 메인 헤더 카드 임시 데이터
  const MainCardsData = [
    {
      title: '경상도 경주',
      category: '#한옥',
      price: '150,000원',
      imageUrl: '/assets/kyeongju_720.jpg',
    },
    {
      title: '경기도 가평',
      category: '#여름',
      price: '50,000원',
      imageUrl: '/assets/gapyeong_720.jpg',
    },
    {
      title: '전라도 여수',
      category: '#밤바다',
      price: '200,000원',
      imageUrl: '/assets/yeosu_720.jpg',
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
      title: '서울',
      location: '서울 > 남산타워( N서울타워)',
      description: '멋진 도시 전망을 볼 수 있는 곳',
      likes: 110,
      imageUrl: '/assets/namsantower_720.jpg',
    },
    {
      title: '여수',
      location: '전라도 > 여수',
      description: '낭만 있는 여수 밤바다',
      likes: 100,
      imageUrl: '/assets/yeosu_720.jpg',
    },
    {
      title: '경주',
      location: '경상도 > 경주',
      description: '한국의 멋, 한옥을 즐기다',
      likes: 105,
      imageUrl: '/assets/kyeongju_720.jpg',
    },
    {
      title: '가평',
      location: '경기도 > 가평',
      description: '봄 드라이브부터 여름 빠지까지',
      likes: 98,
      imageUrl: '/assets/gapyeong_720.jpg',
    },
    {
      title: '대전',
      location: '충청도 > 대전',
      description: '성심당 빵의 성지',
      likes: 77,
      imageUrl: '/assets/daejeon_720.jpg',
    },
    {
      title: '부산',
      location: '경상도 > 부산',
      description: '부산 갈매기~~',
      likes: 65,
      imageUrl: '/assets/busan_360.jpg',
    },
    {
      title: '제주도',
      location: '제주도 > 제주도',
      description: '말해모해 다 좋아',
      likes: 56,
      imageUrl: '/assets/jejudo_720.jpg',
    },
    {
      title: '강릉',
      location: '강원도 > 강릉',
      description: '동해바다에서 서핑하기',
      likes: 55,
      imageUrl: '/assets/gangreung_720.jpg',
    },
    {
      title: '목포',
      location: '전라도 > 목포',
      description: '10첩 반상의 고향',
      likes: 47,
      imageUrl: '/assets/mokppo_720.jpg',
    },
    {
      title: '서울',
      location: '서울 > 명동',
      description: '외국인들의 길거리 음식 맛집',
      likes: 30,
      imageUrl: '/assets/myeongdong_720.jpg',
    },
  ];

  return (
    <>
      <Header />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={() => navigate('/search')}
      />
      <ButtonContainer>
        <TabButton text="떠돌이 랜드" onClick={handleReviewPageClick} />
        <TabButton text="어디 갈랜?" onClick={handleMakePlanClick} />
      </ButtonContainer>
      <Maintitle />
      <ButtonsWrapper>
        <Button text="가족 여행"></Button>
        <Button text="커플 여행"></Button>
      </ButtonsWrapper>
      <MainCard cards={MainCardsData} />
      <ListTitle />
      <MainList items={items} />
    </>
  );
};

export default Main;
