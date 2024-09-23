import { useEffect, useState } from 'react';
import { useNavigationType } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import NoticeTimeBox from '@/components/event/NoticeTimeBox';
import raffle from '@/assets/webps/event/raffle.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';
import kakaoLogo from '@/assets/svgs/event/kakaoLogo.svg';
import { handleShare } from '@/utils/event/handleShare';
import frame from '@/assets/svgs/event/frame.svg';
import tvingLogo from '@/assets/svgs/event/tvingLogo.svg';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import * as S from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Seoul');

const eventStart = dayjs.tz('2024-09-25 10:00:00', 'Asia/Seoul');
const eventEnd = dayjs.tz('2024-09-27 23:59:59', 'Asia/Seoul');

const EventPage = () => {
  const { t } = useTranslation();
  const [currentUrl, setCurrentUrl] = useState('');
  const [isEventPeriod, setIsEventPeriod] = useState(false);

  const navigationType = useNavigationType();

  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL;
  };

  useEffect(() => {
    if (navigationType === 'POP') {
      localStorage.removeItem('event_access_token');
    }
  }, [navigationType]);

  useEffect(() => {
    setCurrentUrl(window.location.href);

    // 현재 시간이 이벤트 기간 내에 있는지 확인
    const now = dayjs();
    if (now.isAfter(eventStart) && now.isBefore(eventEnd)) {
      setIsEventPeriod(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Title>
        2024 <br />
        <span>
          {t(`event.main.notice.title1`)}&nbsp;
          <span id="highlight">{t(`event.main.notice.title2`)}</span>
        </span>
      </S.Title>
      <S.ImageWrapper>
        <S.Image src={raffle} alt="raffle" />
      </S.ImageWrapper>
      <S.NoticeText>
        {t(`event.main.notice.description1`)} <span>{t(`event.main.notice.description2`)}</span>{' '}
        {t(`event.main.notice.description3`)}
      </S.NoticeText>

      <NoticeTimeBox />

      <S.QNABox>
        <S.QText>{t(`event.main.notice.qText`)}</S.QText>
        <S.AText>{t(`event.main.notice.aText`)}</S.AText>
      </S.QNABox>

      <S.Raffle>
        <S.Quantity>
          <p>{t(`event.main.item.quantity`)}</p>
        </S.Quantity>
        <S.RaffleTitle>
          {t(`event.main.item.title1`)}
          <br />
          <span>{t(`event.main.item.title2`)}</span> {t(`event.main.item.title3`)}
        </S.RaffleTitle>
        <S.RaffleWrapper>
          <S.RaffleImage src={frame} alt="frame" />
          <S.RaffleContainer>
            <p id="top">Standard</p>
            <S.Logo src={tvingLogo} alt="tving" />
            <p id="description">{t(`event.main.item.description1`)}</p>
          </S.RaffleContainer>
        </S.RaffleWrapper>
      </S.Raffle>

      <S.NoticeDetail>
        <S.DetailSection>
          <S.DetailTitle>{t(`event.main.detail.title1`)}</S.DetailTitle>
          <S.DetailDescription>
            {t(`event.main.detail.description1`)}
            <br />
            {t(`event.main.detail.description2`)}
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>{t(`event.main.detail.title2`)}</S.DetailTitle>
          <S.DetailDescription>{t(`event.main.detail.description3`)}</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>{t(`event.main.detail.title3`)}</S.DetailTitle>
          <S.DetailDescription>
            {t(`event.main.detail.description4`)}
            <br />
            {t(`event.main.detail.description5`)}
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>{t(`event.main.detail.title4`)}</S.DetailTitle>
          <S.DetailDescription>{t(`event.main.detail.description6`)}</S.DetailDescription>
        </S.DetailSection>
      </S.NoticeDetail>
      <S.ShareButton
        onClick={() => {
          handleShare(currentUrl);
        }}
      >
        <S.ShareIcon src={shareIcon} alt="shareIcon" />
        <S.ShareText>{t(`event.main.button.share`)}</S.ShareText>
      </S.ShareButton>
      {isEventPeriod ? (
        <S.KakaoAuthButton onClick={handleKakaoAuth}>
          <img src={kakaoLogo} alt="kakaoLogo" />
          <p>{t(`event.main.button.available`)}</p>
        </S.KakaoAuthButton>
      ) : (
        <S.DisabledEnterButton>
          <p>{t(`event.main.button.unavailable`)}</p>
        </S.DisabledEnterButton>
      )}
    </S.Wrapper>
  );
};

export default EventPage;
