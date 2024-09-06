import styled from 'styled-components';

export const FacilitiesLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ToggleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Toggle = styled.div`
  display: flex;
  padding: 0.8rem 3.2rem;
  gap: 2.4rem;
`;

export const ToggleBtn = styled.div`
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.hongikBlue : theme.colors.gray60)};
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  font-family: 'Pretendard', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.0016rem;
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '600')};
  border-radius: ${({ $isActive }) => ($isActive ? '3rem' : '0')};
  background: ${({ $isActive }) => ($isActive ? 'rgba(24, 51, 219, 0.05)' : 'transparent')};
  padding: ${({ $isActive }) => ($isActive ? '0.6rem 2.4rem' : '0')};
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.6')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

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

export const Map = styled.div`
  width: 100%;
  height: 25rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray30};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray30};
`;

export const ToiletDetail = styled.ul`
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
    margin-right: 0.9rem; /* 1의 Number와 GrayBar 간 간격 0.9rem */
  }

  &:nth-child(n + 2) ${Number} {
    margin-right: 0.8rem; /* 2 이후 항목의 Number와 GrayBar 간 간격 0.8rem */
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
