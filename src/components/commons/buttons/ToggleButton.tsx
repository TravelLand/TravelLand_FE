import React from 'react';
import styled from 'styled-components';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => (
  <ToggleWrapper onClick={onToggle}>
    <ToggleInput type="checkbox" checked={isChecked} readOnly />
    <Slider $isChecked={isChecked}>
      <span>공개</span>
      <span>비공개</span>
    </Slider>
  </ToggleWrapper>
);

export default ToggleButton;

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px 0px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -999px;
`;

const Slider = styled.span<{ $isChecked: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$isChecked ? '#5AC8EC' : '#5AC8EC')};
  transition: 0.4s;
  border-radius: 50px;
  /* border: 1px solid black; */

  span {
    text-align: center;
    width: 40px;

    &:nth-child(1) {
      transition: all 0.4s;
      color: ${(props) => (props.$isChecked ? 'white' : 'white')};
    }
    &:nth-child(2) {
      transition: all 0.4s;
      color: ${(props) => (props.$isChecked ? 'white' : 'white')};
    }
    padding: 12px 7px;
    font-size: 13px;
    font-weight: bold;
    z-index: 100;
  }

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    height: 35px;
    width: 45%;
    left: ${(props) => (props.$isChecked ? '57px' : '3px')};
    background-color: white;
    transition: all 0.4s;
    border-radius: 20px;
    transform: translateY(-50%);
  }
`;
