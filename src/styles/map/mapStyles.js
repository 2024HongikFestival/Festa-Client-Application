import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
}
  to {
    opacity: 1;
  }
`;

export const MainMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  touch-action: pan-x pan-y;
`;

export const MapTitle = styled.div`
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
  margin-bottom: 2.8rem;
`;

export const MapBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const MapImgBox = styled.div`
  width: 33.5rem;
  cursor: grab;
  overflow: hidden;
  margin-bottom: 2.4rem;
  position: relative;
  z-index: 0;
  background: #b1daff;
  height: 25rem;

  .complete {
    width: 100%;
    height: 25rem;
    animation: ${fadeInUp} 0.5s ease-out;
  }

  .detail {
    position: 'relative';
    animation: ${fadeInUp} 0.5s ease-out;
  }
`;

export const MapSpan = styled.span`
  position: absolute;
  color: black;
  top: 2rem;
  left: 2rem;
  z-index: 100;
`;

export const BtnImg = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 2.5rem;
  z-index: 0;

  animation: ${fadeInUp} 0.5s ease-out;
`;

export const DetailMap = styled.img`
  width: 100%;
  height: 25rem;
  transition: opacity 0.5s ease;
`;
