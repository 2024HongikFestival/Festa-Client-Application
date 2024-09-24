import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import * as S from './FlameMainPage.Styled';
import { djData } from '@/constants/wdfMain/djData.js';
import { djLogos } from '@/constants/wdfMain/djLogo.js';
import FLAME from '@/assets/svgs/FLAME.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import speaker from '@/assets/webps/wdfMain/speaker.webp';
import BgVideo from '@/assets/videos/flameMainBackground.mp4';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FlameMainPage = () => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState('Day1');
  const [images, setImages] = useState([]);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지뷰 이벤트 발송
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Flame Main Page',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  const scrollPositionRef = useRef(0); // 스크롤 위치를 저장할 useRef
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    if (currentMonth === 9) {
      if (currentDay === 25) {
        setSelectedDay('Day1');
      } else if (currentDay === 26) {
        setSelectedDay('Day2');
      } else if (currentDay === 27) {
        setSelectedDay('Day3');
      }
    }
  }, []);

  useEffect(() => {
    const loadImagesAndLogos = async () => {
      setLoading(true);
      try {
        if (djData[selectedDay] && djLogos[selectedDay]) {
          const imagePromises = djData[selectedDay].map((dj) => dj.loadImage().then((module) => module.default));
          const logoPromises = djLogos[selectedDay].map(async (logo) => {
            const module = await logo.loadLogo();
            return {
              src: module.default || module,
              width: logo.width,
              height: logo.height,
            };
          });

          const loadedImages = await Promise.all(imagePromises);
          const loadedLogos = await Promise.all(logoPromises);

          setImages(loadedImages);
          setLogos(loadedLogos);
        }
      } catch (error) {
        console.error('Error loading images or logos', error);
      } finally {
        setLoading(false);
      }
    };

    loadImagesAndLogos();
  }, [selectedDay]);

  const handleDateChange = (day) => {
    scrollPositionRef.current = window.scrollY;
    setSelectedDay(day);
  };

  // 상태 변경 후 스크롤 복원
  useLayoutEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [selectedDay]);

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
                <S.WDFLogo data={FLAME} alt="flame" />
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
              <S.DateButton selected={selectedDay === 'Day1'} onClick={() => handleDateChange('Day1')}>
                DAY 1 <br /> {t('wdfMain.day1')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'Day2'} onClick={() => handleDateChange('Day2')}>
                DAY 2 <br /> {t('wdfMain.day2')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'Day3'} onClick={() => handleDateChange('Day3')}>
                DAY 3 <br /> {t('wdfMain.day3')}
              </S.DateButton>
            </S.BtnWrapper>
          </S.DateSection>
          <S.DayContent>
            <DateContent images={images} logos={logos} carouselItems={djData[selectedDay]} selectedDay={selectedDay} />
          </S.DayContent>
        </S.LineUpSection>
      </S.Flame>
    </>
  );
};

const DateContent = ({ images, logos, carouselItems }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartRef = useRef({ x: 0, y: 0 });
  const [isSwipingHorizontally, setIsSwipingHorizontally] = useState(false);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setIsSwipingHorizontally(true);
      e.preventDefault();
    } else {
      setIsSwipingHorizontally(false);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current.innerSlider.list;

    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: false }); // passive: false로 설정해 preventDefault 허용

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

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
          beforeChange={() => setIsTransitioning(true)}
          afterChange={(index) => {
            setCurrentSlide(index);
            setIsTransitioning(false);
          }}
        >
          {carouselItems.map((item, index) => {
            const logo = logos[index];

            return (
              <S.ImageContainer key={index}>
                <S.CarouselImage src={images[index]} alt={item.alt} loading="lazy" />
                <S.GradientOverlay />
                {logo && (
                  <S.LogoImage
                    src={logo.src}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    style={{ width: logo.width, height: logo.height }}
                  />
                )}
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
              disabled={isTransitioning}
            />
          ))}
        </S.NavigationBar>
      </S.CarouselContainer>
    </S.Content>
  );
};

export { DateContent };

DateContent.propTypes = {
  images: PropTypes.array.isRequired,
  logos: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired,
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
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
