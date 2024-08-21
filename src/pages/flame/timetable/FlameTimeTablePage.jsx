import React, { useState, useEffect } from 'react';
import {
  DayBox,
  DaysBox,
  LiveConcert,
  LiveDj,
  LiveNowBox,
  LiveTime,
  NoticeBox,
  NoticeText,
  NoticeTextContent,
  NoticeTitle,
  NumberBox,
  RedLine,
  SchoolHeader,
  TimeTableBox,
  TimeTableName,
  TimeTableOneBox,
  TimeTableText,
  TimeTableTime,
  TTBox,
  TTFooter,
  TTTitle,
  TTWrapper,
  UnderlinedText,
} from './styles';
import { useInterval } from 'react-use';
import AOS from 'aos';
import 'aos/dist/aos.css';
import redButtonTwo from '../../../assets/webps/wdTT/RedButton.webp';
import redfullBtn from '../../../assets/webps/wdTT/timtablefullButtton.webp';
import afterBtn from '../../../assets/webps/wdTT/afterBtn.webp';
import DjImg from '../../../assets/webps/wdTT/DjImg.webp';
import Now from '../../../assets/webps/wdTT/now.webp';

const FlameTimeTablePage = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [isPassed, setIsPassed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const dates = [
    { day: 1, date: '8.21 (수)' },
    { day: 2, date: '9.26 (목)' },
    { day: 3, date: '9.27 (금)' },
  ];

  const dayOneTime = [
    { dj: '첫째날디제이', time: '8:00 PM' },
    { dj: 'AEFODENCE', time: '8:00 PM' },
    { dj: 'NIRVANA', time: '9:00 PM' },
    { dj: 'UWFHO', time: '10:00 PM' },
    { dj: 'UWFHO', time: '11:00 PM' },
  ];

  const dayTwoTime = [
    { dj: '둘쨋날 디제이', time: '8:00 PM' },
    { dj: 'AEFODENCE', time: '9:00 PM' },
    { dj: 'NIRVANA', time: '10:00 PM' },
    { dj: 'UWFHO', time: '11:00 PM' },
  ];

  const dayThreeTime = [
    { dj: '셋째날 디제이', time: '8:00 PM' },
    { dj: 'AEFODENCE', time: '9:00 PM' },
    { dj: 'NIRVANA', time: '10:00 PM' },
    { dj: 'UWFHO', time: '11:00 PM' },
    { dj: '셋째날 디제이', time: '8:00 PM' },
  ];

  const handleClick = (day) => {
    setSelectedDate(day);
  };

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  useEffect(() => {
    AOS.init({});
  }, [currentTime]);

  const formatTime = (time) => {
    const [hourMinute, period] = time.split(' ');
    const [hour, minute] = hourMinute.split(':').map(Number);
    const isPM = period === 'PM';
    return { hour, minute, isPM };
  };

  const isTimeActive = (time, date) => {
    const { hour, minute, isPM } = formatTime(time);

    // 현재 시간 정보
    const currentHour = currentTime.getHours();
    const currentDate = `${currentTime.getMonth() + 1}.${currentTime.getDate()}`;

    // 날짜 비교
    const timeDate = date.split(' ')[0]; // '9.25' 형태로 추출
    const isDateMatching = currentDate === timeDate;

    // 시간 비교
    const isTimeMatching = hour === currentHour % 12 && isPM === currentHour >= 12;
    return isDateMatching && isTimeMatching;
  };

  const isTimePassed = (time, date) => {
    const { hour, isPM } = formatTime(time);

    // 현재 시간 정보
    const currentHour = currentTime.getHours();
    const currentDate = `${currentTime.getMonth() + 1}.${currentTime.getDate()}`;

    // 날짜 비교
    const timeDate = date.split(' ')[0]; // '9.25' 형태로 추출
    const isDateMatching = currentDate >= timeDate;

    // 시간 비교
    const isTimePassing = hour <= currentHour % 12 && isPM === currentHour >= 12;
    return isDateMatching && isTimePassing;
  };

  const getDayTimeData = () => {
    switch (selectedDate) {
      case 1:
        return dayOneTime;
      case 2:
        return dayTwoTime;
      case 3:
        return dayThreeTime;
      default:
        return [];
    }
  };

  const timeTableData = getDayTimeData();

  return (
    <TTWrapper>
      <TTBox>
        <TTTitle>타임테이블</TTTitle>
        <DaysBox>
          {dates.map(({ day, date }) => (
            <DayBox key={day} isActive={selectedDate === day} onClick={() => handleClick(day)}>
              <p>{`DAY ${day}`}</p>
              <p>{date}</p>
            </DayBox>
          ))}
        </DaysBox>

        <TimeTableBox>
          {timeTableData.map((item, index) => (
            <TimeTableOneBox
              key={index}
              isActive={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date)}
            >
              <RedLine>
                {isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) ? (
                  <img src={redfullBtn} className="fullBtn" alt="redButton" />
                ) : (
                  <img
                    src={
                      isTimePassed(item.time, dates.find((d) => d.day === selectedDate).date) ? afterBtn : redButtonTwo
                    }
                    className="emptyBtn"
                    alt="redButton"
                  />
                )}
              </RedLine>
              {isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) ? (
                <LiveConcert isActive={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date)}>
                  <LiveNowBox>
                    <img src={Now} />
                  </LiveNowBox>

                  <img src={DjImg} />
                  <LiveDj>{item.dj}</LiveDj>
                  <LiveTime>{item.time}</LiveTime>
                </LiveConcert>
              ) : (
                <TimeTableText isActive={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date)}>
                  <TimeTableName>{item.dj}</TimeTableName>
                  <TimeTableTime>{item.time}</TimeTableTime>
                </TimeTableText>
              )}
            </TimeTableOneBox>
          ))}
        </TimeTableBox>

        <NoticeBox>
          <NoticeTitle>관람 시 유의사항</NoticeTitle>
          <NoticeText>
            <NoticeTextContent>
              <NumberBox>1.</NumberBox>
              <p>
                와우 디제이 페스티벌 내 <UnderlinedText>음식물(식수 제외) 반입은 금지</UnderlinedText>됩니다.
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>2.</NumberBox>
              <p>
                와우 디제이 페스티벌은 주류가 제공되는 행사로 <UnderlinedText>미성년자 출입이 금지</UnderlinedText>
                됩니다.
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>3.</NumberBox>
              <p>
                <UnderlinedText>입장 도장 확인 불가 시 재입장이 불가</UnderlinedText>할 수 있습니다.
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>4.</NumberBox>
              <p>
                와우 디제이 페스티벌은 <UnderlinedText>금연 구역</UnderlinedText>으로 전자 담배를 포함한 모든 흡연
                행위는 불가합니다.
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>5.</NumberBox>
              <p>
                <UnderlinedText>과도한 음주 상태</UnderlinedText>일 경우 스태프의 판단 하에{' '}
                <UnderlinedText>입장 제한 또는 퇴장</UnderlinedText>될 수 있습니다.{' '}
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>6.</NumberBox>
              <p>와우 디제이 페스티벌 내 경사로에서 뛰는 행위는 자제 부탁드립니다.</p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>7.</NumberBox>
              <p>원활한 행사 진행을 위하여 현장 스태프의 지시 및 안내에 따라 주시기 바랍니다.</p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>8.</NumberBox>
              현장 스태프의 지시에 반할 경우 퇴장 조치될 수 있습니다.
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>9.</NumberBox>
              출입 제한 구역 접근 및 출입 시 퇴장 조치될 수 있습니다.
            </NoticeTextContent>
          </NoticeText>
        </NoticeBox>
      </TTBox>
    </TTWrapper>
  );
};

export default FlameTimeTablePage;
