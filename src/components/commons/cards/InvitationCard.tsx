import * as S from './Card.style';

export interface InvitationCardProps {
  src?: string;
  onClick?: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ src, onClick }) => {
  console.log(onClick);
  console.log(src);

  return (
    <>
      <S.InvitationCardContainer>
        <img src="/assets/paris.jpg" alt={src} />
        <button onClick={onClick}>X</button>
      </S.InvitationCardContainer>
    </>
  );
};

export default InvitationCard;