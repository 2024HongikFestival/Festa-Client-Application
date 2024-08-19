// 와디페 메인 페이지
// url: /flame
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import FLAME from '@/assets/svgs/FLAME.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DJ from '@/assets/webps/wdfMain/DJ.webp';
import speaker from '@/assets/webps/wdfMain/speaker.webp';
import Insta from '@/assets/webps/wdfMain/insta.webp';

const FlameMainPage = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  return (
    <>
      <Flame>
        <TitleContainer>
          <Title>WOW DJ FESTIVAL</Title>
          <TitleWrapper>
            <SubTitle>the</SubTitle>
            <WDFLogo src={FLAME} alt="flame" />
          </TitleWrapper>
          <WDFImage src={speaker}></WDFImage>
        </TitleContainer>
        <WDFContainer>
          <WDFIntroduction>
            <IntroWrapper>
              <Introduction>ONE&nbsp;</Introduction>
              <Introduction1>AND&nbsp;</Introduction1>
              <Introduction> ONLY</Introduction>
            </IntroWrapper>
            <WDFName>와우 디제이 페스티벌</WDFName>
          </WDFIntroduction>
          <WDFDescription>
            현실의 무게와 무력감에 깨져가는 청춘을 깨우고 <br />
            가장 아름답게 빛나는 &apos;나&apos;를 마주할 시간입니다. <br />
            청춘의 불꽃이 함께하는 그 유일무이한 순간에 <br />
            여러분을 초대합니다.
          </WDFDescription>
        </WDFContainer>

        <DateSection>
          <DateButton selected={selectedDay === 'day1'} onClick={() => setSelectedDay('day1')}>
            DAY 1 <br /> 9.25 (수)
          </DateButton>
          <DateButton selected={selectedDay === 'day2'} onClick={() => setSelectedDay('day2')}>
            DAY 2 <br /> 9.26 (목)
          </DateButton>
          <DateButton selected={selectedDay === 'day3'} onClick={() => setSelectedDay('day3')}>
            DAY 3<br /> 9.27 (금)
          </DateButton>
        </DateSection>

        <DayContent>
          {selectedDay === 'day1' && <Day1Content />}
          {selectedDay === 'day2' && <Day2Content />}
          {selectedDay === 'day3' && <Day3Content />}
        </DayContent>
      </Flame>
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

const Day1Content = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  return (
    <Content>
      <CarouselContainer>
        <Slider {...carouselSettings} ref={sliderRef} afterChange={(index) => setCurrentSlide(index)}>
          {carouselItems.map((item, index) => (
            <ImageContainer key={index}>
              <CarouselImage src={item.src} alt={item.alt} />
              <Line />
              <DJWrapper>
                <DJName>디제이 이름</DJName>
                <DJInsta src={Insta} alt="insta" />
              </DJWrapper>
              <DJInfo>
                국내외 페스티벌 섭외 1순위. <br />
                아시아 시장 섭렵 <br />
                트랜드를 이끌며 신 한류 문화가 될 <br /> K-EDM장르의 선두 DJ
              </DJInfo>
            </ImageContainer>
          ))}
        </Slider>
        <NavigationBar>
          {carouselItems.map((_, index) => (
            <NavigationButton key={index} active={currentSlide === index} onClick={() => goToSlide(index)} />
          ))}
        </NavigationBar>
      </CarouselContainer>
    </Content>
  );
};

const Day2Content = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };
  return (
    <Content>
      <CarouselContainer>
        <Slider {...carouselSettings} ref={sliderRef} afterChange={(index) => setCurrentSlide(index)}>
          {carouselItems.map((item, index) => (
            <ImageContainer key={index}>
              <CarouselImage src={item.src} alt={item.alt} />
              <Line />
              <DJWrapper>
                <DJName>디제이 이름</DJName>
                <DJInsta src={Insta} alt="insta" />
              </DJWrapper>
              <DJInfo>
                국내외 페스티벌 섭외 1순위. <br />
                아시아 시장 섭렵 <br />
                트랜드를 이끌며 신 한류 문화가 될 <br /> K-EDM장르의 선두 DJ
              </DJInfo>
            </ImageContainer>
          ))}
        </Slider>
        <NavigationBar>
          {carouselItems.map((_, index) => (
            <NavigationButton key={index} active={currentSlide === index} onClick={() => goToSlide(index)} />
          ))}
        </NavigationBar>
      </CarouselContainer>
    </Content>
  );
};

