import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import mapImg from '@/assets/webps/map/completemap.webp';
import btnImg from '@/assets/webps/map/buttonscale.webp';
import small from '@/assets/webps/map/detailMap2.webp';
import medium from '@/assets/webps/map/2step.webp';
import big from '@/assets/webps/map/bigmap.webp';
import talk from '@/assets/webps/map/talk.webp';

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
  TalkBox,
  TalkDiv,
} from './styles.js';

const MapPage = () => {
  const [activeView, setActiveView] = useState('all');
  const { t } = useTranslation();
  const [isBigVisible, setIsBigVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [Istalk, setIsTalk] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // 페이지뷰 이벤트 발송
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Map Page',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  const handleToggle = (view) => {
    setActiveView(view);
    if (view === 'detail') {
      setShowOverlay(true); // 상세 탭 클릭 시 오버레이 표시
    }
  };

  const removeTalk = () => {
    setShowOverlay(false);
    setIsTalk(true);
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
            <MapImgBox $whatview={activeView}>
              <img src={mapImg} className="complete" alt="Complete Map" />
            </MapImgBox>
          </ContentContainer>
        ) : (
          <div style={{ position: 'relative', width: 'auto', height: '42rem' }}>
            <ContentContainer>
              {showOverlay && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                  }}
                  onClick={removeTalk}
                >
                  <TalkBox src={talk} />
                  <TalkDiv>
                    {t('map.talk1')}
                    <span>{t('map.talk2')}</span>
                    {t('map.talk3')}
                    <br />
                    {t('map.talk4')}
                    <span>{t('map.talk5')}</span>
                    {t('map.talk6')}
                  </TalkDiv>
                </div>
              )}
              <TransformWrapper
                wrapperClass="my-wrapper"
                wrapperStyle={{ position: 'relative' }}
                initialScale={1}
                sensitivity={5}
                pinchSensitivity={4}
                minScale={1}
                panAnimationSpeed={2}
                pinchAnimationSpeed={2}
                enableZoomThrottling={true}
                onTransformed={handleTransform}
                maxScale={10}
                initialPositionY={120}
                centerOnInit={true}
                initialPositionX={0}
                disablePadding={true}
                wheel={{ step: 0.1, smoothStep: 0.05 }}
                pinch={{ step: 0.1 }}
                onPinchStart={handlePinchStart}
                onPanningStart={handlePinch}
                smooth={true}
              >
                {({ resetTransform }) => {
                  const handleReset = () => {
                    resetTransform();
                    setIsBigVisible(false);
                    setScale(1);
                  };

                  return (
                    <div style={{ position: 'relative', width: 'auto', margin: ' 0 10rem' }}>
                      <MapImgBox $whatview={activeView}>
                        <div style={{ position: 'relative', width: 'auto' }}>
                          <TransformComponent
                            wrapperClass="my-wrapper"
                            wrapperStyle={{
                              position: 'relative',
                              width: 'auto',
                              height: '42.2rem',
                            }}
                            pinchSensitivity={6}
                          >
                            <DetailMap
                              className="one"
                              src={small}
                              alt="Small Map"
                              style={{
                                opacity: scale < 1.8 ? 1 : 0.8,
                                transition: 'opacity 0.7s ease',
                                width: 'auto',
                              }}
                            />
                            <DetailMap
                              className="two"
                              src={medium}
                              alt="Medium Map"
                              style={{
                                opacity: scale >= 1.8 && scale < 3.5 ? 1 : 0,
                                transition: 'opacity 0.6s ease',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 'auto',
                              }}
                            />
                            <DetailMap
                              className="three"
                              src={big}
                              alt="Big Map"
                              style={{
                                opacity: scale >= 3.5 ? 1 : 0,
                                transition: 'opacity 0.6s ease',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 'auto',
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
          </div>
        )}
      </MapBox>
    </MainMapWrapper>
  );
};

export default MapPage;
