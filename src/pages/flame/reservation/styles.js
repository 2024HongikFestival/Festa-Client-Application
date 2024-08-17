import styled from 'styled-components';

export const RVWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

export const RWTitle = styled.div`
  margin-top: 2.5rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
`;

export const RVBox = styled.div`
  width: calc(100% - 4rem);
  margin: 2.8rem 2rem 6.4rem;
`;

export const PreRVBox = styled.div`
  width: calc(100% - 4rem);

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline5};
`;

export const RedUnderLine = styled.div`
  background: linear-gradient(90deg, #f20d0d 0%, #8c0707 51.5%, #000 100%);
  height: 2px;
  align-self: stretch;
  margin-bottom: 2rem;
`;

export const RVPeriodTitle = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  margin-right: 2.4rem;
  color: ${(props) => props.theme.colors.white};
`;

export const RVPeriod = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const RVPeriodTitleP = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  margin-top: 3.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const PriceIntroBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceIntro = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

export const PriceInfo = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
`;
