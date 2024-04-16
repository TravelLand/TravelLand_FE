import styled from 'styled-components';
import { InputProps } from './Input';

const modernInput = styled.input<InputProps>`
  padding: 5px;
  border-radius: 5px;
  width: ${(props) => props.width + 'px'};
  border: 1px solid ${(props) => props.border};
  height: ${(props) => props.height + 'px'};
  font-size: ${(props) => props.fontSize + 'px'};
  font-weight: ${(props) => props.fontWeight};
`;

const PlanListInputContainer = styled.div`
  padding: 5px;
`;

const ListInputbox = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid lightgray;

  /* display: flex;
  align-items: center;
  flex-direction: row; */

  div {
    font-weight: bold;

    width: 200px;
  }

  input {
    border-radius: 5px;
    border: 1px solid transparent;
    width: 100%;
    padding: 15px 0px;

    font-size: 16px;
  }

  p {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const ListInputboxWithFlex = styled.div`
  /* display: flex; */
  padding: 15px 10px;
  border-bottom: 1px solid lightgray;
  /* flex-direction: row; */
`;
const ImgBox = styled.div`
  padding-left: 75%;
  display: flex;
  align-items: center;
`;
const ListInputboxWithOutBorder = styled.div`
  h4 {
    padding-right: 100px;
  }
`;

const ListPagenation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    padding: 10px;
    background-color: white;
    border: none;
  }
`;

const ListContent = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export {
  modernInput,
  PlanListInputContainer,
  ListInputbox,
  ListInputboxWithOutBorder,
  ListPagenation,
  ListInputboxWithFlex,
  ImgBox,
  ListContent,
};
