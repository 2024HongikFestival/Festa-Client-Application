import styled from 'styled-components';
import PieceImg from '@/assets/svgs/main/piece.svg';
export default function StageInfo() {
  return (
    <Container>
      <Date>
        <Day>DAY 1</Day>
        <MonthAndDay>9.25</MonthAndDay>
      </Date>
      <BubbleWrapper>
        <Piece src={PieceImg} alt="" />
        <Bubble>
          <TextContainer>
            <TextWrapper>
              <Text>학부 찬조 공연</Text>
              <Text time="true">17:30 - 18:00</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>학부 찬조 공연</Text>
              <Text time="true">17:30 - 18:00</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>학부 찬조 공연</Text>
              <Text time="true">17:30 - 18:00</Text>
            </TextWrapper>
          </TextContainer>
        </Bubble>
      </BubbleWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 33.475rem;
  height: 13.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const Date = styled.div`
  width: 3.5rem;
  height: 4.9rem;
  display: flex;
  flex-direction: column;
`;

const Day = styled.p`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray80};
`;

const MonthAndDay = styled.p`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.gray80};
`;

const BubbleWrapper = styled.div`
  width: 28.675rem;
  height: 13.5rem;
  display: flex;
`;

const Piece = styled.img`
  width: 1.975rem;
  height: 2.7rem;
  margin-top: 1rem;
  position: relative;
  left: 0.1rem;
  z-index: 5;
`;

const Bubble = styled.div`
  width: 26.6rem;
  height: 13.5rem;
  background-color: white;
  border-radius: 1.2rem;
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
  padding: 2.4rem;
`;

const TextContainer = styled.div`
  width: 21.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TextWrapper = styled.div`
  width: 21.9rem;
  height: 2.1rem;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  color: ${(props) => (props.time ? props.theme.colors.gray60 : props.theme.colors.gray70)};
`;
