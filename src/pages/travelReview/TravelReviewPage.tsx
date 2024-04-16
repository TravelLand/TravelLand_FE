import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import ReviewPageTab from '@/components/commons/user/TravelReview/ReviewTab';
import Card from '@/components/commons/cards/Card';
import { getTripList } from '@/api/reviewAxios';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

interface Trip {
  tripId: number;
  title: string;
  nickname: string;
  thumbnailUrl: string;
  tripPeriod: string;
  viewCount: number;
  createdAt: string;
}

const TravelReviewPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadTrips = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<Trip[]> = await getTripList({
        page,
        size: 3,
        sortBy: 'createdAt',
        isAsc: false,
      });
      const responseData: Trip[] = response.data;
      setTrips((prevTrips) => [...prevTrips, ...responseData]);
      if (responseData.length === 0 && responseData.length < 3) {
        setHasMore(false);
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips();
    console.log('현재페이지', page);
  }, [page]);

  const handleCardClick = (tripId: number) => {
    navigate(`/travelDetail/${tripId}`);
  };

  const handleTextClick = () => {
    navigate('/travelCreate');
  };

  const fetchMoreData = () => {
    console.log('스크롤 감지', hasMore);
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
      console.log('page증가');
    }
  };

  if (loading && page === 1)
    return <S.LoadingContainer>Loading...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>Error: {error}</S.ErrorContainer>;

  return (
    <ScrollDiv id="scrollableDiv">
      <Header />
      <S.TravelReviewstyle>
        <S.ReviewBox>
          <h2>여행 후기</h2>
          <S.ReviewBtn style={{ cursor: 'pointer' }} onClick={handleTextClick}>
            작성하기
          </S.ReviewBtn>
        </S.ReviewBox>
        <ReviewPageTab />
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={trips.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          endMessage={<p>더 이상 로드할 내용이 없습니다.</p>}
          scrollableTarget="scrollableDiv"
        >
          <S.TravelReviewCardSection>
            {trips.map((trip) => (
              <div key={trip.tripId}>
                <Card
                  // key={trip.tripId}
                  title={trip.title}
                  writer={trip.nickname}
                  date={`♥${trip.viewCount}`}
                  imageUrl={trip.thumbnailUrl}
                  onClick={() => handleCardClick(trip.tripId)}
                />
                <Card
                  // key={trip.tripId}
                  title={trip.title}
                  writer={trip.nickname}
                  date={`♥${trip.viewCount}`}
                  imageUrl={trip.thumbnailUrl}
                  onClick={() => handleCardClick(trip.tripId)}
                />
                <Card
                  // key={trip.tripId}
                  title={trip.title}
                  writer={trip.nickname}
                  date={`♥${trip.viewCount}`}
                  imageUrl={trip.thumbnailUrl}
                  onClick={() => handleCardClick(trip.tripId)}
                />
              </div>
            ))}
          </S.TravelReviewCardSection>
        </InfiniteScroll>
      </S.TravelReviewstyle>
    </ScrollDiv>
  );
};

export default TravelReviewPage;

const ScrollDiv = styled.div`
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`;
