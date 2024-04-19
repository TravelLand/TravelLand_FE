import React from 'react';
import styled from 'styled-components';
// import Button from '../buttons/Button';

interface ListTitleProps {
  //   title: string;
}

const ListTitle: React.FC<ListTitleProps> = () => {
  return (
    <TitleContainer>
      <TitleText>
        <div>지금 가장 HOT한 방문지 10</div>
      </TitleText>
      <Subtitle>지난 일주일 간 평소보다 더 많이 저장된 관광지</Subtitle>
    </TitleContainer>
  );
};

export default ListTitle;

const TitleContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TitleText = styled.div`
  font-weight: bold;
  font-size: 28px;
  /* margin: 0 0 10px 0; */
  /* white-space: pre-wrap; */
  text-align: left;
  margin: 50px 0 20px;
`;
const Subtitle = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 500;
  margin-bottom: 30px;
`;
