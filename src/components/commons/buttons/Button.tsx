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
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: any;
  hoverColor?: string;
  marginRight?: string;
  children?: React.ReactNode; // children prop 추가
}

// 기본 버튼
const Button: React.FC<ButtonProps> = ({
  width = '120px',
  height = '50px',
  color = '#5AC8EC',
  borderColor = '#5AC8EC',
  borderRadius,
  textColor = '#fff',
  text,
  onClick,
  fontSize = '18px',
  fontWeight = '600',
  hoverColor,
  marginRight,
  children,
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
      hoverColor={hoverColor}
      marginRight={marginRight}
    >
      {text} {children}
    </S.StyledButton>
  );
};

export default Button;

// 라지 버튼
// export const LargeButton: React.FC<{ text: string }> = ({ text }) => (
//   <Button
//     width="200px"
//     height="60px"
//     color="#fff"
//     borderColor="#000"
//     borderRadius="30px"
//     text={text}
//     textColor="#000"
//   />
// );

// 미디움 버튼
// export const MediumButton: React.FC<{ text: string }> = ({ text }) => (
//   <Button
//     width="150px"
//     height="50px"
//     color="#fff"
//     borderRadius="25px"
//     text={text}
//     textColor="#000"
//   />
// );

// 스몰 버튼
export const SmallButton: React.FC<{ text: string }> = ({ text }) => (
  <Button
    width="90px"
    height="40px"
    color="#fff"
    borderColor="#ddd"
    borderRadius="30px"
    text={text}
    textColor="#666"
    fontSize="15px"
    hoverColor="#5AC8EC" // 호버 시 색상 추가
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