const Day3Content = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };
  return (
    <Content>
      <CarouselContainer>
        <Slider {...carouselSettings} ref={sliderRef} afterChange={(index) => setCurrentSlide(index)}>
          {carouselItems.map((item, index) => (
            <ImageContainer key={index}>
              <CarouselImage src={item.src} alt={item.alt} />
              <Line />
              <DJWrapper>
                <DJName>디제이 이름</DJName>
                <DJInsta src={Insta} alt="insta" />
              </DJWrapper>
              <DJInfo>
                국내외 페스티벌 섭외 1순위. <br />
                아시아 시장 섭렵 <br />
                트랜드를 이끌며 신 한류 문화가 될 <br /> K-EDM장르의 선두 DJ
              </DJInfo>
            </ImageContainer>
          ))}
        </Slider>
        <NavigationBar>
          {carouselItems.map((_, index) => (
            <NavigationButton key={index} active={currentSlide === index} onClick={() => goToSlide(index)} />
          ))}
        </NavigationBar>
      </CarouselContainer>
    </Content>
  );
};

export { Day1Content, Day2Content, Day3Content };

export default FlameMainPage;

const Flame = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
`;

const Title = styled.span`
  ${(props) => props.theme.fontStyles.flame.subHead};
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 0px 0px 2rem rgba(255, 255, 255, 0.25);
  font-style: normal;
  font-style: italic;
  color: ${(props) => props.theme.colors.gray20};
  margin-top: 2rem;
`;

const WDFLogo = styled.img`
  width: 14.813rem;
  height: 4.688rem;
`;

const WDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.25rem;
`;

const SubTitle = styled.span`
  left: -1.3rem;
  text-shadow: 0px 0px 1rem rgba(255, 255, 255, 0.25);
  padding-top: 1rem;
  position: absolute;
  ${(props) => props.theme.fontStyles.flame.subHead};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray20};
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WDFIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 11.313rem;
`;

const WDFImage = styled.img`
  display: flex;
  width: 16.125rem;
  height: 22.563rem;
`;

const Introduction = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 0.875rem;
  font-weight: 700;
  background: linear-gradient(281.55deg, #fcf661 1.09%, #ff0e2b 38.8%, #df2020 62.66%, #bc1700 96.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.25);
  color: transparent;
  text-align: center;
`;
const Introduction1 = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 0.875rem;
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray40};
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.25);
`;

const WDFName = styled.span`
  ${(props) => props.theme.fontStyles.flame.headline6};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.25rem;
  text-align: center;
  font-weight: 900;
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.25);
`;

const WDFDescription = styled.span`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 0.875rem;
  margin-bottom: 3.375rem;
`;

const DateSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
`;

const DateButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => (props.selected ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  letter-spacing: -0.001rem;
  background: ${(props) =>
    props.selected ? 'linear-gradient(103.64deg, #df2020 35.72%, #ffb800 88.25%)' : 'transparent'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => (props.selected ? 'transparent' : props.theme.colors.gray80)};
  background-clip: text;

  &:hover {
    background: linear-gradient(103.64deg, #df2020 35.72%, #ffb800 88.25%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

const DayContent = styled.div`
  margin-top: 1rem;
  height: 42.938rem;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 23.438rem;
  max-width: 48rem;
  height: 27.313rem;
`;

const CarouselImage = styled.img`
  width: 12.875rem;
  height: 12.75rem;
  object-fit: contain;
  margin-top: 1.5rem;
`;

const ImageContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  width: 17.25rem !important;
  height: 25.813rem;

  border: 0.063rem solid;
  border-image-source: linear-gradient(180deg, #df2121 0%, #cdb3b3 70%, #515356 100%);
  border-image-slice: 1;
  background: var(--UI-Background, #010304);
  margin: 0 0.5rem;
  box-sizing: border-box;
  position: relative;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const NavigationBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.375rem;
`;

const NavigationButton = styled.button`
  background-color: ${(props) => (props.active ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  border: none;
  width: ${(props) => (props.active ? '1.5rem' : '1rem')};
  height: 0.25rem;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 23.438rem;
  max-width: 48rem;
  height: 27.313rem;
  margin-top: 1.75rem;
`;

const Line = styled.div`
  width: 15.25rem;
  margin: 1rem 0;
  box-sizing: border-box;
  border-bottom: 0.063rem solid;
  border-image-source: linear-gradient(90deg, #ffb801 0%, #df2020 100%);
  border-image-slice: 1;
`;

const DJName = styled.span`
  ${(props) => props.theme.fontStyles.basic.headline5};
  width: 13.25rem;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  font-size: 1.25rem;
`;

const DJInfo = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray50};
  font-size: 1rem;
  width: 15.25rem;
`;

const DJWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 17.25rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
`;

const DJInsta = styled.img`
  display: flex !important;
  justify-content: flex-end;
  width: 2.4rem;
  height: 2.4rem;
`;
