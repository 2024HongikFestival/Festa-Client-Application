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
import arrowAnimation from '/src/assets/lotties/siteMap.json';
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
      <MapTitle>{t('map.title')}</MapTitle>
      <MapBox>
        <MapImgBox src={mapImg} />
        <LottieBox>
          <Lottie className="arrow" options={arrowMotion} margin={0} />
        </LottieBox>
      </MapBox>
      <BoothBox>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">A.</p>
              <p className="name">{t('map.booth1')}</p>
            </BoothNameAndIntro>
            <p className="intro">{t('map.product1')}</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">B.</p>
              <p className="name">{t('map.booth2')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">C.</p>
              <p className="name">{t('map.booth3')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">D.</p>
              <p className="name">{t('map.booth4')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">E.</p>
              <p className="name">{t('map.booth5')}</p>
            </BoothNameAndIntro>
            <p className="intro">{t('map.product5')}</p>
          </BoothIntro>
        </BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
