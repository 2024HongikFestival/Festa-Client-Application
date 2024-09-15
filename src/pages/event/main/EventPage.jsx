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

dayjs.extend(utc);
dayjs.extend(timezone);

// 시간대를 한국 표준시로 설정
dayjs.tz.setDefault('Asia/Seoul');

// 이벤트 시작과 종료 시간
const eventStart = dayjs.tz('2024-09-15 22:20:00', 'Asia/Seoul'); // 테스트를 위해 임시로 현재 시간으로 설정
const eventEnd = dayjs.tz('2024-09-27 23:59:59', 'Asia/Seoul');

const EventPage = () => {
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
        2024{' '}
        <span>
          홍익&nbsp;<span id="highlight">대동제 래플</span>
        </span>
      </S.Title>
      <S.ImageWrapper>
        <S.Image src={raffle} alt="raffle" />
      </S.ImageWrapper>
      <S.NoticeText>
        매일 <span>오전 10시</span> 응모권 1장 부여
      </S.NoticeText>

      <NoticeTimeBox />

      <S.QNABox>
        <S.QText>Q. 홍익 래플이 뭐예요?</S.QText>
        <S.AText>A. 응모자 추첨을 통해 경품을 지급하는 이벤트입니다.</S.AText>
      </S.QNABox>

      <S.Raffle>
        <S.Quantity>
          <p>당첨 수량 10장</p>
        </S.Quantity>
        <S.RaffleTitle>
          TVING 스탠다드 요금제
          <br />
          <span>3개월 이용권</span> 증정!
        </S.RaffleTitle>
        <S.RaffleWrapper>
          <S.RaffleImage src={frame} alt="frame" />
          <S.RaffleContainer>
            <p id="top">Standard</p>
            <S.Logo src={tvingLogo} alt="tving" />
            <p id="description">3개월 이용권</p>
          </S.RaffleContainer>
        </S.RaffleWrapper>
      </S.Raffle>

      <S.NoticeDetail>
        <S.DetailSection>
          <S.DetailTitle>응모 대상</S.DetailTitle>
          <S.DetailDescription>
            지금 ‘홍익대학교 내에서’ 축제를 즐기고
            <br />
            있다면 재학생 외부인 상관없이 누구나
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 조건</S.DetailTitle>
          <S.DetailDescription>현재 위치가 홍익대학교로 확인된 응모자</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 기간</S.DetailTitle>
          <S.DetailDescription>
            9월 25일 10:00 ~ 9월 27일 23:59:59
            <br />
            매일 오전 10시 응모권 1장 제공
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>당첨 발표</S.DetailTitle>
          <S.DetailDescription>9월 28일 14:00 대동제 인스타 스토리</S.DetailDescription>
        </S.DetailSection>
      </S.NoticeDetail>
      <S.ShareButton
        onClick={() => {
          handleShare(currentUrl);
        }}
      >
        <S.ShareIcon src={shareIcon} alt="shareIcon" />
        <p>이벤트 공유</p>
      </S.ShareButton>
      {isEventPeriod ? (
        <S.KakaoAuthButton onClick={handleKakaoAuth}>
          <img src={kakaoLogo} alt="kakaoLogo" />
          <p>카카오 인증 후 응모하기</p>
        </S.KakaoAuthButton>
      ) : (
        <S.DisabledEnterButton>
          <p>응모 기간이 아니에요</p>
        </S.DisabledEnterButton>
      )}
    </S.Wrapper>
  );
};

export default EventPage;
