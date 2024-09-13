// 와디페 예매
// url: /flame/reservation

import React from 'react';
import {
  CostBox,
  DayRVBox,
  GrayBox,
  GrayPeriod,
  GrayPeriodTitle,
  GrayTitle,
  GrayUnderLine,
  NoticeBox,
  NoticeContent,
  NoticeContentBox,
  NumberBox,
  PreRvBox,
  PriceInfo,
  PriceIntro,
  PriceIntroBox,
  RedUnderLine,
  RVBox,
  RVOneBox,
  RVPeriod,
  RVPeriodBox,
  RVPeriodTitle,
  RVPeriodTitleP,
  RVWrapper,
  RWTitle,
  WhoVisit,
} from './styles.js';

const PreReservationBox = () => {
  return (
    <>
      <DayRVBox>현장 예매</DayRVBox>
      <RedUnderLine></RedUnderLine>
      <RVOneBox>
        <RVPeriodBox>
          <RVPeriodTitle>예매 기간</RVPeriodTitle>
          <RVPeriod>
            2024.09.25-09.27 <br /> 각 일 18:30~23:50
          </RVPeriod>
        </RVPeriodBox>
        <RVPeriodBox>
          <RVPeriodTitle>예매 장소</RVPeriodTitle>
          <RVPeriod>
            홍익대학교 와우 디제이 페스티벌 <br /> 입장 부스
          </RVPeriod>
        </RVPeriodBox>
        <CostBox>
          <RVPeriodTitleP>가격</RVPeriodTitleP>
          <PriceIntroBox style={{ marginBottom: '0.4rem' }}>
            <div className="wholeBox">
              <span className="dot">• </span>
              <PriceIntro>홍익대학교 서울캠퍼스 재학생 및 휴학생</PriceIntro>
            </div>
            <PriceInfo>₩5,000</PriceInfo>
          </PriceIntroBox>
          <PriceIntroBox>
            <div className="wholeBox">
              <span className="dot">• </span>
              <div className="detailBox">
                <PriceIntro>이외 방문객</PriceIntro>
                <WhoVisit>(홍익대학교 서울캠퍼스 대학원생 및 졸업생 포함)</WhoVisit>
              </div>
            </div>
            <PriceInfo>₩20,000</PriceInfo>
          </PriceIntroBox>
        </CostBox>

        <NoticeBox>
          <RVPeriodTitleP>유의사항</RVPeriodTitleP>
          <NoticeContentBox>
            <NoticeContent>
              <NumberBox>1.</NumberBox>
              <span className="detail">
                미성년자는 와우 디제이 페스티벌 예매가 불가하며 <br /> 현장 예매 시{' '}
                <span className="underline">신분증 확인</span>이 진행됩니다. <br />
                (성인 인증 불가 시 입장이 제한됩니다.)
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>2.</NumberBox>
              <span className="detail">
                결제 완료 후 <span className="underline">환불은 불가</span>합니다.
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>3.</NumberBox>
              <span className="detail">
                (사전 예매 동일) <span className="underline">입장 티켓은 도장</span>으로 진행되며
                <br /> 와우 디제이 페스티벌 <span className="underline">당일 입장 부스에서</span>
                <br />
                <span className="underline">톡캣 예매 완료 페이지 제시</span> 후 받으실 수 있습니다.
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>4.</NumberBox>
              <span className="detail">
                <span className="underline">재입장은 입장 도장 확인으로 가능</span>
                하며 입장 도장이 훼손되어 확인 불가 시 스태프의 판단 하에 재입장이 제한될 수 있습니다.
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>5.</NumberBox>
              <span className="detail">
                와우 디제이 페스티벌 예매는 일자별로 진행되며{' '}
                <span className="underline">예매하신 일자 당일에만 입장 가능</span>
                합니다.
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>6.</NumberBox>
              <span className="detail">
                현장 예매는 <span className="underline">현금</span> 또는 <span className="underline">계좌 이체</span>{' '}
                결제만 가능합니다.
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>7.</NumberBox>
              <span className="detail">현장 예매는 예매 당일 입장 티켓만 구매 가능합니다.</span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>8.</NumberBox>
              <span className="detail">
                현장 예매는 각 일 <span className="underline">23시 50분에 마감</span>됩니다.
              </span>
            </NoticeContent>
          </NoticeContentBox>
        </NoticeBox>
      </RVOneBox>
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
      <PreRvBox>
        <GrayTitle>사전 예매</GrayTitle>
        <GrayUnderLine></GrayUnderLine>
        <RVPeriodBox style={{ marginBottom: '3.2rem' }}>
          <GrayPeriodTitle>예매 기간</GrayPeriodTitle>
          <GrayPeriod>2024.09.19-09.20</GrayPeriod>
        </RVPeriodBox>
        <GrayBox>사전 예매가 마감되었습니다.</GrayBox>
      </PreRvBox>
    </RVWrapper>
  );
};

export default FlameReservationPage;
