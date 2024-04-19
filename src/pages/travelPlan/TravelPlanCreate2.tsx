import PlanCreate2 from '@/components/plans/planComponents/PlanCreate2';
import * as S from './TravelPlanMain.style';
import Header2 from '@/components/layouts/Header2';

const TravelPlanCreate2 = () => {
  return (
    <>
      <Header2 />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 작성하기</h2>
        <PlanCreate2 />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanCreate2;
