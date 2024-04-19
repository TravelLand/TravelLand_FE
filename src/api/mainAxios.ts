import { AxiosResponse } from 'axios';
import { instance } from './axios';

// 여행 정보 조회수 TOP10 목록조회
export const getMainTopTenRankList = async (): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get('/v1/trips/rank');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 인기 해쉬태그 Top5
export const getMainHashTagRankList = async (): Promise<AxiosResponse<any>> => {
  try {
    return await instance.get('v1/trips/rank/hashtag');
  } catch (error) {
    throw error;
  }
};
