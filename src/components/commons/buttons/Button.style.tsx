import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  borderColor: string;
  borderRadius?: string;
  textColor?: string;
  marginRight?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius || '30px'};
  color: ${(props) => props.textColor};
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin-right: ${(props) => props.marginRight || '0px'};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

// 카테고리 버튼 스타일
export const CatagoryBtn = styled.button`
  display: flex;
  min-width: auto;
  height: 40px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  margin: 10px 10px 10px 0;
  padding: 0 20px;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
