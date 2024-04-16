import { CiBookmark, CiHeart } from 'react-icons/ci';
import * as S from './List.style';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
interface PlanListItem {
  area: string;
  title: string;
  budget: string;
  createdAt: string;
  viewCount: number;
  planId: number;
  public: boolean;
}

interface ListProps {
  planListData: PlanListItem[];
}

const List: React.FC<ListProps> = ({ planListData }) => {
  const navigate = useNavigate();

  const handleReadContent = (planId: number) => {
    navigate(`/planDetail/${planId}`);
  };

  // const handleBookmarkClick = (planId: number) => {
  //   console.log(planId);
  // };

  const halfIndex = Math.ceil(planListData.length / 2);
  const leftColumnItems = planListData.slice(0, halfIndex);
  const rightColumnItems = planListData.slice(halfIndex);

  return (
    <>
      {planListData.length === 0 ? (
        <S.DoubleColumnContainer>
          <div>데이터가 없습니다</div>
        </S.DoubleColumnContainer>
      ) : (
        <S.DoubleColumnContainer>
          <S.Column>
            {leftColumnItems.map((item, index) => (
              <S.ListItem key={index}>
                {/* 좌측 내용 */}
                <S.ListLeftIcon>
                  <CiBookmark size="30px" color="gray" />
                </S.ListLeftIcon>
                <S.ListItemLeft>
                  <div>
                    <div>
                      {item.area} | {item.createdAt.split('T')[0]}
                    </div>
                    <S.ListTitle onClick={() => handleReadContent(item.planId)}>
                      {item.title}
                    </S.ListTitle>
                    <div>예산 {item.budget.toLocaleString()}원</div>
                  </div>
                </S.ListItemLeft>
                <S.ListItemRight>
                  {' '}
                  <IoEyeOutline size="25px" color="gray" />
                  {item.viewCount}
                  <CiHeart size="25px" color="gray" />
                  {item.viewCount}
                </S.ListItemRight>
                {/* 우측 아이콘들 */}
              </S.ListItem>
            ))}
          </S.Column>
          <S.Column>
            {rightColumnItems.map((item, index) => (
              <S.ListItem key={index}>
                {/* 좌측 내용 */}
                <S.ListLeftIcon>
                  <CiBookmark size="30px" color="gray" />
                </S.ListLeftIcon>
                <S.ListItemLeft>
                  <div>
                    <div>
                      {item.area} | {item.createdAt.split('T')[0]}
                    </div>
                    <S.ListTitle
                      onClick={() => handleReadContent(item.planId)}
                      // style={{ color: 'black' }}
                    >
                      {item.title}
                    </S.ListTitle>
                    <div>예산 {item.budget.toLocaleString()}원</div>
                  </div>
                </S.ListItemLeft>
                <S.ListItemRight>
                  <IoEyeOutline size="25px" color="gray" />
                  {item.viewCount}
                  <CiHeart size="25px" color="gray" />
                  {item.viewCount}
                </S.ListItemRight>
                {/* 우측 아이콘들 */}
              </S.ListItem>
            ))}
          </S.Column>
        </S.DoubleColumnContainer>
      )}
    </>
  );
};

export { List };
