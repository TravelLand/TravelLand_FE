import PlanCreate from '@/components/plans/planComponents/PlanCreate';
import * as S from './TravelPlanMain.style';
import Header2 from '@/components/layouts/Header2';

const TravelPlanCreate1 = () => {
  return (
    <>
      <Header2 />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 작성하기</h2>
        <PlanCreate />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanCreate1;
