// 대동제 공연 (라인업)
// url: /lineup

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  DayButton,
  DayContainer,
  Name,
  PageContainer,
  Title,
} from './styles/LineupPage';

// 날짜에 따른 Day 선택 함수
const getSelectedDayByDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1 더함)
  const day = today.getDate(); // 일

  // 날짜에 따른 Day 선택
  if (month === 9) {
    switch (day) {
      case 25:
        return 'Day1';
      case 26:
        return 'Day2';
      case 27:
        return 'Day3';
      default:
        return 'Day1'; // 9월 25-27일이 아닌 경우 Day1으로 설정
    }
  } else {
    return 'Day1'; // 9월이 아닌 경우 Day1으로 설정
  }
};

const LineupPage = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());
  }, []);

  // 수정 예정
  const dummyData = {
    Day1: [
      { id: 1, name: '가수 1' },
      { id: 2, name: '가수 2' },
      { id: 3, name: '가수 3' },
    ],
    Day2: [
      { id: 4, name: '가수 6' },
      { id: 5, name: '가수 7' },
      { id: 6, name: '가수 8' },
    ],
    Day3: [
      { id: 7, name: '가수 11' },
      { id: 8, name: '가수 12' },
      { id: 9, name: '가수 13' },
    ],
  };

  const renderCards = () => {
    return dummyData[selectedDay].map((data) => (
      <Card key={data.id}>
        <CardImage></CardImage>
        <CardDescription>
          <Name>{data.name}</Name>
        </CardDescription>
      </Card>
    ));
  };

  return (
    <PageContainer>
      <Title>라인업</Title>
      <DayContainer>
        <DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
          <span className="day">DAY 1</span>
          <span className="date">9.25 (수)</span>
        </DayButton>
        <DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
          <span className="day">DAY 2</span>
          <span className="date">9.26 (목)</span>
        </DayButton>
        <DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
          <span className="day">DAY 3</span>
          <span className="date">9.27 (금)</span>
        </DayButton>
      </DayContainer>
      <CardContainer>{renderCards()}</CardContainer>
    </PageContainer>
  );
};

export default LineupPage;
