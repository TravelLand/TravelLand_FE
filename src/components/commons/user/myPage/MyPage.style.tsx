import styled from 'styled-components';

const MyPageContainer = styled.div`
  display: flex;
`;

const UserInfoContainer = styled.div`
  border-radius: 25px;
  border: 1px solid lightgray;
  height: 100px;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  padding: 0px 15px;
  margin: 15px 10px;

  width: 65%;
  img {
    /* border: 1px solid black; */
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 15px;
  }

  button {
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 25px;
    width: 130px;
    height: 35px;
  }
`;

const UserInfoCotent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserOtherInfoContainer = styled.div`
  width: 35%;
  border: 1px solid lightgray;
  border-radius: 25px;
  height: 100px;
  padding: 0px 15px;
  margin: 15px 10px;
`;

const UserInfoContentName = styled.div`
  display: flex;
  flex-direction: column;
`;

// 아래 탭 스타일
const MyPageTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
`;

const MyPageButton = styled.div`
  padding: 25px 5px;
  display: flex;
  justify-content: flex-end;
`;

const MyPageTabButton = styled.button<{ isActive: boolean }>`
  width: 110px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 60px 0 30px 0;
  position: relative;
  text-align: center;

  &.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 100%;
    border-bottom: 3px solid #000;
  }
`;

const MyPlanListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
`;

const MyPageInvitedContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

const MyPagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px;
    cursor: pointer;

    background-color: white;
    border: none;
  }
`;
export {
  UserInfoContentName,
  MyPageContainer,
  UserInfoContainer,
  UserInfoCotent,
  MyPagePagination,
  MyPageTabStyle,
  MyPageButton,
  MyPageTabButton,
  MyPageInvitedContainer,
  MyPlanListContainer,
  UserOtherInfoContainer,
};
