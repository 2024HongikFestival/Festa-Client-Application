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
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // 드래그 시작 핸들러
  const handleDragStart = (x, y) => {
    setIsDragging(true);
    setStartX(x);
    setStartY(y);
    setScrollLeft(mapRef.current.offsetLeft);
    setScrollTop(mapRef.current.offsetTop);
    mapRef.current.classList.add('dragging');
  };

  // 드래그 중 핸들러
  const handleDragging = (x, y) => {
    if (!isDragging) return;

    const deltaX = x - startX;
    const deltaY = y - startY;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const mapWidth = mapRef.current.offsetWidth;
    const mapHeight = mapRef.current.offsetHeight;

    let newLeft = scrollLeft + deltaX;
    let newTop = scrollTop + deltaY;

    const minLeft = containerWidth - mapWidth;
    const minTop = containerHeight - mapHeight;
    const maxLeft = 0;
    const maxTop = 0;

    if (newLeft < minLeft) newLeft = minLeft;
    if (newLeft > maxLeft) newLeft = maxLeft;
    if (newTop < minTop) newTop = minTop;
    if (newTop > maxTop) newTop = maxTop;

    mapRef.current.style.left = `${newLeft}px`;
    mapRef.current.style.top = `${newTop}px`;
  };

  // 드래그 종료 핸들러
  const handleDragEnd = () => {
    setIsDragging(false);
    mapRef.current.classList.remove('dragging');
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleDragging(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault(); // 드래그 중일 때 스크롤 막기
      const touch = e.touches[0];
      handleDragging(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // 모바일에서 `touchmove` 이벤트의 `passive` 설정을 false로 변경
  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
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
