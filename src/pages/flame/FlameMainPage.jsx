import React, { useState, useRef, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

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

  // 이미지와 로고 불러오기 위한 useEffect
  useEffect(() => {
    const loadImagesAndLogos = async () => {
      setLoading(true); // 데이터 로딩 시작
      try {
        if (djData[selectedDay] && djLogos[selectedDay]) {
          const imagePromises = djData[selectedDay].map((dj) => dj.loadImage().then((module) => module.default));
          const logoPromises = djLogos[selectedDay].map(async (logo) => {
            const module = await logo.loadLogo();
            return {
              src: module.default || module, // 이미지 주소
              width: logo.width, // 너비
              height: logo.height, // 높이
            };
          });

          const loadedImages = await Promise.all(imagePromises);
          const loadedLogos = await Promise.all(logoPromises);

          setImages(loadedImages); // 불러온 이미지 설정
          setLogos(loadedLogos); // 불러온 로고 설정
        }
      } catch (error) {
        console.error('Error loading images or logos', error);
      } finally {
        setLoading(false); // 데이터 로딩 끝
      }
    };

    loadImagesAndLogos(); // 이미지와 로고 불러오기
  }, [selectedDay]); // selectedDay 변경 시마다 실행

  const handleDateChange = (day) => {
    setSelectedDay(day);
  };

  if (loading) {
    return <></>;
  }

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

const DateContent = ({ images, logos, carouselItems, selectedDay }) => {
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
            // logos에서 src, width, height를 가져와서 이미지로 사용
            const logo = logos[index]; // 해당 index에 맞는 logo 정보 가져오기

            return (
              <S.ImageContainer key={index}>
                <S.CarouselImage src={images[index]} alt={item.alt} loading="lazy" />
                <S.GradientOverlay />
                {logo && ( // logo가 존재하는 경우에만 로고 이미지를 렌더링
                  <S.LogoImage
                    src={logo.src} // logo에서 src 가져오기
                    alt={`${item.name} logo`}
                    loading="lazy"
                    style={{ width: logo.width, height: logo.height }} // 너비와 높이 적용
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
