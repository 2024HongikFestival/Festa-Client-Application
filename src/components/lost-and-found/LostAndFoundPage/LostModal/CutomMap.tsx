import React from 'react';
import PanZoom from 'react-easy-panzoom';
import styled from 'styled-components'; // 혹은 stitches 사용
import * as S from './LostModal.styled';
import LostAndFoundLocation from '@/assets/webps/lost/LostAndFoundLocation.webp';

const MapWrapper = styled.div`
  width: 33.5rem; // 고정된 너비
  height: 22.5rem; // 고정된 높이
  overflow: hidden; // 컨테이너 밖으로 넘치지 않도록 설정
  position: relative; // 자식 요소들에 대한 위치 기준
  border: 1px solid #ddd; // 시각적인 구분을 위해 추가
`;

const CustomMap = () => {
  const panZoomRef = React.useRef(null);

  return (
    <MapWrapper>
      <PanZoom
        ref={panZoomRef}
        enableBoundingBox={true} // 부모 컨테이너 범위에서만 이동 가능
        zoomSpeed={1.2}
        minZoom={1}
        maxZoom={5}
        boundaryRatioVertical={1}
        boundaryRatioHorizontal={1}
        initialZoom={2} // 컨테이너에 맞게 초기 확대 비율 설정
        initialX={-100} // X축으로 이동
        initialY={-600} // Y축으로 이동
        autoCenter={false} // 중앙 정렬
        autoCenterZoomLevel={2} // 확대된 상태에서 중앙 정렬
        contain={'inside'}
        style={{ width: '100%', height: '100%' }} // 부모 컨테이너 크기에 맞춤
      >
        {/*<S.LostCenterMap />*/}
        <LostAndFoundMap
          src={LostAndFoundLocation}
          alt="Custom Map"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </PanZoom>
    </MapWrapper>
  );
};

export default CustomMap;

const LostAndFoundMap = styled.img``;
