import styled from 'styled-components';

export const FacilitiesLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-x pan-y;
`;

export const ToggleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Toggle = styled.div`
  display: flex;
  padding: 0.8rem 1.5rem;
  position: relative;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  height: 3.6rem;
  background: rgba(24, 51, 219, 0.05);
  border-radius: 3rem;
  transition:
    transform 0.25s ease,
    width 0.25s ease;
  z-index: 0;
  will-change: transform, width;
`;

const ToggleButton = styled.div`
  width: ${({ width }) => width};
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.hongikBlue : theme.colors.gray60)};
  ${({ $isActive, theme }) => ($isActive ? theme.fontStyles.basic.body1Bold : theme.fontStyles.basic.body1Semi)};
  background: transparent;
  border-radius: 3rem;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.6')};
  cursor: pointer;
  z-index: 1;
`;

export const RestroomBtn = styled(ToggleButton).attrs({ width: '8.2rem' })``;
export const MedicalBtn = styled(ToggleButton).attrs({ width: '11.1rem' })``;
export const LostAndFoundBtn = styled(ToggleButton).attrs({ width: '11.2rem' })``;

export const Title = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2rem;
  ${(props) => props.theme.fontStyles.main.headline6};
  color: ${(props) => props.theme.colors.hongikBlue};

  span {
    ${(props) => props.theme.fontStyles.main.headline6};
    color: ${(props) => props.theme.colors.gray100};
  }
`;

export const RestroomDetail = styled.ul`
  width: 100%;
  padding: 1.8rem 2.4rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const Number = styled.span`
  margin-right: 0.9rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray100};
`;

export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  &:nth-child(1) ${Number} {
    margin-right: 0.9rem;
  }

  &:nth-child(n + 2) ${Number} {
    margin-right: 0.8rem;
  }
`;

export const GrayBar = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  margin-right: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray40};
`;

export const Building = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray100};
  margin-right: 0.4rem;

  span {
    ${(props) => props.theme.fontStyles.basic.body1Bold};
    color: ${(props) => props.theme.colors.hongikBlue};
  }
`;

export const Floor = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.hongikBlue};
`;

export const Description = styled.div`
  width: 100%;
  padding: 1.8rem 2.4rem 2.4rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray70};
  span {
    ${(props) => props.theme.fontStyles.basic.body1Bold};
    color: ${(props) => props.theme.colors.gray100};
  }
`;

export const GoLostAndFoundBtn = styled.div`
  margin-top: 2.4rem;
  cursor: pointer;
  width: 33.5rem;
  height: 5.2rem;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.white};
  animation: shadowBlink 1.5s infinite;

  @keyframes shadowBlink {
    0% {
      box-shadow: 0 0 2rem 0 rgba(255, 255, 255, 0.8);
    }
    50% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 2rem 0 rgba(255, 255, 255, 0.8);
    }
  }
`;

export const MarginBottom = styled.div`
  margin-bottom: 6.4rem;
`;
