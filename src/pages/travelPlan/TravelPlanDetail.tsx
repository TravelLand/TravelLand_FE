import PlanDetail from '@/components/plans/planComponents/PlanDetail';
import * as S from './TravelPlanMain.style';
import Header2 from '@/components/layouts/Header2';

const TravelPlanDetail = () => {
  return (
    <>
      <Header2 />
      <S.TravelPlanMainStyle>
        {/* 타이틀 */}
        <PlanDetail
          active={false}
          text={''}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </S.TravelPlanMainStyle>
    </>
  );
};

export default TravelPlanDetail;
