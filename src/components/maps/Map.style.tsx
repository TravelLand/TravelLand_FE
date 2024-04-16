import styled from 'styled-components';

const MapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 20px;
  width: 100%;

  div {
    font-weight: bold;
    font-size: 12px;
  }
`;

const MapTitleLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
  div {
    /* padding-left: 5px; */
    font-size: 18px;
    font-weight: bold;
  }
`;

const MapSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute; // 절대 위치를 사용하여 지도 내부에 배치
  top: 10px; // 상단에서 10px 떨어진 위치
  left: 50%; // 가운데 정렬을 위해
  transform: translateX(-50%); // 왼쪽으로 50% 이동하여 중앙에 배치
  z-index: 10; // 지도보다 상단에 레이어링
  border-radius: 8px; // 둥근 모서리
  padding: 5px; // 패딩 추가
  width: auto; // 너비 자동 조정
`;

const MapSearchInput = styled.input`
  padding: 5px 15px;
  width: 400px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 25px;
`;

const MapSearchButton = styled.button`
  border-radius: 50%;
  background-color: #5ac8ec;
  border: none;
  color: white;
  margin: 5px;
  width: 45px;
  height: 45px;
  right: 65px;
  position: absolute;
`;

const MapCloseButton = styled.button`
  border-radius: 50%;
  background-color: white;
  border: none;
  /* color: white; */
  margin: 5px;
  width: 50px;
  height: 50px;
`;
export {
  MapTitle,
  MapTitleLeft,
  MapSearchBar,
  MapSearchInput,
  MapSearchButton,
  MapCloseButton,
};
