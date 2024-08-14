import { useEffect, useState } from 'react';
import { axiosInstance } from '@/api/axios';
import EnterEvent from '@/pages/event/EnterEvent';
import { useNavigate } from 'react-router-dom';

const RedirectEvents = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  localStorage.setItem('kakao_code', code);

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [eventId, setEventId] = useState(1);

  const navigate = useNavigate();

  // 위치 정보 불러오기
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      setLocation({ latitude: latitude, longitude: longitude });
    });
  };

  const getEventToken = async () => {
    try {
      getLocation();
      const response = await axiosInstance.post(`/events/${eventId}/token`, {
        // 현재 홍대 내부 좌표로 임의 설정
        code: localStorage.getItem('kakao_code'),
        // latitude: location.latitude,
        // longtitude: location.longitude,
        latitude: 37.5512242,
        longtitude: 126.9255396,
      });
      console.log(response.data.message);
      // 이벤트 토큰 저장
      localStorage.setItem('event_access_token', response.data.data.accessToken);
      // 성공 시 응모 정보 작성 페이지로 이동
      navigate('/event/enter');
    } catch (error) {
      if (error.response.status === 400) {
        console.log('요청 양식 불량');
      } else if (error.response.status === 401) {
        console.log('일반 사용자 인증 실패');
      } else if (error.response.status === 403) {
        console.log('위치 확인 실패');
      } else if (error.response.status === 404) {
        console.log('새로 응모할 수 없음');
      } else {
        console.log('알 수 없는 오류');
      }
      navigate(`/event/${eventId}`);
    }
  };
  useEffect(() => {
    getEventToken();
  }, []);
};

export default RedirectEvents;
