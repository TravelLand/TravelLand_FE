import styled from 'styled-components';
import { CardProps } from './Card';

const CardBox = styled.div<CardProps>`
  width: 300px;
  height: 260px;
  border: 1px solid black;
  padding: 5px;
  box-sizing: border-box; // 추가했슴
`;

const CardImg = styled.img`
  width: 100%;
  max-height: 180px; //auto에서 수정
  /* width: 300px;
  height: 180px; */
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 3px; // 추가했슴
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 10px; // 5px에서 수정

  font-weight: bold;
  font-size: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }
`;

const CardInfoContent = styled.div`
  padding: 0px 10px;
  /* width: 100%; */
  width: calc(100% - 60px); // 이걸로 바꿈
`;

const CardInfoContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

const InvitationCardContainer = styled.div`
  border-radius: 25px;
  border: none;
  width: 80px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f4f4f4;
  align-content: center;
  flex-direction: row;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* margin-right: 20px; */
  }

  button {
    border-style: none;
    font-size: 20px;
    color: gray;
    font-weight: light;
    background-color: #f4f4f4;
  }
`;

const StyledButton = styled.button<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 100%;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;

  border-color: ${(props) => props.borderColor || 'black'};
`;

// 카드 타이틀 ...처리
const Title = styled.div`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  CardBox,
  CardImg,
  CardInfo,
  CardInfoContent,
  CardInfoContentTop,
  InvitationCardContainer,
  StyledButton,
  Title,
};
