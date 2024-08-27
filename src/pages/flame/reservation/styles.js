import styled from 'styled-components';

export const RVWrapper = styled.div`
  padding: 2.5rem 0 5.6rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

export const RWTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
  text-align: center;
`;

export const RVBox = styled.div`
  width: calc(100% - 4rem);
  margin: 2.8rem 2rem 6.4rem;
`;

export const DayRVBox = styled.div`
  width: calc(100% - 4rem);

  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline5};
`;

export const RedUnderLine = styled.div`
  background: linear-gradient(90deg, #f20d0d 0%, #8c0707 51.5%, #000 100%);
  height: 0.125rem;
  align-self: stretch;
  margin-bottom: 2rem;
`;

export const RVPeriodBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3.2rem;
`;

export const RVPeriodTitle = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  margin-right: 2.4rem;
  color: ${(props) => props.theme.colors.white};
`;

export const RVPeriod = styled.div`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body1Med};
`;

export const RVPeriodTitleP = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  margin-top: 3.2rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 0.8rem;
`;

export const PriceIntroBox = styled.div`
  display: flex;
  justify-content: space-between;

  .wholeBox {
    display: flex;
  }

  .dot {
    color: ${(props) => props.theme.colors.gray30};
    ${(props) => props.theme.fontStyles.basic.body2Med};
    margin-right: 0.5rem;
  }

  .detailBox {
    display: flex;
    flex-direction: column;
  }
`;

export const PriceIntro = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

export const PriceInfo = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  display: grid;
  align-items: end;
`;

export const WhoVisit = styled.span`
  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;

export const DotBox = styled.span`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

export const NoticeBox = styled.div`
  margin: 3.2rem 0 6.4rem;
`;
export const NoticeContentBox = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;

  color: ${(props) => props.theme.colors.gray60};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
export const NoticeContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  word-break: keep-all;
  .detail {
    color: ${(props) => props.theme.colors.gray60};
    ${(props) => props.theme.fontStyles.basic.body2Med};
  }

  .underline {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.gray60};
    ${(props) => props.theme.fontStyles.basic.body2Med};
  }
`;

export const PreRvBox = styled.div`
  width: calc(100% - 4rem);
  margin: 0 2rem;
`;

export const GrayUnderLine = styled.div`
  background: linear-gradient(90deg, #b0b1b5 0%, rgba(77, 77, 79, 0) 100%);
  height: 0.125rem;
  align-self: stretch;
  margin-bottom: 2rem;
`;

export const GrayTitle = styled.div`
  width: calc(100% - 4rem);

  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fontStyles.flame.headline5};
`;

export const GrayPeriodTitle = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray50};
  margin-right: 2.4rem;
`;

export const GrayPeriod = styled.span`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray70};
`;

export const GrayBox = styled.div`
  width: 100%;
  background: rgba(81, 83, 86, 0.25);
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray80};
  border: 0.25rem solid var(--Grayscale-Gray_80, #3c3e41);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6rem;
`;
