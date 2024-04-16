// import React from 'react';
import { TripDetail } from '@/api/interfaces/reviewInterface';
import * as S from '@/components/commons/user/TravelReview/Review.style';
import { useState } from 'react';
import Button from '../../buttons/Button';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteTrip } from '@/api/reviewAxios';
import { useNavigate } from 'react-router-dom';

interface ReviewDetailHeaderProps {
  tripDetail: TripDetail;
}

const ReviewDetailHeader = ({ tripDetail }: ReviewDetailHeaderProps) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // 여행 정보 -> 삭제하기
  const deleteReviewMutation = useMutation({
    mutationFn: (tripId: number) => deleteTrip(tripId),
    onSuccess: () => {
      alert('여행 정보가 성공적으로 삭제되었습니다.');
      navigate('/travelReview');
    },
    onError: (error: AxiosError) => {
      const message = error.response?.data;
      alert(`여행 정보 삭제 실패! 오류: ${message}`);
      console.error(error.response?.data);
    },
  });

  const handleDelete = (tripId: number) => {
    deleteReviewMutation.mutate(tripId);
  };

  // 여기자나여 => 여기가 썸네일 이미지 구간
  const imageUrl =
    tripDetail.imageUrlList && tripDetail.imageUrlList.length > 0
      ? tripDetail.imageUrlList[0]
      : '기본이미지URL';

  return (
    <S.Container>
      <S.HeaderBox>
        <S.Title>상세보기</S.Title>
        <S.ButtonBox>
          <Button
            text="삭제하기"
            onClick={() => handleDelete(tripDetail.tripId)}
          />
          <Button text="수정하기" />
        </S.ButtonBox>
      </S.HeaderBox>
      <S.UserSection>
        <S.UserImage src={imageUrl} alt="사진" /> {/* 수정된 부분 */}
        <S.UserName>{tripDetail.nickname}님</S.UserName>
      </S.UserSection>
      <S.ImageBox>
        {tripDetail.imageUrlList &&
          tripDetail.imageUrlList.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`리뷰 이미지 ${index + 1}`}
              style={{
                display: activeIndex === index ? 'block' : 'none',
                width: '100%',
                height: '450px',
              }}
            />
          ))}
        <S.SliderDots>
          {tripDetail.imageUrlList &&
            tripDetail.imageUrlList.map((_, index) => (
              <S.Dot
                key={index}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
        </S.SliderDots>
      </S.ImageBox>
    </S.Container>
  );
};

export default ReviewDetailHeader;
