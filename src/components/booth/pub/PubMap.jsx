import React, { useState, useCallback } from 'react';
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

  const handleStateChange = useCallback((state) => {
    if (state.scale !== 1 || state.positionX !== 0 || state.positionY !== 0) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  }, []);

  return (
    <PubMapWrapper>
      <ContentContainer>
        <MapTitle>{t('booth.pub.mapTitle')}</MapTitle>
        <MapContainer>
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            limitToBounds={true}
            centerContent={true}
            onTransformed={handleStateChange}
          >
            <TransformComponent
              wrapperStyle={{
                width: '33.5rem',
                height: '25rem',
              }}
              contentStyle={{
                width: '33.5rem',
                height: '25rem',
              }}
            >
              <MapImg src={isZoomed ? pubMapZoom : pubMapDefault} alt="Map" $isZoomed={isZoomed} />
            </TransformComponent>
          </TransformWrapper>
          <ScaleButton src={scaleBtn} alt="Scale" />
        </MapContainer>
      </ContentContainer>
    </PubMapWrapper>
  );
}

const PubMapWrapper = styled.div`
  margin-bottom: 6.4rem;
`;

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
  width: 100%;
  height: 100%;
  object-fit: cover;
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
