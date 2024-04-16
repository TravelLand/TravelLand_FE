import styled from 'styled-components';

const InvitationHeader = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;

const InvitationSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InvitationSearchInput = styled.input`
  padding: 5px 15px;
  width: 400px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 25px;
`;

const InvitationSearchButton = styled.button`
  border-radius: 50%;
  background-color: #5ac8ec;
  border: none;
  color: white;
  margin: 5px;
  width: 45px;
  height: 45px;
  left: 437px;
  position: absolute;
`;

const InvitationCloseButton = styled.button`
  font-size: 20px;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-style: none;

  cursor: pointer;
`;

export {
  InvitationHeader,
  InvitationSearchBar,
  InvitationSearchInput,
  InvitationSearchButton,
  InvitationCloseButton,
};
