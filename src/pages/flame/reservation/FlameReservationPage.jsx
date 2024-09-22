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
import { useTranslation } from 'react-i18next';

const PreReservationBox = () => {
  const { t } = useTranslation();

  return (
    <>
      <DayRVBox>{t('reservation.subtitle')}</DayRVBox>
      <RedUnderLine></RedUnderLine>
      <RVOneBox>
        <RVPeriodBox>
          <RVPeriodTitle>{t('reservation.period')}</RVPeriodTitle>
          <RVPeriod>
            2024.09.25-09.27 <br />
            {t('reservation.twodays')} 18:30~23:50
          </RVPeriod>
        </RVPeriodBox>
        <RVPeriodBox>
          <RVPeriodTitle>{t('reservation.placetitle')}</RVPeriodTitle>
          <RVPeriod>
            {t('reservation.placewhere1')} <br /> {t('reservation.placewhere2')}
          </RVPeriod>
        </RVPeriodBox>
        <CostBox>
          <RVPeriodTitleP>{t('reservation.price')}</RVPeriodTitleP>
          <PriceIntroBox style={{ marginBottom: '0.4rem' }}>
            <div className="wholeBox">
              <span className="dot">• </span>
              <PriceIntro>{t('reservation.student')}</PriceIntro>
            </div>
            <PriceInfo>₩5,000</PriceInfo>
          </PriceIntroBox>
          <PriceIntroBox>
            <div className="wholeBox">
              <span className="dot">• </span>
              <div className="detailBox">
                <PriceIntro>{t('reservation.notstudent')}</PriceIntro>
                <WhoVisit>{t('reservation.notstudentwho')}</WhoVisit>
              </div>
            </div>
            <PriceInfo>₩20,000</PriceInfo>
          </PriceIntroBox>
        </CostBox>

        <NoticeBox>
          <RVPeriodTitleP>{t('reservation.noticetitle')}</RVPeriodTitleP>
          <NoticeContentBox>
            <NoticeContent>
              <NumberBox>1.</NumberBox>
              <span className="detail">
                {t('reservation.notice1.detail1')}
                <br />
                {t('reservation.notice1.detail5')}
                <span className="underline">{t('reservation.notice1.detail2')}</span>
                {t('reservation.notice1.detail3')}
                <br />
                {t('reservation.notice1.detail4')}{' '}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>2.</NumberBox>
              <span className="detail">
                {t('reservation.notice2.detail3')}
                <span className="underline">{t('reservation.notice2.detail1')}</span> {t('reservation.notice2.detail2')}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>3.</NumberBox>
              <span className="detail">
                {t('reservation.notice3.detail7')}
                <span className="underline"> {t('reservation.notice3.detail1')}</span>
                {t('reservation.notice3.detail2')}
                <br /> {t('reservation.notice3.detail5')}
                <span className="underline"> {t('reservation.notice3.detail3')}</span>
                <br />
                <span className="underline">{t('reservation.notice3.detail6')}</span> {t('reservation.notice3.detail4')}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>4.</NumberBox>
              <span className="detail">
                <span className="underline"> {t('reservation.notice4.detail1')}</span>
                {t('reservation.notice4.detail2')}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>5.</NumberBox>
              <span className="detail">
                {t('reservation.notice5.detail1')}{' '}
                <span className="underline"> {t('reservation.notice5.detail2')}</span>
                {t('reservation.notice5.detail3')}{' '}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>6.</NumberBox>
              <span className="detail">
                {t('reservation.notice6.detail1')}{' '}
                <span className="underline"> {t('reservation.notice6.detail2')}</span>
                {t('reservation.notice6.detail3')} <span className="underline">{t('reservation.notice6.detail4')}</span>{' '}
                {t('reservation.notice6.detail5')}{' '}
              </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>7.</NumberBox>
              <span className="detail"> {t('reservation.notice7')} </span>
            </NoticeContent>
            <NoticeContent>
              <NumberBox>8.</NumberBox>
              <span className="detail">
                {t('reservation.notice8.detail1')}{' '}
                <span className="underline"> {t('reservation.notice8.detail2')}</span>
                {t('reservation.notice8.detail3')}{' '}
              </span>
            </NoticeContent>
          </NoticeContentBox>
        </NoticeBox>
      </RVOneBox>
    </>
  );
};

const FlameReservationPage = () => {
  const { t } = useTranslation();

  return (
    <RVWrapper>
      <RWTitle>{t('reservation.title')}</RWTitle>
      <RVBox>
        <PreReservationBox />
      </RVBox>
      <PreRvBox>
        <GrayTitle>{t('reservation.advancetitle')}</GrayTitle>
        <GrayUnderLine></GrayUnderLine>
        <RVPeriodBox style={{ marginBottom: '3.2rem' }}>
          <GrayPeriodTitle>{t('reservation.advanceperiod')}</GrayPeriodTitle>
          <GrayPeriod>2024.09.19-09.20</GrayPeriod>
        </RVPeriodBox>
        <GrayBox>{t('reservation.closeadvance')}</GrayBox>
      </PreRvBox>
    </RVWrapper>
  );
};

export default FlameReservationPage;
