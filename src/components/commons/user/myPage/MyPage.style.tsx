import styled, { css } from 'styled-components';

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
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  /* width: 400px; */
  height: 45px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      width: 150px;
      border-bottom: 1px solid black;
      /* color: white; */
    `}
`;

const MyPageInvitedContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
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
  UserOtherInfoContainer,
};
