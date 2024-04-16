import React, { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import Map from '@/components/maps/Map';
import { usePlanDetailQuery } from '@/hooks/useQuery';
import { useParams } from 'react-router-dom';
import Button from '@/components/commons/buttons/Button';
import { useDeleteMutation } from '@/hooks/useMutation';
import InvitationCard from '@/components/commons/cards/InvitationCard';
import { FaLocationDot } from 'react-icons/fa6';
import { CiHeart, CiBookmark, CiCirclePlus } from 'react-icons/ci';
import { Invitation } from '@/components/commons/invitation/Invitation';

// 사용할 데이터 타입 정의 (예시입니다, 실제 데이터에 맞게 조정해야 합니다.)

interface ButtonProps {
  active: boolean;
  text: string;
  onClick: () => void;
}

interface DayPlan {
  dayPlanId: number;
  title: string;
  content: string;
  budget: number;
  date: string;
  startAddress: string;
  endAddress: string;
  unitPlans: UnitPlan[];
}

interface UnitPlan {
  unitPlanId: number;
  title: string;
  content: string;
  budget: number;
  address: string;
  time: string;
}

const PlanDetail: React.FC<ButtonProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);
  const [address, setAddress] = useState<string>(''); // 예시 주소를 빈 문자열로 초기화// ...기존의 useState와 useEffect 로직...
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false); // 초대 모달 상태를 관리하는 useState

  0; // 현재 스텝 인덱스를 0으로 초기화

  // `id`를 숫자로 변환하기 전에 유효성 검사 수행
  const planId = Number(id);
  const { data, isLoading, isError } = usePlanDetailQuery(planId);

  const planDetails = data?.data;
  useEffect(() => {
    if (planDetails?.dayPlans) {
      setDayPlans(planDetails.dayPlans);
    }
  }, [planDetails]);
  console.log('planDetails > ', planDetails);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleOpenMapClick = (selectedAddress: string) => {
    setAddress(selectedAddress); // 주소 상태 업데이트
    setIsModalOpen(true);
  };

  // 좋아요 기능
  const handleLikeClick = () => {};

  // 좋아요 기능
  const handleScrapClick = () => {};

  // 수정 기능
  // const deleteMutaion = useDeleteMutation();

  const handlePlanUpdate = () => {
    // deleteMutaion.mutate(planId);
  };
  // 삭제 기능
  const deleteMutaion = useDeleteMutation();

  const handlePlanDelete = () => {
    deleteMutaion.mutate(planId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 초대하기 모달을 여는 함수
  const handleOpenInvitation = () => {
    setIsInvitationModalOpen(true); // 초대 모달 상태를 true로 설정
  };

  // 초대하기 모달을 닫는 함수
  const closeInvitationModal = () => {
    setIsInvitationModalOpen(false); // 초대 모달 상태를 false로 설정
  };

  // 초대하기 로직
  const handleInvite = () => {
    // 초대 로직 구현 필요
    console.log('초대하기 로직 실행');
    closeInvitationModal(); // 초대 후 모달 닫기
  };
  // 초대한 사람 삭제
  const handleDeleteClick = (index: number) => {
    console.log(index);
    // 초대된 사람들 배열에서 해당 인덱스의 항목을 제거
    // const updatedInvitedPeople = [...invitedPeople];
    // updatedInvitedPeople.splice(index, 1);
    // setInvitedPeople(updatedInvitedPeople);
  };

  if (isLoading) {
    // 데이터 로딩 중 UI
    return <div>Loading...</div>;
  }

  if (isError) {
    // 에러 발생 시 UI
    return <div>Error</div>;
  }

  return (
    <>
      <S.PlanDetailContainer>
        <S.PlanDetailContentHeader>
          <S.DetailHeaderContent>
            <div>
              {planDetails.area} | {planDetails.tripStartDate} -{' '}
              {planDetails.tripEndDate} | 예산{' '}
              {planDetails.budget.toLocaleString()} 원
            </div>
            <S.DetailPlanContentCity>
              {planDetails.title}
            </S.DetailPlanContentCity>
          </S.DetailHeaderContent>
          <div>
            <CiHeart size="30px" onClick={handleLikeClick} />
            <CiBookmark size="30px" onClick={handleScrapClick} />
          </div>
        </S.PlanDetailContentHeader>
        <S.DetailHeaderThirdContent>
          <div>
            <img src={`${planDetails.profileUrl}`} />
            {planDetails.memberNickname}
          </div>
          <div>
            <Button
              onClick={handlePlanUpdate}
              text={'수정하기'}
              borderColor="lightGray"
              marginRight="5px"
            />
            <Button
              onClick={handlePlanDelete}
              text={'삭제하기'}
              borderColor="lightGray"
            />
          </div>
        </S.DetailHeaderThirdContent>
        <hr />
        {/* 여행 일자 박스 영역 */}

        {/* 스태퍼 박스 영역 */}
        <S.PlanDetailDateBox>
          {dayPlans.map((dayPlan, index) => (
            <S.PlanDetailDateButton
              key={index}
              onClick={() => handleStepClick(index)}
              isActive={currentStep === index}
            >
              {`${index + 1}일차`}
              {currentStep === index && (
                <>
                  <hr />
                  <div>{formatDate(dayPlan.date)}</div>
                </>
              )}
            </S.PlanDetailDateButton>
          ))}
        </S.PlanDetailDateBox>
        {/* 스태퍼 박스 영역 */}
        <div>
          {dayPlans[currentStep]?.unitPlans.map((unitPlan, index) => (
            <S.DetailContentBox key={index}>
              {/* 순서 */} <S.DetailPlanNumber>{index + 1}</S.DetailPlanNumber>
              <S.PlanDetailContentBox>
                <S.DetailPlanContentCity>
                  {unitPlan.title}
                </S.DetailPlanContentCity>
                <S.DetailContentItem>
                  <S.DetailContent>
                    <div>
                      {unitPlan.time} {unitPlan.content}
                    </div>
                    <div>{unitPlan.budget.toLocaleString()}원</div>
                  </S.DetailContent>
                  <S.DetailLocationBox>
                    {/* 이 부분에 지도 버튼 추가 및 클릭 이벤트 핸들러 연결 */}
                    <S.DetailButtonDiv
                      onClick={() => handleOpenMapClick(unitPlan.address)}
                    >
                      <FaLocationDot size="25px" color="white" />{' '}
                    </S.DetailButtonDiv>{' '}
                    <div>{unitPlan.address}</div>
                  </S.DetailLocationBox>
                </S.DetailContentItem>
              </S.PlanDetailContentBox>
            </S.DetailContentBox>
          ))}

          {/*초대 */}
          <S.DetailContentBox>
            <S.ButtonBox>
              <S.InvitationDiv>
                함께할 동행자를 초대해주세요{' '}
                <InvitationCard
                  src={'/assets/paris.jpg'}
                  onClick={() => handleDeleteClick(1)}
                />
                <CiCirclePlus size="35px" onClick={handleOpenInvitation} />
              </S.InvitationDiv>
            </S.ButtonBox>
            <S.PlanInvitationBox>
              {/* 초대된 사람들 노출 및 삭제 구간 */}

              {/* {invitedPeople.map((person, index) => (
                <InvitationCard
                  key={index}
                  src={person.src}
                  onClick={() => handleDeleteClick(index)}
                />
              ))} */}
            </S.PlanInvitationBox>
          </S.DetailContentBox>
        </div>
      </S.PlanDetailContainer>
      {/*  지도 모달 */}
      <Map isOpen={isModalOpen} onClose={closeModal} address={address} />
      {/* 초대하기 모달 처리 */}
      <Invitation
        isOpen={isInvitationModalOpen}
        onClose={closeInvitationModal}
        onInvite={handleInvite} // 초대하기 버튼 클릭 시 호출될 함수 전달
      />
    </>
  );
};

export default PlanDetail;
