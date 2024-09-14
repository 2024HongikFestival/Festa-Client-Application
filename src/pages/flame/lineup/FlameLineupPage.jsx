import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import InstalogoImage from '@/assets/webps/wdfLineup/instagramLogo.webp';
import testImage from '@/assets/webps/wdfLineup/test.webp';
import * as S from './styles'; // 스타일 파일에서 스타일 컴포넌트를 가져옴
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';

const FlameLineupPage = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());

    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedDay]);

  // 수정 예정
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
      <S.Card key={event.id} data-aos="fade-up">
        <S.CardImageContainer>
          <S.DjImage src={testImage} alt="testImage" />
          <S.GradientOverlay />
        </S.CardImageContainer>
        <S.CardDescriptionContainer>
          <S.DjProfile>
            <S.Name>{event.name}</S.Name>
            <S.InstaLogo src={InstalogoImage} alt="instagram link" />
          </S.DjProfile>
          <S.Description>{event.description}</S.Description>
        </S.CardDescriptionContainer>
      </S.Card>
    ));
  };

  return (
    <>
      <S.Container>
        <S.Title>라인업</S.Title>
        <S.DayContainer>
          <S.DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
            <span>DAY 1</span>
            <span>9.25 (수)</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
            <span>DAY 2</span>
            <span>9.26 (목)</span>
          </S.DayButton>
          <S.DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
            <span>DAY 3</span>
            <span>9.27 (금)</span>
          </S.DayButton>
        </S.DayContainer>
        <S.CardContainer>{renderCards()}</S.CardContainer>
      </S.Container>
    </>
  );
};

export default FlameLineupPage;
