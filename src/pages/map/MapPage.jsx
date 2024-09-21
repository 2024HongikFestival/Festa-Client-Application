import React, { useEffect, useRef, useState } from 'react';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import ContentContainer from '@/components/common/ContentContainer.jsx';
import mapImg from './map.webp';
import { MapBox, MapTitle, MapToggle, MapToggleBtn, MainMapWrapper, MapToggleBox, MapImgBox } from './styles.js';

const MapPage = () => {
  const [activeView, setActiveView] = useState('all');

  const useGesture = createUseGesture([dragAction, pinchAction]);
  const ref = useRef(null);
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], memo, ...rest }) => {
        // 요소의 현재 스케일에 따라 드래그 범위를 조정
        const scale = style.scale.get();
        console.log(scale);
        const { width, height } = ref.current.getBoundingClientRect();
        const maxX = Math.max(0, width - width * scale);
        const maxY = Math.max(0, height - height * scale);

        // 요소가 박스 범위를 벗어나지 않도록 조정
        const clampedX = Math.min(Math.max(x, -maxX), 0);
        const clampedY = Math.min(Math.max(y, -maxY), 0);

        // 수정
        api.start({ clampedX, y });
      },

      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
        if (first) {
          if (ref.current) {
            const { width, height, x, y } = ref.current.getBoundingClientRect();
            const tx = ox - (x + width / 2);
            const ty = oy - (y + height / 2);
            memo = [style.x.get(), style.y.get(), tx, ty];
            console.log(memo);
          } else {
            console.warn('ref.current is null or undefined');
            memo = memo || [0, 0, 0, 0];
          }
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, rotateZ: a, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 2 }, rubberband: true },
    }
  );

  const handleToggle = (view) => {
    setActiveView(view);
  };

  return (
    <MainMapWrapper>
      <MapTitle>로드맵</MapTitle>
      <MapBox>
        <ContentContainer>
          <MapToggle>
            <MapToggleBtn
              aria-pressed={activeView === 'all'}
              isActive={activeView === 'all'}
              onClick={() => handleToggle('all')}
            >
              전체지도
            </MapToggleBtn>
            <MapToggleBtn
              aria-pressed={activeView === 'detail'}
              isActive={activeView === 'detail'}
              onClick={() => handleToggle('detail')}
            >
              상세지도
            </MapToggleBtn>
          </MapToggle>
        </ContentContainer>

        <ContentContainer>
          <MapImgBox>
            {' '}
            <animated.img className="card" src={mapImg} ref={ref} style={style} />
          </MapImgBox>
        </ContentContainer>
      </MapBox>
    </MainMapWrapper>
  );
};

export default MapPage;
