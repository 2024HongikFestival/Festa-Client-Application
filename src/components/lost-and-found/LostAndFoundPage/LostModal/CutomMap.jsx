import React from 'react';
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
  touch-action: pan-x pan-y;
`;

const LostAndFoundMap = styled.div`
  width: 100%;
  height: 100%;
  width: 33.5rem;
  height: 22.5rem;
  background-image: url(${LostAndFoundLocation});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  object-fit: cover;
  touch-action: pan-x pan-y;
`;

const CustomMap = () => {
  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  return (
    <TransformWrapper
      initialScale={3.5}
      initialPositionX={-250}
      initialPositionY={-350}
      minScale={1}
      maxScale={6}
      onTouchMove={handleTouchMove}
    >
      <MapWrapper>
        <TransformComponent>
          <LostAndFoundMap alt="Custom Map" />
        </TransformComponent>
      </MapWrapper>
    </TransformWrapper>
  );
};

export default CustomMap;
