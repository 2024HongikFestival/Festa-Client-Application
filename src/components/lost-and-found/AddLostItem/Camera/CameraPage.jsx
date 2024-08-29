// src/components/Camera.js
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './CameraPage.styled';

const CameraPage = ({ setCapturedImage }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    //스크롤 약간 되는거 거슬리는데 다양한 환경에서 어떻게 조절?
    //document.body.style.overflow = 'hidden';

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (!videoRef.current) return;

    //videoRef.current.videoWidth, videoRef.current.videoHeight 는 해상도
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
          <S.CameraNoticeText>{`분실물의 특징과 주변 장소가\n잘 보이도록 사진을 찍어주세요!`}</S.CameraNoticeText>
          <S.Video ref={videoRef} autoPlay playsInline />
          <S.CaptureButton onClick={capturePhoto} />
          {/*capturedImage && <Preview image={capturedImage} />*/}
        </>
      )}
    </S.CameraPageWrapper>
  );
};

export default CameraPage;

CameraPage.propTypes = {
  setCapturedImage: PropTypes.func.isRequired,
};
