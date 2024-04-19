import Header2 from '@/components/layouts/Header2';
import * as S from './User.styles';
import MyPageIndex from '@/components/commons/user/myPage/MyPageIndex';

const MyPage = () => {
  return (
    <>
      <Header2 />
      <S.MyPageStyle>
        {/* 타이틀 */}
        <h1>마이 페이지</h1>
        <MyPageIndex />
      </S.MyPageStyle>
    </>
  );
};

export default MyPage;
