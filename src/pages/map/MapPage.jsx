import {
  MapBox,
  MapTitle,
  MapToggle,
  MapToggleBtn,
  MainMapWrapper,
  MapImgBox,
  BtnImg,
  DetailMap,
  ActiveBackground,
} from './styles.js';
import React, { useState, useEffect } from 'react';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import mapImg from '/src/assets/webps/map/completemap.webp';
import btnImg from '/src/assets/webps/map/buttonscale.webp';
import small from '/src/assets/webps/map/detailMap2.webp';
import big from '/src/assets/webps/map/zoomMap2.webp';
import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapPage = () => {
  const [activeView, setActiveView] = useState('all');
  const { t } = useTranslation();
  const [isBigVisible, setIsBigVisible] = useState(false);
  const [scale, setScale] = useState(1);

  const handleToggle = (view) => {
    setActiveView(view);
  };

  const handleTransform = (e) => {
    const currentScale = e.instance.transformState.scale;
    setScale(currentScale);
    setIsBigVisible(currentScale > 1.5);
  };

  useEffect(() => {
    document.body.style.overflow = isBigVisible ? 'hidden' : 'auto';
  }, [isBigVisible]);

  return (
    <MainMapWrapper>
      <MapTitle> {t('map.title')}</MapTitle>
      <MapBox>
        <ContentContainer>
          <MapToggle>
            <ActiveBackground whatview={activeView} />
            <MapToggleBtn
              aria-pressed={activeView === 'all'}
              whatview={activeView === 'all' ? 'true' : 'false'}
              onClick={() => handleToggle('all')}
            >
              {t('map.complete')}
            </MapToggleBtn>
            <MapToggleBtn
              aria-pressed={activeView === 'detail'}
              whatview={activeView === 'detail' ? 'true' : 'false'}
              onClick={() => handleToggle('detail')}
            >
              {t('map.detail')}
            </MapToggleBtn>
          </MapToggle>
        </ContentContainer>
        {activeView === 'all' ? (
          <ContentContainer>
            <MapImgBox>
              <img src={mapImg} className="complete" alt="Complete Map" />
            </MapImgBox>
          </ContentContainer>
        ) : (
          <ContentContainer>
            <MapImgBox style={{ position: 'relative' }}>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{ step: 0.1 }}
                pinch={{ step: 0.1 }}
                onTransformed={handleTransform}
              >
                {({ resetTransform }) => {
                  const handleReset = () => {
                    resetTransform();
                    setIsBigVisible(false);
                    setScale(1);
                  };

                  return (
                    <div style={{ position: 'relative' }}>
                      <TransformComponent>
                        <DetailMap
                          className="detail"
                          src={small}
                          alt="Map"
                          style={{
                            opacity: isBigVisible ? 0.8 : 1,
                            transition: 'opacity 0.5s ease',
                          }}
                        />
                        <DetailMap
                          className="detail"
                          src={big}
                          alt="Map"
                          style={{
                            opacity: isBigVisible ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </TransformComponent>
                      <BtnImg src={btnImg} onClick={handleReset} alt="Reset Scale" />
                    </div>
                  );
                }}
              </TransformWrapper>
            </MapImgBox>
          </ContentContainer>
        )}
      </MapBox>
    </MainMapWrapper>
  );
};

export default MapPage;
