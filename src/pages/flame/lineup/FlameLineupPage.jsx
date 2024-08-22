// 와디페 라인업
// url: /flame/lineup

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import InstalogoImage from '@/assets/webps/wdfLineup/instagramLogo.webp';
import testImage from '@/assets/webps/wdfLineup/test.webp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;
const Title = styled.h2`
  align-self: stretch;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  ${(props) => props.theme.fontStyles.flame.headline3};
`;
const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.8rem;
  align-items: center;
  align-self: stretch;
`;
const DayButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? 'transparent' : props.theme.colors.gray80)};
  cursor: pointer;
  background: ${(props) => (props.selected ? 'linear-gradient(104deg, #df2020 35.72%, #ffb800 88.25%)' : 'none')};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => (props.selected ? 'transparent' : 'inherit')};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  padding: 0;

  span {
    display: block; /* 텍스트를 줄바꿈합니다 */
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.5rem;
  height: 37.4rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  border: 0.1rem solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%) 1;
  gap: 1.6rem;
`;
const CardImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29.7rem;
  margin-top: 1.8rem;
  border-bottom: 0.1rem solid transparent;
  border-image: linear-gradient(90deg, #ffb801 0%, #df2020 100%) 1;
`;
const DjImage = styled.img`
  width: 20.1rem;
  height: auto;
`;
const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 29.7rem;
  height: 8.9rem;
  background: linear-gradient(0deg, #010304 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none; /* 사용자 상호작용을 차단 */
`;
const CardDescriptionContainer = styled.div`
  display: flex;
  width: 29.7rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
`;
const DjProfile = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.headline5};
`;
const InstaLogo = styled.img`
  width: 3.8rem;
  height: 3.8rem;
`;
const Description = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

const FlameLineupPage = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');

  useEffect(() => {
    // 현재 날짜 가져오기
    const today = new Date();
    const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1 더함)
    const day = today.getDate(); // 일

    // 날짜에 따른 Day 선택
    if (month === 9) {
      if (day === 25) {
        setSelectedDay('Day1');
      } else if (day === 26) {
        setSelectedDay('Day2');
      } else if (day === 27) {
        setSelectedDay('Day3');
      } else {
        setSelectedDay('Day1'); // 9월 25-27일이 아닌 경우 Day1으로 설정
      }
    } else {
      setSelectedDay('Day1'); // 9월이 아닌 경우 Day1으로 설정
    }

    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedDay]);

  const dummyData = {
    Day1: [
      { id: 1, name: '디제이 이름 1', time: '10:00 AM', description: '디제이 1 소개글' },
      { id: 2, name: '디제이 이름 2', time: '11:00 AM', description: '디제이 2 소개글' },
      { id: 3, name: '디제이 이름 3', time: '12:00 PM', description: '디제이 3 소개글' },
      { id: 4, name: '디제이 이름 4', time: '1:00 PM', description: '디제이 4 소개글' },
      { id: 5, name: '디제이 이름 5', time: '2:00 PM', description: '디제이 5 소개글' },
    ],
    Day2: [
      { id: 6, name: '디제이 이름 6', time: '10:00 AM', description: '디제이 6 소개글' },
      { id: 7, name: '디제이 이름 7', time: '11:00 AM', description: '디제이 7 소개글' },
      { id: 8, name: '디제이 이름 8', time: '12:00 PM', description: '디제이 8 소개글' },
      { id: 9, name: '디제이 이름 9', time: '1:00 PM', description: '디제이 9 소개글' },
      { id: 10, name: '디제이 이름 10', time: '2:00 PM', description: '디제이 10 소개글' },
    ],
    Day3: [
      { id: 11, name: '디제이 이름 11', time: '10:00 AM', description: '디제이 11 소개글' },
      { id: 12, name: '디제이 이름 12', time: '11:00 AM', description: '디제이 12 소개글' },
      { id: 13, name: '디제이 이름 13', time: '12:00 PM', description: '디제이 13 소개글' },
      { id: 14, name: '디제이 이름 14', time: '1:00 PM', description: '디제이 14 소개글' },
      { id: 15, name: '디제이 이름 15', time: '2:00 PM', description: '디제이 15 소개글' },
    ],
  };

  const renderCards = () => {
    return dummyData[selectedDay].map((event) => (
      <Card key={event.id} data-aos="fade-up">
        <CardImageContainer>
          <DjImage src={testImage} alt="testImage" />
          <GradientOverlay />
        </CardImageContainer>
        <CardDescriptionContainer>
          <DjProfile>
            <Name>{event.name}</Name>
            <InstaLogo src={InstalogoImage} alt="instagram link" />
          </DjProfile>
          <Description>{event.description}</Description>
        </CardDescriptionContainer>
      </Card>
    ));
  };

  return (
    <>
      <Container>
        <Title>라인업</Title>
        <DayContainer>
          <DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
            <span>DAY 1</span>
            <span>9.25 (수)</span>
          </DayButton>
          <DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
            <span>DAY 2</span>
            <span>9.26 (목)</span>
          </DayButton>
          <DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
            <span>DAY 3</span>
            <span>9.27 (금)</span>
          </DayButton>
        </DayContainer>
        <CardContainer>{renderCards()}</CardContainer>
      </Container>
    </>
  );
};

export default FlameLineupPage;
