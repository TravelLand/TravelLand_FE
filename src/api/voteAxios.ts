import { instance } from './axios';
import { VoteData } from './interfaces/voteInterface';

export const createVote = async (voteData: VoteData) => {
  try {
    return await instance.post('/v1/votes', voteData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
