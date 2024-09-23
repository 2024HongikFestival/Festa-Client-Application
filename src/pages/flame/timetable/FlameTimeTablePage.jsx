import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from 'react-use';
import AOS from 'aos';
import { wdfTT } from '@/constants/wdfTimeTable/wdfTT';
import 'aos/dist/aos.css';
import redButtonTwo from '@/assets/webps/wdTT/RedButton.webp';
import redfullBtn from '@/assets/webps/wdTT/NewPinkBtn.webp';
import afterBtn from '@/assets/webps/wdTT/afterBtn.webp';
import Now from '@/assets/webps/wdTT/now.webp';
import nohot from '@/assets/webps/wdTT/nohotBtn.webp';
import * as S from './styles';

const FlameTimeTablePage = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dayImages, setDayImages] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    // 페이지뷰 이벤트 발송
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Flame Timetable Page',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  const dates = [
    { day: 1, date: `9.25 (${t('timetable.WED')})` },
    { day: 2, date: `9.26 (${t('timetable.THU')})` },
    { day: 3, date: `9.27 (${t('timetable.FRI')})` },
  ];
  const dayOneTime = [
    { dj: 'RUI', time: '7:00 PM', isHot: false, djimg: dayImages.ruiImg, djlogo: dayImages.ruiLogo },
    { dj: 'FINÈ', time: '8:00 PM', isHot: false, djimg: dayImages.fineImg, djlogo: dayImages.fineLogo },
    { dj: 'RIGHTBACK', time: '9:00 PM', isHot: false, djimg: dayImages.rbImg, djlogo: dayImages.rbLogo },
    { dj: 'CHANXER', time: '10:00 PM', isHot: true, djimg: dayImages.cxImg, djlogo: dayImages.cxLogo },
    { dj: 'TEZZ', time: '11:00 PM', isHot: true, djimg: dayImages.tezzImg, djlogo: dayImages.tezzLogo },
  ];

  const dayTwoTime = [
    { dj: 'YongSul', time: '7:00 PM', isHot: false, djimg: dayImages.yongsulImg, djlogo: dayImages.yongsulLogo },
    { dj: 'CHOI', time: '8:00 PM', isHot: false, djimg: dayImages.choiImg, djlogo: dayImages.choiLogo },
    { dj: 'LOZIC', time: '9:00 PM', isHot: false, djimg: dayImages.lozicImg, djlogo: dayImages.lozicLogo },
    { dj: 'VANDAL ROCK', time: '10:00 PM', isHot: true, djimg: dayImages.vandalImg, djlogo: dayImages.vandalLogo },
    { dj: 'ASTER', time: '11:00 PM', isHot: true, djimg: dayImages.asterImg, djlogo: dayImages.asterLogo },
  ];

  const dayThreeTime = [
    { dj: 'NAP ON CLOUD', time: '7:00 PM', isHot: false, djimg: dayImages.napImg, djlogo: dayImages.napLogo },
    { dj: 'SIGMA', time: '8:00 PM', isHot: false, djimg: dayImages.sigmaImg, djlogo: dayImages.sigmaLogo },
    { dj: 'WOOXI', time: '9:00 PM', isHot: true, djimg: dayImages.wooxiImg, djlogo: dayImages.wooxiLogo },
    { dj: 'JOODY', time: '10:00 PM', isHot: true, djimg: dayImages.joodyImg, djlogo: dayImages.joodyLogo },
    { dj: 'JUNCOCO', time: '11:00 PM', isHot: true, djimg: dayImages.cocoImg, djlogo: dayImages.cocoLogo },
  ];

  const loadImages = async (day) => {
    let images = {};
    if (day === 1) {
      images = await Promise.all(
        Object.entries(wdfTT.dayOneImages).map(async ([key, loadImage]) => ({
          [key]: (await loadImage()).default,
        }))
      );
    } else if (day === 2) {
      images = await Promise.all(
        Object.entries(wdfTT.dayTwoImages).map(async ([key, loadImage]) => ({
          [key]: (await loadImage()).default,
        }))
      );
    } else if (day === 3) {
      images = await Promise.all(
        Object.entries(wdfTT.dayThreeImages).map(async ([key, loadImage]) => ({
          [key]: (await loadImage()).default,
        }))
      );
    }

    setDayImages(Object.assign({}, ...images)); // 이미지 상태 업데이트
  };

  useEffect(() => {
    loadImages(selectedDate);
  }, [selectedDate]);

  const handleClick = (day) => {
    setSelectedDate(day);
  };

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    if (currentMonth === 9 && currentDate === 26) {
      setSelectedDate(2);
    } else if (currentMonth === 9 && currentDate === 27) {
      setSelectedDate(3);
    } else {
      setSelectedDate(1);
    }
  }, []);

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
    const { hour, isPM } = formatTime(time);

    const currentHour = currentTime.getHours();
    const currentDate = `${currentTime.getMonth() + 1}.${currentTime.getDate()}`;

    const timeDate = date.split(' ')[0];
    const isDateMatching = currentDate === timeDate;

    const isTimeMatching = hour === currentHour % 12 && isPM === currentHour >= 12;
    return isDateMatching && isTimeMatching;
  };

  const isTimePassed = (time, date) => {
    const { hour, minute, isPM } = formatTime(time);

    const currentHour = currentTime.getHours();
    const currentDate = `${currentTime.getMonth() + 1}.${currentTime.getDate()}`;

    const timeDate = date.split(' ')[0];
    const isDateMatching = currentDate >= timeDate;

    if (currentDate === timeDate) {
      const isTimePassing = hour <= currentHour % 12 && isPM === currentHour >= 12;
      return isTimePassing;
    }

    return isDateMatching;
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
    <S.TTWrapper>
      <S.TTBox>
        <S.TTTitle> {t('timetable.title')}</S.TTTitle>
        <S.DaysBox>
          {dates.map(({ day, date }) => (
            <S.DayBox
              key={day}
              $day={day}
              className={selectedDate === day ? 'active' : ''}
              onClick={() => handleClick(day)}
            >
              <p>{`DAY ${day}`}</p>
              <p>{date}</p>
            </S.DayBox>
          ))}
        </S.DaysBox>

        <S.TimeTableBox>
          {timeTableData.map((item, index) => (
            <S.TimeTableOneBox
              key={index}
              className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
            >
              <S.RedLine>
                {isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) ? (
                  <img src={item.isHot ? redfullBtn : nohot} className="fullBtn" alt="redButton" />
                ) : (
                  <img
                    src={
                      isTimePassed(item.time, dates.find((d) => d.day === selectedDate).date) ? afterBtn : redButtonTwo
                    }
                    className="emptyBtn"
                    alt="redButton"
                  />
                )}
              </S.RedLine>
              {isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) ? (
                <S.LiveConcert
                  className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
                  isHot={item.isHot}
                >
                  <S.LiveNowBox>
                    <img src={Now} />
                  </S.LiveNowBox>
                  <S.LiveDigImg src={item.djimg} loading="lazy" />
                  <S.LiveDj>
                    <S.DjLogo src={item.djlogo} loading="lazy" />
                  </S.LiveDj>
                  <S.LiveTime>{item.time}</S.LiveTime>
                </S.LiveConcert>
              ) : (
                <S.TimeTableText
                  className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
                >
                  <div className="hot">
                    <S.TimeTableName>{item.dj}</S.TimeTableName>
                    {item.isHot && (
                      <div className="hotBox">
                        <S.TimeTableHot>HOT</S.TimeTableHot>
                      </div>
                    )}
                  </div>
                  <S.TimeTableTime>{item.time}</S.TimeTableTime>
                </S.TimeTableText>
              )}
            </S.TimeTableOneBox>
          ))}
        </S.TimeTableBox>

        <S.NoticeBox>
          <S.NoticeTitle>{t('timetable.notice')}</S.NoticeTitle>
          <S.NoticeText>
            <S.NoticeTextContent>
              <S.NumberBox>1.</S.NumberBox>
              <p>
                {t('timetable.detail1.text1')}
                <S.UnderlinedText>{t('timetable.detail1.under1')}</S.UnderlinedText>
                {t('timetable.detail1.text2')}
                <S.UnderlinedText> {t('timetable.detail1.under2')}</S.UnderlinedText>
              </p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>2.</S.NumberBox>
              <p>
                {t('timetable.detail2.text1')}
                <S.UnderlinedText>{t('timetable.detail2.under')}</S.UnderlinedText>
                {t('timetable.detail2.text2')}
              </p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>3.</S.NumberBox>
              <p>
                {t('timetable.detail3.text1')}
                <S.UnderlinedText> {t('timetable.detail3.under')}</S.UnderlinedText>
                {t('timetable.detail3.text2')}
              </p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>4.</S.NumberBox>
              <p>
                {t('timetable.detail4.text1')}
                <S.UnderlinedText> {t('timetable.detail4.under')}</S.UnderlinedText>
                {t('timetable.detail4.text2')}
              </p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>5.</S.NumberBox>
              <p>
                <S.UnderlinedText>{t('timetable.detail5.under1')}</S.UnderlinedText>
                {t('timetable.detail5.text1')}
                <S.UnderlinedText> {t('timetable.detail5.under2')}</S.UnderlinedText>
                {t('timetable.detail5.text2')}
              </p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>6.</S.NumberBox>
              <p> {t('timetable.detail6')}</p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>7.</S.NumberBox>
              <p> {t('timetable.detail7')}</p>
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>8.</S.NumberBox>
              {t('timetable.detail8')}
            </S.NoticeTextContent>
            <S.NoticeTextContent>
              <S.NumberBox>9.</S.NumberBox>
              {t('timetable.detail9')}
            </S.NoticeTextContent>
          </S.NoticeText>
        </S.NoticeBox>
      </S.TTBox>
    </S.TTWrapper>
  );
};

export default FlameTimeTablePage;
