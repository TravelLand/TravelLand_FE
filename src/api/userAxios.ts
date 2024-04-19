import { AxiosResponse } from 'axios';
import { instanceWithToken } from './axios';
import { PlanListParams } from './interfaces/planInterface';
import { TripListParams } from './interfaces/reviewInterface';

// 유저 정보
export const getUserInfo = async () => {
  try {
    return await instanceWithToken.get('/users/memberInfo');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 목록 조회
export const getMyPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instanceWithToken.get('/v1/users/plans', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 스크랩 목록 조회
export const getScrapPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instanceWithToken.get('/v1/plans/scrap', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 목록 조회
export const getMyTripList = async (
  tripListparam: TripListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, isAsc, sortBy } = tripListparam;
  try {
    return await instanceWithToken.get('/v1/users/trips', {
      params: { page, size, isAsc, sortBy },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 정보 스크랩 목록 조회
export const getScrapTripList = async (tripListparam: TripListParams) => {
  const { page, size } = tripListparam;
  try {
    const response = await instanceWithToken.get('/v1/trips/scrap', {
      params: { page, size },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
