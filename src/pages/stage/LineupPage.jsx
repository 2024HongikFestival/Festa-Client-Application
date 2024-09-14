import React, { useEffect, useState } from 'react';
import * as S from './styles/LineupPage';
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';

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
      <S.Card key={data.id}>
        <S.CardImage></S.CardImage>
        <S.CardDescription>
          <S.Name>{data.name}</S.Name>
        </S.CardDescription>
      </S.Card>
    ));
  };

  return (
    <S.PageContainer>
      <S.Title>라인업</S.Title>
      <S.DayContainer>
        <S.DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
          <span className="day">DAY 1</span>
          <span className="date">9.25 (수)</span>
        </S.DayButton>
        <S.DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
          <span className="day">DAY 2</span>
          <span className="date">9.26 (목)</span>
        </S.DayButton>
        <S.DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
          <span className="day">DAY 3</span>
          <span className="date">9.27 (금)</span>
        </S.DayButton>
      </S.DayContainer>
      <S.CardContainer>{renderCards()}</S.CardContainer>
    </S.PageContainer>
  );
};

export default LineupPage;
