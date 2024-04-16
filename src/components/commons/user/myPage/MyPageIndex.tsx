import { useState } from 'react';
// import { MediumButton } from '../../buttons/Button';
import MyPagePlanList from './myPageComponents/MyPagePlanList';
import * as S from '@components/commons/user/myPage/MyPage.style';
import MyPageReviewList from './myPageComponents/MyPageReviewList';
import MyPageUserInfo from './myPageComponents/MyPageUserInfo';

const MyPageIndex = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* 탭 */}
      <MyPageUserInfo />
      <S.MyPageTabStyle>
        <S.MyPageTabButton
          onClick={() => handleTabClick(0)}
          isActive={activeTab === 0}
        >
          여행 정보
        </S.MyPageTabButton>
        <S.MyPageTabButton
          onClick={() => handleTabClick(1)}
          isActive={activeTab === 1}
        >
          여행 플랜
        </S.MyPageTabButton>
        {/* <S.MyPageTabButton
          onClick={() => handleTabClick(2)}
          isActive={activeTab === 2}
        >
          초대된 여행 플랜 갯수
        </S.MyPageTabButton> */}
      </S.MyPageTabStyle>
      {/* <MyPageTab /> */}

      {/* 목록 */}
      {activeTab === 0 ? <MyPagePlanList /> : null}
      {activeTab === 1 ? <MyPageReviewList /> : null}
      {/* {activeTab === 2 ? <MyPageInvitedList /> : null} */}
    </>
  );
};

export default MyPageIndex;
