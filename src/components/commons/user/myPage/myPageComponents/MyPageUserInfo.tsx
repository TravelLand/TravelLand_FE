import * as S from '@components/commons/user/myPage/MyPage.style';

const MyPageUserInfo = () => {
  return (
    <>
      <S.MyPageContainer>
        {' '}
        <S.UserInfoContainer>
          {/* 유저 정보 영역 */}
          {/* 이미지 */}
          <img src="/assets/paris.jpg" />
          {/* 닉네임 & 이메일 */}
          <S.UserInfoCotent>
            <S.UserInfoContentName>
              <div>닉네임</div>
              <div>gogogo@gmail.com</div>
            </S.UserInfoContentName>
            {/* 회원정보 수정하기 버튼 */}
            <button>회원정보 수정하기</button>
          </S.UserInfoCotent>
        </S.UserInfoContainer>
        {/* 빈 박스 영역 */}
        <S.UserOtherInfoContainer />
      </S.MyPageContainer>
    </>
  );
};

export default MyPageUserInfo;
