import * as S from './Vote.style';
import { CreateVoteModal } from '../commons/modals/Modal';
import Button from '@/components/commons/buttons/Button';
import { ModernInput } from '../commons/inputs/Input';
import { SetStateAction, useState } from 'react';
import { useCreateVoteMutation } from '@/hooks/useMutation';

interface CreateVoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  planAId: number;
  planBId: number;
}

enum Duration {
  '1분' = 'ONE_MINUTE',
  '1초' = 'ONE_SECOND',
  '12시간' = 'HALF_DAY',
  '1일' = 'ONE_DAY',
  '3일' = 'THREE_DAY',
  '7일' = 'SEVEN_DAY',
}

const CreateVote: React.FC<CreateVoteModalProps> = ({
  isOpen,
  onClose,
  planAId,
  planBId,
}) => {
  const handleModalCloseClick = () => {
    onClose();
  };

  const [title, setTitle] = useState<string>('');
  const [planVoteDuration, setPlanVoteDuration] = useState<string>(
    Duration['1분'],
  );

  const hadleVoteTitleChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleDurationChange = (duration: Duration) => {
    setPlanVoteDuration(duration);
  };
  const createPlanVote = useCreateVoteMutation();

  const handleCreateVote = () => {
    const voteData = {
      planAId,
      planBId,
      title,
      planVoteDuration,
    };
    createPlanVote.mutate(voteData);
  };
  return (
    <CreateVoteModal isOpen={isOpen} onClose={onClose}>
      {/* 상단 */}
      <S.CreateVoteTitleBox>
        <S.CreateVoteTitle>투표 제목과 기간을 선택해주세요</S.CreateVoteTitle>
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
      </S.CreateVoteTitleBox>
      <S.CreateVoteContentBox>
        {/* 투표 제목 */}
        <S.CreateVoteContentInput>
          <div>투표 제목</div>
          <ModernInput
            placeholder="제목을 입력해주세요."
            type={'text'}
            border="transparent"
            height={30}
            width={300}
            fontSize={16}
            onChange={hadleVoteTitleChange}
          />
        </S.CreateVoteContentInput>
        {/* 투표 기간 */}
        <S.CreateVoteDateButtons>
          <div>투표 기간</div>
          <div>
            {Object.entries(Duration).map(([label, value]) => (
              <Button
                key={value}
                text={label}
                onClick={() => handleDurationChange(value as Duration)}
                borderRadius="25px"
                width="90px"
                marginRight="10px"
                color={planVoteDuration === value ? '#5AC8EC' : 'white'} // Active color change
                borderColor={planVoteDuration === value ? '#5AC8EC' : 'gray'}
                textColor={planVoteDuration === value ? 'white' : 'gray'}
              />
            ))}
          </div>
        </S.CreateVoteDateButtons>
      </S.CreateVoteContentBox>
      {/* 투표하기 */}
      <S.CreateVoteButtonBox>
        <Button
          text="투표 생성하기"
          borderRadius="15px"
          width="150px"
          onClick={handleCreateVote}
        />
      </S.CreateVoteButtonBox>
    </CreateVoteModal>
  );
};

export default CreateVote;
