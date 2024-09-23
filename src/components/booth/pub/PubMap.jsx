// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import ContentContainer from '@/components/common/ContentContainer';
// import styled from 'styled-components';
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { useTranslation } from 'react-i18next';
// import pubMapDefault from '@/assets/webps/booth/map/pubMapDefault.webp';
// import pubMapZoom from '@/assets/webps/booth/map/pubMapZoom.webp';
// import scaleBtn from '@/assets/webps/booth/icon/scaleBtn.webp';

// export default function PubMap() {
//   const { t } = useTranslation();
//   const [isZoomed, setIsZoomed] = useState(false);
//   const mapContainerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleStateChange = useCallback((state) => {
//     if (state.scale !== 1.2 || state.positionX !== -150 || state.positionY !== -15) {
//       setIsZoomed(true);
//     } else {
//       setIsZoomed(false);
//     }
//   }, []);

//   return (
//     <ContentContainer>
//       <MapTitle>{t('booth.pub.mapTitle')}</MapTitle>
//       <MapContainer ref={mapContainerRef}>
//         <TransformWrapper
//           initialScale={1.2}
//           minScale={1}
//           maxScale={5}
//           sensitivity={5}
//           panAnimationSpeed={2}
//           pinchAnimationSpeed={2}
//           enableZoomThrottling={true}
//           pinchSensitivity={4}
//           limitToBounds={false}
//           centerContent={true}
//           onTransformed={handleStateChange}
//           initialPositionX={-150}
//           initialPositionY={-15}
//           // wheel={{
//           //   step: 0.1, // 휠 줌 속도 증가
//           // }}
//           wheel={{ step: 0.1 }}
//           pinch={{ step: 0.1 }}
//           panning={{
//             velocityDisabled: false,
//             velocityEqualToMove: true,
//             velocitySensitivity: 1,
//           }}
//           doubleClick={{
//             step: 0.4, // 더 빠르게 줌인되도록
//           }}
//           // pinch={{
//           //   step: 0.02, // 핀치 줌 속도 증가
//           //   disabled: false, // 핀치 줌 활성화
//           // }}
//         >
//           <TransformComponent>
//             <MapImg src={isZoomed ? pubMapZoom : pubMapDefault} alt="Map" $isZoomed={isZoomed} />
//           </TransformComponent>
//         </TransformWrapper>
//         <ScaleButton src={scaleBtn} alt="Scale" />
//       </MapContainer>
//     </ContentContainer>
//   );
// }

// const MapTitle = styled.div`
//   width: 33.5rem;
//   height: 3.2rem;
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   font-size: 2rem;
//   margin-top: 2.4rem;
//   margin-bottom: 1.6rem;
//   ${(props) => props.theme.fontStyles.main.headline6};
// `;

// const MapContainer = styled.div`
//   width: 33.5rem;
//   height: 25rem;
//   margin-bottom: 2.6rem;
//   overflow: hidden;
//   background-color: #b1daff;
//   position: relative;
//   touch-action: none; // 핀치 제스처가 제대로 동작하도록 기본 터치 동작 비활성화
// `;

// const MapImg = styled.img`
//   max-width: 66rem;
//   width: auto;
//   height: 25rem;
//   max-width: none;
//   transition: opacity 0.3s ease;
//   opacity: ${(props) => (props.$isZoomed ? 1 : 0.99)};
// `;

// const ScaleButton = styled.img`
//   position: absolute;
//   bottom: 1.2rem;
//   right: 1.3rem;
//   width: 2.5rem;
//   height: 2.5rem;
//   z-index: 10;
// `;

import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import small from '@/assets/webps/booth/map/pubMapDefault.webp';
import big from '@/assets/webps/booth/map/pubMapZoom.webp';
import btnImg from '@/assets/webps/map/buttonscale.webp';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { MapBox, MainMapWrapper, MapImgBox, BtnImg, DetailMap } from './styles.js';

const PubMap = () => {
  const [isBigVisible, setIsBigVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const { t } = useTranslation();

  const handleTransform = (e) => {
    const currentScale = e.instance.transformState.scale;
    setScale(currentScale);
    setIsBigVisible(currentScale > 1.3);
  };

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
          <MapTitle>{t('booth.pub.mapTitle')}</MapTitle>
          <TransformWrapper
            initialScale={1.6}
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
            // style={{ width: '100%', height: '100%' }}
            initialPositionX={-100}
            initialPositionY={-70}
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
                            opacity: scale >= 1.3 ? 1 : 0, // Big 맵이 1.3 이상의 스케일에서만 표시됨
                            transition: 'opacity 0.3s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '25rem',
                            objectFit: 'contain', // 비율 유지하며 지도 화면에 맞춤
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

export default PubMap;
