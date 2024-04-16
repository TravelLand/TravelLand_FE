import styled from 'styled-components';

export const CardContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
  gap: 20px;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 260px;
  height: 420px;
  /* border: 1px solid #ddd; */
  border-radius: 15px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  width: 260px;
  height: 250px;
  /* border: 1px solid #000; */
  border-radius: 15px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const TextContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
