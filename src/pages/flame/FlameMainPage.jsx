// 와디페 메인 페이지
// url: /flame
import React, { useState, useRef } from 'react';
import * as S from './FlameMainPage.Styled';
import FLAME from '@/assets/svgs/FLAME.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DJ from '@/assets/webps/wdfMain/DJ.webp';
import speaker from '@/assets/webps/wdfMain/speaker.webp';
import Insta from '@/assets/webps/wdfMain/insta.webp';
import BgVideo from '@/assets/videos/flameMainBackground.mp4';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FlameMainPage = () => {
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState('day1');

  return (
    <>
      <S.Flame>
        <S.VideoContainer>
          <S.BackGroundVideo autoPlay loop muted>
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
              <S.DateButton selected={selectedDay === 'day1'} onClick={() => setSelectedDay('day1')}>
                DAY 1 <br /> {t('wdfMain.day1')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'day2'} onClick={() => setSelectedDay('day2')}>
                DAY 2 <br /> {t('wdfMain.day2')}
              </S.DateButton>
              <S.DateButton selected={selectedDay === 'day3'} onClick={() => setSelectedDay('day3')}>
                DAY 3<br /> {t('wdfMain.day3')}
              </S.DateButton>
            </S.BtnWrapper>
          </S.DateSection>

          <S.DayContent>
            {selectedDay === 'day1' && <DateContent carouselItems={carouselItems} />}
            {selectedDay === 'day2' && <DateContent carouselItems={carouselItems} />}
            {selectedDay === 'day3' && <DateContent carouselItems={carouselItems} />}
          </S.DayContent>
        </S.LineUpSection>
      </S.Flame>
    </>
  );
};

const carouselItems = [
  { src: DJ, alt: 'Image 1' },
  { src: DJ, alt: 'Image 2' },
  { src: DJ, alt: 'Image 3' },
  { src: DJ, alt: 'Image 4' },
  { src: DJ, alt: 'Image 5' },
  { src: DJ, alt: 'Image 6' },
];

const DateContent = ({ carouselItems }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  return (
    <S.Content>
      <S.CarouselContainer>
        <Slider {...carouselSettings} ref={sliderRef} afterChange={(index) => setCurrentSlide(index)}>
          {carouselItems.map((item, index) => (
            <S.ImageContainer key={index}>
              <S.CarouselImage src={item.src} alt={item.alt} />
              <S.Line />
              <S.DJContainer>
                <S.DJWrapper>
                  <S.DJName>디제이 이름</S.DJName>
                  <S.DJInsta src={Insta} alt="insta" />
                </S.DJWrapper>
                <S.DJInfo>
                  국내외 페스티벌 섭외 1순위. <br />
                  아시아 시장 섭렵 <br />
                  트랜드를 이끌며 신 한류 문화가 될 <br /> K-EDM장르의 선두 DJ
                </S.DJInfo>
              </S.DJContainer>
            </S.ImageContainer>
          ))}
        </Slider>
        <S.NavigationBar>
          {carouselItems.map((_, index) => (
            <S.NavigationButton key={index} $active={currentSlide === index} onClick={() => goToSlide(index)} />
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
