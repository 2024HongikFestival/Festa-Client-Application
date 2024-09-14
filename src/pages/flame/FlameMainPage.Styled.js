import styled from 'styled-components';

export const Flame = styled.div`
  width: 100%;
  position: relative;
  background-color: transparent;
  z-index: 0;
`;
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70.7rem;
  background: linear-gradient(
    180deg,
    rgba(1, 3, 4, 0.7) 0%,
    rgba(1, 3, 4, 0.1) 69.95%,
    rgba(1, 3, 4, 0.3) 90.29%,
    #010304 98%
  );
  background-blend-mode: overlay;
`;
export const Title = styled.span`
  ${(props) => props.theme.fontStyles.flame.subHead};
  font-size: 1.6rem;
  margin-left: 1.2rem;
  position: absolute;
  top: 0;
  text-shadow: 0px 0px 3.2rem rgba(255, 255, 255, 0.25);
  font-style: italic;
  color: ${(props) => props.theme.colors.gray20};
  background-color: transparent;
`;

export const WDFLogo = styled.img`
  width: 28.5rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineUpSection = styled.div`
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  padding-bottom: 6.4rem;
`;
export const WDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  z-index: 2;
  padding-bottom: 5.2rem;
`;

export const LogoContainer = styled.div`
  height: 9.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-top: 3.2rem;
`;

export const SubTitle = styled.span`
  left: -1.5rem;
  top: 0;
  text-shadow: 0px 0px 1.6rem rgba(255, 255, 255, 0.25);
  padding-top: 1.6rem;
  position: absolute;
  ${(props) => props.theme.fontStyles.flame.subHead};
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray20};
`;

export const TitleWrapper = styled.div`
  display: flex;
  top: 1.8rem;
  left: 1rem;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  align-items: center;
`;

export const WDFIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const WDFImage = styled.img`
  display: flex;
  margin-left: 1rem;
  width: 25.8rem;
  height: 36.1rem;
`;

export const Introduction = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  background: linear-gradient(281.55deg, #fcf661 1%, #ff0e2b 15%, #df2020 40%, #bc1700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
  color: transparent;
  text-align: center;
`;

export const Introduction1 = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  text-align: center;
  color: ${(props) => props.theme.colors.gray40};
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
`;

export const WDFName = styled.span`
  ${(props) => props.theme.fontStyles.flame.headline6};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  text-shadow: 0px 0px 12.8px rgba(255, 255, 255, 0.25);
`;

export const WDFDescription = styled.span`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray60};
  padding-bottom: 5.4rem;
  width: 25.9rem;
`;

export const DateSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  padding-top: 8.4rem;
`;

export const DateButton = styled.button`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => (props.selected ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  cursor: pointer;
  border: none;
  background: ${(props) =>
    props.selected ? 'linear-gradient(103.64deg, #df2020 35.72%, #ffb800 88.25%)' : 'transparent'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => (props.selected ? 'transparent' : props.theme.colors.gray80)};
  background-clip: text;

  &:hover {
    background: linear-gradient(103.64deg, #df2020 35.72%, #ffb800 88.25%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const BtnWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
`;

export const DayContent = styled.div`
  height: 46.9rem;
  box-sizing: border-box;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 37.5rem;
  max-width: 76.8rem;
  height: 43.7rem;
`;

export const CarouselImage = styled.img`
  width: 20.6rem;
  height: 20.4rem;
  object-fit: contain;
  margin-top: 2.4rem;
`;

export const ImageContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  width: 27.6rem !important;
  height: 41.3rem;
  border: 0.1rem solid;
  border-image-source: linear-gradient(180deg, #df2121 0%, #cdb3b3 70%, #515356 100%);
  border-image-slice: 1;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  margin: 0 0.8rem;
  box-sizing: border-box;
  position: relative;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const NavigationBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;
`;

export const NavigationButton = styled.button`
  background-color: ${(props) => (props.$active ? props.theme.colors.flameMainColor : props.theme.colors.gray80)};
  border: none;
  width: ${(props) => (props.$active ? '2.4rem' : '1.6rem')};
  height: 0.4rem;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 37.5rem;
  max-width: 76.8rem;
  height: 43.7rem;
  margin-top: 2.8rem;
`;

export const Line = styled.div`
  width: 24.4rem;
  margin-bottom: 1.6rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid;
  border-image-source: linear-gradient(90deg, #ffb801 0%, #df2020 100%);
  border-image-slice: 1;
`;

export const DJName = styled.span`
  ${(props) => props.theme.fontStyles.basic.headline5};
  width: 21.2rem;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
`;

export const DJInfo = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray50};
  width: 24.4rem;
  padding-left: 1.6rem;
  display: flex;
  align-items: center;
`;

export const DJWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 27.6rem;
  height: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 0.8rem;
`;

export const DJInsta = styled.img`
  display: flex !important;
  justify-content: flex-end;
  width: 3.8rem;
  height: 3.8rem;
`;

export const BackGroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const DJContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
