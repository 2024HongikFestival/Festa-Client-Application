import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.7rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.eventTitle}

  span {
    ${(props) => props.theme.fontStyles.basic.eventTitle}

    #highlight {
      color: #ffff24;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 37.5rem;
  height: 18.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const NoticeText = styled.div`
  margin-top: 1.1rem;
  margin-bottom: 2.3rem;
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.white};

  span {
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
    color: #cdff3f;
  }
`;

export const QNABox = styled.div`
  display: flex;
  width: 33.5rem;
  padding: 1.6rem 1.8rem;
  margin-top: 2.8rem;
  margin-bottom: 3.2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.gray100};
`;

export const QText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray10};
`;

export const AText = styled.div`
  text-align: center;
  ${(props) => props.theme.fontStyles.basic.body2Reg};
  color: ${(props) => props.theme.colors.gray10};
`;

export const Raffle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  width: 13rem;
  height: 3.2rem;
  padding: 0.4rem 1.7rem;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  border: 1px solid var(--button-grad, #feff24);
  background: ${(props) => props.theme.colors.gray100};
  gap: 1rem;
  margin-bottom: 0.8rem;

  p {
    color: var(---on, #cdff3f);
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.body1Med};
  }
`;

export const RaffleTitle = styled.div`
  align-self: stretch;
  text-align: center;
  ${(props) => props.theme.fontStyles.main.headline3};
  color: ${(props) => props.theme.colors.gray10};
  margin-bottom: 1.6rem;

  span {
    ${(props) => props.theme.fontStyles.main.headline3};
    color: var(---on, #cdff3f);
  }
`;

export const RaffleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RaffleImage = styled.img`
  z-index: 10;
  width: 29rem;
  height: 15.1rem;
  flex-shrink: 0;
`;

export const RaffleContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #top {
    color: ${(props) => props.theme.colors.gray80};
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }

  #description {
    color: ${(props) => props.theme.colors.gray90};
    ${(props) => props.theme.fontStyles.main.headline4};
  }
`;

export const Logo = styled.img`
  width: 16.4rem;
  height: 5.26rem;
  flex-shrink: 0;
`;

export const NoticeDetail = styled(QNABox)`
  padding: 1.6rem 1.9rem;
  gap: 0.8rem;
  align-items: flex-start;
  margin-bottom: 4.4rem;
`;

export const DetailSection = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const DetailTitle = styled.div`
  color: ${(props) => props.theme.colors.gray10};
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  display: flex;
  min-width: fit-content;
`;

export const DetailDescription = styled.div`
  color: ${(props) => props.theme.colors.gray30};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;

export const ShareButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #ffff24;
  background: ${(props) => props.theme.colors.gray100};
  margin-bottom: 4.4rem;

  p {
    color: #ffff24;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ShareIcon = styled.img`
  width: 3.9rem;
  height: 3.9rem;
  position: absolute;
  left: 8.3rem;
`;

export const KakaoAuthButton = styled.button`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background-color: #fee500; // 여기서만 쓰여서 따로 타이포로 빼지 않음

  p {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

// item carousel
export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 37.5rem;
  max-width: 76.8rem;
  height: 28.7rem;
  padding-left: 2rem;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 37.5rem;
  max-width: 76.8rem;
  height: 28.7rem;
`;

export const ImageContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  width: 18.5rem !important;
  height: 28.7rem;import { Raffle } from './styled';

  background-color: ${(props) => props.theme.colors.white};
  margin: 0 0.8rem;
  padding-top: 1.4rem;
  border-radius: 1rem;
  outline: none;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const CarouselImage = styled.img`
  width: 32rem;
  height: 15rem;
`;

export const ItemInfoSection = styled.div`
  width: 100%;
  height: 10.2rem;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: #ffff24;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1.6rem;
  padding-top: 1.6rem;
`;

export const ItemName = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.35rem;
  color: ${(props) => props.theme.colors.gray100};
`;
export const ItemPrice = styled.p`
  color: ${(props) => props.theme.colors.gray50};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.012px;
  text-decoration-line: line-through;
  text-decoration-thickness: 0.1rem;
`;

export const RafflePrice = styled.div`
  span {
    text-align: center;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.018px;
    color: var(--HONGIK-BLUE, #1833db);
    padding-right: 0.4rem;
  }
  #zero {
    color: ${(props) => props.theme.colors.gray80};
  }
`;
