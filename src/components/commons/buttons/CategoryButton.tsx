import React from 'react';
import * as S from './Button.style';

interface CategoryButtonProps {
  width?: string;
  heigth?: string;
  title?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  hoverColor?: string; // hoverColor props 추가
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  width,
  title,
  onClick,
  icon,
  hoverColor,
}) => {
  return (
    <S.CategoryButtonStyle onClick={onClick} hoverColor={hoverColor}>
      {icon}
      {title}
      {width}
    </S.CategoryButtonStyle>
  );
};

export default CategoryButton;
