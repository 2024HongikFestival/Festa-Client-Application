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

export const NoticeTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  height: 13.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffff24 0%, #a9ff1e 100%);
`;

export const NoticeTime = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
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
  margin-bottom: 10.9rem; // 기존 margin + 버튼 높이

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
  position: fixed;
  bottom: 0;
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
  height: 43.7rem;
  padding-left: 2rem;
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
  background: var(--UI-Background, #010304);
  margin: 0 0.8rem;
  box-sizing: border-box;
  position: relative;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const DJContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
