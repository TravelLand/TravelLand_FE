import * as S from './Vote.style';
import { VoteModal } from '../commons/modals/Modal';
import Button from '@/components/commons/buttons/Button';
import { useState } from 'react';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Vote: React.FC<VoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleModalCloseClick = () => {
    onClose();
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // 선택한 옵션을 상태로 저장
  };

  return (
    <VoteModal isOpen={isOpen} onClose={onClose}>
      {/* 상단 */}
      <S.VoteTitleBox>
        <S.VoteTitleContent>
          <img src="/assets/paris.jpg" />
          <S.VoteTitle>
            <div>강수호</div>
            <div>비가 안온다면 어떤 플랜이 나을까요?</div>
          </S.VoteTitle>
        </S.VoteTitleContent>
        <Button
          color="white"
          textColor="black"
          borderRadius="50%"
          width="50px"
          borderColor="white"
          marginRight="5px"
          height="50px"
          onClick={handleModalCloseClick}
        >
          <img
            src={'/assets/icons/grayEsc.svg'}
            alt="Close"
            style={{ width: '30px', height: '30px' }}
          />
        </Button>
      </S.VoteTitleBox>
      {/* 선택창 */}
      <S.VoteButtonBox>
        {/* A */}
        <S.VoteChoiceBox>
          <Button
            text="A안"
            color={selectedOption === 'A' ? '#5AC8EC' : '#F6F6F6'} // 선택된 옵션에 따라 색상 변경
            textColor={selectedOption === 'A' ? 'white' : 'black'}
            borderRadius="60px"
            width="200px"
            borderColor={selectedOption === 'A' ? '#5AC8EC' : '#F6F6F6'}
            marginRight="5px"
            height="80px"
            onClick={() => handleOptionClick('A')}
          />
          <S.VoteContentBox>
            봄날의 고성, 1박 2일
            <img src="/assets/icons/GrayRightArrow.svg" />
          </S.VoteContentBox>
        </S.VoteChoiceBox>
        {/* B */}
        <S.VoteChoiceBox>
          <Button
            text="B안"
            color={selectedOption === 'B' ? '#5AC8EC' : '#F6F6F6'}
            textColor={selectedOption === 'B' ? 'white' : 'black'}
            borderRadius="60px"
            width="200px"
            borderColor={selectedOption === 'B' ? '#5AC8EC' : '#F6F6F6'}
            marginRight="5px"
            height="80px"
            onClick={() => handleOptionClick('B')}
          />
          <S.VoteContentBox>
            봄날의 고성, 1박 2일
            <img src="/assets/icons/GrayRightArrow.svg" />
          </S.VoteContentBox>
        </S.VoteChoiceBox>
      </S.VoteButtonBox>
      {/* 투표하기 */}
      <div>
        <Button text="투표하기" borderRadius="15px" width="100px" />
      </div>
    </VoteModal>
  );
};

export default Vote;
