import ContentContainer from '@/components/common/ContentContainer';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const LostAndFoundSection = () => {
  const nav = useNavigate();

  return (
    <>
      <ContentContainer>
        <S.Title>
          분실물 센터 <span>위치</span>
        </S.Title>
        <S.Map />
        <S.Description>
          <span>대운동장 구령대 중앙</span>에
          <br />
          분실물 센터가 위치해 있습니다.
        </S.Description>
      </ContentContainer>
      <S.GoLostAndFoundBtn onClick={() => nav('/lost-and-found')}>온라인 분실물 센터 바로가기</S.GoLostAndFoundBtn>
      <S.MarginBottom />
    </>
  );
};

export default LostAndFoundSection;
