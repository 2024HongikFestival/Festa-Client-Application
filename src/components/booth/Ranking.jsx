import styled, { css } from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';
import wow from '@/assets/webps/booth/ranking/wow.webp';

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
            <>
              <WowImgWrapper>
                <Wow src={wow} alt="wow" />
              </WowImgWrapper>
              <Box width="2nd" />
            </>
          </Podium1>
          <Podium2>
            <WowImgWrapper>
              <Wow src={wow} alt="wow" />
            </WowImgWrapper>
            <Box width="1st" />
          </Podium2>
          <Podium3>
            <WowImgWrapper>
              <Wow src={wow} alt="wow" />
            </WowImgWrapper>
            <Box width="3rd" />
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
  ${(props) =>
    props.width === '1st' &&
    css`
      height: 18.5rem;
      border-radius: 1.08rem 1.08rem 0 0;
    `}

  ${(props) =>
    props.width === '2nd' &&
    css`
      height: 12.3rem;
      border-radius: 1.08rem 0 0 0;
    `}

    ${(props) =>
    props.width === '3rd' &&
    css`
      height: 9.5rem;
      border-radius: 0 1.08rem 0 0;
    `}
`;
