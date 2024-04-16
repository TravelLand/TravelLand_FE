import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
  title?: string;
  location?: string;
  description?: string;
  likes?: number;
  imageUrl?: string;
}

interface MainListProps {
  items: ListItemProps[];
}
// 메인 리스트
const MainList: React.FC<MainListProps> = ({ items }) => {
  return (
    <MainListContainer>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <TextSection>
            <Title>{item.title}</Title>
            <p>{item.location}</p>
            <Content>{item.description}</Content>
            <button>♥ {item.likes}개</button>
          </TextSection>
          <Image src={item.imageUrl} alt="이미지" />
        </ItemContainer>
      ))}
    </MainListContainer>
  );
};

export default MainList;

const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2개의 컬럼
  grid-template-rows: repeat(5, 1fr); // 5개의 행
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 450px;
  height: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 10px;
  margin: 10px auto;
`;

const TextSection = styled.div`
  padding: 20px 20px;
  /* width: 60%; */
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
`;

const Content = styled.p`
  margin: 10px 0 10px;
  color: #666;
  font-size: 16px;
`;

const Image = styled.img`
  width: 180px;
  height: 190px;
  justify-self: end;
  margin-right: 10px;
  object-fit: cover;
  /* border: 1px solid #000; */
  border-radius: 10px;
`;
