import { useEffect, useState } from 'react';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import raffle from '@/assets/webps/event/raffle.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';
import kakaoLogo from '@/assets/svgs/kakaoLogo.svg';

const EventPage = () => {
  const [stateData, setStateData] = useState();

  const handleRandomState = () => {
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    setStateData(array[0]);
  };

  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL + `&state=${stateData}`;
  };

  useEffect(() => {
    handleRandomState();
  }, []);

  return (
    <Wrapper>
      <Title>
        <p>2024</p>
        <p>홍익 대동제 래플</p>
      </Title>
      <div>
        <img src={raffle} alt="raffle" height={184} />
      </div>
      <NoticeText>매일 오전 10시 응모권 1장 부여</NoticeText>
      <NoticeTimeBox>
        <NoticeTime>마감까지 남은 시간</NoticeTime>
        <NoticeTime>00:00:00</NoticeTime>
      </NoticeTimeBox>
      <QNABox>
        <QText>Q. 홍익 래플이 뭐예요?</QText>
        <AText>A. 응모자 추첨을 통해 경품을 지급하는 이벤트입니다.</AText>
      </QNABox>

      {/* 더미 / 캐러셀로 수정 필요 */}
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '2rem', gap: '1.6rem', overflowX: 'scroll' }}>
        <div
          style={{
            position: 'relative',
            width: '18.6rem',
            height: '28.8rem',
            borderRadius: '1rem',
            backgroundColor: '#FFFF',
          }}
        >
          <div
            style={{ position: 'absolute', bottom: '0', width: '100%', height: '10.2rem', backgroundColor: '#FFFF24' }}
          ></div>
        </div>
        <div
          style={{
            position: 'relative',
            width: '18.6rem',
            height: '28.8rem',
            borderRadius: '1rem',
            backgroundColor: '#FFFF',
          }}
        >
          <div
            style={{ position: 'absolute', bottom: '0', width: '100%', height: '10.2rem', backgroundColor: '#FFFF24' }}
          ></div>
        </div>
      </div>

      <NoticeDetail>
        <DetailSection>
          <DetailTitle>응모 대상</DetailTitle>
          <DetailDescription>
            지금 ‘홍익대학교 내에서’ 축제를 즐기고 있다면 재학생 외부인 상관없이 누구나
          </DetailDescription>
        </DetailSection>
        <DetailSection>
          <DetailTitle>응모 조건</DetailTitle>
          <DetailDescription>현재 위치가 홍익대학교로 확인된 응모자</DetailDescription>
        </DetailSection>
        <DetailSection>
          <DetailTitle>응모 기간</DetailTitle>
          <DetailDescription>9월 25일 09:00 ~ 9월 27일 24:00 매일 오전 10시 응모권 1장 제공</DetailDescription>
        </DetailSection>
        <DetailSection>
          <DetailTitle>당첨 발표</DetailTitle>
          <DetailDescription>9월 28일 14:00 총학 인스타 스토리</DetailDescription>
        </DetailSection>
      </NoticeDetail>
      <ShareButton>
        <ShareIcon src={shareIcon} alt="shareIcon" />
        <p>이벤트 공유</p>
      </ShareButton>
      <KakaoAuthButton onClick={handleKakaoAuth}>
        <img src={kakaoLogo} alt="kakaoLogo" />
        <p>카카오 인증 후 응모하기</p>
      </KakaoAuthButton>
    </Wrapper>
  );
};

export default EventPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.7rem;
  color: ${(props) => props.theme.colors.white};
  p {
    ${(props) => props.theme.fontStyles.basic.eventTitle}
  }
`;

const NoticeText = styled.div`
  margin-top: 1.1rem;
  margin-bottom: 2.3rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.white};
`;

const NoticeTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  height: 13.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffff24 0%, #a9ff1e 100%);
`;

const NoticeTime = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const QNABox = styled.div`
  display: flex;
  width: 33.5rem;
  padding: 1.6rem 1.8rem;
  margin-top: 2.8rem;
  margin-bottom: 3.2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.gray100};
`;

const QText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray10};
`;

const AText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Reg};
  color: ${(props) => props.theme.colors.gray10};
`;

const NoticeDetail = styled(QNABox)`
  padding: 1.6rem 1.9rem;
  gap: 0.8rem;
  align-items: flex-start;
  margin-bottom: 4.4rem;
`;

const DetailSection = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const DetailTitle = styled.div`
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  display: flex;
  min-width: fit-content;
`;

const DetailDescription = styled.div`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

const ShareButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #ffff24;
  background: ${(props) => props.theme.colors.gray100};
  margin-bottom: 10.9rem; // 기존 margin + 버튼 높이

  p {
    color: #ffff24;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ShareIcon = styled.img`
  width: 3.9rem;
  height: 3.9rem;
  position: absolute;
  left: 8.3rem;
`;

const KakaoAuthButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background-color: #fee500; // 여기서만 쓰여서 따로 타이포로 빼지 않음

  p {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
