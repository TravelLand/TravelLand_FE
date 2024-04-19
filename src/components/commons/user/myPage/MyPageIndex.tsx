import MyPageTab from './myPageComponents/MyPageTab';
import MyPageUserInfo from './myPageComponents/MyPageUserInfo';

const MyPageIndex = () => {
  return (
    <>
      {/* 탭 */}
      <MyPageUserInfo />
      <MyPageTab />
    </>
  );
};

export default MyPageIndex;
