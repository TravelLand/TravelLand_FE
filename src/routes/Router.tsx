import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import KakaoRedirect from '@/pages/user/KakaoRedirect';
import MyPage from '@/pages/user/MyPage';
import SearchPage from '@/pages/main/SearchPage';
import TravelReviewPage from '@/pages/travelReview/TravelReviewPage';
import TravelDetailPage from '@/pages/travelReview/TravelDetailPage';
import Login from '@/pages/user/Login';
import TravelPlanCreate1 from '@/pages/travelPlan/TravelPlanCreate1';
import TravelPlanCreate2 from '@/pages/travelPlan/TravelPlanCreate2';
import TravelPlanList from '@/pages/travelPlan/TravelPlanList';
import TravelPlanDetail from '@/pages/travelPlan/TravelPlanDetail';
import SearchResults from '@/pages/main/SearchResults';
import TravelCreateForm from '@/pages/travelReview/TravelCreatePage';
import { getTripDetail } from '@/api/reviewAxios';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Main
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
  },
  { path: '/search', element: <SearchPage /> },
  { path: '/results', element: <SearchResults /> },
  { path: '/travelReview', element: <TravelReviewPage /> },
  { path: '/travelDetail/:tripId', element: <TravelDetailPage /> },
  { path: '/login/oauth', element: <KakaoRedirect /> },
  { path: '/user/myPage', element: <MyPage /> },
  {
    path: '/login',
    element: (
      <Login
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
  },
  { path: '/planCreate/1', element: <TravelPlanCreate1 /> },
  { path: '/planCreate/2', element: <TravelPlanCreate2 /> },
  { path: '/planList', element: <TravelPlanList /> },
  { path: '/planDetail/:id', element: <TravelPlanDetail /> },
  { path: '/TravelDetailPage/:tripId', element: <TravelDetailPage /> },
  {
    path: '/travelCreate',
    element: (
      <TravelCreateForm
        email={''} // 필요한 경우 실제 이메일 값을 사용하세요.
        tripData={{
          title: '',
          content: '',
          tripStartDate: '',
          tripEndDate: '',
          cost: 0,
          hashTag: [],
          address: '',
          isPublic: true,
          // 기타 필요한 필드를 여기에 추가하세요.
        }}
        imageList={[]}
      />
    ),
  },
  {
    path: '/travelEdit/:tripId',
    element: <TravelCreateForm />,
    loader: async ({ params }) => {
      const tripIdStr = params.tripId;
      if (typeof tripIdStr !== 'string') {
        throw new Error('tripId is missing');
      }
      const tripId = parseInt(tripIdStr, 10);
      if (isNaN(tripId)) {
        throw new Error('Invalid tripId');
      }
      try {
        // 여행 정보를 불러오기 API 호출
        const tripDetailResponse = await getTripDetail(tripId);
        // TravelCreateForm에 props로 여행 정보를 전달
        return { tripData: tripDetailResponse.data, tripId };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to load trip data');
      }
    },
  },
]);
