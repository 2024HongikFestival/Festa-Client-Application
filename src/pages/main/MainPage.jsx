import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import mainLineup1 from '@/assets/webps/main/mainLineup1.webp';
import mainLineup2 from '@/assets/webps/main/mainLineup2.webp';
import mainLineup3 from '@/assets/webps/main/mainLineup3.webp';
import OperatingHours from '@/components/main/OperatingHours';
import StageInfoContainer from '@/components/main/StageInfoContainer';
import * as S from './MainPage.styled';
import Lottie from 'lottie-react';
import mainStart from '@/assets/lotties/main/mainStart.json';
import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function MainPage() {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
  const [showLottie, setShowLottie] = useState(!isEnglish);
  const [showContent, setShowContent] = useState(false); // Title과 Desc
  const today = new Date();
  const formattedToday = `${today.getMonth() + 1}.${today.getDate()}`;
  // const formattedToday = '9.25'; // 라인업 카드 및 애니메이션 확인용 날짜
  const dayOfWeek =
    formattedToday === '9.25' ? 'wed' : formattedToday === '9.26' ? 'thu' : formattedToday === '9.27' ? 'fri' : '';

  const lineupImage = {
    9.25: mainLineup1,
    9.26: mainLineup2,
    9.27: mainLineup3,
  }[formattedToday];

  // 9.25, 9.26, 9.27에만 표시하기 위한 조건
  const isLineupDate = ['9.25', '9.26', '9.27'].includes(formattedToday);

  useEffect(() => {
    const lottieTimer = setTimeout(() => {
      if (!isEnglish) {
        setShowLottie(false);
      } // 영어가 아닐 때만 Lottie 숨김
    }, 3000);
    const timeoutDuration = i18n.language === 'en' ? 600 : 860; // Faster for English

    const contentTimer = setTimeout(() => {
      setShowContent(true);
      // Title and Desc appear after the specified time
    }, timeoutDuration);

    AOS.init({ duration: 1000 }); // Initialize AOS

    return () => {
      clearTimeout(lottieTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    // update isEnglish
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

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
          {t('main.title')}
        </S.Title>
        <S.Desc $showContent={showContent}>
          {t('main.desc1')}
          <br /> {t('main.desc2')}
          <br /> {t('main.desc3')}
          <br /> {t('main.desc4')}
          <br /> {t('main.desc5')}
        </S.Desc>
      </S.Wrapper>
      {/* 라인업 정보 컴포넌트 */}
      {isLineupDate && (
        <>
          <S.LineupTitleWrapper data-aos="fade-up">
            <S.Date data-aos="fade-up">
              {formattedToday} ({t(`main.days.${dayOfWeek}`)})
            </S.Date>
            <S.LineupTitle data-aos="fade-up">{t('main.todayLineup')}</S.LineupTitle>
          </S.LineupTitleWrapper>
          <S.LineupInfoWrapper data-aos="fade-up">
            {lineupImage && <S.LineupImg data-aos="fade-up" src={lineupImage} alt="오늘의 라인업" />}
          </S.LineupInfoWrapper>
        </>
      )}
      <S.GoLineupPageBtn data-aos="fade-up">
        <Link to="/lineup">
          <S.BtnText> {t('main.clicktoLineup')}</S.BtnText>
          <S.Arrow $isEnglish={isEnglish} />
        </Link>
      </S.GoLineupPageBtn>
      {/* 중앙 무대 일정 컴포넌트 */}
      <StageInfoContainer />
      {/* 운영 시간 컴포넌트 */}
      <OperatingHours />
    </S.Container>
  );
}
