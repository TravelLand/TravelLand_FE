import * as S from './Card.style';

export interface CardProps {
  width?: string;
  height?: string;
  title?: string;
  date?: string;
  writer?: string;
  city?: string;
  withPicture?: boolean;
  borderColor?: string;
  imageUrl?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  writer,
  city,
  withPicture,
  onClick,
  imageUrl,
}) => {
  return (
    <>
      {/* 이미지 박스 */}
      <S.CardBox onClick={onClick}>
        <div>
          <S.CardImg src={imageUrl || '/assets/paris.jpg'} alt="Card Image" />
        </div>
        {/* 여행 정보*/}
        <S.CardInfo>
          {/* 정보 좌측 - 이모티콘 */}
          {withPicture ? (
            <img alt="사진" src={'/assets/paris.jpg'} />
          ) : (
            <img src={'/assets/icons/pinPoint.png'} />
          )}
          {/* 정보 우측 */}
          <S.CardInfoContent>
            <S.CardInfoContentTop>
              <S.Title>{title}</S.Title>
              <div>{date}</div>
            </S.CardInfoContentTop>
            <div>
              <div>
                {writer} {city}
              </div>
            </div>
          </S.CardInfoContent>
        </S.CardInfo>
      </S.CardBox>
    </>
  );
};

export default Card;
