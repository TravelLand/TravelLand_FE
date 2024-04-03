import * as S from './User.styles';
import MyPageIndex from '@/components/commons/user/myPage/MyPageIndex';

const MyPage = () => {
  return (
    <>
      <S.MyPageStyle>
        {/* 타이틀 */}
        <h2>마이 페이지</h2>
        <MyPageIndex />
      </S.MyPageStyle>
    </>
  );
};

export default MyPage;