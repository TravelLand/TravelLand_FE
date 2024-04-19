import PlanList from '@/components/plans/planComponents/PlanList';
import * as S from './TravelPlanMain.style';
import Header2 from '@/components/layouts/Header2';

const TravelPlanList = () => {
  return (
    <>
      <Header2 />
      <S.TravelPlanMainStyle>
        <PlanList />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanList;
