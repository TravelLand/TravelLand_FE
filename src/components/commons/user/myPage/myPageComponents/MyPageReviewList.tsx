// import { MediumButton } from '@/components/commons/buttons/Button';
import Card from '@/components/commons/cards/Card';
import * as S from '@/components/commons/user/myPage/MyPage.style';
// import { useMyTripListQuery } from '@/hooks/useQuery';
// import { useState } from 'react';
// import { getMyTripList } from '@/api/userAxios';

const MyPageReviewList = () => {
  // const [page, _] = useState(1); // 페이지 번호
  // const [size] = useState(10); // 한 페이지 당 받아올 겟수
  // const [sortBy] = useState('createdAt');
  // const [isAsc] = useState(true);

  // 페이지네이션을 위한 파라미터 설정
  // const tripListParams = { page, size, isAsc, sortBy };

  // const { data, isError, isLoading } = useMyTripListQuery(tripListParams);
  // console.log(data);

  // if (isLoading) return <div>Data is Loading</div>;
  // if (isError) return <div>Error occurred during fetching</div>;

  return (
    <>
      {/* 버튼 */}
      <S.MyPageButton>
        {/* <MediumButton text="내가 작성한 4" /> */}
        {/* <img src="/assets/check.png" alt="체크" />
        </MediumButton> */}
        &nbsp;
        {/* <MediumButton text="스크랩 Number" /> */}
        {/* <img src="/assets/bookmark.png" alt="북마크" />
        </MediumButton> */}
      </S.MyPageButton>
      {/* 카드 섹션 */}
      <Card title={'후쿠오카'} date={'2024.03.31'} city={'일본 - 후쿠오카'} />
    </>
  );
};

export default MyPageReviewList;
