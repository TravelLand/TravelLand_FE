import React from 'react';
import Slider from 'react-slick'; // react-slick에서 Slider를 임포트합니다.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './MainCard.style';
import CategoryButton from '../buttons/CategoryButton';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import styled from 'styled-components';

// 메인 헤더 카드 인터페이스 업데이트
interface CardProps {
  title: string;
  categories: string[];
  imageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface MainCardProps {
  cards: CardProps[];
}

// 슬라이더 스타일드 컴포넌트 생성
const StyledSlider = styled(Slider)`
  position: relative;
  margin: auto;
  width: 1100px;
  display: flex;

  .slick-prev,
  .slick-next {
    position: absolute;
    top: -27px;
    width: 50px;
    height: 50px;
    z-index: 1;
    color: #ddd;
  }

  .slick-dots {
    display: none;
  }

  .slick-prev {
    left: auto;
    right: 50px;
  }
  .slick-track {
    display: flex;
    padding-bottom: 20px;
  }

  .slick-next {
    left: auto;
    right: 5px;
  }

  .slick-slide {
    /* width: 250px; */
    /* display: flex; */
    /* justify-content: center; */
  }
`;

const MainCard: React.FC<MainCardProps> = ({ cards = [] }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowDropleft />,
    nextArrow: <IoIosArrowDropright />,
  };

  return (
    <StyledSlider {...settings}>
      {cards.map((card, index) => (
        <S.CardContainer key={index}>
          <S.ImageContainer>
            <img src={card.imageUrl} alt={card.title} />
          </S.ImageContainer>
          <S.TextContainer>
            <div>
              <S.Title>
                {card.location} | {card.startDate} - {card.endDate}
              </S.Title>
            </div>
            <div>
              <S.Price>{card.title}</S.Price>
            </div>
            <S.CategoriesContainer>
              {card.categories.map((category, index) => (
                <CategoryButton key={index} title={category} />
              ))}
            </S.CategoriesContainer>
          </S.TextContainer>
        </S.CardContainer>
      ))}
    </StyledSlider>
  );
};

export default MainCard;
