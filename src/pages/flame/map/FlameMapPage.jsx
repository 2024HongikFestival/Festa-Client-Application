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
import mapImg from '@/assets/webps/map/sitemap.webp';
import Lottie from 'lottie-react';
import arrowAnimation from '@/assets/lotties/siteMap.json';
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
      <MapTitle>{t('sitemap.title')}</MapTitle>
      <MapBox>
        <MapImgBox src={mapImg} />
        <LottieBox>
          <Lottie animationData={arrowAnimation} loop={true} autoplay={true} />
        </LottieBox>
      </MapBox>
      <BoothBox>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">A.</p>
              <p className="name">{t('sitemap.booth1')}</p>
            </BoothNameAndIntro>
            <p className="intro">{t('sitemap.product1')}</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">B.</p>
              <p className="name">{t('sitemap.booth2')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">C.</p>
              <p className="name">{t('sitemap.booth3')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">D.</p>
              <p className="name">{t('sitemap.booth4')}</p>
            </BoothNameAndIntro>
            <p className="intro">-</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <BoothNameAndIntro>
              <p className="al">E.</p>
              <p className="name">{t('sitemap.booth5')}</p>
            </BoothNameAndIntro>
            <p className="intro">{t('sitemap.product5')}</p>
          </BoothIntro>
        </BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
