import { useEffect, useState } from 'react';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import * as S from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import raffle from '@/assets/webps/event/raffle.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';
import kakaoLogo from '@/assets/svgs/event/kakaoLogo.svg';
import NoticeTimeBox from '@/components/event/NoticeTimeBox';
import { handleShare } from '@/utils/event/handleShare';
import frame from '@/assets/svgs/event/frame.svg';
import tvingLogo from '@/assets/svgs/event/tvingLogo.svg';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useNavigationType } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

dayjs.extend(utc);
dayjs.extend(timezone);

// 시간대를 한국 표준시로 설정
dayjs.tz.setDefault('Asia/Seoul');

// 이벤트 시작과 종료 시간
const eventStart = dayjs.tz('2024-09-10 00:00:00', 'Asia/Seoul'); // 테스트를 위해 임시로 현재 시간으로 설정
const eventEnd = dayjs.tz('2024-09-27 23:59:59', 'Asia/Seoul');

const EventPage = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('language') === 'ko' ? false : true);
  const [stateData, setStateData] = useState();
  const [currentUrl, setCurrentUrl] = useState('');
  const [isEventPeriod, setIsEventPeriod] = useState(false); // 이벤트 기간 여부

  const navigationType = useNavigationType();

  const handleRandomState = () => {
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    setStateData(array[0]);
  };

  const handleKakaoAuth = () => {
    // window.location.href = EVENTS_KAKAO_AUTH_URL + `&state=${stateData}`;
    window.location.href = EVENTS_KAKAO_AUTH_URL;
  };

  // 뒤로 가기 시 event_access_token 삭제 로직 추가
  useEffect(() => {
    if (navigationType === 'POP') {
      localStorage.removeItem('event_access_token');
    }
  }, [navigationType]);

  useEffect(() => {
    handleRandomState();
    setCurrentUrl(window.location.href);

    // 현재 시간이 이벤트 기간 내에 있는지 확인
    const now = dayjs();
    if (now.isAfter(eventStart) && now.isBefore(eventEnd)) {
      setIsEventPeriod(true); // 이벤트 기간 중이면 true
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
        <p>{t(`event.main.button.share`)}</p>
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
