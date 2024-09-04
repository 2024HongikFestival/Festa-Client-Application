import styled, { css } from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';
import wow from '@/assets/webps/booth/ranking/wow.webp';
import first from '@/assets/svgs/booth/1st.svg';
import second from '@/assets/svgs/booth/2nd.svg';
import third from '@/assets/svgs/booth/3rd.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';

export default function Ranking() {
  return (
    <ContentContainer>
      <RankingContainer>
        <InfoText>
          <Span>실시간 </Span>
          인기 주점
        </InfoText>
        <GuideWrapper>
          <IconWrapper>
            <Icon src={error} alt="errer" />
          </IconWrapper>
          <Caption>
            랭킹은 5분 단위로 업데이트되며, <br />
            매일 오전 5시에 리셋됩니다
          </Caption>
        </GuideWrapper>
        <PodiumWrapper>
          <Podium1>
            <WowImgWrapper>
              <Wow src={wow} alt="wow" />
            </WowImgWrapper>
            <Box width="2nd">
              <Badge src={second} alt="2nd" rank="2nd" />
              <Departmanet rank="2nd">
                기계 시스템
                <br />
                디자인공학과
              </Departmanet>
              <CountWrapper>
                <HeartIcon src={heart} alt="heart" />
                <Count>+9999</Count>
              </CountWrapper>
            </Box>
          </Podium1>
          <Podium2>
            <WowImgWrapper>
              <Wow src={wow} alt="wow" />
            </WowImgWrapper>
            <Box width="1st">
              <Badge src={first} alt="1st" rank="1st" />
              <Departmanet rank="1st">
                기계 시스템
                <br />
                디자인공학과
              </Departmanet>
              <CountWrapper>
                <HeartIcon src={heart} alt="heart" />
                <Count>+9999</Count>
              </CountWrapper>
            </Box>
          </Podium2>
          <Podium3>
            <WowImgWrapper>
              <Wow src={wow} alt="wow" />
            </WowImgWrapper>
            <Box width="3rd">
              <Badge src={third} alt="3rd" rank="3rd" />
              <Departmanet rank="3rd">
                기계 시스템
                <br />
                디자인공학과
              </Departmanet>
              <CountWrapper>
                <HeartIcon src={heart} alt="heart" />
                <Count>+9999</Count>
              </CountWrapper>
            </Box>
          </Podium3>
        </PodiumWrapper>
      </RankingContainer>
    </ContentContainer>
  );
}

const RankingContainer = styled.div`
  width: 30.5rem;
  height: 43.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`;

const InfoText = styled.div`
  margin-bottom: 0.8rem;
  text-align: center;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const IconWrapper = styled.div`
  width: 1.536rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 1.28rem;
  height: 1.28rem;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Caption = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray30};
  text-align: center;
`;

const PodiumWrapper = styled.div`
  width: 30.5rem;
  height: 27.1rem;
  margin-top: 3.6rem;
  display: flex;
`;

const Podium1 = styled.div`
  width: 10.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Podium2 = styled.div`
  width: 10.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Podium3 = styled.div`
  width: 10.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const WowImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.454rem;
`;

const Wow = styled.img`
  width: 6.3rem;
  height: 7.036rem;
`;

const Box = styled.div`
  background: linear-gradient(180deg, #d7dcff 0%, #f1f3ff 50.04%, #fbfcff 100.08%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.width === '1st' &&
    css`
      height: 18.5rem;
      border-radius: 1.08rem 1.08rem 0 0;
      padding: 1.2rem 1.2rem 0.4rem 1.2rem;
    `}

  ${(props) =>
    props.width === '2nd' &&
    css`
      height: 12.3rem;
      border-radius: 1.08rem 0 0 0;
      padding: 0.8rem 1.2rem 0.357rem 1.2rem;
    `}

    ${(props) =>
    props.width === '3rd' &&
    css`
      height: 9.5rem;
      border-radius: 0 1.08rem 0 0;
      padding: 0.8rem 1.18rem 0.371rem 1.22rem;
    `}
`;

const Badge = styled.img`
  ${(props) =>
    props.rank === '1st' &&
    css`
      width: 2.907rem;
      height: 4.5rem;
    `}

  ${(props) =>
    props.rank === '2nd' &&
    css`
      width: 2.16rem;
      height: 3.343rem;
    `}

    ${(props) =>
    props.rank === '3rd' &&
    css`
      width: 1.44rem;
      height: 2.229rem;
    `}
`;

const Departmanet = styled.div`
  ${({ theme }) => theme.colors.gray100}
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  text-align: center;

  ${(props) =>
    props.rank === '1st' &&
    css`
      margin-top: 1.6rem;
      margin-bottom: 4.8rem;
      width: 7.9rem;
      height: 4.2rem;
      ${({ theme }) => theme.fontStyles.basic.body2Bold}
    `}

  ${(props) =>
    props.rank === '2nd' &&
    css`
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
      width: 7.7rem;
      height: 3.6rem;
      ${({ theme }) => theme.fontStyles.basic.captionBold}
    `}

    ${(props) =>
    props.rank === '3rd' &&
    css`
      margin-top: 0.4rem;
      margin-bottom: 0.3rem;
      width: 7.7rem;
      height: 3.6rem;
      ${({ theme }) => theme.fontStyles.basic.captionBold}
    `}
`;

const CountWrapper = styled.div`
  width: 5.5rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeartIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const Count = styled.div`
  width: 3.9rem;
  height: 1.8rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.captionBold}
  color: ${({ theme }) => theme.colors.gray50}
`;
