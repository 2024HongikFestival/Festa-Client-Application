// // 대동제 이벤트
// // url: /event/{event-id}

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { EVENTS_KAKAO_AUTH_URL } from '@/auth/OAuth';

const EventPage = () => {
  // 전역상태로 관리 필요
  const [eventId, setEventId] = useState(1);

  const navigate = useNavigate();

  // 이벤트 데이터
  const [title, setTitle] = useState('');
  const [prize, setPrize] = useState('');
  const [requires, setRequires] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [announcedDate, setAnnouncedDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  // 현재 이벤트 조회 (단건 조회)
  const getCurrentEvent = async () => {
    try {
      const response = await axiosInstance.get(`/events/${eventId}`);
      console.log(response.data);

      console.log(response.data.message);

      setTitle(response.data.data.title);
      setPrize(response.data.data.prize);
      setRequires(response.data.data.requires);
      setStartDate(
        `${response.data.data.startAt.getMonth() + 1}월 ${response.data.data.startAt.getDate()}일 ${response.data.data.startAt.getHours()}:${response.data.data.startAt.getMinutes()}`
      );
      setEndDate(
        `${response.data.data.endAt.getMonth() + 1}월 ${response.data.data.endAt.getDate()}일 ${response.data.data.endAt.getHours()}:${response.data.data.endAt.getMinutes()}`
      );
      setAnnouncedDate(
        `${response.data.data.announcedAt.getMonth() + 1}월 ${response.data.data.announcedAt.getDate()}일 ${response.data.data.announcedAt.getHours()}:${response.data.data.announcedAt.getMinutes()}`
      );
      setImageUrl(response.data.data.imageUrl);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        console.log('존재하지 않는 이벤트입니다.');
      }
    }
  };

  // 위치 정보 불러오기
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      setLocation({ latitude: latitude, longitude: longitude });
    });
  };

  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL;
  };

  // 이벤트 응모 인가 토큰 발급
  // 컴포넌트 위치에 따라 위치 변동 가능성 있음
  // const getEventToken = async () => {
  //   handleKakaoAuth();
  //   try {
  //     getLocation();
  //     const response = await axiosInstance.post(`/events/${eventId}/token`, {
  //       // 추가 구현 필요 (필드 상태만 맞춰 놓음)
  //       code: 'kakao_code',
  //       latitude: location.latitude,
  //       longtitude: location.longitude,
  //     });
  //     console.log(response.data.message);
  //     // 이벤트 토큰 저장
  //     localStorage.setItem('event_access_token', response.data.data.accessToken);
  //     // 응모 정보 작성 페이지로 이동
  //     navigate(`/event/${eventId}`);
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       console.log('홍익대 외부');
  //     } else if (error.response.status === 401) {
  //       console.log('사용자 인증 실패');
  //     }
  //   }
  // };

  useEffect(() => {
    //getCurrentEvent();
    getLocation();
  }, []);

  return (
    <div
      style={{
        width: '50rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '60rem',
        border: 'solid 2px',
        borderColor: 'black',
        position: 'relative',
      }}
    >
      {/* 임시 헤더 */}
      <div
        style={{
          width: '100%',
          height: '3.4375rem',
          backgroundColor: '#D9D9D9',
          position: 'absolute',
          top: '0',
        }}
      ></div>
      {/* body */}
      <div style={{ marginTop: '3.4375rem' }}>
        {/* 이벤트 기본 정보 */}
        <div>
          {/* {title} */}
          <p>이벤트 이름</p>
          <p>2024 홍익 대동제 1일차 래플</p>
        </div>
        {/* 경품 사진 및 남은 기간(데이터로 계산) */}
        <div style={{ position: 'relative' }}>
          {/* 사진 */}
          {/* <img src={imageUrl} alt="prizeImage" /> */}
          <div
            style={{
              width: '100%',
              height: '12rem',
              backgroundColor: '#D9D9D9',
            }}
          ></div>
          {/* 남은 기간 */}
          <div style={{ position: 'absolute', top: '0', right: '0' }}>마감까지 00:00:00</div>
        </div>
        {/* 현재 응모자 수  */}
        <p>지금 n명이 응모했어요!</p>
        {/* 경품 이름 및 공유 버튼*/}
        <div>
          {/* {prize} */}
          <p>에어팟 프로 2세대</p>
          {/* 공유 아이콘 */}
        </div>
        {/* 경품 가격 */}
        <div>
          <p>가격</p>
        </div>
        {/* 이벤트 세부 정보 */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>응모 대상</p>
            <p>
              재학생 외부인 상관없이 <br />
              지금 홍익대학교 축제를 즐기고 있다면 누구나
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>응모 조건</p>
            <p>매일 1인 1회 참여 가능 지매일 1인 1회 참여 가능</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>응모 기간</p>
            {/* {startDate} ~ {endDate} */}
            <p>9월 25일 09:00 ~ 9월 25일 18:00</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>발표일</p>
            {/* {announcedDate} */}
            <p>9월 28일 14:00</p>
          </div>
        </div>
        {/* 하단 고정 플로팅 버튼 */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p>유의 사항</p>

            <button
              style={{
                backgroundColor: '#FADB34',
                color: 'black',
                border: 'none',
                width: '20rem',
                height: '3rem',
              }}
              onClick={handleKakaoAuth}
            >
              카카오 인증 후 응모하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
