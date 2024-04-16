import { AxiosResponse } from 'axios';
import { instance } from './axios';
import { PlanListParams } from './interfaces/planInterface';
import { TripListParams } from './interfaces/reviewInterface';

// 여행 플랜 목록 조회
// export const getMyPlanList = async (
//   paramData: PlanListParams,
// ): Promise<AxiosResponse<any>> => {
//   const { page, size, sortBy, isAsc } = paramData;
//   try {
//     return await instance.get('/v1/users/plans', {
//       params: { page, size, sortBy, isAsc },
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// 여행 플랜 스크랩 목록 조회
export const getScrapPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instance.get('/v1/plans/scrap', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 목록 조회
export const getMyTripList = async (tripListparam: TripListParams) => {
  const { page, size } = tripListparam;
  try {
    const response = await instance.get('/v1/users/trips', {
      params: { page, size },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 스크랩 목록 조회
export const getScrapTripList = async (tripListparam: TripListParams) => {
  const { page, size } = tripListparam;
  try {
    const response = await instance.get('/v1/trips/scrap', {
      params: { page, size },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
