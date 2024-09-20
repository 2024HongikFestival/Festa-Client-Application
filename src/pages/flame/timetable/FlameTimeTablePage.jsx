import React, { useState, useEffect } from 'react';
import {
  DayBox,
  DaysBox,
  DjLogo,
  LiveConcert,
  LiveDigImg,
  LiveDj,
  LiveNowBox,
  LiveTime,
  NoticeBox,
  NoticeText,
  NoticeTextContent,
  NoticeTitle,
  NumberBox,
  RedLine,
  TimeTableBox,
  TimeTableHot,
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
import redButtonTwo from '/src/assets/webps/wdTT/RedButton.webp';
import redfullBtn from '/src/assets/webps/wdTT/NewPinkBtn.webp';
import afterBtn from '/src/assets/webps/wdTT/afterBtn.webp';
import Now from '/src/assets/webps/wdTT/now.webp';
import ruiImg from '/src/assets/webps/wdTT/rui.webp';
import ruiLogo from '/src/assets/webps/wdTT/ruiLogo.webp';
import fineImg from '/src/assets/webps/wdTT/fine.webp';
import fineLogo from '/src/assets/webps/wdTT/fineLogo.webp';
import rbImg from '/src/assets/webps/wdTT/rightback.webp';
import rbLogo from '/src/assets/webps/wdTT/rightbackLogo.webp';
import cxLogo from '/src/assets/webps/wdTT/chanxerLogo.webp';
import cximg from '/src/assets/webps/wdTT/chanxer.webp';
import tezz from '/src/assets/webps/wdTT/tezz.webp';
import tezzLogo from '/src/assets/webps/wdTT/tezzLogo.webp';
import choi from '/src/assets/webps/wdTT/choi.webp';
import choiLogo from '/src/assets/webps/wdTT/choiLogo.webp';
import yongsul from '/src/assets/webps/wdTT/yongsul.webp';
import yongsulLogo from '/src/assets/webps/wdTT/yongsulLogo.webp';
import lozicLogo from '/src/assets/webps/wdTT/lozicLogo.webp';
import lozic from '/src/assets/webps/wdTT/lozic.webp';
import vdLogo from '/src/assets/webps/wdTT/vandal_rockLogo.webp';
import vdImg from '/src/assets/webps/wdTT/vandal_rock.webp';
import aster from '/src/assets/webps/wdTT/aster.webp';
import asterLogo from '/src/assets/webps/wdTT/asterLogo.webp';
import nap from '/src/assets/webps/wdTT/nap_on_cloud.webp';
import napLogo from '/src/assets/webps/wdTT/nap_on_cloudLogo.webp';
import sigma from '/src/assets/webps/wdTT/sigma.webp';
import sigmaLogo from '/src/assets/webps/wdTT/sigmaLogo.webp';
import wooxi from '/src/assets/webps/wdTT/wooxi.webp';
import wooxiLogo from '/src/assets/webps/wdTT/wooxiLogo.webp';
import joody from '/src/assets/webps/wdTT/joody.webp';
import joodyLogo from '/src/assets/webps/wdTT/joodyLogo.webp';
import coco from '/src/assets/webps/wdTT/juncoco.webp';
import cocoLogo from '/src/assets/webps/wdTT/juncocoLogo.webp';
import nohot from '/src/assets/webps/wdTT/nohotBtn.webp';
import { useTranslation } from 'react-i18next';

const FlameTimeTablePage = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t } = useTranslation();

  const dates = [
    { day: 1, date: `9.25 (${t('timetable.WED')})` },
    { day: 2, date: `9.26 (${t('timetable.THU')})` },
    { day: 3, date: `9.27 (${t('timetable.FRI')})` },
  ];

  const dayOneTime = [
    { dj: 'RUI', time: '7:00 PM', isHot: false, djimg: ruiImg, djlogo: ruiLogo },
    { dj: 'FINE', time: '8:00 PM', isHot: false, djimg: fineImg, djlogo: fineLogo },
    { dj: 'RIGHTBACK', time: '9:00 PM', isHot: false, djimg: rbImg, djlogo: rbLogo },
    { dj: 'CHANXER', time: '10:00 PM', isHot: true, djimg: cximg, djlogo: cxLogo },
    { dj: 'TEZZ', time: '11:00 PM', isHot: true, djimg: tezz, djlogo: tezzLogo },
  ];

  const dayTwoTime = [
    { dj: 'YongSul', time: '7:00 PM', isHot: false, djimg: yongsul, djlogo: yongsulLogo },
    { dj: 'CHOI', time: '8:00 PM', isHot: false, djimg: choi, djlogo: choiLogo },
    { dj: 'LOZIC', time: '9:00 PM', isHot: false, djimg: lozic, djlogo: lozicLogo },
    { dj: 'VANDAL ROCK', time: '10:00 PM', isHot: true, djimg: vdImg, djlogo: vdLogo },
    { dj: 'ASTER', time: '11:00 PM', isHot: true, djimg: aster, djlogo: asterLogo },
  ];

  const dayThreeTime = [
    { dj: 'NAP ON CLOUD', time: '7:00 PM', isHot: false, djimg: nap, djlogo: napLogo },
    { dj: 'SIGMA', time: '8:00 PM', isHot: false, djimg: sigma, djlogo: sigmaLogo },
    { dj: 'WOOXI', time: '9:00 PM', isHot: true, djimg: wooxi, djlogo: wooxiLogo },
    { dj: 'JOODY', time: '10:00 PM', isHot: true, djimg: joody, djlogo: joodyLogo },
    { dj: 'JUNCOCO', time: '11:00 PM', isHot: true, djimg: coco, djlogo: cocoLogo },
  ];

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
    <TTWrapper>
      <TTBox>
        <TTTitle> {t('timetable.title')}</TTTitle>
        <DaysBox>
          {dates.map(({ day, date }) => (
            <DayBox
              key={day}
              day={day}
              className={selectedDate === day ? 'active' : ''}
              onClick={() => handleClick(day)}
            >
              <p>{`DAY ${day}`}</p>
              <p>{date}</p>
            </DayBox>
          ))}
        </DaysBox>

        <TimeTableBox>
          {timeTableData.map((item, index) => (
            <TimeTableOneBox
              key={index}
              className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
            >
              <RedLine>
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
              </RedLine>
              {isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) ? (
                <LiveConcert
                  className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
                  isHot={item.isHot}
                >
                  <LiveNowBox>
                    <img src={Now} />
                  </LiveNowBox>
                  <LiveDigImg src={item.djimg} />
                  <LiveDj>
                    <DjLogo src={item.djlogo} />
                  </LiveDj>
                  <LiveTime>{item.time}</LiveTime>
                </LiveConcert>
              ) : (
                <TimeTableText
                  className={isTimeActive(item.time, dates.find((d) => d.day === selectedDate).date) && 'active'}
                >
                  <div className="hot">
                    <TimeTableName>{item.dj}</TimeTableName>
                    {item.isHot && (
                      <div className="hotBox">
                        <TimeTableHot>HOT</TimeTableHot>
                      </div>
                    )}
                  </div>
                  <TimeTableTime>{item.time}</TimeTableTime>
                </TimeTableText>
              )}
            </TimeTableOneBox>
          ))}
        </TimeTableBox>

        <NoticeBox>
          <NoticeTitle>{t('timetable.notice')}</NoticeTitle>
          <NoticeText>
            <NoticeTextContent>
              <NumberBox>1.</NumberBox>
              <p>
                {t('timetable.detail1.text1')}
                <UnderlinedText>{t('timetable.detail1.under1')}</UnderlinedText>
                {t('timetable.detail1.text2')}
                <UnderlinedText> {t('timetable.detail1.under2')}</UnderlinedText>
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>2.</NumberBox>
              <p>
                {t('timetable.detail2.text1')}
                <UnderlinedText>{t('timetable.detail2.under')}</UnderlinedText>
                {t('timetable.detail2.text2')}
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>3.</NumberBox>
              <p>
                {t('timetable.detail3.text1')}
                <UnderlinedText> {t('timetable.detail3.under')}</UnderlinedText>
                {t('timetable.detail3.text2')}
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>4.</NumberBox>
              <p>
                {t('timetable.detail4.text1')}
                <UnderlinedText> {t('timetable.detail4.under')}</UnderlinedText>
                {t('timetable.detail4.text2')}
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>5.</NumberBox>
              <p>
                <UnderlinedText>{t('timetable.detail5.under1')}</UnderlinedText>
                {t('timetable.detail5.text1')}
                <UnderlinedText> {t('timetable.detail5.under2')}</UnderlinedText>
                {t('timetable.detail5.text2')}
              </p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>6.</NumberBox>
              <p> {t('timetable.detail6')}</p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>7.</NumberBox>
              <p> {t('timetable.detail7')}</p>
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>8.</NumberBox>
              {t('timetable.detail8')}
            </NoticeTextContent>
            <NoticeTextContent>
              <NumberBox>9.</NumberBox>
              {t('timetable.detail9')}
            </NoticeTextContent>
          </NoticeText>
        </NoticeBox>
      </TTBox>
    </TTWrapper>
  );
};

export default FlameTimeTablePage;
