// import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import minilogo from '@/icons/Group 11478.svg';

const Maintitle = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>
            <img src={minilogo} alt="구름 로고" width="40" height="40" />이 여행
            어떠행?
          </Title>
        </TitleWrapper>
      </Container>
    </>
  );
};

export default Maintitle;

const Container = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
`;

const Title = styled.h2`
  font-size: 26px;
  display: inline-flex;
  align-items: center;
`;
