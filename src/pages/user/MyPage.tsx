import Header from '@/components/layouts/Header';
import * as S from './User.styles';
import MyPageIndex from '@/components/commons/user/myPage/MyPageIndex';

const MyPage = () => {
  return (
    <>
      <Header />
      <S.MyPageStyle>
        {/* 타이틀 */}
        <h1>마이 페이지</h1>
        <MyPageIndex />
      </S.MyPageStyle>
    </>
  );
};

export default MyPage;
