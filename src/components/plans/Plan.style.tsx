import styled from 'styled-components';
type PlanDetailDateButtonProps = {
  isActive?: boolean;
  date?: any;
};
const PlanFirstSection = styled.div`
  display: flex;
  /* padding: 20px 5px; */
  align-items: center;
  flex-direction: row;
  h3 {
    padding-right: 25px;
  }
`;

const PlanSecondSection = styled.div``;

const PlanBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    /* padding-left: 15px; */
  }
`;

const PlanBoxWithCalendar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlanBox = styled.div`
  display: flex;
  /* align-content: center; */
  flex-direction: row;
  align-items: center;

  /* border-bottom: 1px solid lightgray; */
  padding: 10px 0px;
`;

const PlanContent = styled.div`
  padding-left: 15px;
  /* font-weight: normal; */
  /* justify-content: center; */
  div {
    padding-left: 5px;
  }
`;

const PlanContentTitle = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const PlanHorizontalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-left: 15px;
`;

const PlanHorizontalRightButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
`;

const PlanBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

const PlanNextButton = styled.button`
  background-color: #5ac8ec;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
`;
// 두번째 플랜 페이지

const PlanDetailCreateBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 35px;

  width: 75%;
  height: 100%;

  padding: 25px;

  div {
    padding: 5px 0px;
  }
`;
const PlanDateButton = styled.div`
  background-color: white;
  border: none;

  button {
    margin-right: 10px;
    padding: 5px;

    width: 150px;
    height: 50px;

    background-color: white;

    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;

// List 영역
const ButtonBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ButtonBoxToRight = styled.div`
  display: flex;
  justify-content: end;
  width: 75%;
  padding-top: 30px;
  padding-right: 30px;
`;

// detail 영역
const PlanDetailContainer = styled.div`
  width: 85%;
`;

const PlanDetailDateBox = styled.div`
  padding: 25px 0px;
`;

const PlanDetailDateButton = styled.button<PlanDetailDateButtonProps>`
  margin-right: 10px;
  width: 150px;
  font-size: 16px;
  background-color: ${(props) => (props.isActive ? '#5ac8ec' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};

  border: 1px solid ${(props) => (props.isActive ? 'transparent' : 'lightGray')};
  border-radius: 25px;
  height: ${(props) =>
    props.isActive
      ? '100px'
      : '60px'}; /* 활성화 상태일 때 아래쪽 패딩을 늘려 날짜에 여백을 제공 */ //높이를 자동으로 설정하여 내부 요소에 맞춤

  hr {
    border-color: white;
    width: 60%;
  }
`;

const DateDisplay = styled.div`
  position: absolute;
  /* bottom: -20px; // Adjust as necessary to position below the day button */
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 5px;
`;

const PlanDetailContentBox = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 35px;

  width: 75%;
  height: 100%;

  padding: 15px;
  margin: 5px 0px 5px 50px;

  div {
    padding: 5px 0px;
  }
`;

const PlanDetailContentHeader = styled.div`
  display: flex;
  font-size: 16px;
  color: gray;
  justify-content: space-between;

  padding-bottom: 30px;
`;

const DetailHeaderContent = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  div {
    padding: 5px 0px;
  }
`;

const DetailHeaderSubContent = styled.div`
  display: flex;
  align-items: center;

  background-color: #eaeaea;

  height: 50px;
  width: 100%;

  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  padding-left: 20px;
`;

const DetailHeaderThirdContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-right: 5px;
    border: 1px solid lightgray;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
`;

const DetaiHeaderSubDestination = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 10px;
  height: 35px;

  background-color: white;
  border-radius: 5px;

  margin-left: 10px;

  div {
    border: 1px solid black;
    border-radius: 25px;
    font-size: 12px;
    padding: 3px 10px;

    margin: 0px 5px;
  }
`;

const DetailContentSection = styled.div`
  padding: 15px 10px;
  height: auto;
`;

const DetailContentBox = styled.div`
  position: relative;
  /* border-left: 1px solid black; */
  padding: 5px 0px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const DetailPlanNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* 추가된 부분: 절대 위치 지정 */

  /* top: 40%; */
  /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */
  /* left: -13px;  */
  /* 추가된 부분: 부모 요소의 좌상단을 기준으로 설정 */

  border-radius: 50px;

  background-color: lightgray;
  color: black;

  font-size: 12px;

  width: 25px;
  height: 25px;

  margin-right: 15px;
`;

const DetailPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  font-size: 18px;
  div {
    padding-bottom: 15px;
  }
`;

const DetailPlanContentCity = styled.div`
  color: black;
  font-size: 22px;
  font-weight: bold;
  /* padding: 15px 0px; */
`;

const DetailContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailButtonDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background-color: #c5f1ff;

  height: 40px;

  cursor: pointer;

  p {
    padding-left: 5px;
    width: 100%;
  }
`;
const DetailContent = styled.div`
  justify-content: flex-start;
  font-size: 16px;
  color: gray;

  width: 70%;
`;

const DetailLocationBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  align-items: flex-end;
  margin-bottom: 5px;
  width: 100%;
`;

const InvitationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  height: 60px;
  color: gray;
  border: 1px solid lightgray;
  border-radius: 25px;
`;

const PlanInvitationBox = styled.div`
  display: flex;
  background-color: gray;
`;

export {
  PlanFirstSection,
  PlanSecondSection,
  PlanBoxWithSpaceBetween,
  PlanBox,
  PlanContent,
  PlanHorizontalContent,
  PlanDetailContainer,
  PlanContentTitle,
  PlanHorizontalRightButton,
  PlanBottomSection,
  PlanNextButton,
  PlanDateButton,
  PlanDetailDateBox,
  PlanDetailContentBox,
  PlanDetailCreateBox,
  ButtonBox,
  PlanDetailDateButton,
  PlanDetailContentHeader,
  DetailHeaderContent,
  DetailHeaderSubContent,
  DetailContentSection,
  DetailPlanNumber,
  DetailContentBox,
  DetailPlanContent,
  DetailPlanContentCity,
  DetailContentItem,
  DetailButtonDiv,
  DetailHeaderThirdContent,
  DetaiHeaderSubDestination,
  ButtonBoxToRight,
  PlanInvitationBox,
  PlanBoxWithCalendar,
  DateDisplay,
  DetailLocationBox,
  InvitationDiv,
  DetailContent,
};
