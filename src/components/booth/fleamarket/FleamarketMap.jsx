import React, { useState, useCallback, lazy, Suspense } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const ContentContainer = lazy(() => import('@/components/common/ContentContainer'));
import fleamarketMapDefault from '@/assets/webps/booth/map/fleamarketMapDefault.webp';
import fleamarketMapZoom from '@/assets/webps/booth/map/fleamarketMapZoom.webp';
import scaleBtn from '@/assets/webps/booth/icon/scaleBtn.webp';

export default function FleamarketMap() {
  const { t } = useTranslation();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleStateChange = useCallback((state) => {
    if (state.scale !== 1 || state.positionX !== 0 || state.positionY !== 0) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  }, []);

  return (
    <Suspense fallback={<></>}>
      <ContentContainer>
        <MapTitle>{t('fleamarket.location')}</MapTitle>
        <MapContainer>
          <TransformWrapper
            initialScale={3}
            minScale={1}
            maxScale={10}
            limitToBounds={false}
            centerContent={true}
            onTransformed={handleStateChange}
            initialPositionX={0}
            initialPositionY={-390}
          >
            <TransformComponent>
              <MapImg src={isZoomed ? fleamarketMapZoom : fleamarketMapDefault} alt="Map" $isZoomed={isZoomed} />
            </TransformComponent>
          </TransformWrapper>
          <ScaleButton src={scaleBtn} alt="Scale" />
        </MapContainer>
      </ContentContainer>
    </Suspense>
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
`;

const MapImg = styled.img`
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
