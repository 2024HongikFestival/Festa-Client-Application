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
  padding-top: 2.4rem;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

// 헤더 변경
export const SchoolHeader = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.6rem;
`;

export const TTTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
`;

export const TTBox = styled.div`
  padding: 0 0 5.6rem;
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

    ${(props) =>
      props.isActive &&
      `
    background: linear-gradient(104deg, #DF2020 35.72%, #FFB800 88.25%);
    -webkit-background-clip: text;
    color: transparent;
  `}
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
  min-height: ${(props) => (props.isActive ? '14rem' : '7.2rem')};
`;

export const RedLine = styled.div`
  position: relative;
  width: 2.2rem;
  max-width: 2.5rem;
  min-width: 2.672rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  .fullBtn {
    max-width: 22px;
  }

  .emptyBtn {
    max-width: 14px;
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
`;

export const TimeTableName = styled.span`
  ${(props) => props.theme.fontStyles.flame.headline6};
  color: ${(props) => props.theme.colors.gray70};
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
  p {
    color: ${(props) => props.theme.colors.gray70};
    ${(props) => props.theme.fontStyles.basic.captionMed};
  }
`;

export const LiveConcert = styled.div`
  width: calc(100% - 2.4rem);
  margin-left: 2.4rem;
  background: linear-gradient(282deg, #fcf661 1.09%, #ff0e2b 38.8%, #df2020 62.66%, #300c07 96.55%);
  position: relative;
  z-index: 0;

  animation: ${fadeInUp} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(185deg, rgba(223, 32, 32, 0) 21.86%, #df2020 112.6%);
    z-index: 2;
  }

  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
    /* animation: ${backgroundPulse} 4s infinite; */
  }
`;

export const LiveDj = styled.span`
  position: absolute;
  z-index: 5;
  left: 2rem;
  bottom: 1.2rem;
  ${(props) => props.theme.fontStyles.flame.headline5};
  text-shadow: 0 0 0.8rem rgba(255, 255, 255, 0.25);
`;

export const LiveNowBox = styled.div`
  position: absolute;
  width: 6.8rem;
  height: 3.2rem;
  top: 1.2rem;
  right: 1.25rem;
  z-index: 5;

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
