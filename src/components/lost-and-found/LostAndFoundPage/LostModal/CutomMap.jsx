import React, { useEffect, useRef, useState } from 'react';
import { createUseGesture, dragAction, pinchAction, useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components'; // 혹은 stitches 사용
import LostAndFoundLocation from '@/assets/webps/lost/LostAndFoundLocation.webp';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapWrapper = styled.div`
  width: 33.5rem; // 고정된 너비
  height: 22.5rem; // 고정된 높이
  //overflow: hidden; // 컨테이너 밖으로 넘치지 않도록 설정
  position: relative; // 자식 요소들에 대한 위치 기준
  border: 1px solid #ddd; // 시각적인 구분을 위해 추가
`;

const LostAndFoundMap = styled(animated.img)`
  // animated로 이미지 애니메이션 적용
  width: 100%;
  height: 100%;
  width: 33.5rem; // 고정된 너비
  height: 22.5rem; // 고정된 높이

  object-fit: cover; // 이미지가 고정된 너비와 높이에 맞게 표시되도록 설정
  touch-action: none;
`;

const CustomMap = () => {
  const ref = useRef(null); // 이미지 요소에 대한 ref

  return (
    <TransformWrapper initialScale={3.5} initialPositionX={-410} initialPositionY={-550} minScale={1} maxScale={6}>
      <MapWrapper>
        <TransformComponent>
          <LostAndFoundMap src={LostAndFoundLocation} alt="Custom Map" />
        </TransformComponent>
      </MapWrapper>
    </TransformWrapper>
  );
};

export default CustomMap;
