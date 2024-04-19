import { AxiosResponse } from 'axios';
import { instance, instanceWithToken } from './axios';
import { PlanListParams, WholePlan } from './interfaces/planInterface';

// 여행 플랜 작성하기
export const createPlanList = async (wholePlan: WholePlan) => {
  try {
    return await instanceWithToken.post('/v1/plans/allInOn', wholePlan);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 목록 조회
export const getPlanList = async (
  paramData: PlanListParams,
): Promise<AxiosResponse<any>> => {
  const { page, size, sortBy, isAsc } = paramData;
  try {
    return await instance.get('/v1/plans', {
      params: { page, size, sortBy, isAsc },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 상세 조회
export const getPlanDetail = async (
  planId: number,
): Promise<AxiosResponse<any>> => {
  console.log(planId);
  try {
    return await instance.get(`/v1/plans/allInOn/${planId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 dayPlanId 조회
export const getDayPlanId = async (
  planId: number,
): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get(`/v1/dayPlans/${planId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 여행 플랜 삭제
export const deletePlan = async (planId: Number) => {
  try {
    return await instanceWithToken.delete(`/v1/plans/allInOn/${planId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
