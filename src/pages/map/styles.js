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
  position: relative;
  width: 33.5rem;
  display: flex;
  padding: 8px 13.5px;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const MapToggleBtn = styled.div`
  text-align: center;
  cursor: pointer;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  flex: 1;
  color: ${({ whatview, theme }) => (whatview === 'true' ? `${theme.colors.hongikBlue}` : `${theme.colors.gray60}`)};
  padding: 6px 0;
  height: 3.6rem;
  max-width: 14.9rem;
  border-radius: 3rem;
  background-color: transparent; /* 버튼 자체는 투명하게 유지 */

  /* background: ${(props) => (props.whatview === 'true' ? 'rgba(24, 51, 219, 0.05)' : 'white')}; */
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
  height: 22rem;

  .complete {
    width: 100%;
    height: 22rem;
  }
`;

export const MapSpan = styled.span`
  position: absolute;
  color: black;
  top: 20px;
  left: 20px;
  z-index: 100;
`;

export const BtnImg = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 2.5rem;
  z-index: 0;

  animation: ${fadeInUp} 0.5s ease-out;
`;

export const BuildingLabel = styled.div`
  color: ${(props) => props.theme.colors.hongikNavy};
  ${(props) => props.theme.fontStyles.basic.eventTitle};
  font-weight: 1000;
`;

export const DetailMap = styled.img`
  width: 33.5rem;
  height: 22rem;
  transition: opacity 0.5s ease;
`;

export const ActiveBackground = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.3rem;
  width: 14.9rem;
  height: 3.6rem;
  background-color: rgba(24, 51, 219, 0.05);
  border-radius: 3rem;
  transition: transform 0.25s ease;

  /* 탭에 따라 슬라이딩 배경의 위치를 설정 */
  transform: ${({ whatview }) => (whatview === 'all' ? 'translateX(0)' : 'translateX(15.8rem)')};

  @media (min-width: 600px) {
    top: 0.4rem;
  }
`;
