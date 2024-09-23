import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import small from '@/assets/webps/booth/map/fleamarketMapDefault.webp';
import big from '@/assets/webps/booth/map/fleamarketMapZoom.webp';
import btnImg from '@/assets/webps/map/buttonscale.webp';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { MapBox, MainMapWrapper, MapImgBox, BtnImg, DetailMap } from '@/styles/map/mapStyles';

const FleamarketMap = () => {
  const [isBigVisible, setIsBigVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const { t } = useTranslation();

  const handlePinchStart = () => {
    setIsBigVisible(true);
  };

  const handlePinch = (e) => {
    setScale(e.instance.transformState.scale);
  };

  useEffect(() => {
    document.body.style.overflow = isBigVisible ? 'hidden' : 'auto';
  }, [isBigVisible]);

  return (
    <MainMapWrapper>
      <MapBox>
        <ContentContainer>
          <MapTitle>{t('fleamarket.location')}</MapTitle>
          <TransformWrapper
            initialScale={2}
            sensitivity={8}
            pinchSensitivity={4}
            minScale={1}
            panAnimationSpeed={5}
            pinchAnimationSpeed={5}
            enableZoomThrottling={true}
            maxScale={10}
            wheel={{ step: 0.25 }}
            pinch={{ step: 0.2 }}
            onPinchStart={handlePinchStart}
            onPanningStart={handlePinch}
            initialPositionX={0}
            initialPositionY={-200}
          >
            {({ resetTransform }) => {
              const handleReset = () => {
                resetTransform();
                setIsBigVisible(false);
                setScale(1);
              };

              return (
                <div style={{ position: 'relative', width: '100%', height: '100%', margin: '0' }}>
                  <MapImgBox className="detail">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <TransformComponent
                        pinchSensitivity={6}
                        style={{ position: 'relative', width: '100%', height: '100%' }}
                      >
                        <DetailMap
                          className="one"
                          src={small}
                          alt="Small Map"
                          style={{
                            opacity: scale < 1.3 ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            objectFit: 'contain', // 비율 유지하며 지도 화면에 맞춤
                            width: '100%',
                            height: '25rem', // 컨테이너에 맞게 이미지 설정
                          }}
                        />
                        <DetailMap
                          className="two"
                          src={big}
                          alt="Big Map"
                          style={{
                            opacity: scale >= 1.3 ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '25rem',
                            objectFit: 'contain',
                          }}
                        />
                      </TransformComponent>
                      <BtnImg src={btnImg} onClick={handleReset} alt="Reset Scale" />
                    </div>
                  </MapImgBox>
                </div>
              );
            }}
          </TransformWrapper>
        </ContentContainer>
      </MapBox>
    </MainMapWrapper>
  );
};

const MapTitle = styled.div`
  width: 33.5rem;
  height: 3.2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

export default FleamarketMap;
