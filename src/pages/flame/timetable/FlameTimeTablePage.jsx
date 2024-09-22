import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from 'react-use';
import AOS from 'aos';
import 'aos/dist/aos.css';
import redButtonTwo from '@/assets/webps/wdTT/RedButton.webp';
import redfullBtn from '@/assets/webps/wdTT/NewPinkBtn.webp';
import afterBtn from '@/assets/webps/wdTT/afterBtn.webp';
import Now from '@/assets/webps/wdTT/now.webp';
import ruiImg from '@/assets/webps/wdTT/rui.webp';
import ruiLogo from '@/assets/webps/wdTT/ruiLogo.webp';
import fineImg from '@/assets/webps/wdTT/fine.webp';
import fineLogo from '@/assets/webps/wdTT/fineLogo.webp';
import rbImg from '@/assets/webps/wdTT/rightback.webp';
import rbLogo from '@/assets/webps/wdTT/rightbackLogo.webp';
import cxLogo from '@/assets/webps/wdTT/chanxerLogo.webp';
import cximg from '@/assets/webps/wdTT/chanxer.webp';
import tezz from '@/assets/webps/wdTT/tezz.webp';
import tezzLogo from '@/assets/webps/wdTT/tezzLogo.webp';
import choi from '@/assets/webps/wdTT/choi.webp';
import choiLogo from '@/assets/webps/wdTT/choiLogo.webp';
import yongsul from '@/assets/webps/wdTT/yongsul.webp';
import yongsulLogo from '@/assets/webps/wdTT/yongsulLogo.webp';
import lozicLogo from '@/assets/webps/wdTT/lozicLogo.webp';
import lozic from '@/assets/webps/wdTT/lozic.webp';
import vdLogo from '@/assets/webps/wdTT/vandal_rockLogo.webp';
import vdImg from '@/assets/webps/wdTT/vandal_rock.webp';
import aster from '@/assets/webps/wdTT/aster.webp';
import asterLogo from '@/assets/webps/wdTT/asterLogo.webp';
import nap from '@/assets/webps/wdTT/nap_on_cloud.webp';
import napLogo from '@/assets/webps/wdTT/nap_on_cloudLogo.webp';
import sigma from '@/assets/webps/wdTT/sigma.webp';
import sigmaLogo from '@/assets/webps/wdTT/sigmaLogo.webp';
import wooxi from '@/assets/webps/wdTT/wooxi.webp';
import wooxiLogo from '@/assets/webps/wdTT/wooxiLogo.webp';
import joody from '@/assets/webps/wdTT/joody.webp';
import joodyLogo from '@/assets/webps/wdTT/joodyLogo.webp';
import coco from '@/assets/webps/wdTT/juncoco.webp';
import cocoLogo from '@/assets/webps/wdTT/juncocoLogo.webp';
import nohot from '@/assets/webps/wdTT/nohotBtn.webp';
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
  TTTitle,
  TTWrapper,
  UnderlinedText,
} from './styles';

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
              $day={day}
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
                  <LiveDigImg src={item.djimg} loading="lazy" />
                  <LiveDj>
                    <DjLogo src={item.djlogo} loading="lazy" />
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
