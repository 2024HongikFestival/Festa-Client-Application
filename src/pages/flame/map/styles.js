import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MapWrapper = styled.div`
  padding: 2.4rem 0 6.4rem;
  display: grid;
`;

export const MapTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
`;

export const MapBox = styled.div`
  width: calc(100% - 4rem);
  margin: 2.8rem 2rem 4rem;
  position: relative;
  display: flex;
  justify-content: center;

  .arrow {
  }

  /* border-image: linear-gradient(0deg, rgba(255, 255, 255, 0.25) 20%, rgba(223, 33, 33, 0.8) 100%) 1;
  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.25); */
  /* 와디페 line shadow */
  /* box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.25); */
  // background: linear-gradient(0deg, red, blue);
`;

export const BoothBox = styled.div`
  width: calc(100% - 4rem);
  margin: 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
`;

export const BoothOne = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  animation: ${fadeInUp} 0.8s ease-out;

  gap: 4.4rem;
  img {
    width: 77px;
  }

  .snol {
    color: white;
  }
`;

export const MapImgBox = styled.img`
  width: 33.5rem;
  max-width: 33.5rem;
  height: 26.3rem;
`;

export const LottieBox = styled.div`
  width: 33.5rem;
  position: absolute;
  top: 0;
`;

export const BoothIntro = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.8rem;
  .name {
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
    color: ${(props) => props.theme.colors.white};
  }

  .intro {
    ${(props) => props.theme.fontStyles.basic.body2Med};
    color: ${(props) => props.theme.colors.gray60};
  }
`;
