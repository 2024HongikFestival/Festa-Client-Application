// 와디페 예매
// url: /flame/reservation

import React from 'react';
import {
  PreRVBox,
  PriceInfo,
  PriceIntro,
  PriceIntroBox,
  RedUnderLine,
  RVBox,
  RVPeriod,
  RVPeriodTitle,
  RVPeriodTitleP,
  RVWrapper,
  RWTitle,
} from './styles.js';

const PreReservationBox = () => {
  return (
    <>
      <PreRVBox>사전예매</PreRVBox>
      <RedUnderLine></RedUnderLine>
      <RVPeriodTitle>예매기간</RVPeriodTitle>
      <RVPeriod>2024.x.xx-2024.x.xx</RVPeriod>
      <RVPeriodTitleP>가격</RVPeriodTitleP>
      <PriceIntroBox>
        <PriceIntro>• 홍익대학교 서울캠퍼스 재학생 및 휴학생</PriceIntro>
        <PriceInfo>₩5,000</PriceInfo>
      </PriceIntroBox>
      <PriceIntroBox>
        <PriceIntro>• 이외 방문객</PriceIntro>
        <PriceInfo>₩5,000</PriceInfo>
      </PriceIntroBox>
    </>
  );
};

const FlameReservationPage = () => {
  return (
    <RVWrapper>
      <RWTitle>예매</RWTitle>
      <RVBox>
        <PreReservationBox />
      </RVBox>
    </RVWrapper>
  );
};

export default FlameReservationPage;
