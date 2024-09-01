import styled from 'styled-components';

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
  height: 263px;
  border: 0.1rem solid saddlebrown;
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
  justify-content: space-between;
  gap: 2.8rem;
`;

export const BoothOne = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.white};
`;

export const MapImgBox = styled.img`
  width: calc(100% - 4rem);
  margin: 2.8rem 2rem 4rem;
  height: 26.3rem;
`;
