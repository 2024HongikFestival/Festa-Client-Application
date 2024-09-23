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
      wheel={{ disabled: true }}
      pinch={{ disabled: true }}
      pan={{ disabled: false }}
      zoomIn={{ disabled: true }}
      zoomOut={{ disabled: true }}
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
