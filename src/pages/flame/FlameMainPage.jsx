// 와디페 메인 페이지
// url: /flame
import Header from '@/components/layouts/Header';
import React, { useState } from 'react';
import styled from 'styled-components';
import FLAME from '../../assets/svgs/FLAME.svg';

const FlameMainPage = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  return (
    <>
      <Header />
      <Flame>
        <Title>WOW DJ FESTIVAL</Title>
        <WDFLogo src={FLAME} alt="flame" />
        <WDFImage></WDFImage>
        <WDFContainer>
          <WDFIntroduction>ONE AND ONLY</WDFIntroduction>
          <WDFIntroduction>와우 디제이 페스티벌</WDFIntroduction>
          <WDFDescription>
            현실의 무게와 무력감에 깨져가는 청춘을 깨우고 <br />
            가장 아름답게 빛나는 &apos;나&apos;를 마주할 시간입니다. <br />
            청춘의 불꽃이 함께하는 그 유일무이한 순간에 <br />
            여러분을 초대합니다.
          </WDFDescription>
        </WDFContainer>

        <DateSection>
          <DateButton onClick={() => setSelectedDay('day1')}>
            Day 1 <br /> 9.25 (수)
          </DateButton>
          <DateButton onClick={() => setSelectedDay('day2')}>
            Day 2 <br /> 9.26 (목)
          </DateButton>
          <DateButton onClick={() => setSelectedDay('day3')}>
            Day 3<br /> 9.27 (금)
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
  align-items: flex-start;
  justify-content: center;
`;

const WDFImage = styled.img`
  display: flex;
  width: 16.5rem;
  height: 20.313rem;
  margin-bottom: 1.25rem;
`;
const WDFIntroduction = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

const WDFDescription = styled.span`
  margin-top: 1.25rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

const DateSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  margin-top: 4.938rem;
`;

const DateButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    font-weight: 600;
  }
`;

const DayContent = styled.div`
  margin-top: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;
