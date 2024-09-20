import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DraggableMap = ({ src, alt, $left, $bottom }) => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const scrollLeftRef = useRef(0); // useRef로 저장하여 리렌더링 없이 값만 저장
  const scrollTopRef = useRef(0);
  const animationFrameRef = useRef(null); // `requestAnimationFrame`을 위한 ref

  // 드래그 시작 핸들러
  const handleDragStart = (x, y) => {
    setIsDragging(true); // 드래그 상태 true -> 드래그 시작
    setStartX(x); // 드래그 시작된 위치
    setStartY(y);
    scrollLeftRef.current = mapRef.current.offsetLeft; // 드래그 중 맵의 현재 위치 계산
    scrollTopRef.current = mapRef.current.offsetTop;
    mapRef.current.classList.add('dragging');
  };

  // 드래그 중 핸들러
  const handleDragging = (x, y) => {
    if (!isDragging) return; // 드래그 시작 X -> 함수 종료됨. 드래그 중이어야 함

    const deltaX = x - startX; // 드래그 시작 위치와 현재 위치 차이 계산
    const deltaY = y - startY;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const mapWidth = mapRef.current.offsetWidth;
    const mapHeight = mapRef.current.offsetHeight;

    // 맵이 이동할 새 좌표 계산
    let newLeft = scrollLeftRef.current + deltaX;
    let newTop = scrollTopRef.current + deltaY;

    // 맵이 컨테이너 밖으로 못 나가게 제한
    const minLeft = containerWidth - mapWidth;
    const minTop = containerHeight - mapHeight;
    const maxLeft = 0;
    const maxTop = 0;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    mapRef.current.style.left = `${newLeft}px`;
    mapRef.current.style.top = `${newTop}px`;
  };

  // 드래그 중 최적화 핸들러, requestAnimationFrame: 애니메이션 효율적으로 처리해주는 함수
  const optimizedHandleDragging = (x, y) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => handleDragging(x, y));
  };

  // 드래그 종료 핸들러
  const handleDragEnd = () => {
    setIsDragging(false); // 드래그 상태 false -> 드래그 끝남
    mapRef.current.classList.remove('dragging');
  };

  // 마우스 이벤트 핸들러 (desktop)
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY); // 드래그 시작 함수 호출
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      optimizedHandleDragging(e.clientX, e.clientY); // 드래그 중 함수 호출
    }
  };

  const handleMouseUp = () => {
    handleDragEnd(); // 드래그 종료 함수 호출
  };

  // 터치 이벤트 핸들러 (mobile)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY); // 드래그 시작 함수 호출
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault(); // 드래그 중일 때 스크롤 막기
      const touch = e.touches[0];
      optimizedHandleDragging(touch.clientX, touch.clientY); // 드래그 중 함수 호출
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd(); // 드래그 종료 함수 호출
  };

  // 모바일에서 `touchmove` 이벤트의 기본 동작(스크롤) 방지 위해 `passive` 설정을 false로 변경
  useEffect(() => {
    const container = containerRef.current;

    // touchmove 이벤트 리스너를 추가
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    // 클린업 함수: 컴포넌트가 언마운트될 때 실행됨
    return () => {
      // touchmove 이벤트 리스너를 제거
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <MapContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Map ref={mapRef} src={src} alt={alt} $left={$left} $bottom={$bottom} />
    </MapContainer>
  );
};

export default DraggableMap;

DraggableMap.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  $left: PropTypes.string,
  $bottom: PropTypes.string,
};

export const MapContainer = styled.div`
  width: 33.5rem; /* 작은 창의 너비 */
  height: 25rem; /* 작은 창의 높이 */
  overflow: hidden; /* 넘치는 부분 숨기기 */
  position: relative;
  cursor: grab; /* 손 모양 커서 */
`;

export const Map = styled.img`
  position: absolute;
  bottom: ${({ $bottom }) => $bottom || '-1rem'}; /* props로 받은 값 사용, 기본값 -1rem */
  left: ${({ $left }) => $left || '-15.8rem'}; /* props로 받은 값 사용, 기본값 -15.8rem */
  width: 80.325rem; /* 큰 지도의 전체 너비 */
  height: 52.05rem; /* 큰 지도의 전체 높이 */
  cursor: grab;

  &.dragging {
    cursor: grabbing;
  }
`;
