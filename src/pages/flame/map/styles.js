import styled, { keyframes } from 'styled-components';

export const MapWrapper = styled.div`
  padding: 2.4rem 0 6.4rem;
  display: grid;
  width: 100%;
`;

export const MapTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
  width: 100%;
`;

export const MapBox = styled.div`
  width: calc(100% - 4rem);
  margin: 2.8rem 2rem 4rem;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BoothBox = styled.div`
  width: calc(100% - 5.6rem);
  margin: 0 2rem 0 3.6rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const BoothOne = styled.div`
  width: calc(100% / 2 - 2.4rem);
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;

  gap: 4.4rem;
  img {
    width: 7.7rem;
  }

  .snol {
    color: white;
  }
`;

export const MapImgBox = styled.img`
  display: inline-block;
  max-width: 33.5rem;
  width: 100%;
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
  flex-direction: column;
  text-align: left;
  justify-content: space-between;

  gap: 0.3rem;

  .al {
    ${(props) => props.theme.fontStyles.basic.subHeadBold}
    color: ${(props) => props.theme.colors.white};
  }

  .intro {
    ${(props) => props.theme.fontStyles.basic.body2Med};
    color: ${(props) => props.theme.colors.gray60};
  }
`;

export const BoothNameAndIntro = styled.div`
  gap: 0.8rem;
  display: flex;
  text-align: left;
  .name {
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
    color: ${(props) => props.theme.colors.white};
  }
`;
