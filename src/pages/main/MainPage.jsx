import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as S from './MainPage.styled';
import mainStart from '@/assets/lotties/main/mainStart.json';
import AOS from 'aos';

const Lottie = React.lazy(() => import('lottie-react'));
const mainLineup1 = lazy(() => import('@/assets/webps/main/mainLineup1.webp'));
const mainLineup2 = lazy(() => import('@/assets/webps/main/mainLineup2.webp'));
const mainLineup3 = lazy(() => import('@/assets/webps/main/mainLineup3.webp'));
const OperatingHours = lazy(() => import('@/components/main/OperatingHours'));
const StageInfoContainer = lazy(() => import('@/components/main/StageInfoContainer'));

export default function MainPage() {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
  const [showLottie, setShowLottie] = useState(!isEnglish);
  const [showContent, setShowContent] = useState(false); // Title과 Desc
  const today = useMemo(() => new Date(), []);
  const formattedToday = useMemo(() => `${today.getMonth() + 1}.${today.getDate()}`, [today]);

  const dayOfWeek = useMemo(() => {
    return formattedToday === '9.25'
      ? 'wed'
      : formattedToday === '9.26'
        ? 'thu'
        : formattedToday === '9.27'
          ? 'fri'
          : '';
  }, [formattedToday]);

  const lineupImage = useMemo(() => {
    return {
      9.25: mainLineup1,
      9.26: mainLineup2,
      9.27: mainLineup3,
    }[formattedToday];
  }, [formattedToday]);

  const isLineupDate = useMemo(() => ['9.25', '9.26', '9.27'].includes(formattedToday), [formattedToday]);

  useEffect(() => {
    const lottieTimer = setTimeout(() => {
      if (!isEnglish) {
        setShowLottie(false);
      }
    }, 3000);
    const timeoutDuration = i18n.language === 'en' ? 600 : 860;

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, timeoutDuration);

    if (isLineupDate) {
      AOS.init({ duration: 1000 });
    }

    return () => {
      clearTimeout(lottieTimer);
      clearTimeout(contentTimer);
    };
  }, [isEnglish, i18n.language, isLineupDate]);

  useEffect(() => {
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

  return (
    <S.Container>
      <S.Wrapper>
        {showLottie && (
          <Suspense fallback={null}>
            <S.LottieWrapper>
              <Lottie animationData={mainStart} />
            </S.LottieWrapper>
          </Suspense>
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
          </S.LineupTitleWrapper>{' '}
          <Suspense fallback={null}>
            <S.LineupInfoWrapper data-aos="fade-up">
              {lineupImage && <S.LineupImg data-aos="fade-up" src={lineupImage} alt="오늘의 라인업" loading="lazy" />}
            </S.LineupInfoWrapper>
          </Suspense>
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
