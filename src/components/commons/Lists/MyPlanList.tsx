import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as S from './List.style';
import { useState } from 'react';

interface PlanListItem {
  tripStartDate: string;
  tripEndDate: string;
  area: string;
  title: string;
  budget: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  planId: number;
  isPublic: boolean;
}

interface MyPlanListProps {
  planListData: PlanListItem[];
  isLoading?: boolean;
  error?: string;
  isVoting: boolean;
  setPlanAId: React.Dispatch<React.SetStateAction<number>>;
  setPlanBId: React.Dispatch<React.SetStateAction<number>>;
}

export const MyPlanList: React.FC<MyPlanListProps> = ({
  planListData,
  isLoading,
  error,
  isVoting,
  setPlanAId,
  setPlanBId,
}) => {
  const navigate = useNavigate();
  const [selections, setSelections] = useState<{ [key: number]: string }>({});
  const [showOptions, setShowOptions] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleReadContent = (planId: number) => {
    navigate(`/planDetail/${planId}`);
  };

  const handleSelectionChange = (
    planId: number,
    value: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation(); // 추가된 부분: 이벤트 버블링을 방지합니다.

    // 현재 각 선택의 횟수를 계산합니다.
    const currentSelections = Object.values(selections);
    const aCount = currentSelections.filter((val) => val === 'A안').length;
    const bCount = currentSelections.filter((val) => val === 'B안').length;

    // 이미 선택된 옵션을 다시 클릭한 경우, 선택을 취소합니다.
    if (selections[planId] === value) {
      if (value === 'A안') setPlanAId(0);
      else if (value === 'B안') setPlanBId(0);
      setSelections((prev) => {
        const newSelections = { ...prev };
        delete newSelections[planId];
        return newSelections;
      });
    } else {
      if (
        (value === 'A안' && aCount >= 1) ||
        (value === 'B안' && bCount >= 1)
      ) {
        alert(`${value}은(는) 한 번만 선택할 수 있습니다.`);
      } else {
        setSelections((prev) => ({ ...prev, [planId]: value }));
        if (value === 'A안') setPlanAId(planId);
        else if (value === 'B안') setPlanBId(planId);
      }
    }

    // 선택이 업데이트된 후, 항상 옵션 토글을 닫습니다.
    setShowOptions((prev) => ({ ...prev, [planId]: false }));
  };

  const toggleOptions = (planId: number) => {
    setShowOptions((prev) => ({ ...prev, [planId]: !prev[planId] }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <S.MyPlanListWrapper>
      <S.MyPlanListItemWrapper>
        {planListData.length > 0 ? (
          planListData.map((item) => (
            <S.MyPlanListItems key={item.planId}>
              <S.MyPlanIsPublic isPublic={item.isPublic}>
                {item.isPublic ? '공개' : '비공개'}
              </S.MyPlanIsPublic>
              <S.MyPlanListContentBox>
                <div>
                  {item.area} | {item.tripStartDate} -{' '}
                  {item.tripEndDate.substring(5, 11)}
                </div>
                <S.MyPlanListTitle
                  onClick={() => handleReadContent(item.planId)}
                >
                  {item.title}
                </S.MyPlanListTitle>
              </S.MyPlanListContentBox>
              <S.MyPlanListCountBox>
                <div>
                  <IoEyeOutline color="gray" />
                  {item.viewCount}
                </div>
                <div>
                  <CiHeart color="gray" />
                  {item.likeCount}
                </div>
              </S.MyPlanListCountBox>
              <S.MyPlanListInviteeBox>
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
                <img src="/assets/paris.jpg" alt="Invitee" />
                <S.MyPlanListInviteeCount>
                  <div>+5</div>
                </S.MyPlanListInviteeCount>
              </S.MyPlanListInviteeBox>
              {isVoting ? (
                <>
                  <S.MyPlanVoteSelectContainer
                    onClick={() => toggleOptions(item.planId)}
                  >
                    {selections[item.planId] || 'A안 | B안'}
                    {showOptions[item.planId] && (
                      <S.MyPlanVoteOptionsContainer>
                        <S.MyPlanVoteOptionA
                          isSelected={selections[item.planId] === 'A안'}
                          onClick={(event) =>
                            handleSelectionChange(item.planId, 'A안', event)
                          }
                        >
                          A안
                        </S.MyPlanVoteOptionA>
                        <S.MyPlanVoteOptionB
                          isSelected={selections[item.planId] === 'B안'}
                          onClick={(event) =>
                            handleSelectionChange(item.planId, 'B안', event)
                          }
                        >
                          B안
                        </S.MyPlanVoteOptionB>
                      </S.MyPlanVoteOptionsContainer>
                    )}
                  </S.MyPlanVoteSelectContainer>
                </>
              ) : null}
            </S.MyPlanListItems>
          ))
        ) : (
          <div>No plans available.</div>
        )}
      </S.MyPlanListItemWrapper>
    </S.MyPlanListWrapper>
  );
};
