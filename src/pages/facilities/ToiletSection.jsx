import ContentContainer from '@/components/common/ContentContainer';
import * as S from './styles';

const ToiletSection = () => {
  return (
    <>
      <ContentContainer>
        <S.Title>
          화장실 <span>위치</span>
        </S.Title>
        <S.Map />
        <S.ToiletDetail>
          <S.DetailItem>
            <S.Number>1</S.Number>
            <S.GrayBar />
            <S.Building>M동</S.Building>
            <S.Floor>1층</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>2</S.Number>
            <S.GrayBar />
            <S.Building>Z4동</S.Building>
            <S.Floor>1층 (장애인 화장실)</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>3</S.Number>
            <S.GrayBar />
            <S.Building>Z4동</S.Building>
            <S.Floor>2층</S.Floor>
          </S.DetailItem>
        </S.ToiletDetail>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default ToiletSection;
