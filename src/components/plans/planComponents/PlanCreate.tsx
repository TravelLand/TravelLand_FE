import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import * as S from '@/components/plans/Plan.style';
import DatePicker, { registerLocale } from 'react-datepicker';
import '@/components/DatePicker.styles.css';
// import 'react-datepicker/dist/react-datepicker.min.css';
import { Locale } from 'node_modules/date-fns/locale/types';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko as unknown as Locale);
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { SlLocationPin } from 'react-icons/sl';
import { BiCoinStack } from 'react-icons/bi';
import { CiCalendar } from 'react-icons/ci';

const PlanCreate = () => {
  const navigate = useNavigate();
  // 로컬 상태 훅 대신 Zustand 스토어 사용
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<(Date | undefined)[]>([
    undefined,
    undefined,
  ]);
  const [totalPlanTitle, setTotalPlanTitle] = useState<String>('');
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [area, setArea] = useState<String>('');
  // const [title, setTitle] = useState<String>('');

  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // 이 컴포넌트는 달력 포탈을 열기 위한 버튼을 렌더링합니다.
  // const CalendarButton = React.forwardRef<
  //   HTMLImageElement,
  //   { onClick: () => void }
  // >(({ onClick }, ref) => (
  //   <img
  //     ref={ref}
  //     src="/assets/icons/arrow_to_right.png"
  //     onClick={onClick}
  //     alt="Calendar"
  //     style={{ cursor: 'pointer' }}
  //   />
  // ));

  // CalendarButton.displayName = 'CalendarButton';

  // 날짜 범위 변경 핸들러
  const handleDateRangeChange = (update: [Date, Date]) => {
    setDateRange(update);
  };

  // 여행 기간 텍스트를 표시하기 위한 함수
  const displayDateRange = () => {
    const start = dateRange[0] ? dateRange[0].toLocaleDateString() : '';
    const end = dateRange[1] ? dateRange[1].toLocaleDateString() : '';
    if (!start && !end) {
      return (
        <ModernInput
          type="text"
          placeholder="지역을 입력해주세요"
          width={400}
          height={30}
          border="transparent"
          fontSize={16}
          readonly={true}
          // onChange={handleAreaChange}
        />
      );
    }

    return (
      <div
        style={{
          padding: '5px',
          width: '400px',
          border: ' 1px solid transparent',
          height: '30px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {start} - {end}
      </div>
    );
  };

  // 지역
  const handleAreaChange = (e: any) => {
    setArea(e.target.value);
  };

  // 제목
  const handleTitleChange = (e: any) => {
    setTotalPlanTitle(e.target.value);
  };

  // 비용 변경 핸들러
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalBudget(parseInt(e.target.value, 10) || 0); // 입력값이 비어있는 문자열인 경우 0을 사용
  };

  // 토글
  const toggleIsPublic = () => setIsPublic(!isPublic);

  // 다음 페이지 넘어가기
  const handleNextClick = () => {
    // dateRange 값 확인
    if (dateRange[0] && dateRange[1]) {
      // 날짜 범위가 모두 선택되었다면, 처리 로직 추가
      navigate('/planCreate/2', {
        state: {
          tripStartDate: dateRange[0].toLocaleDateString(),
          tripEndDate: dateRange[1].toLocaleDateString(),
          isPublic,
          totalPlanTitle,
          totalBudget,
          area,
        },
      });
    } else {
      alert('전체 입력이 필요합니다!');
    }
  };

  const dateFormat = 'yyyy-MM';

  return (
    <>
      {/* 전체 컨테이너 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* 작성 컨테이너 */}
        <div
          style={{
            width: '100%',
          }}
        >
          <div>
            <div> 제목</div>
            <S.PlanBoxWithSpaceBetween>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/assets/icons/Rectangle.png"
                  style={{ height: '50px' }}
                />
                <ModernInput
                  type="text"
                  placeholder="제목을 입력해주세요"
                  width={400}
                  height={50}
                  border="transparent"
                  onChange={handleTitleChange}
                  fontSize={18}
                  fontWeight={'bold'}
                />
              </div>

              <div>
                <ToggleButton isChecked={!isPublic} onToggle={toggleIsPublic} />
              </div>
            </S.PlanBoxWithSpaceBetween>
          </div>
          <div>
            {/* 플랜 계획 첫페이지 */}
            <div>
              {/* 지역 */}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SlLocationPin size="25px" color="white" />
                </div>
                <S.PlanContent>
                  <div>지역</div>
                  <ModernInput
                    type="text"
                    placeholder="지역을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleAreaChange}
                  />
                </S.PlanContent>
              </S.PlanBox>
              <hr />
              {/*예산 */}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <BiCoinStack size="25px" color="white" />
                </div>
                <S.PlanContent>
                  <div>예산</div>
                  <ModernInput
                    type="text"
                    placeholder="예산을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleBudgetChange}
                  />
                </S.PlanContent>
              </S.PlanBox>
              <hr />
              {/*기간 선택*/}
              <S.PlanBox>
                <div
                  style={{
                    backgroundColor: '#C5F1FF',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CiCalendar size="25px" color="white" />
                </div>
                <S.PlanBoxWithCalendar>
                  <div style={{ paddingLeft: '15px' }}>
                    <div>여행기간</div>
                    <div> {displayDateRange()}</div>
                  </div>
                  <div style={{ paddingLeft: '200px' }}>
                    <TfiArrowCircleRight size="35px" color="lightGray" />
                  </div>
                </S.PlanBoxWithCalendar>
              </S.PlanBox>
              <hr />
            </div>
          </div>
        </div>
        {/* 달력 컨테이너 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DatePicker
            locale="ko"
            selectsRange={true}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            inline
            dateFormat={dateFormat}
            onChange={handleDateRangeChange}

            // customInput={
            //   <CalendarButton
            //     onClick={function (): void {
            //       throw new Error('Function not implemented.');
            //     }}
            //   />
            // }
            // 이제 여기서 ref와 onClick 모두 처리 가능
            // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}

            // open={isCalendarOpen}
            // shouldCloseOnSelect={true}
            // onCalendarOpen={() => setIsCalendarOpen(true)}
            // onCalendarClose={() => setIsCalendarOpen(false)} // 달력이 닫힐 때 상태를 업데이트하는 콜백 추가
          />
        </div>
      </div>
      <S.PlanBottomSection>
        {/* 다음 버튼 */}
        <S.PlanNextButton onClick={handleNextClick}>다음</S.PlanNextButton>
      </S.PlanBottomSection>
    </>
  );
};

export default PlanCreate;
