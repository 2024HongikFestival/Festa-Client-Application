import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useCamera } from '@/context/AuthProvider';
import * as S from './CameraPage.styled';

const CameraPage = ({ setCapturedImage }) => {
  const { t } = useTranslation();
  const { setIsCamera } = useCamera();
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsCamera(true);

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        setError('카메라에 접근할 수 없습니다. 권한을 확인해주세요.');
        console.error('Error accessing camera: ', err);
      }
    };
    startCamera();

    return () => {
      setIsCamera(false);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    setCapturedImage(dataUrl);
  };

  return (
    <S.CameraPageWrapper>
      {error ? (
        <S.ErrorMessage>{error}</S.ErrorMessage>
      ) : (
        <>
          <S.CameraNoticeText>{t('AddLostAndFound.TakeAPictureOfLostItem')}</S.CameraNoticeText>
          <S.Video ref={videoRef} autoPlay playsInline />
          <S.CaptureButton onClick={capturePhoto} />
        </>
      )}
    </S.CameraPageWrapper>
  );
};

export default CameraPage;

CameraPage.propTypes = {
  setCapturedImage: PropTypes.func.isRequired,
};
