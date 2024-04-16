import { MediumButton } from '@/components/commons/buttons/Button';
import * as S from '@/components/commons/user/myPage/MyPage.style';
import * as CS from '@/styles/commonStyles';
import { List } from '@/components/commons/Lists/List';
// import { useNavigate } from 'react-router-dom';
// import { useMyPlanListQuery } from '@/hooks/useQuery';
// import { useState } from 'react';
const MyPagePlanList = () => {
  // const navigate = useNavigate();
  // // const handleMakePlanClick = () => {
  // //   navigate('/planCreate/1');
  // // };

  // const [page, setPage] = useState(1); // 페이지 번호
  // const [size] = useState(8); // 한 페이지 당 받아올 겟수
  // const [pageGroup, setPageGroup] = useState(0); // 현재 페이지 그룹
  // const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  // const pageGroupSize = 10; // 페이지 그룹 당 표시할 페이지 수

  // const [sortBy] = useState('createdAt');
  // const [isAsc] = useState(true);

  // 페이지네이션을 위한 파라미터 설정
  // const planListParams = { page, size, sortBy, isAsc };

  // const { data, isError, isLoading } = useMyPlanListQuery(planListParams);

  // useEffect(() => {
  //   if (data) {
  //     setTotalPages(data?.data.totalPages); // 전체 페이지 수 업데이트
  //   }
  // }, [data]);

  // const handlePageChange = (newPage: number) => {
  //   setPage(newPage); // 선택된 페이지로 현재 페이지 상태 업데이트
  // };

  // const handleNextGroup = () => {
  //   setPageGroup(pageGroup + 1);
  //   setPage(pageGroup * pageGroupSize + 1); // 다음 그룹의 첫 페이지로 이동
  // };

  // const handlePrevGroup = () => {
  //   setPageGroup(pageGroup - 1);
  //   setPage((pageGroup - 2) * pageGroupSize + 1); // 이전 그룹의 첫 페이지로 이동
  // };

  // 데이터 필터링 (public 속성이 true인 항목만)
  // 수정된 코드
  // const content = data?.data.content; // 실제 항목이 포함된 배열
  // console.log(content);
  // 현재 입력 값 public이 true 저장 불가한 상태로 false로 임시 목록 보여주기
  // const filteredData = content?.filter((item: any) => item.isPublic === true); // public 속성이 true인 항목만 필터링

  // console.log(filteredData);
  //

  // if (isLoading) return <div>Data is Loading</div>;
  // if (isError) return <div>Error occurred during fetching</div>;
  return (
    <>
      {/* 버튼 */}
      <S.MyPageButton>
        {/* <img src="../assets/check.png" alt="체크" /> */}
        <MediumButton text="내가 작성한 4" />
        &nbsp;
        {/* <img src="public/assets/bookmark.png" alt="북마크" /> */}
        <MediumButton text="스크랩 Number" />
      </S.MyPageButton>
      {/* 목록 */}
      <List planListData={[]} />
      {/* pagination */}
      <CS.PagenationStyle>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </CS.PagenationStyle>
    </>
  );
};

export default MyPagePlanList;
