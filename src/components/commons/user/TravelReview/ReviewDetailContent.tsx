// import React from 'react';
import { TripDetail } from '@/api/interfaces/reviewInterface';
import styled from 'styled-components';

interface ReviewContentProps {
  tripDetail: TripDetail;
}

const ReviewContent = ({ tripDetail }: ReviewContentProps) => {
  return (
    <>
      <Container>
        <ContentBox>
          <ContentDiv>
            {tripDetail.content} {/* 여기에  리뷰 내용을 렌더링 */}
          </ContentDiv>
        </ContentBox>
        <CommentsList>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>신*은님</CommentName>
              <CommentText>어떤 여행이었나요?? 😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>김*용님</CommentName>
              <CommentText>날씨가 너무 좋네요~😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>유*찬님</CommentName>
              <CommentText>저도 가고 싶어요!!😊</CommentText>
            </div>
          </Comment>
          <Comment>
            <UserAvatar />
            <div>
              <CommentName>김*원님</CommentName>
              <CommentText>좋은 정보 감사합니다~😊</CommentText>
            </div>
          </Comment>
        </CommentsList>
      </Container>
      <ViewMore>댓글 더보기</ViewMore>
    </>
  );
};

export default ReviewContent;

const Container = styled.div`
  width: 880px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
`;

const ContentBox = styled.div`
  min-height: 350px;
  overflow: auto;
`;

const ContentDiv = styled.p`
  width: 85%;
  font-size: 16px;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1em;
  white-space: pre-line;
  word-wrap: break-word;
`;

const CommentsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Comment = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #bbb;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ddd;
  margin-right: 8px;
`;

const CommentName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const CommentText = styled.div`
  padding-top: 5px;
  color: #4a4a4a;
`;

const ViewMore = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
  padding-bottom: 40px;
  border-bottom: 4px solid #ddd;
`;
