import { getPlanDetail, getPlanList } from '@/api/planAxios';
import { useQuery } from '@tanstack/react-query';
import { PlanListParams } from '@/api/interfaces/planInterface';
// import { getMyPlanList } from '@/api/userAxios';

export const usePlanListQuery = (planListParams: PlanListParams) => {
  return useQuery({
    queryKey: ['planList', planListParams],
    queryFn: () => getPlanList(planListParams),
    staleTime: 0, // 새로고침 주기를 빠르게 하려면 0으로 설정
  });
};

export const usePlanDetailQuery = (planId: number) => {
  console.log(planId);
  return useQuery({
    queryKey: ['planDetail', planId],
    queryFn: () => getPlanDetail(planId),
    // staleTime: 5 * 60 * 1000, // 데이터를 5분간 신선하게 유지
    // cacheTime: 30 * 60 * 1000, // 캐시에서 데이터를 30분간 유지 => gcTime으로 수정 필요 => v5에서 변경 됨
    refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터 재요청 안 함
    refetchOnReconnect: false, // 네트워크 재연결 시 데이터 재요청 안 함
  });
};

// export const useMyPlanListQuery = (planListParams: PlanListParams) => {
//   return useQuery({
//     queryKey: ['myPlanList', planListParams],
//     queryFn: () => getMyPlanList(planListParams),
//     staleTime: 0, // 새로고침 주기를 빠르게 하려면 0으로 설정
//   });
// };
