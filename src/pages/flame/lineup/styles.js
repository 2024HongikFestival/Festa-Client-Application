import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  padding-bottom: 5.6rem;
  padding-top: 2.4rem;
`;

export const Title = styled.h2`
  align-self: stretch;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  ${(props) => props.theme.fontStyles.flame.headline3};
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.8rem;
  align-items: center;
  align-self: stretch;
`;

export const DayButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? 'transparent' : props.theme.colors.gray80)};
  cursor: pointer;
  background: ${(props) => (props.selected ? 'linear-gradient(104deg, #df2020 35.72%, #ffb800 88.25%)' : 'none')};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => (props.selected ? 'transparent' : 'inherit')};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  padding: 0;

  span {
    display: block;
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.5rem;
  height: 37.4rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  border: 0.1rem solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%) 1;
  gap: 1.6rem;
`;

export const CardImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29.7rem;
  margin-top: 1.8rem;
  border-bottom: 0.1rem solid transparent;
  border-image: linear-gradient(90deg, #ffb801 0%, #df2020 100%) 1;
`;

export const DjImage = styled.img`
  width: 20.1rem;
  height: 20.4rem;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 29.7rem;
  height: 8.9rem;
  background: linear-gradient(0deg, #010304 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
`;

export const CardDescriptionContainer = styled.div`
  display: flex;
  width: 29.7rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
`;

export const DjProfile = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.headline5};
`;

export const InstaLogo = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  cursor: pointer;
`;

export const Description = styled.div`
  align-self: stretch;
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;
