import { createPlanList, deletePlan } from '@/api/planAxios';
import { createVote } from '@/api/voteAxios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// 작성하기 mutation
export const useCreatePlanMutaton = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createPlanList,
    onSuccess: () => {
      alert('작성이 완료되었습니다.');
      navigate('/planList');
    },
    onError: (error) => {
      alert('등록하기 에러가 발생했습니다.');
      console.log(error.message);
    },
  });
};
// 삭제하기 mutation
export const useDeleteMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deletePlan,
    onSuccess: () => {
      alert('삭제가 완료 되었습니다.');
      navigate('/planList');
    },
    onError: () => {
      alert('삭제하기에 에러가 발생했습니다.');
    },
  });
};

// 투표 생성하기
export const useCreateVoteMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createVote,
    onSuccess: () => {
      alert('투표 생성이 완료되었습니다.');
      navigate('/user/myPage');
    },
    onError: () => {
      alert('투표 생성하기에 에러가 발생했습니다.');
    },
  });
};
