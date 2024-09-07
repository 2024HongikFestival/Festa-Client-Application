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

import AOS from 'aos';
import { useEffect } from 'react';

const FlameMapPage = () => {
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
      <MapTitle>사이트맵</MapTitle>
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
              <p className="name">
                입장부스 <br />
                (프루틱스)
              </p>
              <p className="intro">프루틱스 상품 제공</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">B.</p>
            <BoothNameAndIntro>
              <p className="name">레드불</p>
              <p className="intro">슈가로로 상품 제공</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">C.</p>
            <BoothNameAndIntro>
              <p className="name">예거 마이스터</p>
              <p className="intro">슈가로로 상품 제공</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">D.</p>
            <BoothNameAndIntro>
              <p className="name">금군양조</p>
              <p className="intro">슈가로로 상품 제공</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="al">E.</p>
            <BoothNameAndIntro>
              <p className="name">스놀</p>
              <p className="intro">슈가로로 상품 제공</p>
            </BoothNameAndIntro>
          </BoothIntro>
        </BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
