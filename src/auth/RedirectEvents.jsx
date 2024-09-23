import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationErrorBox, DuplicationErrorBox } from '@/components/event/ErrorContainer';
import { axiosInstance } from '@/api/axios';
import EventPage from '@/pages/event/main/EventPage';
import styled from 'styled-components';

const RedirectEvents = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  localStorage.setItem('kakao_code', code);

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [errorStatus, setErrorStatus] = useState(null);
  const navigate = useNavigate();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      setLocation({ latitude: latitude, longitude: longitude });
    });
  };

  const getEventToken = async () => {
    try {
      const response = await axiosInstance.post('/entries/token', {
        code: localStorage.getItem('kakao_code'),
        latitude: location.latitude,
        longtitude: location.longitude,
      });
      localStorage.setItem('event_access_token', response.data.data.accessToken);
      navigate('/event/enter');
    } catch (error) {
      localStorage.removeItem('kakao_code');

      if (error.response.status === 400) {
        window.location.href = '/event';
      } else if (error.response.status === 401) {
        window.location.href = '/event';
      } else if (error.response.status === 403) {
        setErrorStatus(403);
      } else if (error.response.status === 409) {
        setErrorStatus(409);
      } else {
        //console.log(error);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [errorStatus]);

  return (
    <>
      <EventPage />
      {errorStatus && (
        <Wrapper>
          {errorStatus === 403 && <LocationErrorBox />}
          {errorStatus === 409 && <DuplicationErrorBox />}
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
