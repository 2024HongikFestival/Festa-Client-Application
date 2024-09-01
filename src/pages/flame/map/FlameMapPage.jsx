// 와디페 사이트맵
// url: /flame/map
import { BoothBox, BoothOne, MapBox, MapImgBox, MapTitle, MapWrapper } from './styles.js';
import React from 'react';
import mapImg from '/src/assets/webps/map/sitemap.webp';

const FlameMapPage = () => {
  return (
    <MapWrapper>
      <MapTitle>사이트맵</MapTitle>
      <MapImgBox src={mapImg} />
      <BoothBox>
        <BoothOne>A. 금군양조</BoothOne>
        <BoothOne>B. 레드불</BoothOne>
        <BoothOne>C. 스놀</BoothOne>
        <BoothOne>D. 예거마이스터</BoothOne>
      </BoothBox>
    </MapWrapper>
  );
};

export default FlameMapPage;
