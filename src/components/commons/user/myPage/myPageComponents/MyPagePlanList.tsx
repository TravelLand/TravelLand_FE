import { useEffect, useState } from 'react';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import * as CS from '@/styles/commonStyles';
import * as LS from '@/components/commons/Lists/List.style';
import { MyPlanList } from '@/components/commons/Lists/MyPlanList';
import { useMyPlanListQuery } from '@/hooks/useQuery';
import Button from '@/components/commons/buttons/Button';
import { useNavigate } from 'react-router-dom';
import CreateVote from '@/components/vote/CreateVote';

const MyPagePlanList = () => {
  const navigate = useNavigate();
  // 버튼 상태를 관리하기 위한 state 추가
  const [isVoting, setIsVoting] = useState(false);
  const [isCreateVoteModalOpen, setIsCreateVoteModalOpen] = useState(false); // Vote 만들기 모달

  const [page, setPage] = useState(1);
  const [size] = useState(8);
  const [pageGroup, setPageGroup] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageGroupSize = 10;

  const [sortBy] = useState('createdAt');
  const [isAsc] = useState(true);

  const [planAId, setPlanAId] = useState(0);
  const [planBId, setPlanBId] = useState(0);

  const planListParams = { page, size, sortBy, isAsc };
  const { data, isError, isLoading } = useMyPlanListQuery(planListParams);

  useEffect(() => {
    if (data) {
      setTotalPages(data.data.totalPages);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handleNextGroup = () => setPageGroup(pageGroup + 1);
  const handlePrevGroup = () => setPageGroup(pageGroup - 1);
  const handlePlanCreate = () => navigate('/planCreate/1');

  // 투표 버튼 클릭 핸들러
  const handleVoteMake = () => {
    setIsVoting(!isVoting); // isVoting 상태를 토글
  };

  // '다음' 버튼을 눌렀을 때 호출되는 함수
  const handleNext = () => {
    if (planAId === null || planBId === null) {
      alert('두 플랜 모두 선택해주세요.');
      return;
    }
    setIsCreateVoteModalOpen(true); // Vote 모달을 열기
  };

  // Vote 모달을 닫는 함수
  const closeCreateVoteModal = () => {
    setIsCreateVoteModalOpen(false); // Vote 모달을 닫기
  };

  return (
    <>
      <S.MyPlanListContainer>
        <LS.MyPlanListButtons>
          <div>
            <Button
              text="나의 여행 플랜"
              color="white"
              textColor="gray"
              width="160px"
              borderColor="gray"
              marginRight="5px"
            />
            <Button
              text="초대된 여행 플랜"
              color="white"
              textColor="gray"
              width="160px"
              borderColor="gray"
            />
          </div>
          <div>
            <Button
              text={isVoting ? '나가기' : '플랜 투표받기'}
              width="150px"
              borderRadius="15px"
              color={isVoting ? 'gray' : 'white'} // 배경색 변경
              borderColor={isVoting ? 'gray' : '#5AC8EC'} // 보더 변경
              textColor={isVoting ? 'black' : '#5AC8EC'} // 텍스트 색상 변경
              marginRight="5px"
              onClick={handleVoteMake}
            />
            <Button
              text={isVoting ? '다음' : '작성하기'}
              width="150px"
              borderRadius="15px"
              color={isVoting ? '#5AC8EC' : '#5AC8EC'} // 배경색 변경
              textColor={isVoting ? 'white' : 'white'} // 텍스트 색상 변경
              onClick={isVoting ? handleNext : handlePlanCreate} // 클릭 이벤트 변경 가능성 고려
            />
          </div>
        </LS.MyPlanListButtons>
        <MyPlanList
          planListData={data?.data.content}
          isLoading={isLoading}
          error={isError ? 'Error occurred during fetching' : undefined}
          isVoting={isVoting}
          setPlanAId={setPlanAId}
          setPlanBId={setPlanBId}
        />
        <CS.PagenationStyle>
          {pageGroup > 0 && <button onClick={handlePrevGroup}>이전</button>}
          {Array.from(
            {
              length: Math.min(
                pageGroupSize,
                totalPages - pageGroup * pageGroupSize,
              ),
            },
            (_, i) => pageGroup * pageGroupSize + i + 1,
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === page ? 'active' : ''}
            >
              {pageNumber}
            </button>
          ))}
          {(pageGroup + 1) * pageGroupSize < totalPages && (
            <button onClick={handleNextGroup}>다음</button>
          )}
        </CS.PagenationStyle>
      </S.MyPlanListContainer>
      {/* Vote 모달 */}
      {isCreateVoteModalOpen && (
        <CreateVote
          isOpen={isCreateVoteModalOpen}
          onClose={closeCreateVoteModal}
          planAId={planAId} // 여기에 planAId 전달
          planBId={planBId} // 여기에 planBId 전달
        />
      )}
    </>
  );
};

export default MyPagePlanList;
