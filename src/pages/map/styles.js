import styled from 'styled-components';

export const MainMapWrapper = styled.div`
  padding: 2.4rem 0 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  gap: 1.6rem;
`;

export const MapToggle = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 13.5px;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 12px;
`;

export const MapToggleBtn = styled.div`
  text-align: center;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  flex: 1;
  color: ${(props) => (props.isActive ? '#1833DB' : '#6B7276')};
  padding: 6px 40.5px 7px 40.5px;

  border-radius: 30px;
  background: ${(props) => (props.isActive ? 'rgba(24, 51, 219, 0.05)' : 'white')};
`;

export const MapToggleBox = styled.div`
  cursor: grab;
  overflow: hidden;
`;

export const MapImgBox = styled.div`
  width: 33.5rem;
  cursor: grab;
  overflow: hidden;
  margin: 2.4rem 0;
  position: relative;
  z-index: 0;

  .card {
    touch-action: none;
    user-select: none;
    will-change: transform;
    width: 33.5rem;
    height: 44.3rem;
    background-size: cover;
  }
`;

export const MapSpan = styled.span`
  position: absolute;
  color: black;
  top: 20px;
  left: 20px;
  z-index: 100;
`;
