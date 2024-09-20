import ContentContainer from '@/components/common/ContentContainer';
import * as S from '@/pages/facilities/styles';
import { useTranslation } from 'react-i18next';
import restroomMap from '@/assets/webps/facilities/restroomMap.webp';
import { useRef, useState, useEffect } from 'react';

const RestroomSection = () => {
  const { t } = useTranslation();
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
    // setScrollLeft(mapRef.current.offsetLeft); // 드래그 중 맵의 현재 위치 계산
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
      // handleDragging(e.clientX, e.clientY); // 드래그 중 함수 호출
      optimizedHandleDragging(e.clientX, e.clientY);
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
      // handleDragging(touch.clientX, touch.clientY); // 드래그 중 함수 호출
      optimizedHandleDragging(touch.clientX, touch.clientY);
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
    <>
      <ContentContainer>
        <S.Title>
          {t('facilities.restroom.title1')} <span>{t('facilities.restroom.title2')}</span>
        </S.Title>
        <S.MapContainer
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <S.Map ref={mapRef} src={restroomMap} alt="restroom map" />
        </S.MapContainer>
        <S.RestroomDetail>
          <S.DetailItem>
            <S.Number>1</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building1-1')}</span>
              {t('facilities.restroom.building1-2')}
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor1')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>2</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building2-1')}</span>
              {t('facilities.restroom.building2-2')}
              <br />
              <span>{t('facilities.restroom.building2-3')}</span>
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor2')}</S.Floor>
          </S.DetailItem>
          <S.DetailItem>
            <S.Number>3</S.Number>
            <S.GrayBar />
            <S.Building>
              <span>{t('facilities.restroom.building3-1')}</span>
              {t('facilities.restroom.building3-2')}
            </S.Building>
            <S.Floor>{t('facilities.restroom.floor3')}</S.Floor>
          </S.DetailItem>
        </S.RestroomDetail>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default RestroomSection;
