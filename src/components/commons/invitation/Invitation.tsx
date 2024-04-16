import { FiSearch } from 'react-icons/fi';
import Button from '../buttons/Button';
import { InvitationModal } from '../modals/Modal';
import * as S from './Invitation.style';

interface InvitationProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: () => void; // 초대하기 버튼 클릭 시 호출될 함수 추가
}

export const Invitation: React.FC<InvitationProps> = ({
  isOpen,
  onClose,
  onInvite,
}) => {
  return (
    <>
      <InvitationModal isOpen={isOpen} onClose={onClose}>
        {/* 초대하기 버튼 추가 */}
        <div>
          <S.InvitationHeader>
            <div>함께 여행할 동행자를 선택해주세요</div>
            <S.InvitationCloseButton onClick={onClose}>
              X
            </S.InvitationCloseButton>
          </S.InvitationHeader>
          <hr />
          <S.InvitationSearchBar>
            <S.InvitationSearchInput
              type="text"
              placeholder="동행자를 검색해주세요."
              required
            />
            <S.InvitationSearchButton>
              <FiSearch size="1.5em" />
            </S.InvitationSearchButton>
          </S.InvitationSearchBar>
        </div>
        <div>{/* <input /> */}</div>
        <Button
          text="초대하기"
          onClick={onInvite}
          color="#5ac8ec"
          height="50px"
          width="160px"
          textColor="white"
          borderColor="transparent"
          borderRadius="16px"
        />
      </InvitationModal>
    </>
  );
};
