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
  /* padding: 2.4rem 0 6.4rem; */
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

export const MapToggle = styled.div`
  position: relative;
  width: 33.5rem;
  display: flex;
  padding: 0.8rem 1.35rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const MapToggleBtn = styled.div`
  text-align: center;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.basic.body1Semi};
  ${({ $whatview, theme }) =>
    $whatview === 'true' ? `${theme.fontStyles.basic.body1Bold}` : `${theme.fontStyles.basic.body1Semi}`};
  flex: 1;
  color: ${({ $whatview, theme }) => ($whatview === 'true' ? `${theme.colors.hongikBlue}` : `${theme.colors.gray60}`)};
  padding: 0.6rem 0;
  height: 3.6rem;
  max-width: 14.9rem;
  border-radius: 3rem;
  background-color: transparent;
`;

export const MapToggleBox = styled.div`
  cursor: grab;
  overflow: hidden;
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

export const ActiveBackground = styled.div`
  position: absolute;
  left: 1.3rem;
  width: 14.9rem;
  height: 3.6rem;
  background-color: rgba(24, 51, 219, 0.05);
  border-radius: 3rem;
  transition: transform 0.25s ease;
  transform: ${({ $whatview }) => ($whatview === 'all' ? 'translateX(0)' : 'translateX(15.8rem)')};
`;
