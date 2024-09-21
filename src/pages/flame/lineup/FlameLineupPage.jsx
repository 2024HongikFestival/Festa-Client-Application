import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import * as S from './styles'; // 스타일 파일에서 스타일 컴포넌트를 가져옴
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';

import DJ1 from '@/assets/webps/wdfLineup/rui.webp';
import DJ2 from '@/assets/webps/wdfLineup/fine.webp';
import DJ3 from '@/assets/webps/wdfLineup/rightback.webp';
import DJ4 from '@/assets/webps/wdfLineup/chanxer.webp';
import DJ5 from '@/assets/webps/wdfLineup/tezz.webp';
import DJ6 from '@/assets/webps/wdfLineup/yongsul.webp';
import DJ7 from '@/assets/webps/wdfLineup/choi_s.webp';
import DJ8 from '@/assets/webps/wdfLineup/lozic.webp';
import DJ9 from '@/assets/webps/wdfLineup/vandal_rock.webp';
import DJ10 from '@/assets/webps/wdfLineup/aster_z.webp';
import DJ11 from '@/assets/webps/wdfLineup/nap_on_cloud.webp';
import DJ12 from '@/assets/webps/wdfLineup/sigma_z.webp';
import DJ13 from '@/assets/webps/wdfLineup/wooxi.webp';
import DJ14 from '@/assets/webps/wdfLineup/joody.webp';
import DJ15 from '@/assets/webps/wdfLineup/juncoco.webp';

import DJ1Logo from '@/assets/webps/wdfLineup/ruiLogo.webp';
import DJ2Logo from '@/assets/webps/wdfLineup/fineLogo.webp';
import DJ3Logo from '@/assets/webps/wdfLineup/rightbackLogo.webp';
import DJ4Logo from '@/assets/webps/wdfLineup/chanxerLogo.webp';
import DJ5Logo from '@/assets/webps/wdfLineup/tezzLogo.webp';
import DJ6Logo from '@/assets/webps/wdfLineup/yongsulLogo.webp';
import DJ7Logo from '@/assets/webps/wdfLineup/choiLogo.webp';
import DJ8Logo from '@/assets/webps/wdfLineup/lozicLogo.webp';
import DJ9Logo from '@/assets/webps/wdfLineup/vandalrockLogo.webp';
import DJ10Logo from '@/assets/webps/wdfLineup/asterLogo.webp';
import DJ11Logo from '@/assets/webps/wdfLineup/naponcloudLogo.webp';
import DJ12Logo from '@/assets/webps/wdfLineup/sigmaLogo.webp';
import DJ13Logo from '@/assets/webps/wdfLineup/wooxiLogo.webp';
import DJ14Logo from '@/assets/webps/wdfLineup/joodyLogo.webp';
import DJ15Logo from '@/assets/webps/wdfLineup/juncocoLogo.webp';
import { useTranslation } from 'react-i18next';

const djData = {
  day1: [
    { src: DJ1, alt: 'DJ 1', name: 'RUI', width: '16rem' },
    { src: DJ2, alt: 'DJ 2', name: 'FINÉ', width: '16rem' },
    { src: DJ3, alt: 'DJ 3', name: 'rightback', width: '18.6rem' },
    { src: DJ4, alt: 'DJ 4', name: 'CHANXER', width: '22rem' },
    { src: DJ5, alt: 'DJ 5', name: 'TEZZ', width: '23rem' },
  ],
  day2: [
    { src: DJ6, alt: 'DJ 6', name: 'YongSul', width: '23.8rem' },
    { src: DJ7, alt: 'DJ 7', name: 'CHOI', width: '20.4rem' },
    { src: DJ8, alt: 'DJ 8', name: 'LOZIC', width: '22.8rem' },
    { src: DJ9, alt: 'DJ 9', name: 'VANDAL ROCK', width: '22.8rem' },
    { src: DJ10, alt: 'DJ 10', name: 'ASTER', width: '29.7rem' },
  ],
  day3: [
    { src: DJ11, alt: 'DJ 11', name: 'NAP ON CLOUD', width: '24rem' },
    { src: DJ12, alt: 'DJ 12', name: 'SIGMA', width: '21.8rem' },
    { src: DJ13, alt: 'DJ 13', name: 'WOOXI', width: '26rem' },
    { src: DJ14, alt: 'DJ 14', name: 'JOODY', width: '21.2rem' },
    { src: DJ15, alt: 'DJ 15', name: 'JUNCOCO', width: '22.4rem' },
  ],
};
const djLogos = {
  day1: [
    { src: DJ1Logo, width: '11.9rem', height: '4.9rem' },
    { src: DJ2Logo, width: '11.5rem', height: '5.3rem' },
    { src: DJ3Logo, width: '11.5rem', height: '9.8rem' },
    { src: DJ4Logo, width: '14.7rem', height: '3.2rem' },
    { src: DJ5Logo, width: '14.6rem', height: '5.4rem' },
  ],
  day2: [
    { src: DJ6Logo, width: '12.5rem', height: '3.5rem' },
    { src: DJ7Logo, width: '14.4rem', height: '4.7rem' },
    { src: DJ8Logo, width: '12.3rem', height: '2.3rem' },
    { src: DJ9Logo, width: '23.9rem', height: '1.9rem' },
    { src: DJ10Logo, width: '11.5rem', height: '4.1rem' },
  ],
  day3: [
    { src: DJ11Logo, width: '21.8rem', height: '2rem' },
    { src: DJ12Logo, width: '12.8rem', height: '2.5rem' },
    { src: DJ13Logo, width: '12.8rem', height: '3.7rem' },
    { src: DJ14Logo, width: '11.2rem', height: '5.3rem' },
    { src: DJ15Logo, width: '14.3rem', height: '3.6rem' },
  ],
};

const FlameLineupPage = () => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState('Day1');

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedDay]);

  const dayKey = selectedDay.toLowerCase();

  // selectedDay에 따른 데이터를 memoization으로 최적화
  const dayDjData = useMemo(() => djData[dayKey], [dayKey]);
  const dayDjLogos = useMemo(() => djLogos[dayKey], [dayKey]);

  const renderCards = () =>
    dayDjData.map((event, index) => (
      <S.Card key={event.name} data-aos={index === 0 ? '' : 'fade-up'}>
        <S.CardImageContainer>
          <S.DjImage src={event.src} alt={event.alt} style={{ width: dayDjData[index].width }} />
          <S.GradientOverlay />
          <S.LogoImage
            src={dayDjLogos[index].src}
            alt={`${event.name} logo`}
            style={{
              width: dayDjLogos[index].width,
              height: dayDjLogos[index].height,
            }}
          />
        </S.CardImageContainer>
        <S.CardDescriptionContainer>
          <S.DjProfile>
            <S.Name>{event.name}</S.Name>
          </S.DjProfile>
        </S.CardDescriptionContainer>
      </S.Card>
    ));

  return (
    <>
      <S.Container>
        <S.Title>{t('flameLineupPage.title')}</S.Title>
        <S.DayContainer>
          <S.DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
            <span>DAY 1</span>
            <span>{t('flameLineupPage.day1')}</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
            <span>DAY 2</span>
            <span>{t('flameLineupPage.day2')}</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
            <span>DAY 3</span>
            <span>{t('flameLineupPage.day3')}</span>
          </S.DayButton>
        </S.DayContainer>
        <S.CardContainer>{renderCards()}</S.CardContainer>
      </S.Container>
    </>
  );
};

export default FlameLineupPage;
