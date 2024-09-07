import ContentContainer from '@/components/common/ContentContainer';
import * as S from './styles';

const MedicalSection = () => {
  return (
    <>
      <ContentContainer>
        <S.Title>
          의료 시설 <span>위치</span>
        </S.Title>
        <S.Map />
        <S.Description>
          <span>정보통신센터(Q동) 계단 앞 건강관리센터</span>에서
          <br />
          비상시 응급 치료를 받으실 수 있습니다.
        </S.Description>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default MedicalSection;
