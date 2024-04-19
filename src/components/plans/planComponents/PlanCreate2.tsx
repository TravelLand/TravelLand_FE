import { useEffect, useState } from 'react';
import * as S from '../Plan.style';
import * as IS from '@components/commons/inputs/Input.style';
import * as PS from '@components/plans/Plan.style';
import Button from '@/components/commons/buttons/Button';
import { useLocation } from 'react-router-dom';
import { ModernInput } from '@/components/commons/inputs/Input';
import KaKaoMap from '@/components/maps/KaKaoMap';
import { useCreatePlanMutaton } from '@/hooks/useMutation';
import { TfiArrowCircleRight } from 'react-icons/tfi';

export interface UnitPlan {
  title: string;
  content: string;
  time: string;
  budget: number;
  place_name: string;
  address: string;
  x: number;
  y: number;
}

export interface DayPlan {
  date: string;
  unitPlans: UnitPlan[];
}

export interface WholePlan {
  title: string;
  budget: number;
  area: string;
  isPublic: boolean;
  tripStartDate: string;
  tripEndDate: string;
  isVotable: boolean;
  dayPlans: DayPlan[];
}
// 날짜 변환 함수
const formatDate = (date: { toISOString: () => string }) => {
  return date.toISOString().split('T')[0]; // 날짜 부분만 추출 ('YYYY-MM-DD')
};
const PlanCreate2: React.FC = () => {
  const location = useLocation();

  const tripStartDate = new Date(location.state.tripStartDate);
  const tripEndDate = new Date(location.state.tripEndDate);

  const isPublic = location.state.isPublic;
  const area = location.state.area;
  const totalBudget = location.state.totalBudget;
  const totalPlanTitle = location.state.totalPlanTitle;
  const parsedTotalBudget = parseInt(totalBudget, 10); // 문자열을 숫자로 변환

  // useState부분
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Initializing displayDate
  // const [, setDisplayDate] = useState<string>(formatDate(tripStartDate));

  const [unitPlans, setUnitPlans] = useState<UnitPlan[]>([
    {
      title: '',
      time: '',
      place_name: '',
      address: '',
      content: '',
      budget: 0,
      x: 0,
      y: 0,
    },
  ]);

  const [wholePlan, _] = useState<WholePlan[]>([
    {
      title: totalPlanTitle,
      budget: isNaN(parsedTotalBudget) ? 0 : parsedTotalBudget, // 숫자 변환 실패 시 0으로 대체
      area,
      isPublic,
      tripStartDate: formatDate(tripStartDate),
      tripEndDate: formatDate(tripEndDate),
      isVotable: false,
      dayPlans: [],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>(0);

  // 총 일수 계산
  const calculateTotalDays = () => {
    const start = tripStartDate;
    const end = tripEndDate;
    const diff = end.getTime() - start.getTime();
    const totalDays = Math.ceil(diff / (1000 * 3600 * 24)) + 1; // 종료 날짜 포함
    return totalDays;
  };
  // 상태를 초기화하는 부분에서 함수를 호출
  const [totalDays, setTotalDays] = useState(calculateTotalDays());

  // startDate와 currentStep을 기반으로 해당 일차의 날짜 계산
  const calculateDateForStep = (start: string | Date, step: number): string => {
    const resultDate = new Date(start);

    resultDate.setDate(resultDate.getDate() + step + 1); // step이 0부터 시작으로 0인 경우 전일이 보여서 수정
    return formatDate(resultDate);
  };

  const [dayPlans, setDayPlans] = useState<DayPlan[]>([
    {
      date: calculateDateForStep(tripStartDate, 0),
      unitPlans: [],
    },
  ]);

  useEffect(() => {
    setTotalDays(calculateTotalDays());
  }, [tripStartDate, tripEndDate]);

  const handleInputChange = (
    index: number,
    field: keyof UnitPlan,
    value: string,
  ) => {
    const newUnitPlans = [...unitPlans];
    if (field === 'budget') {
      // 입력값을 정수로 변환합니다. 숫자가 아닌 값은 무시합니다.
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        newUnitPlans[index][field] = numericValue;
      } else {
        // 숫자가 아닌 입력이 들어올 경우 경고를 출력하고 값을 변경하지 않습니다.
        console.log(
          'Invalid input: Please enter numeric values only for budget.',
        );
        return; // 상태를 업데이트하지 않음
      }
    } else if (field === 'x' || field === 'y') {
      const numericValue = parseFloat(value);
      newUnitPlans[index][field] = isNaN(numericValue) ? 0 : numericValue;
    } else {
      newUnitPlans[index][field] = value;
    }
    setUnitPlans(newUnitPlans);
  };

  // KaKaoMap 컴포넌트에서 위치가 선택되었을 때 호출될 함수
  // 위치 선택 핸들러 수정
  const handleSelectPlace = (selectedLocation: any, index: number) => {
    const x = parseFloat(selectedLocation.x);
    const y = parseFloat(selectedLocation.y);
    const address =
      selectedLocation.road_address_name || selectedLocation.address_name;
    const place_name = selectedLocation.place_name;
    handleInputChange(index, 'x', x.toString());
    handleInputChange(index, 'y', y.toString());
    handleInputChange(index, 'address', address);
    handleInputChange(index, 'place_name', place_name);
    setIsModalOpen(false);
  };

  const handleOpenMapClick = (index: number) => {
    setSelectedLocationIndex(index);
    setIsModalOpen(true);
  };

  // 추가하기 버튼
  const handlePlanAdd = () => {
    // 현재 unitPlans에 새 UnitPlan 추가
    const newUnitPlan = {
      title: '',
      time: '',
      address: '',
      content: '',
      place_name: '',
      budget: 0,
      x: 0,
      y: 0,
    };

    const updatedUnitPlans = [...unitPlans, newUnitPlan];
    setUnitPlans(updatedUnitPlans);
  };

  useEffect(() => {
    // 현재 단계의 DayPlan에 현재 unitPlans를 저장합니다.
    const newDayPlans = [...dayPlans];
    newDayPlans[currentStep] = {
      ...newDayPlans[currentStep],
      unitPlans: [...unitPlans],
    };

    setDayPlans(newDayPlans);
  }, [unitPlans, currentStep]);

  // handleDayChange 함수 내에서 currentStep 업데이트 로직 확인 및 최적화
  const handleDayChange = (stepIndex: number) => {
    // 현재 일차의 데이터를 저장합니다.
    const newDayPlans = [...dayPlans];

    // 현재 일차 데이터 업데이트
    if (newDayPlans[currentStep]) {
      newDayPlans[currentStep] = {
        ...newDayPlans[currentStep],
        unitPlans: [...unitPlans],
      };
    } else {
      // 현재 일차 데이터가 없다면 새로운 DayPlan 생성
      newDayPlans[currentStep] = {
        date: calculateDateForStep(tripStartDate, currentStep),
        unitPlans: [...unitPlans],
      };
    }

    // 새로운 일차를 추가하기 전에 마지막 일차가 있는지 확인하고, 없으면 추가합니다.
    if (stepIndex >= newDayPlans.length) {
      for (let i = newDayPlans.length; i <= stepIndex; i++) {
        newDayPlans.push({
          date: calculateDateForStep(tripStartDate, i),
          unitPlans: [],
        });
      }
    }

    // DayPlans 배열을 업데이트
    setDayPlans(newDayPlans);

    // 새 일차로 변경
    setCurrentStep(stepIndex);

    // 선택된 일차의 UnitPlans 로드하거나 초기화
    setUnitPlans(
      newDayPlans[stepIndex].unitPlans.length > 0
        ? newDayPlans[stepIndex].unitPlans
        : [
            {
              title: '',
              time: '',
              place_name: '',
              address: '',
              content: '',
              budget: 0,
              x: 0,
              y: 0,
            },
          ],
    );
  };

  const createPlanList = useCreatePlanMutaton();

  // 등록하기 버튼
  const handlePlanSubmit = () => {
    // 현재 unitPlans에 내용이 있는지 확인
    const isUnitPlansEmpty = unitPlans.every(
      (unitPlan) => !unitPlan.title && !unitPlan.content,
    );

    // 마지막 일차의 unitPlans가 비어있지 않다면 업데이트
    if (!isUnitPlansEmpty) {
      const updatedDayPlans = [...dayPlans];
      if (updatedDayPlans.length === currentStep + 1) {
        updatedDayPlans[currentStep] = {
          ...updatedDayPlans[currentStep],
          unitPlans: unitPlans,
        };
      } else {
        // 마지막 일차가 아직 작성되지 않았다면 추가
        updatedDayPlans.push({
          date: calculateDateForStep(tripStartDate, updatedDayPlans.length),
          unitPlans: unitPlans,
        });
      }
      // `totalBudget`를 숫자로 파싱
      const numericBudget = parseInt(wholePlan[0].budget.toString(), 10);
      const validBudget = isNaN(numericBudget) ? 0 : numericBudget;

      // wholePlan을 객체로 설정하여 전송
      const planToSubmit = {
        ...wholePlan[0],
        title: totalPlanTitle,
        area: area,
        budget: validBudget, // 숫자로 변환된 예산 적용
        tripStartDate: formatDate(tripStartDate), // 포맷된 날짜로 확정
        tripEndDate: formatDate(tripEndDate), // 포맷된 날짜로 확정
        dayPlans: updatedDayPlans,
      };
      // console.log(planToSubmit);
      // 여기서 API 호출 등의 추가 작업을 수행할 수 있습니다.
      createPlanList.mutate(planToSubmit);
    } else {
      // 마지막 일차의 unitPlans가 비어 있다면, 사용자에게 작성을 유도하는 메시지 표시
      alert('마지막 일차의 계획을 완성해주세요.');
    }
  };

  return (
    <>
      {/* 여행 일자 박스 영역 */}
      <S.PlanDetailDateBox>
        {Array.from({ length: totalDays }, (_, index) => (
          <S.PlanDetailDateButton
            key={index}
            onClick={() => handleDayChange(index)}
            isActive={currentStep === index}
          >
            {`${index + 1}일차`}
            {currentStep === index && (
              <>
                <hr />
                <div>{calculateDateForStep(tripStartDate, index)}</div>
              </>
            )}
          </S.PlanDetailDateButton>
        ))}
      </S.PlanDetailDateBox>
      {/* 스태퍼 박스 영역 */}

      {unitPlans.map((input, index) => (
        <S.PlanDetailCreateBox>
          <IS.PlanListInputContainer key={index}>
            {/* 출발지 영역 */}
            <IS.ListInputbox>
              <div>제목</div>
              <input
                placeholder="서울시 강남구"
                value={input.title}
                onChange={(e) =>
                  handleInputChange(index, 'title', e.target.value)
                }
              />
            </IS.ListInputbox>
            {/* 시간 영역 */}
            <IS.ListInputbox>
              <div>시간</div>
              <input
                placeholder="09:30"
                value={input.time}
                onChange={(e) =>
                  handleInputChange(index, 'time', e.target.value)
                }
              />
            </IS.ListInputbox>
            {/* 일정 영역 */}
            <IS.ListInputbox>
              <div>일정 *</div>
              <ModernInput
                placeholder="가이드 만나기"
                value={input.content}
                type="text"
                height={50}
                onChange={(e) =>
                  handleInputChange(index, 'content', e.target.value)
                }
              />
            </IS.ListInputbox>
            {/* 경비 영역 */}
            <IS.ListInputbox>
              <div>경비 *</div>
              <ModernInput
                placeholder="경비"
                value={input.budget}
                type="text" // Set input type as number to allow only numeric values
                height={50}
                onChange={(e) =>
                  handleInputChange(index, 'budget', e.target.value)
                }
              />
            </IS.ListInputbox>
            {/* 위치 영역 */}
            <IS.ListInputboxWithFlex>
              <div>위치</div>
              <IS.ListContent>
                <ModernInput
                  placeholder="서울특별시 중구 을지로 201"
                  value={`${input.place_name}, ${input.address}`}
                  readonly={true}
                  type={'text'}
                  border="transparent"
                  width={750}
                />
                <IS.ImgBox>
                  {/* <IoIosArrowDropright
                    color="lightGray"
                    size="2rem"
                    onClick={() => handleOpenMapClick(index)}
                  /> */}
                  <TfiArrowCircleRight
                    size="35px"
                    color="lightGray"
                    onClick={() => handleOpenMapClick(index)}
                  />
                </IS.ImgBox>
              </IS.ListContent>
            </IS.ListInputboxWithFlex>
          </IS.PlanListInputContainer>
        </S.PlanDetailCreateBox>
      ))}
      <PS.ButtonBox>
        <Button
          text="+"
          width="100%"
          height="60px"
          color="white"
          borderColor="lightGray"
          borderRadius="25px"
          textColor="lightGray"
          onClick={handlePlanAdd}
        />
      </PS.ButtonBox>
      {/* 등록하기 버튼 영역 */}
      <S.ButtonBoxToRight>
        <Button
          text="등록하기"
          width="150px"
          height="50px"
          borderRadius="15px"
          fontWeight="bold"
          textColor="white"
          color="#5AC8EC"
          borderColor="#5AC8EC"
          marginRight="15px"
          onClick={handlePlanSubmit} // 등록하기 버튼 클릭 핸들러 추가
        />
      </S.ButtonBoxToRight>

      {isModalOpen && (
        <KaKaoMap
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={(location) =>
            handleSelectPlace(location, selectedLocationIndex)
          }
          searchKeyword=""
        />
      )}
    </>
  );
};

export default PlanCreate2;
