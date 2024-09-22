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

const backgroundPulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

const flagWaving = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(1rem) rotate(-3deg);
  }
  50% {
    transform: translateX(-1rem) rotate(3deg);
  }
  75% {
    transform: translateX(0.5rem) rotate(-2deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

export const TTWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const TTTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
`;

export const TTBox = styled.div`
  padding-bottom: 5.6rem;
  margin-top: 2.4rem;
`;

export const DaysBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.8rem 3.15rem;
  width: calc(100% - 6.3rem);
`;

export const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
    color: ${(props) => props.theme.colors.gray80};
    background: none;
  }

  &.active p {
    background: ${({ $day }) => {
      if ($day === 2) {
        return 'radial-gradient(50% 50% at 50% 50%, #F0F423 0%, #DF2020 100%)';
      } else {
        return 'linear-gradient(104deg, #df2020 35.72%, #ffb800 88.25%)';
      }
    }};
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const TimeTableBox = styled.div`
  margin: 0 2.55rem;
  width: calc(100% - 5.1rem);
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const TimeTableOneBox = styled.div`
  display: flex;
  min-height: 7.2rem;
  .active {
    min-height: 14rem;
  }
`;

export const RedLine = styled.div`
  position: relative;
  width: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  .fullBtn {
    max-width: 2.2rem;
  }

  .emptyBtn {
    max-width: 1.4rem;
  }

  img {
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0.2rem;
    height: 100%;
    background-color: ${(props) => props.theme.colors.flameMainColor};
  }
`;

export const TimeTableText = styled.div`
  width: calc(100% - 2.6rem);
  margin-left: 3.2rem;
  padding: 2rem 1rem 2rem 1.6rem;
  display: flex;
  justify-content: space-between;

  .hot {
    display: flex;
    gap: 1rem;
  }

  .hotBox {
    display: flex;
    align-items: center;
  }
`;

export const TimeTableName = styled.span`
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.gray70};
  max-width: 15rem;
  display: inline;
  @media (min-width: 37.5rem) and (max-width: 60rem) {
    max-width: 20rem;
  }
`;

export const TimeTableHot = styled.div`
  display: flex;
  width: 3.4rem;
  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 1.55rem;
  background: linear-gradient(90deg, #4d0330 0%, #300304 100%);
  color: #f53d3d;
  ${(props) => props.theme.fontStyles.basic.headline5}
  font-size: 1rem;
`;

export const TimeTableTime = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray70};
`;

export const NoticeBox = styled.div`
  margin: 6.4rem 2rem 0;
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
`;

export const NoticeTitle = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  color: ${(props) => props.theme.colors.gray50};
  text-align: center;
  margin-bottom: 1.2rem;
`;

export const NoticeText = styled.div`
  width: 100%;
  height: 100%;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  p {
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fontStyles.basic.captionMed};
  }
`;

export const NoticeTextContent = styled.span`
  display: flex;
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;

export const LiveConcert = styled.div`
  width: calc(100% - 2.4rem);
  margin-left: 2.4rem;
  background: ${(props) =>
    props.isHot
      ? 'linear-gradient(282deg, #f00 1.09%, #ef1049 19.7%, #df2093 38.8%, #d020df 62.66%, #300720 96.55%)'
      : 'linear-gradient(282deg, #FCF661 1.09%, #FF0E2B 38.8%, #DF2020 55.66%, #300C07 94.55%)'};
  position: relative;
  z-index: 0;
  overflow: hidden;

  animation: ${fadeInUp} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.isHot
        ? 'linear-gradient(185deg, rgba(239, 16, 73, 0) 21.86%, #ef1049 112.6%)'
        : 'linear-gradient(185deg, rgba(223, 32, 32, 0.00) 21.86%, #DF2020 112.6%);'};
    z-index: 2;
  }
`;

export const LiveDigImg = styled.img`
  object-fit: contain;

  /* width: rem; */
  /* min-width: 19rem; */
  height: 16.3rem;
  position: absolute;
  top: 1rem;
  left: 4rem;
`;

export const LiveDj = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  left: 0rem;
  top: 0;
  bottom: 0;
`;

export const DjLogo = styled.img`
  position: absolute;
  z-index: 1;
  min-width: 8rem;
  max-width: 9rem;
  min-height: 1.2rem;
  max-height: 6rem;
  left: 2rem;
  bottom: 1.8rem;
`;

export const LiveNowBox = styled.div`
  position: absolute;
  width: 6.8rem;
  height: 3.2rem;
  top: 2rem;
  right: 1.25rem;

  z-index: 5;
  animation: ${backgroundPulse} 1.3s infinite;

  img {
    position: absolute;
    width: 100%;
  }
`;

export const LiveTime = styled.span`
  color: #fff;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  position: absolute;
  bottom: 1.8rem;
  right: 1.25rem;
  z-index: 5;
`;

// 임시 푸터
export const TTFooter = styled.div`
  height: 18rem;
  text-align: center;
  color: #fff;
`;

export const UnderlinedText = styled.span`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.captionMed};
  text-decoration: underline;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;

  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;
