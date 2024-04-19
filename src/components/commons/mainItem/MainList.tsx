import React from 'react';
import styled from 'styled-components';
import { CiBookmark } from 'react-icons/ci';
import CategoryButton from '../buttons/CategoryButton';

interface ListItemProps {
  rank: string;
  title: string;
  location: string;
  description: string;
  categories: string[];
  imageUrl: string;
  startDate: string;
  endDate: string;
}

interface MainListProps {
  items: ListItemProps[];
}

const MainList: React.FC<MainListProps> = ({ items = [] }) => {
  return (
    <MainListContainer>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <ImageSection>
            <Image src={item.imageUrl} alt="이미지" />
            <BookmarkIcon />
          </ImageSection>
          <TextSection>
            <Rank>{index + 1}</Rank>
            <Title>
              {item.location} | {item.startDate} - {item.endDate}
            </Title>
            <MainTitle>{item.title}</MainTitle>
            <Content>{item.description}</Content>
            <CategoriesContainer>
              {item.categories.map((category, categoryIndex) => (
                <CategoryButton key={categoryIndex} title={category} />
              ))}
            </CategoriesContainer>
          </TextSection>
        </ItemContainer>
      ))}
    </MainListContainer>
  );
};

export default MainList;

const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const BookmarkIcon = styled(CiBookmark)`
  position: absolute;
  bottom: 20px;
  right: 12px;
  font-size: 18px;
  color: #666;
  border: 2px solid #c5f1ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  z-index: 9;
  background-color: #c5f1ff;
`;

const Rank = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #fff;
  padding: 5px 10px;
  margin-top: 20px;
  color: #5ac8ec;
  font-family: 'LotteriaChab', sans-serif; /* 다른 폰트 적용 */
  font-size: 30px;
  /* font-size: 3rem; */
  font-weight: bold;
`;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ImageSection = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextSection = styled.div`
  flex: 3;
  position: relative;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 70px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

const MainTitle = styled.div`
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  font-weight: 600;
`;

const Content = styled.div`
  margin: 10px 0 10px;
  color: #000;
  font-size: 17px;
`;

const Image = styled.img`
  width: 260px;
  height: 240px;
  border-radius: 10px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3px;
  gap: 4px;
  height: 100px;
  overflow: hidden;
`;
