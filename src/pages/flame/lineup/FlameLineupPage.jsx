// 와디페 라인업
// url: /flame/lineup

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import React, { useState } from 'react';
import styled from 'styled-components';

import InstalogoImage from '@/static/image/flame/lineup/instagramLogo.svg';
import testImage from '@/static/image/flame/lineup/test.png';

const Container = styled.div`
  display: flex;
  width: 100%;
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
  align-items: center;
  gap: 48px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29.7rem;
`;
const DjImage = styled.img``;
const CardDescriptionContainer = styled.div`
  display: flex;
  width: 29.9rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;
const DjProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18.7rem;
  align-self: stretch;
`;
const Name = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.headline5};
  white-space: nowrap; /* 줄바꿈 방지 */
`;
const InstagramLink = styled.a`
  width: 2rem;
  height: 2rem;
`;
const InstaLogo = styled.img``;
const Description = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

const FlameLineupPage = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');

  const dummyData = {
    Day1: [
      { id: 1, name: '디제이 이름', time: '10:00 AM', description: '디제이 소개글' },
      { id: 2, name: '디제이 이름', time: '11:30 AM', description: '디제이 소개글' },
      { id: 3, name: '디제이 이름', time: '1:00 PM', description: '디제이 소개글' },
    ],
    Day2: [
      { id: 4, name: '디제이 이름', time: '10:00 AM', description: '디제이 소개글' },
      { id: 5, name: '디제이 이름', time: '11:30 AM', description: '디제이 소개글' },
      { id: 6, name: '디제이 이름', time: '1:00 PM', description: '디제이 소개글' },
    ],
    Day3: [
      { id: 7, name: '디제이 이름', time: '10:00 AM', description: '디제이 소개글' },
      { id: 8, name: '디제이 이름', time: '11:30 AM', description: '디제이 소개글' },
      { id: 9, name: '디제이 이름', time: '1:00 PM', description: '디제이 소개글' },
    ],
  };

  const renderCards = () => {
    return dummyData[selectedDay].map((event) => (
      <Card key={event.id}>
        <CardImageContainer>
          <DjImage src={testImage} alt="testImage" />
        </CardImageContainer>
        <CardDescriptionContainer>
          <DjProfile>
            <Name>{event.name}</Name>
            <InstagramLink>
              <InstaLogo src={InstalogoImage} alt="instagram link" />
            </InstagramLink>
          </DjProfile>
          <Description>{event.description}</Description>
        </CardDescriptionContainer>
      </Card>
    ));
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Title>라인업</Title>
        <DayContainer>
          <DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
            DAY 1 9.25 (수)
          </DayButton>
          <DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
            DAY 2 9.26 (목)
          </DayButton>
          <DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
            DAY 3 9.27 (금)
          </DayButton>
        </DayContainer>
        <CardContainer>{renderCards()}</CardContainer>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default FlameLineupPage;
