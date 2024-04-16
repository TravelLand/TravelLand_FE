import PlanCreate2 from '@/components/plans/planComponents/PlanCreate2';
import * as S from './TravelPlanMain.style';
import Header from '@/components/layouts/Header';

const TravelPlanCreate2 = () => {
  return (
    <>
      <Header />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <h2>여행 플랜 작성하기</h2>
        <PlanCreate2 />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanCreate2;
