import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import * as S from './Search.style';
import styled from 'styled-components';
import CategoryButton from '../commons/buttons/CategoryButton';

interface IPlaceNameProps {
  name: string;
}

const PlaceName: React.FC<IPlaceNameProps> = ({ name }) => (
  <div style={{ color: '#3AB9F0' }}>{name}</div>
);

// 예시 데이터
const Results = [
  {
    imageUrl: '/assets/jejudo_720.jpg',
    location: '고성시',
    startDate: '2022-05-01',
    endDate: '2022-05-05',
    title: '봄날의 고성, 1박 2일',
    content:
      '매우 만족했던 경남 고성 여행 1박 2일 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!, 매우 만족했던 경남 고성 여행 1박 2일맞 코스,여행 1박  1박 경남 고성 가볼만한 곳, 고성 드라이브 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!',
    categories: ['자연', '문화', '역사'],
  },
  {
    imageUrl: '/assets/jejudo_720.jpg',
    location: '고성시',
    startDate: '2022-05-01',
    endDate: '2022-05-05',
    title: '봄날의 고성, 1박 2일',
    content:
      '매우 만족했던 경남 고성 여행 1박 2일 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!',
    categories: ['자연', '문화', '역사'],
  },
  {
    imageUrl: '/assets/jejudo_720.jpg',
    location: '고성시',
    startDate: '2022-05-01',
    endDate: '2022-05-05',
    title: '봄날의 고성, 1박 2일',
    content:
      '매우 만족했던 경남 고성 여행 1박 2일 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!',
    categories: ['자연', '문화', '역사'],
  },
  {
    imageUrl: '/assets/jejudo_720.jpg',
    location: '고성시',
    startDate: '2022-05-01',
    endDate: '2022-05-05',
    title: '봄날의 고성, 1박 2일',
    content:
      '매우 만족했던 경남 고성 여행 1박 2일 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!',
    categories: ['자연', '문화', '역사'],
  },
  {
    imageUrl: '/assets/jejudo_720.jpg',
    location: '고성시',
    startDate: '2022-05-01',
    endDate: '2022-05-05',
    title: '봄날의 고성, 1박 2일',
    content:
      '매우 만족했던 경남 고성 여행 1박 2일 코스, 경남 고성 가볼만한 곳, 고성 드라이브 코스, 고성 투어 1편시작합니다!',
    categories: ['자연', '문화', '역사'],
  },
];

const ResultsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // 선택된 탭의 인덱스를 추적

  const placeName = '인사동';
  const place = ['조계사', '경인미술관', '숭례문', '카페봄봄'];

  return (
    <S.ResultContainer>
      <S.ResultBox>
        <S.ResultTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlaceName name={placeName} />
            <span style={{ marginLeft: '0.3rem' }}>주변에 가볼만한 곳</span>
          </div>
        </S.ResultTitle>
      </S.ResultBox>
      <S.TabContainer>
        {place.map((tab) => (
          <S.TabButton key={tab}>
            <IoLocationSharp /> {tab}
          </S.TabButton>
        ))}
      </S.TabContainer>

      <DivWrapper>
        <div>
          <SearchTitle
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}
          >
            여행 정보
          </SearchTitle>
        </div>
        <Sort>
          <SearchTitle
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            여행 플랜
          </SearchTitle>
        </Sort>
      </DivWrapper>
      <S.ResultsContainer>
        {Results.map((data, index) => (
          <S.ResultItem key={index}>
            <ThumbnailImage src={data.imageUrl} alt="썸네일" />
            <S.ContentWrapper>
              <Location>
                {data.location} | {`${data.startDate} - ${data.endDate}`}
              </Location>
              {/* <DateRange>{`${data.startDate} - ${data.endDate}`}</DateRange> */}
              <S.ItemTitle>{data.title}</S.ItemTitle>
              <S.ItemContent>{data.content}</S.ItemContent>
              <CategoriesContainer>
                {data.categories.map((category, categoryIndex) => (
                  <CategoryButton key={categoryIndex} title={category} />
                ))}
              </CategoriesContainer>
            </S.ContentWrapper>
          </S.ResultItem>
        ))}
      </S.ResultsContainer>
    </S.ResultContainer>
  );
};

export default ResultsContent;

const ThumbnailImage = styled.img`
  width: 280px;
  height: 220px;
  box-sizing: border-box;
`;

const DivWrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 2px solid #eee;
  width: 1100px;
`;
const SearchTitle = styled.div`
  width: 110px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 60px 0 30px 0;
  position: relative;
  text-align: center;

  &.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 100%;
    border-bottom: 3px solid #000;
  }
`;

// const DateRange = styled.div`
// `;

const Location = styled.div`
  font-size: 20px;
  /* font-weight: 600; */
`;

const CategoriesContainer = styled.div`
  display: flex;
`;

const Sort = styled.div`
  margin-left: 20px;
`;
