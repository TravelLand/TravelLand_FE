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
import ReviewCreatePage1 from '@/pages/travelReview/ReviewCreate1';
import ReviewCreate2 from '@/pages/travelReview/ReviewCreate2';
import ReviewCreate3 from '@/pages/travelReview/ReviewCreate3';

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
  {
    path: '/search',
    element: (
      <SearchPage
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
  },
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
  // {
  //   path: '/travelCreate',
  //   element: (
  //     <TravelCreateForm
  //       tripData={{
  //         title: '',
  //         content: '',
  //         tripStartDate: '',
  //         tripEndDate: '',
  //         cost: 0,
  //         hashTag: [],
  //         address: '',
  //         isPublic: true,
  //       }}
  //       imageList={[]}
  //     />
  //   ),
  // },
  { path: '/travelCreate', element: <ReviewCreatePage1 /> },
  { path: '/reviewCreate/2', element: <ReviewCreate2 /> },
  { path: '/reviewCreate/3', element: <ReviewCreate3 /> },
]);
