import { useEffect, useState } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { LocationErrorBox, DuplicationErrorBox } from '@/components/event/ErrorContainer';
import styled from 'styled-components';
import EventPage from '@/pages/event/main/EventPage';

const RedirectEvents = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  localStorage.setItem('kakao_code', code);

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [errorStatus, setErrorStatus] = useState(null); // 에러 상태 관리
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
      const response = await axiosInstance.post('/entries/token', {
        // 현재 홍대 내부 좌표로 임의 설정
        code: localStorage.getItem('kakao_code'),
        latitude: location.latitude,
        longtitude: location.longitude,
        // latitude: 37.5512242,
        // longitude: 126.9255396,
      });
      console.log(response.data.message);
      // 이벤트 토큰 저장
      localStorage.setItem('event_access_token', response.data.data.accessToken);

      // 성공 시 응모 정보 작성 페이지로 이동
      navigate('/event/enter');
    } catch (error) {
      // 에러 발생 시 카카오 인가코드 삭제
      localStorage.removeItem('kakao_code');

      if (error.response.status === 400) {
        console.log('요청 양식 불량');
        window.location.href = '/event';
      } else if (error.response.status === 401) {
        console.log('일반 사용자 인증 실패');
        window.location.href = '/event';
      } else if (error.response.status === 403) {
        console.log('위치 확인 실패');
        setErrorStatus(403); // 403 에러 상태 설정
      } else if (error.response.status === 409) {
        console.log('중복 응모');
        setErrorStatus(409); // 409 에러 상태 설정
      } else {
        console.log('알 수 없는 오류');
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      getEventToken();
    }
  }, [location]);

  useEffect(() => {
    if (errorStatus) {
      // 에러가 발생했을 때 body의 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 에러가 없을 때는 다시 스크롤 가능하게 설정
      document.body.style.overflow = 'auto';
    }

    return () => {
      // 컴포넌트가 언마운트되면 스크롤을 다시 가능하게 함
      document.body.style.overflow = 'auto';
    };
  }, [errorStatus]);

  return (
    <>
      <EventPage />
      {errorStatus && (
        <Wrapper>
          {errorStatus === 403 && <LocationErrorBox />} {/* 403 에러 시 LocationErrorBox 표시 */}
          {errorStatus === 409 && <DuplicationErrorBox />} {/* 404 에러 시 DuplicationErrorBox 표시 */}
        </Wrapper>
      )}
    </>
  );
};

export default RedirectEvents;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  touch-action: none;
`;
