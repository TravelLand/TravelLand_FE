// import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaCamera, FaTimes } from 'react-icons/fa';

const TravelReviewCardSection = styled.div`
  padding: 0 60px;
  display: flex;
  flex-wrap: wrap;
  margin: -15px;

  > * {
    flex: 1 0 calc(33.33% - 30px);
    margin: 15px;
    box-sizing: border-box; // 추가된 스타일
    max-width: calc(33.33% - 30px); // 추가된 스타일
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    > * {
      flex: 1 0 calc(100% - 30px);
    }
  }
`;

const TravelReviewstyle = styled.div`
  padding: 50px; // 수정된 패딩
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box; // 추가된 스타일
  overflow-x: hidden; // 가로 스크롤 숨김

  @media (max-width: 768px) {
    padding: 20px;
  }

  h2 {
    font-size: 24px;
    padding-right: 50%;
    font-weight: bold;
  }
`;

export { TravelReviewCardSection, TravelReviewstyle };

export const ReviewPagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px;
    cursor: pointer;

    background-color: white;
    border: none;
  }
`;

export const ReviewPageTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px;
`;

export const ReviewPageButton = styled.div`
  padding: 25px 5px;
  display: flex;
  justify-content: flex-end;
`;

export const ReviewPageTabButton = styled.button<{ isActive: boolean }>`
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  width: 400px;
  height: 45px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const ReviewListContaier = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const ReviewListSection = styled.div``;
export const ReviewListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

export const ReviewListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 5px 20px;
    width: 60px;
  }
`;

export const ReviewListCity = styled.div`
  display: flex;
  justify-content: center;

  width: 50px;
  padding: 5px 20px;

  border-radius: 5px;
  background-color: lightgray;

  font-weight: bold;
`;

export const ReviewListTitle = styled.div`
  padding: 5px 20px;
  width: 350px;
`;

export const ReviewInvitedContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
`;

// export const TitleLink = styled(Link)`
//   font-size: 24px;
//   font-weight: 600;
//   text-decoration: none;
//   color: #000;
// `;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const DateFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 150px;
  resize: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #3e3e3e;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #212121;
  }
`;

// 해시태그
export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Hashtag = styled.div`
  display: flex;
  align-items: center;
  background-color: #e1e1e1;
  border-radius: 20px;
  padding: 5px 10px;
  gap: 5px;
  font-size: 14px;
`;

// 이미지
export const ImageUploadContainer = styled.div`
  text-align: center;
`;

export const ImageUploadLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ddd;
  color: #444;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #ccc;
  }
`;
export const ImageUploadSection = styled.div`
  /* 이미지 업로드 버튼을 감싸는 섹션 */
`;

export const ImagePreviewSection = styled.div`
  /* 이미지 미리보기를 감싸는 섹션 */
  margin-top: 10px;
`;

export const ImageUploadInput = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
export const FaCameraIcon = styled(FaCamera)`
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`;

export const FaTimesCircle = styled(FaTimes)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: red;
  background: white;
  border-radius: 50%;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 돌아가기 버튼 박스
export const BackBox = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

// ReviewPage 스타일

// 로딩 상태
export const LoadingContainer = styled.div``;

// 에러 상태
export const ErrorContainer = styled.div``;

// 작성버튼
export const ReviewBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #2b2b2b;
  border-radius: 20px;
  color: #000;
  background-color: #fff;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background-color: #3c3c3c;
    color: #fff;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
