import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  padding: 5px;
`;

const ListSection = styled.div``;
const ListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

const ListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-end;
    padding: 5px 20px;
  }
`;

const ListCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  padding: 10px;

  border-radius: 5px;

  background-color: lightgray;

  font-weight: bold;
`;

const DoubleColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 5px; */
`;

const Column = styled.div`
  width: 500px; // 각 컬럼이 전체 너비의 약 절반을 차지하도록 설정
  height: 500px;
`;

const ListItem = styled.div`
  display: flex; // 수평 정렬
  align-items: center; // 세로 중앙 정렬
  border-bottom: 1px solid #eaeaea; // 아이템 사이의 구분선
  padding: 20px 0; // 아이템 내부의 패딩
  justify-content: space-between;
`;

const ListTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  align-content: center;
  cursor: pointer;
  color: black;
`;

const ListLeftIcon = styled.div`
  padding-right: 15px;
  img {
    width: 15px;
    height: 20px;
  }
`;

const ListItemLeft = styled.div`
  width: 100%;
  /* padding: 5px 0px; */
  color: gray;
  font-size: 16px;
  div {
    padding: 5px 0px;
  }
`;

const ListItemRight = styled.div`
  display: flex;
  align-items: center;
`;

export {
  ListContainer,
  ListCity,
  ListLeft,
  ListRight,
  ListSection,
  ListTitle,
  DoubleColumnContainer,
  Column,
  ListItem,
  ListItemLeft,
  ListLeftIcon,
  ListItemRight,
};
