import { useEffect, useState } from 'react';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';
import * as S from './styled';
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
    <S.Wrapper>
      <S.Title>
        2024{' '}
        <span>
          홍익&nbsp;<span id="highlight">대동제 래플</span>
        </span>
      </S.Title>
      <div>
        <img src={raffle} alt="raffle" height={184} />
      </div>
      <S.NoticeText>
        매일 <span>오전 10시</span> 응모권 1장 부여
      </S.NoticeText>
      <S.NoticeTimeBox>
        <S.NoticeTime>마감까지 남은 시간</S.NoticeTime>
        <S.NoticeTime>00:00:00</S.NoticeTime>
      </S.NoticeTimeBox>
      <S.QNABox>
        <S.QText>Q. 홍익 래플이 뭐예요?</S.QText>
        <S.AText>A. 응모자 추첨을 통해 경품을 지급하는 이벤트입니다.</S.AText>
      </S.QNABox>

      {/* 더미 / 캐러셀로 수정 필요 */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          margin: '2rem 0',
          gap: '1.6rem',
          overflowX: 'hidden',
        }}
      >
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
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '10.2rem',
              backgroundColor: '#FFFF24',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
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
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '10.2rem',
              backgroundColor: '#FFFF24',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
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
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '10.2rem',
              backgroundColor: '#FFFF24',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          ></div>
        </div>
      </div>

      <S.NoticeDetail>
        <S.DetailSection>
          <S.DetailTitle>응모 대상</S.DetailTitle>
          <S.DetailDescription>
            지금 ‘홍익대학교 내에서’ 축제를 즐기고 있다면 재학생 외부인 상관없이 누구나
          </S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 조건</S.DetailTitle>
          <S.DetailDescription>현재 위치가 홍익대학교로 확인된 응모자</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>응모 기간</S.DetailTitle>
          <S.DetailDescription>9월 25일 09:00 ~ 9월 27일 24:00 매일 오전 10시 응모권 1장 제공</S.DetailDescription>
        </S.DetailSection>
        <S.DetailSection>
          <S.DetailTitle>당첨 발표</S.DetailTitle>
          <S.DetailDescription>9월 28일 14:00 총학 인스타 스토리</S.DetailDescription>
        </S.DetailSection>
      </S.NoticeDetail>
      <S.ShareButton>
        <S.ShareIcon src={shareIcon} alt="shareIcon" />
        <p>이벤트 공유</p>
      </S.ShareButton>
      <S.KakaoAuthButton onClick={handleKakaoAuth}>
        <img src={kakaoLogo} alt="kakaoLogo" />
        <p>카카오 인증 후 응모하기</p>
      </S.KakaoAuthButton>
    </S.Wrapper>
  );
};

export default EventPage;
