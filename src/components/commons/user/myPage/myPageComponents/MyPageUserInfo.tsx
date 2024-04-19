import { useGetUerInfoQuery } from '@/hooks/useQuery';
import * as S from '@components/commons/user/myPage/MyPage.style';

const MyPageUserInfo = () => {
  // return <></>;
  const { data, isLoading, isError } = useGetUerInfoQuery();
  console.log(data);
  const userData = data?.data;
  if (isLoading) return <div>Data is Loading</div>;
  if (isError) return <div>Error occurred during fetching</div>;
  return (
    <>
      <S.MyPageContainer>
        {' '}
        <S.UserInfoContainer>
          {/* 유저 정보 영역 */}
          {/* 이미지 */}
          <img src={userData.profileImage} />
          {/* 닉네임 & 이메일 */}
          <S.UserInfoCotent>
            <S.UserInfoContentName>
              <div>{userData.nickname}</div>
              <div>{userData.email}</div>
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
