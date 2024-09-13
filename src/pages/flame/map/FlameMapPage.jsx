// 와디페 사이트맵
// url: /flame/map
import {
  BoothBox,
  BoothIntro,
  BoothNameAndIntro,
  BoothOne,
  LottieBox,
  MapBox,
  MapImgBox,
  MapTitle,
  MapWrapper,
} from './styles.js';
import React from 'react';
import mapImg from '/src/assets/webps/map/sitemap.webp';
import Lottie from 'react-lottie';
import arrowAnimation from './siteMap.json';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import { useEffect } from 'react';

const FlameMapPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({});
  }, []);

  const arrowMotion = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimation,
  };
  return (
    <MapWrapper>
      <MapTitle>{t('flame.map.title')}</MapTitle>
      <MapBox>
        <MapImgBox src={mapImg} />
        <LottieBox>
          <Lottie className="arrow" options={arrowMotion} margin={0} />
        </LottieBox>
      </MapBox>
      <BoothBox>
        <BoothOne>
          <BoothIntro>
            <p className="al">A.</p>
            <BoothNameAndIntro>
              <p className="name">{t('flame.map.booth1')}</p>
              <p className="intro">{t('flame.map.product1')}</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">B.</p>
            <BoothNameAndIntro>
              <p className="name">{t('flame.map.booth2')}</p>
              <p className="intro">-</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">C.</p>
            <BoothNameAndIntro>
              <p className="name">{t('flame.map.booth3')}</p>
              <p className="intro">-</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">D.</p>
            <BoothNameAndIntro>
              <p className="name">{t('flame.map.booth4')}</p>
              <p className="intro">-</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">E.</p>
            <BoothNameAndIntro>
              <p className="name">{t('flame.map.booth5')}</p>
              <p className="intro">{t('flame.map.product5')}</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
