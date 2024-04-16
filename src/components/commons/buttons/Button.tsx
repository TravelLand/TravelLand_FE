import React from 'react';
import * as S from './Button.style';

export interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  textColor?: string;
  fontSize?: any;
  fontWeight?: any;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: any;
  marginRight?: string;
}

// 기본 버튼
const Button: React.FC<ButtonProps> = ({
  width = '100px',
  height = '40px',
  color = '#fff',
  borderColor = '#000',
  borderRadius,
  textColor,
  text,
  onClick,
  fontSize,
  fontWeight,
  marginRight,
}) => {
  return (
    <S.StyledButton
      width={width}
      height={height}
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}
      style={{ fontSize, fontWeight }}
      textColor={textColor}
      marginRight={marginRight}
    >
      {text}
    </S.StyledButton>
  );
};

export default Button;

// 라지 버튼
export const LargeButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="200px"
    height="60px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    text={text}
    textColor="#000"
  />
);

// 미디움 버튼
export const MediumButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="150px"
    height="50px"
    color="#fff"
    borderRadius="25px"
    text={text}
    textColor="#000"
  />
);

// 스몰 버튼
export const SmallButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="100px"
    height="40px"
    color="#fff"
    borderColor="#000"
    borderRadius="30px"
    text={text}
    textColor="#000"
  />
);

// main Tab버튼
export const TabButton: React.FC<ButtonProps> = ({ text, onClick }) => (
  <Button
    width="120px"
    height="40px"
    color="#fff"
    borderColor="#000"
    borderRadius="10px"
    text={text}
    onClick={onClick}
    fontWeight="bold"
  />
);
