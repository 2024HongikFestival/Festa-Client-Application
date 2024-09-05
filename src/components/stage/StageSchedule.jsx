import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StageSchedule = () => {
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
  }, []);

  // 더미 데이터
  const dummyData = {
    Day1: [
      {
        id: '1',
        stageName: '학부 찬조 공연',
        totalDuration: '17:30 ~ 18:30',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
      {
        id: '2',
        stageName: '재주꾼 선발 대회',
        totalDuration: '15:00 ~ 17:30',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
    ],
    Day2: [
      {
        id: '3',
        stageName: '연예인 초청 무대',
        totalDuration: '19:00 ~ 23:00',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
      {
        id: '4',
        stageName: '학부 찬조 공연',
        totalDuration: '18:00 ~ 21:30',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
    ],
    Day3: [
      {
        id: '5',
        stageName: '재주꾼 선발 대회',
        totalDuration: '20:00 ~ 23:00',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
      {
        id: '6',
        stageName: '연예인 초청 공연',
        totalDuration: '17:00 ~ 19:00',
        artists: ['아티스트이름', '아티스트이름', '아티스트이름', '아티스트이름'],
      },
    ],
  };

  // 스타일 수정해야함
  const renderStage = () => {
    return dummyData[selectedDay].map((event) => (
      <Stage key={event.id}>
        <StageBox>
          <StageName>{event.stageName}</StageName>
          <Duration>{event.totalDuration}</Duration>
        </StageBox>
        <ArtistList>
          {event.artists.map((artist, index) => (
            <ArtistItem key={index}>{artist}</ArtistItem>
          ))}
        </ArtistList>
      </Stage>
    ));
  };

  return (
    <Container>
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
      <StageContainer>{renderStage()}</StageContainer>
    </Container>
  );
};

export default StageSchedule;

const Container = styled.div`
  width: 33.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
const StageContainer = styled.div`
  display: flex;
  padding: 0 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  /* box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12); */
`;
const DayButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? props.theme.colors.hongikBlue : props.theme.colors.gray50)};
  cursor: pointer;
  padding: 0;
  .day {
    display: block;
    ${(props) => props.theme.fontStyles.basic.body2Bold}; // DAY 1 스타일
  }
  .date {
    display: block;
    ${(props) => props.theme.fontStyles.basic.subHeadBold}; // 9.25 (수) 스타일
  }
`;
const Stage = styled.div`
  width: 28.7rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray20};
  padding: 2rem 0;
`;
const StageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  width: 11.8rem;
`;
const StageName = styled.h2`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.gray100};
`;
const Duration = styled.p`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;
const ArtistList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 추후 변경 예정 (정렬 관련)
  gap: 0.8rem;
`;
const ArtistItem = styled.li`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
