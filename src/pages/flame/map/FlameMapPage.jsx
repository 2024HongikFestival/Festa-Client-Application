// 와디페 사이트맵
// url: /flame/map
import { BoothBox, BoothIntro, BoothOne, LottieBox, MapBox, MapImgBox, MapTitle, MapWrapper } from './styles.js';
import React from 'react';
import mapImg from '/src/assets/webps/map/sitemap.webp';
import Lottie from 'react-lottie';
import arrowAnimation from './siteMap.json';
import gmLogo from '/src/assets/webps/map/gm.webp';
import masterLogo from '/src/assets/webps/map/master.webp';
import redBullLogo from '/src/assets/webps/map/redBull.webp';
import snolLogo from '/src/assets/webps/map/image02_1.webp';

const FlameMapPage = () => {
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
            <p className="name">A. 입장부스 (프루틱스)</p>
            <p className="intro">프루틱스 상품 제공</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="name">B. 레드불</p>
            <p className="intro">슈가로로 상품 제공</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="name">C. 예거 마이스터</p>
            <p className="intro">슈가로로 상품 제공</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="name">D. 금군양조</p>
            <p className="intro">슈가로로 상품 제공</p>
          </BoothIntro>
        </BoothOne>
        <BoothOne>
          <BoothIntro>
            <p className="name">E. 스놀</p>
            <p className="intro">슈가로로 상품 제공</p>
          </BoothIntro>
        </BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
