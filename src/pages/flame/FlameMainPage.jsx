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
  font-size: 1.6rem;
  font-weight: 400;
  text-shadow: 0px 0px 3.2rem rgba(255, 255, 255, 0.25);
  font-style: normal;
  font-style: italic;
  color: ${(props) => props.theme.colors.gray20};
  margin-top: 3.2rem;
`;

const WDFLogo = styled.img`
  width: 23.7rem;
  height: 7.5rem;
`;

const WDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 5.2rem;
`;

const SubTitle = styled.span`
  left: -2.08rem;
  text-shadow: 0px 0px 1.6rem rgba(255, 255, 255, 0.25);
  padding-top: 1.6rem;
  position: absolute;
  ${(props) => props.theme.fontStyles.flame.subHead};
  font-size: 1.4rem;
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
  gap: 0.4rem;
  width: 18.1rem;
`;

const WDFImage = styled.img`
  display: flex;
  width: 25.8rem;
  height: 36.1rem;
`;

const Introduction = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(281.55deg, #fcf661 1.09%, #ff0e2b 38.8%, #df2020 62.66%, #bc1700 96.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
  color: transparent;
  text-align: center;
`;

const Introduction1 = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray40};
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
`;

const WDFName = styled.span`
  ${(props) => props.theme.fontStyles.flame.headline6};
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
`;

const WDFDescription = styled.span`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 1.4rem;
  margin-bottom: 5.4rem;
`;

const DateSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  margin-top: 3.2rem;
`;

const DateButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => (props.selected ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  font-size: 1.8rem;
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
  margin-top: 1.6rem;
  height: 68.7rem;
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
  min-width: 37.5rem; /* 23.438rem에서 1.6배 */
  max-width: 76.8rem; /* 48rem에서 1.6배 */
  height: 43.7rem; /* 27.313rem에서 1.6배 */
`;

const CarouselImage = styled.img`
  width: 20.6rem; /* 12.875rem에서 1.6배 */
  height: 20.4rem; /* 12.75rem에서 1.6배 */
  object-fit: contain;
  margin-top: 2.4rem; /* 1.5rem에서 1.6배 */
`;

const ImageContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  width: 27.6rem !important; /* 17.25rem에서 1.6배 */
  height: 41.3rem; /* 25.813rem에서 1.6배 */
  border: 0.1rem solid; /* 0.063rem에서 1.6배 */
  border-image-source: linear-gradient(180deg, #df2121 0%, #cdb3b3 70%, #515356 100%);
  border-image-slice: 1;
  background: var(--UI-Background, #010304);
  margin: 0 0.8rem; /* 0.5rem에서 1.6배 */
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
  gap: 0.6rem; /* 0.375rem에서 1.6배 */
`;

const NavigationButton = styled.button`
  background-color: ${(props) => (props.active ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  border: none;
  width: ${(props) => (props.active ? '2.4rem' : '1.6rem')}; /* 1.5rem과 1rem에서 1.6배 */
  height: 0.4rem; /* 0.25rem에서 1.6배 */
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 37.5rem; /* 23.438rem에서 1.6배 */
  max-width: 76.8rem; /* 48rem에서 1.6배 */
  height: 43.7rem; /* 27.313rem에서 1.6배 */
  margin-top: 2.8rem; /* 1.75rem에서 1.6배 */
`;

const Line = styled.div`
  width: 24.4rem; /* 15.25rem에서 1.6배 */
  margin: 1.6rem 0; /* 1rem에서 1.6배 */
  box-sizing: border-box;
  border-bottom: 0.1rem solid; /* 0.063rem에서 1.6배 */
  border-image-source: linear-gradient(90deg, #ffb801 0%, #df2020 100%);
  border-image-slice: 1;
`;

const DJName = styled.span`
  ${(props) => props.theme.fontStyles.basic.headline5};
  width: 21.2rem; /* 13.25rem에서 1.6배 */
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  font-size: 2rem; /* 1.25rem에서 1.6배 */
`;

const DJInfo = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray50};
  font-size: 1.6rem; /* 1rem에서 1.6배 */
  width: 24.4rem; /* 15.25rem에서 1.6배 */
`;

const DJWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 27.6rem; /* 17.25rem에서 1.6배 */
  padding-left: 1.6rem; /* 1rem에서 1.6배 */
  padding-right: 0.8rem; /* 0.5rem에서 1.6배 */
`;

const DJInsta = styled.img`
  display: flex !important;
  justify-content: flex-end;
  width: 3.84rem; /* 2.4rem에서 1.6배 */
  height: 3.84rem; /* 2.4rem에서 1.6배 */
`;
