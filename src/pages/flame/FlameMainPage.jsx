// 와디페 메인 페이지
// url: /flame
import Header from '@/components/layouts/Header';
import React, { useState } from 'react';
import styled from 'styled-components';
import FLAME from '../../assets/svgs/FLAME.svg';
import speaker from '../../assets/speaker.webp';

const FlameMainPage = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  return (
    <>
      <Header />
      <Flame>
        <Title>WOW DJ FESTIVAL</Title>
        <WDFLogo src={FLAME} alt="flame" />
        {/* <WDFImage src={speaker}></WDFImage> */}
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
          <DateButton onClick={() => setSelectedDay('day1')}>
            DAY 1 <br /> 9.25 (수)
          </DateButton>
          <DateButton onClick={() => setSelectedDay('day2')}>
            DAY 2 <br /> 9.26 (목)
          </DateButton>
          <DateButton onClick={() => setSelectedDay('day3')}>
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
const Day1Content = () => (
  <Content>
    <h2>Day 1 Events</h2>
    <p>Details for Day 1...</p>
  </Content>
);

const Day2Content = () => (
  <Content>
    <h2>Day 2 Events</h2>
    <p>Details for Day 2...</p>
  </Content>
);

const Day3Content = () => (
  <Content>
    <h2>Day 3 Events</h2>
    <p>Details for Day 3...</p>
  </Content>
);

export default FlameMainPage;

const Flame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.black};
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2.188rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.gray20};
`;

const WDFLogo = styled.img``;

const WDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
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
  padding-bottom: 3.25rem;
`;

const DateSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 2rem;
  margin-top: 1.75rem;
`;

const DateButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.gray80};
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  letter-spacing: -0.001rem;

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
`;

const Content = styled.div`
  padding: 1rem;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
