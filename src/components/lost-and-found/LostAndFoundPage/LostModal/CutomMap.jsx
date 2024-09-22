import React, { useEffect, useRef, useState } from 'react';
import { createUseGesture, dragAction, pinchAction, useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import LostAndFoundLocation from '@/assets/webps/lost/LostAndFoundLocation.webp';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MapWrapper = styled.div`
  width: 33.5rem;
  height: 22.5rem;
  overflow: hidden;
  position: relative;
  border: 1px solid #ddd;
  background-color: #b1daff;
`;

const LostAndFoundMap = styled(animated.img)`
  width: 100%;
  height: 100%;
  width: 33.5rem;
  height: 22.5rem;

  object-fit: cover;
  touch-action: none;
`;

const CustomMap = () => {
  const ref = useRef(null);

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
