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
  height: 5.6rem;
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
  height: 49.2rem;
`;
