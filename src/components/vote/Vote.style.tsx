import styled from 'styled-components';

export const VoteTitleBox = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 35px 0px;
`;

export const VoteTitleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const VoteTitle = styled.div`
  margin-right: 30px;
  padding: 0px 5px;
  font-size: 22px;

  :first-child {
    font-size: 16px;
    color: gray;
    padding-bottom: 5px;
  }
`;

export const VoteButtonBox = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: gray;
`;

export const VoteChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const VoteContentBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  img {
    padding-left: 15px;
    width: 25px;
    height: 25px;
  }
`;

// 투표 작성하기
export const CreateVoteTitleBox = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const CreateVoteTitle = styled.div`
  font-size: 24px;
`;

export const CreateVoteContentBox = styled.div`
  padding: 25px 0px;
`;

export const CreateVoteContentInput = styled.div`
  font-size: 16px;
  padding: 15px 0px;
`;

export const CreateVoteButtonBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const CreateVoteDateButtons = styled.div`
  padding: 15px 0px;
  font-size: 20px;
  div {
    padding-top: 10px;
  }
`;
