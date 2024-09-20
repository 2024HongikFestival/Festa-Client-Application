import React, { useEffect, useRef } from 'react';
import Panzoom from '@panzoom/panzoom';
import styled from 'styled-components'; // 혹은 stitches 사용
import LostAndFoundLocation from '@/assets/webps/lost/LostAndFoundLocation.webp';

const MapWrapper = styled.div`
  width: 33.5rem; // 고정된 너비
  height: 22.5rem; // 고정된 높이
  overflow: hidden; // 컨테이너 밖으로 넘치지 않도록 설정
  position: relative; // 자식 요소들에 대한 위치 기준
  border: 1px solid #ddd; // 시각적인 구분을 위해 추가
`;

const CustomMap = () => {
  const panzoomElement = useRef(null);

  useEffect(() => {
    const panzoomInstance = Panzoom(panzoomElement.current, {
      maxScale: 5, // 최대 확대
      minScale: 1, // 최소 축소
      contain: 'outside', // 컨테이너 밖으로 나갈 수 있음
      startScale: 1, // 초기 확대 배율 설정
      startX: 300, // 초기 X 위치
      startY: 300, // 초기 Y 위치
    });

    // 마우스 휠을 통한 줌 이벤트 추가
    panzoomElement.current.addEventListener('wheel', panzoomInstance.zoomWithWheel);

    return () => {
      panzoomInstance.destroy(); // 언마운트 시 Panzoom 인스턴스 제거
    };
  }, []);

  return (
    <MapWrapper ref={panzoomElement}>
      <LostAndFoundMap
        src={LostAndFoundLocation}
        alt="Custom Map"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </MapWrapper>
  );
};

export default CustomMap;

const LostAndFoundMap = styled.img``;
