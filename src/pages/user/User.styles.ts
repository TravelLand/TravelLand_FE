import styled from 'styled-components';

const MyPageStyle = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12px;
  }

  div {
    display: flex;
  }
`;

export { MyPageStyle, LoginStyle };
