import React, { useState, useCallback, useRef, useEffect } from 'react';
import ContentContainer from '@/components/common/ContentContainer';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useTranslation } from 'react-i18next';
import pubMapDefault from '@/assets/webps/booth/map/pubMapDefault.webp';
import pubMapZoom from '@/assets/webps/booth/map/pubMapZoom.webp';
import scaleBtn from '@/assets/webps/booth/icon/scaleBtn.webp';

export default function PubMap() {
  const { t } = useTranslation();
  const [isZoomed, setIsZoomed] = useState(false);
  const mapContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleStateChange = useCallback((state) => {
    if (state.scale !== 1.2 || state.positionX !== -150 || state.positionY !== -15) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  }, []);

  return (
    <ContentContainer>
      <MapTitle>{t('booth.pub.mapTitle')}</MapTitle>
      <MapContainer ref={mapContainerRef}>
        <TransformWrapper
          initialScale={1.2}
          minScale={0.5}
          maxScale={5}
          limitToBounds={false}
          centerContent={true}
          onTransformed={handleStateChange}
          initialPositionX={-150}
          initialPositionY={-15}
          wheel={{
            step: 0.1, // 휠 줌 속도 증가
          }}
          panning={{
            velocityDisabled: false,
            velocityEqualToMove: true,
            velocitySensitivity: 1,
          }}
          doubleClick={{
            step: 0.4, // 더 빠르게 줌인되도록
          }}
          pinch={{
            step: 0.02, // 핀치 줌 속도 증가
            disabled: false, // 핀치 줌 활성화
          }}
        >
          <TransformComponent>
            <MapImg src={isZoomed ? pubMapZoom : pubMapDefault} alt="Map" $isZoomed={isZoomed} />
          </TransformComponent>
        </TransformWrapper>
        <ScaleButton src={scaleBtn} alt="Scale" />
      </MapContainer>
    </ContentContainer>
  );
}

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

const MapContainer = styled.div`
  width: 33.5rem;
  height: 25rem;
  margin-bottom: 2.6rem;
  overflow: hidden;
  background-color: #b1daff;
  position: relative;
  touch-action: none; // 핀치 제스처가 제대로 동작하도록 기본 터치 동작 비활성화
`;

const MapImg = styled.img`
  max-width: 66rem;
  width: auto;
  height: 25rem;
  max-width: none;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isZoomed ? 1 : 0.99)};
`;

const ScaleButton = styled.img`
  position: absolute;
  bottom: 1.2rem;
  right: 1.3rem;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 10;
`;
