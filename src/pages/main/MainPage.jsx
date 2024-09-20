import { useTranslation } from 'react-i18next';
import mainImg from '@/assets/webps/main/mainExample.webp';
import OperatingHours from '@/components/main/OperatingHours';
import StageInfoContainer from '@/components/main/StageInfoContainer';
import * as S from './MainPage.styled';
import Lottie from 'lottie-react';
import mainStart from '@/assets/lotties/main/mainStart.json';
import { useEffect, useState } from 'react';
export default function MainPage() {
  // const { t, i18n } = useTranslation();
  const [showLottie, setShowLottie] = useState(true); // Lottie 애니메이션
  const [showContent, setShowContent] = useState(false); // Title과 Desc
  const today = new Date();
  const formattedToday = `${today.getMonth() + 1}.${today.getDate()}`;
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()]; // 요일 계산

  useEffect(() => {
    const lottieTimer = setTimeout(() => {
      setShowLottie(false); // Lottie 애니메이션은 3초 후에 숨기기
    }, 3000);

    const contentTimer = setTimeout(() => {
      setShowContent(true); // 0.86초 후 Title과 Desc가 나타남
    }, 860);

    return () => {
      clearTimeout(lottieTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        {showLottie && (
          <S.LottieWrapper>
            <Lottie animationData={mainStart} />
          </S.LottieWrapper>
        )}
        <S.Title $showContent={showContent}>
          2024
          <br />
          홍익대동제
        </S.Title>
        <S.Desc $showContent={showContent}>
          활짝 피어있는 지금.
          <br />
          있는 그대로 만개한
          <br />
          청춘의 이 순간을
          <br />
          2024 화양연화 ; 만개로
          <br />
          오랫동안 기억될 것입니다.
        </S.Desc>
      </S.Wrapper>
      {/* 라인업 정보 컴포넌트 */}
      <S.LineupTitleWrapper>
        <S.Date>
          {formattedToday} ({dayOfWeek})
        </S.Date>
        <S.LineupTitle>오늘의 라인업</S.LineupTitle>
      </S.LineupTitleWrapper>
      <S.LineupInfoWrapper></S.LineupInfoWrapper>
      <S.GoLineupPageBtn>
        <S.BtnText>전체 라인업 보러가기 </S.BtnText>
        <S.Arrow />
      </S.GoLineupPageBtn>
      {/* 중앙 무대 일정 컴포넌트 */}
      <StageInfoContainer />
      {/* 운영 시간 컴포넌트 */}
      <OperatingHours />
    </S.Container>
  );
}
