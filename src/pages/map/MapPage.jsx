import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import mapImg from '@/assets/webps/map/completemap.webp';
import btnImg from '@/assets/webps/map/buttonscale.webp';
import small from '@/assets/webps/map/detailMap2.webp';
import medium from '@/assets/webps/map/2step.webp';
import big from '@/assets/webps/map/bigmap.webp';

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
      <MapTitle>{t('map.title')}</MapTitle>
      <MapBox>
        <ContentContainer>
          <MapToggle>
            <ActiveBackground $whatview={activeView} />
            <MapToggleBtn
              aria-pressed={activeView === 'all'}
              $whatview={activeView === 'all' ? 'true' : 'false'}
              onClick={() => handleToggle('all')}
            >
              {t('map.complete')}
            </MapToggleBtn>
            <MapToggleBtn
              aria-pressed={activeView === 'detail'}
              $whatview={activeView === 'detail' ? 'true' : 'false'}
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
            <TransformWrapper
              initialScale={1}
              sensitivity={5}
              pinchSensitivity={4}
              minScale={1}
              panAnimationSpeed={2}
              pinchAnimationSpeed={2}
              enableZoomThrottling={true}
              maxScale={10}
              wheel={{ step: 0.1 }}
              pinch={{ step: 0.1 }}
              onTransformed={handleTransform}
              onPinchStart={handlePinchStart}
              onPanningStart={handlePinch}
              style={{ width: '100%', height: '100%', touchAction: 'none' }}
            >
              {({ resetTransform }) => {
                const handleReset = () => {
                  resetTransform();
                  setIsBigVisible(false);
                  setScale(1);
                };

                return (
                  <div style={{ position: 'relative', width: '100%', height: '100%', margin: ' 0 10rem' }}>
                    <MapImgBox className="detail">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <TransformComponent
                          pinchSensitivity={6}
                          style={{ position: 'relative', width: '150%', height: '100%' }}
                        >
                          <DetailMap
                            className="one"
                            src={small}
                            alt="Small Map"
                            style={{
                              opacity: scale < 1.3 ? 1 : 0,
                              transition: 'opacity 0.3s ease',
                            }}
                          />
                          <DetailMap
                            className="two"
                            src={medium}
                            alt="Medium Map"
                            style={{
                              opacity: scale >= 1.3 && scale < 3.5 ? 1 : 0,
                              transition: 'opacity 0.3s ease',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                            }}
                          />
                          <DetailMap
                            className="three"
                            src={big}
                            alt="Big Map"
                            style={{
                              opacity: scale >= 3.5 ? 1 : 0,
                              transition: 'opacity 0.3s ease',
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
                    </MapImgBox>
                  </div>
                );
              }}
            </TransformWrapper>
          </ContentContainer>
        )}
      </MapBox>
    </MainMapWrapper>
  );
};

export default MapPage;
