import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/icon/error.webp';
import { useParams } from 'react-router-dom';

export default function FleamarketEvent() {
  const { marketId } = useParams();
  if (marketId === 'kawaii') {
    return (
      <Container>
        <ContentContainer>
          <EventTextContainer>
            <EventTitle>Event 🎁</EventTitle>
            <EventText>
              <Span>
                1. 1만원 이상 구매 시 뜨개 뱃지 증정!
                <br />
                2. Instagram 이벤트
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;방문 인증 사진을 스토리로 남겨 주세요!
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;두 분을 추첨해 원하시는 키링을 선물해드립니다!
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Instargram _ 겨운거 (@ilovegiyumppojjak)
              </Span>
            </EventText>
            <InfoText>
              <ErrorIcon src={error} alt="error" />
              당첨자는 10/1(화) DM을 통해 안내드립니다
            </InfoText>
          </EventTextContainer>
        </ContentContainer>
      </Container>
    );
  } else if (marketId === 'henna') {
    return (
      <Container>
        <ContentContainer>
          <EventTextContainer>
            <EventTitle>Event 🎁</EventTitle>
            <EventText>
              <Span>
                1. 서울캠퍼스 자율전공 공식 인스타그램 계정
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;태그 후 헤나 시술 인증샷 스토리 업로드 시,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;1천원 할인!
              </Span>
              <Span>2. 헤나 2개 시술 시, 1천원 할인!</Span>
              <Span>
                3. 뽑기 이벤트
                <br />
                &nbsp;• &nbsp;헤나 5천원 이상 시술 시, 뽑기 기회 제공! <br />
                &nbsp;• &nbsp;서울캠퍼스 자율전공 학생은 뽑기 1번 가능
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;🥇 1등: 원하는 헤나 도안 무료 시술!
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;🥈 2등: 자율전공 주점(저녁) 방문 시 컵라면 제공
              </Span>
            </EventText>
            <InfoText>
              <ErrorIcon src={error} alt="error" />
              1번과 2번 이벤트는 중복 참여가 불가능합니다.
            </InfoText>
          </EventTextContainer>
        </ContentContainer>
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div`
  margin-top: 2.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EventTextContainer = styled.div`
  margin: 2rem 2.4rem 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EventTitle = styled.div`
  ${({ theme }) => theme.fontStyles.basic.subHeadBold}
  width: 28.4rem;
  margin-bottom: 1.2rem;
`;

const EventText = styled.div`
  margin-bottom: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Span = styled.div`
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  color: ${({ theme }) => theme.colors.gray70};
`;

const InfoText = styled.div`
  width: 27.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  color: ${({ theme }) => theme.colors.gray50};
`;

const ErrorIcon = styled.img`
  width: 1.2rem;
  height: 1.232rem;
  margin-right: 0.8rem;
`;
