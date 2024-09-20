import React, { useEffect, useRef, useState } from 'react';
import { createUseGesture, dragAction, pinchAction, useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components'; // 혹은 stitches 사용
import LostAndFoundLocation from '@/assets/webps/lost/LostAndFoundLocation.webp';

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
  const [style, api] = useSpring(() => ({
    // useSpring으로 x, y 좌표와 scale 초기화
    x: 200,
    y: -100,
    scale: 4,
  }));

  const useGesture = createUseGesture([dragAction, pinchAction]); // 드래그와 핀치 제스처 설정
  useEffect(() => {
    const handler = (e) => e.preventDefault(); // 브라우저 기본 줌 동작 방지
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  const calculateBounds = (scale) => {
    if (!ref.current) return { left: 0, right: 0, top: 0, bottom: 0 };

    const { width, height } = ref.current.getBoundingClientRect();
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;

    const maxX = Math.max(0, scaledWidth - width); // 확대되었을 때의 최대 X 이동 가능 범위
    const maxY = Math.max(0, scaledHeight - height); // 확대되었을 때의 최대 Y 이동 가능 범위

    return {
      left: -maxX / 2,
      right: maxX / 2,
      top: -maxY / 2,
      bottom: maxY / 2,
    };
  };

  //let memo = null; // 초기 위치와 스케일을 기억하기 위한 변수

  useGesture(
    {
      // 드래그 제스처 처리
      onDrag: ({ pinching, cancel, offset: [x, y], memo, down, ...rest }) => {
        // if (pinching) return cancel();
        // api.start({ x, y });
        if (!down) return; // 클릭만 했을 때는 드래그하지 않도록 처리

        if (!memo) {
          const currentX = style.x.get(); // 현재 x 좌표 가져오기
          const currentY = style.y.get(); // 현재 y 좌표 가져오기
          memo = [currentX, currentY]; // 초기 좌표 저장
        }

        const scale = style.scale.get(); // 현재 스케일 가져오기
        const { width, height } = ref.current.getBoundingClientRect(); // 이미지 크기 가져오기
        const imgWidth = width * scale; // 스케일에 따른 이미지 너비 계산
        const imgHeight = height * scale; // 스케일에 따른 이미지 높이 계산

        const maxX = Math.max(0, imgWidth - width); // 드래그 가능한 최대 X 좌표
        const maxY = Math.max(0, imgHeight - height); // 드래그 가능한 최대 Y 좌표

        const clampedX = Math.min(Math.max(memo[0] + x, -maxX), maxX); // X 좌표 범위 제한
        const clampedY = Math.min(Math.max(memo[1] + y, -maxY), maxY); // Y 좌표 범위 제한

        api.start({ x: clampedX, y: clampedY }); // 새로운 x, y 좌표로 애니메이션 시작
      },

      // 핀치 제스처 처리
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
        if (first) {
          const { width, height, x, y } = ref.current.getBoundingClientRect(); // 이미지 크기 및 좌표 가져오기
          const tx = ox - (x + width / 2); // 핀치 시작 시점의 X 좌표 계산
          const ty = oy - (y + height / 2); // 핀치 시작 시점의 Y 좌표 계산
          memo = [style.x.get(), style.y.get(), tx, ty]; // 초기 x, y 좌표와 핀치 시작점 저장
        }

        const x = memo[0] - (ms - 1) * memo[2]; // 스케일 변화에 따른 x 좌표 계산
        const y = memo[1] - (ms - 1) * memo[3]; // 스케일 변화에 따른 y 좌표 계산
        api.start({ scale: s, rotate: a, x, y }); // 새로운 스케일과 좌표로 애니메이션 시작
        return memo;
      },
    },
    {
      target: ref, // 제스처가 적용될 이미지 요소
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: calculateBounds(style.scale.get()),
        //scaleBounds: calculateBounds(style.scale.get()),
        rubberband: true,
        filterTaps: true, // 클릭만 하는 동작은 드래그로 인식하지 않도록 함
        threshold: 10, // 드래그 최소 거리를 10px로 설정
      }, // 드래그 시작 시 초기 좌표 설정
      pinch: { scaleBounds: { min: 1, max: 5 }, rubberband: true }, // 핀치 제스처의 스케일 제한과 튕김 효과 설정
      //bounds: { left: -100, right: 100, top: -50, bottom: 50 },
      //rubberband: true,
    }
  );

  return (
    <MapWrapper>
      <LostAndFoundMap
        src={LostAndFoundLocation}
        alt="Custom Map"
        ref={ref} // 이미지 요소에 대한 ref 설정
        style={{ x: style.x, y: style.y, scale: style.scale }} // 애니메이션 적용된 스타일
      />
    </MapWrapper>
  );
};

export default CustomMap;
