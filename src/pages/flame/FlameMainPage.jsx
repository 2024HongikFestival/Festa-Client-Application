import React, { useState, useRef, useEffect } from 'react';
import * as S from './FlameMainPage.Styled';
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';
import FLAME from '@/assets/svgs/FLAME.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

import speaker from '@/assets/webps/wdfMain/speaker.webp';
import BgVideo from '@/assets/videos/flameMainBackground.mp4';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const djData = {
  Day1: [
    { src: DJ1, alt: 'DJ 1', name: 'RUI' },
    { src: DJ2, alt: 'DJ 2', name: 'FINÈ' },
    { src: DJ3, alt: 'DJ 3', name: 'rightback' },
    { src: DJ4, alt: 'DJ 4', name: 'CHANXER' },
    { src: DJ5, alt: 'DJ 5', name: 'TEZZ' },
  ],
  Day2: [
    { src: DJ6, alt: 'DJ 6', name: 'YongSul' },
    { src: DJ7, alt: 'DJ 7', name: 'CHOI' },
    { src: DJ8, alt: 'DJ 8', name: 'LOZIC' },
    { src: DJ9, alt: 'DJ 9', name: 'VANDAL ROCK' },
    { src: DJ10, alt: 'DJ 10', name: 'ASTER' },
  ],
  Day3: [
    { src: DJ11, alt: 'DJ 11', name: 'NAP ON CLOUD' },
    { src: DJ12, alt: 'DJ 12', name: 'SIGMA' },
    { src: DJ13, alt: 'DJ 13', name: 'WOOXI' },
    { src: DJ14, alt: 'DJ 14', name: 'JOODY' },
    { src: DJ15, alt: 'DJ 15', name: 'JUNCOCO' },
  ],
};
const djLogos = {
  Day1: [
    { src: DJ1Logo, width: '11.9rem', height: '4.9rem' },
    { src: DJ2Logo, width: '11.5rem', height: '5.3rem' },
    { src: DJ3Logo, width: '11.5rem', height: '9.8rem' },
    { src: DJ4Logo, width: '14.7rem', height: '3.2rem' },
    { src: DJ5Logo, width: '14.6rem', height: '5.4rem' },
  ],
  Day2: [
    { src: DJ6Logo, width: '12.5rem', height: '3.5rem' },
    { src: DJ7Logo, width: '14.4rem', height: '4.7rem' },
    { src: DJ8Logo, width: '12.3rem', height: '2.3rem' },
    { src: DJ9Logo, width: '23.9rem', height: '1.9rem' },
    { src: DJ10Logo, width: '11.5rem', height: '4.1rem' },
  ],
  Day3: [
    { src: DJ11Logo, width: '21.8rem', height: '2rem' },
    { src: DJ12Logo, width: '12.8rem', height: '2.5rem' },
    { src: DJ13Logo, width: '12.8rem', height: '3.7rem' },
    { src: DJ14Logo, width: '11.2rem', height: '5.3rem' },
    { src: DJ15Logo, width: '14.3rem', height: '3.6rem' },
  ],
};

const FlameMainPage = () => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState('Day1');

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());
  }, []);

  return (
    <>
      <S.Flame>
        <S.VideoContainer>
          <S.BackGroundVideo autoPlay loop muted playsInline>
            <source src={BgVideo} type="video/mp4" />
          </S.BackGroundVideo>
          <S.TitleContainer>
            <S.LogoContainer>
              <S.Title>WOW DJ FESTIVAL</S.Title>
              <S.TitleWrapper>
                <S.SubTitle>the</S.SubTitle>
                <S.WDFLogo src={FLAME} alt="flame" />
              </S.TitleWrapper>
            </S.LogoContainer>
            <S.WDFImage src={speaker}></S.WDFImage>
          </S.TitleContainer>
          <S.WDFContainer>
            <S.WDFIntroduction>
              <S.IntroWrapper>
                <S.Introduction>ONE&nbsp;</S.Introduction>
                <S.Introduction1>AND&nbsp;</S.Introduction1>
                <S.Introduction> ONLY</S.Introduction>
              </S.IntroWrapper>
              <S.WDFName>{t('wdfMain.wdfName')}</S.WDFName>
            </S.WDFIntroduction>
            <S.WDFDescription>
              {t('wdfMain.wdfDescription1')}
              <br />
              {t('wdfMain.wdfDescription2')}
              <br />
              {t('wdfMain.wdfDescription3')}
              <br />
              {t('wdfMain.wdfDescription4')}
            </S.WDFDescription>
          </S.WDFContainer>
        </S.VideoContainer>
        <S.LineUpSection>
          <S.DateSection>
            <S.BtnWrapper>
              <S.DateButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('day1')}>
                DAY 1 <br /> {t('wdfMain.day1')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('day2')}>
                DAY 2 <br /> {t('wdfMain.day2')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('day3')}>
                DAY 3<br /> {t('wdfMain.day3')}
              </S.DateButton>
            </S.BtnWrapper>
          </S.DateSection>
          <S.DayContent>
            <DateContent carouselItems={djData[selectedDay]} selectedDay={selectedDay} />
          </S.DayContent>
        </S.LineUpSection>
      </S.Flame>
    </>
  );
};

const DateContent = ({ carouselItems, selectedDay }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  React.useEffect(() => {
    if (sliderRef.current) {
      setIsTransitioning(true);
      sliderRef.current.slickGoTo(0, false); // false를 사용하여 애니메이션 없이 이동
      setCurrentSlide(0);
      setIsTransitioning(false);
    }
  }, [selectedDay]);
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <S.Content>
      <S.CarouselContainer>
        <Slider
          {...carouselSettings}
          ref={sliderRef}
          beforeChange={() => setIsTransitioning(true)} // 슬라이드 전환 시작
          afterChange={(index) => {
            setCurrentSlide(index);
            setIsTransitioning(false); // 전환 종료
          }}
        >
          {carouselItems.map((item, index) => {
            const logo = djLogos[selectedDay][index];

            return (
              <S.ImageContainer key={index}>
                <S.CarouselImage src={item.src} alt={item.alt} loading="lazy" />
                <S.GradientOverlay />
                <S.LogoImage src={logo.src} alt={`${item.name} logo`} style={{ width: logo.width }} loading="lazy" />
                <S.Line />
                <S.DJName>{item.name}</S.DJName>
              </S.ImageContainer>
            );
          })}
        </Slider>
        <S.NavigationBar>
          {carouselItems.map((_, index) => (
            <S.NavigationButton
              key={index}
              $active={currentSlide === index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning} // Disable clicking during transition
            />
          ))}
        </S.NavigationBar>
      </S.CarouselContainer>
    </S.Content>
  );
};

export { DateContent };

DateContent.propTypes = {
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedDay: PropTypes.string.isRequired,
};

export default FlameMainPage;

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  centerMode: true,
  variableWidth: true,
};
