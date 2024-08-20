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
        `${new Date(response.data.data.startAt).getMonth() + 1}월 ${new Date(response.data.data.startAt).getDate()}일 ${new Date(response.data.data.startAt).getHours()}:${new Date(response.data.data.startAt).getMinutes()}`
      );
      setEndDate(
        `${new Date(response.data.data.endAt).getMonth() + 1}월 ${new Date(response.data.data.endAt).getDate()}일 ${new Date(response.data.data.endAt).getHours()}:${new Date(response.data.data.endAt).getMinutes()}`
      );
      setAnnouncedDate(
        `${new Date(response.data.data.announcedAt).getMonth() + 1}월 ${new Date(response.data.data.announcedAt).getDate()}일 ${new Date(response.data.data.announcedAt).getHours()}:${new Date(response.data.data.announcedAt).getMinutes()}`
      );
      setImageUrl(response.data.data.imageUrl);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        console.log('존재하지 않는 이벤트입니다.');
      }
    }
  };
  const handleKakaoAuth = () => {
    window.location.href = EVENTS_KAKAO_AUTH_URL;
  };

  useEffect(() => {
    getCurrentEvent();
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '60rem',
        border: 'solid 1px',
        borderColor: 'black',
        position: 'relative',
      }}
    >
      {/* body */}
      <div style={{ marginTop: '3.4375rem' }}>
        {/* 이벤트 기본 정보 */}
        <div>
          <p>이벤트 이름</p>
          <p>{title}</p>
        </div>
        {/* 경품 사진 및 남은 기간(데이터로 계산) */}
        <div style={{ position: 'relative' }}>
          {/* 사진 */}
          <img src={imageUrl} alt="prizeImage" height={`${120}rem`} />
          {/* 남은 기간 */}
          <div style={{ position: 'absolute', top: '0', right: '0' }}>마감까지 00:00:00</div>
        </div>
        {/* 현재 응모자 수  */}
        <p>지금 n명이 응모했어요!</p>
        {/* 경품 이름 및 공유 버튼*/}
        <div>
          {prize}
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
            <p>{requires}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>응모 기간</p>
            {startDate} ~ {endDate}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
            <p>발표일</p>
            {announcedDate}
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
