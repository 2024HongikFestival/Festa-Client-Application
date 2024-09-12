import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/icon/error.webp';

export default function PubOperatingHour() {
  return (
    <ContentContainer>
      <TextWrapper>
        <Title>주점 운영 시간</Title>
        <DetailTime>
          <DayNight>
            <Span>낮 ☀️ 12:00 - 16:00</Span>
            <Span>밤 🌛 16:00 - 23:00</Span>
          </DayNight>
          <GuideWrapper>
            <IconWrapper>
              <Icon src={error} alt="error" />
            </IconWrapper>
            <Caption>부스마다 운영 시간이 다를 수 있습니다</Caption>
          </GuideWrapper>
        </DetailTime>
      </TextWrapper>
    </ContentContainer>
  );
}

const TextWrapper = styled.div`
  width: 33.5rem;
  height: 11.4rem;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyles.main.headline6};
  text-align: center;
`;

const DetailTime = styled.div`
  width: 20.036rem;
  height: 7.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 1.536rem;
  height: 1.536rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0.4rem;
`;

const Icon = styled.img`
  width: 1.28rem;
  height: 1.28rem;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray30};
  text-align: center;
`;

const DayNight = styled.div`
  width: 14.9rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.4rem;
`;

const Span = styled.div`
  width: 14.9rem;
  height: 2rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  text-align: center;
`;
