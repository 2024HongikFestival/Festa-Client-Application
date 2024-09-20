import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles/LineupPage';
import { getSelectedDayByDate } from '@/utils/stage/getSelectedDayByDate';

import img1 from '@/assets/webps/stageLineup/0925_1.webp';
import img2 from '@/assets/webps/stageLineup/0925_2.webp';
import img3 from '@/assets/webps/stageLineup/0925_3.webp';
import img4 from '@/assets/webps/stageLineup/0926_1.webp';
import img5 from '@/assets/webps/stageLineup/0926_2.webp';
import img6 from '@/assets/webps/stageLineup/0926_3.webp';
import img7 from '@/assets/webps/stageLineup/0927_1.webp';
import img8 from '@/assets/webps/stageLineup/0927_2.webp';
import img9 from '@/assets/webps/stageLineup/0927_3.webp';

const Data = {
  day1: [
    { src: img1, alt: '하하', name: '하하 HAHA' },
    { src: img2, alt: '10cm', name: '십센치 10CM' },
    { src: img3, alt: '지아코', name: '지코 ZICO' },
  ],
  day2: [
    { src: img4, alt: '카더가든', name: '카더가든 Car, the garden' },
    { src: img5, alt: '에이핑크', name: '에이핑크 Apink' },
    { src: img6, alt: '크라잉넛', name: '크라잉넛 CRYING NUT' },
  ],
  day3: [
    { src: img7, alt: '한로로', name: '한로로 HANRORO' },
    { src: img8, alt: '청하', name: '청하 CHUNG HA' },
    { src: img9, alt: '로꼬', name: '로꼬 Loco' },
  ],
};

const LineupPage = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedDay(getSelectedDayByDate());
  }, []);

  const renderCards = () => {
    const dayData = Data[selectedDay.toLowerCase()];

    return dayData.map((data, index) => {
      let animationType = '';

      // 첫 번째 카드는 애니메이션 없음
      if (index === 0) {
        animationType = '';
      } else {
        animationType = 'fade-up';
      }

      const isBlack = (selectedDay === 'day3' && index === 0) || (selectedDay !== 'day3' && index === 1);

      return (
        <S.Card key={data.name} data-aos={index === 0 ? '' : 'fade-up'}>
          <S.CardImage src={data.src} alt={data.alt} />
          <S.CardDescription>
            {/* $isBlack으로 수정 */}
            <S.Name $isBlack={isBlack}>{data.name}</S.Name>
          </S.CardDescription>
        </S.Card>
      );
    });
  };

  return (
    <S.PageContainer>
      <S.Title>{t(`LineupPage.title`)}</S.Title>
      <S.DayContainer>
        <S.DayButton selected={selectedDay.toLowerCase() === 'day1'} onClick={() => setSelectedDay('day1')}>
          <span className="day">DAY 1</span>
          <span className="date">{t(`LineupPage.day1`)}</span>
        </S.DayButton>
        <S.DayButton selected={selectedDay.toLowerCase() === 'day2'} onClick={() => setSelectedDay('day2')}>
          <span className="day">DAY 2</span>
          <span className="date">{t(`LineupPage.day2`)}</span>
        </S.DayButton>
        <S.DayButton selected={selectedDay.toLowerCase() === 'day3'} onClick={() => setSelectedDay('day3')}>
          <span className="day">DAY 3</span>
          <span className="date">{t(`LineupPage.day3`)}</span>
        </S.DayButton>
      </S.DayContainer>
      <S.CardContainer>{renderCards()}</S.CardContainer>
      <S.MCContainer data-aos="fade-up">
        <S.MCName>{t(`LineupPage.mc.${selectedDay.toLowerCase()}`)}</S.MCName>
      </S.MCContainer>
    </S.PageContainer>
  );
};

export default LineupPage;
