import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import button from '@/assets/webps/facilities/moveBtn.webp';

const DraggableMap = ({ src, alt, initialScale, initialPositionX, initialPositionY }) => {
  return (
    <TransformWrapper
      initialScale={initialScale}
      initialPositionX={initialPositionX}
      initialPositionY={initialPositionY}
      minScale={1}
      maxScale={1}
      wheel={{ disabled: true }} // 스크롤 줌 X
      pinch={{ disabled: true }} // 핀치 줌 X
      pan={{ disabled: false }} // 팬 기능 O
      zoomIn={{ disabled: true }} // 줌 인 X
      zoomOut={{ disabled: true }} // 줌 아웃 X
      doubleClick={{ disabled: true }}
    >
      <MapWrapper>
        <TransformComponent>
          <Map src={src} alt={alt} />
        </TransformComponent>
        <FloatingButton src={button} alt="button" />
      </MapWrapper>
    </TransformWrapper>
  );
};

// PropTypes를 통해 props 타입 검사
DraggableMap.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  initialScale: PropTypes.number.isRequired,
  initialPositionX: PropTypes.number.isRequired,
  initialPositionY: PropTypes.number.isRequired,
};

export default DraggableMap;

const MapWrapper = styled.div`
  position: relative;
  width: 33.5rem;
  height: 25rem;
  background-color: #b1daff;
`;

const Map = styled.img`
  width: 33.5rem;
  height: 25rem;
  object-fit: cover;
`;

const FloatingButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1.3rem;
  bottom: 1.2rem;
`;
