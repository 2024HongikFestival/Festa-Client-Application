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
import mapImg from '@/assets/webps/map/completemap.webp';
import btnImg from '@/assets/webps/map/buttonscale.webp';
import small from '@/assets/webps/map/detailMap2.webp';
import medium from '@/assets/webps/map/2step.webp'; // medium 이미지 경로
import big from '@/assets/webps/map/bigmap.webp';
import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapPage = () => {
  const [activeView, setActiveView] = useState('all');
  const { t } = useTranslation();
  const [isBigVisible, setIsBigVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [isDetail, setIsDetail] = useState(false);

  const handleToggle = (view) => {
    setActiveView(view);
  };

  const handleTransform = (e) => {
    const currentScale = e.instance.transformState.scale;
    setScale(currentScale);
    setIsBigVisible(currentScale > 1.3); // scale 값 1.3으로 변경
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
            <MapImgBox className="detail">
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={10}
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
                          className="one"
                          src={small}
                          alt="Small Map"
                          scale={scale}
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
                            opacity: scale >= 3.5 ? 1 : 0, // 큰 지도
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
