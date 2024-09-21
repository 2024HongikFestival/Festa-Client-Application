import styled from 'styled-components';
import PieceImg from '@/assets/svgs/main/piece.svg';

const stageData = {
  9.25: {
    day: 'DAY 1',
    performances: [
      { title: '재주꾼 선발 대회', time: '17:00 - 19:30' },
      { title: '연예인 초청 무대', time: '20:00 - 22:00' },
    ],
  },
  9.26: {
    day: 'DAY 2',
    performances: [
      { title: '학생 중앙 무대', time: '17:00 - 19:30' },
      { title: '연예인 초청 무대', time: '20:00 - 22:00' },
    ],
  },
  9.27: {
    day: 'DAY 3',
    performances: [
      { title: '학생 중앙 무대', time: '17:00 - 19:30' },
      { title: '연예인 초청 무대', time: '20:00 - 22:00' },
    ],
  },
};

export default function StageInfo() {
  const today = new Date();
  const formattedToday = `${today.getMonth() + 1}.${today.getDate()}`;
  // const formattedToday = '9.25'; // 글자색 변화 확인용

  return (
    <>
      {Object.entries(stageData).map(([date, stage]) => (
        <Container key={date}>
          <DateWrapper $isToday={date === formattedToday}>
            <Day>{stage.day}</Day>
            <MonthAndDay>{date}</MonthAndDay>
          </DateWrapper>
          <BubbleWrapper>
            <Piece src={PieceImg} alt="" />
            <Bubble>
              <TextContainer>
                {stage.performances.map((performance, idx) => (
                  <TextWrapper key={idx}>
                    <Text>{performance.title}</Text>
                    <Text time="true">{performance.time}</Text>
                  </TextWrapper>
                ))}
              </TextContainer>
            </Bubble>
          </BubbleWrapper>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 33.475rem;
  height: 10.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const DateWrapper = styled.div`
  width: 3.9rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    color: ${(props) => (props.$isToday ? props.theme.colors.hongikNavy : props.theme.colors.gray60)};
  }
`;

const Day = styled.p`
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;

const MonthAndDay = styled.p`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;

const BubbleWrapper = styled.div`
  width: 28.675rem;
  height: 10.2rem;
  display: flex;
`;

const Piece = styled.img`
  width: 1.975rem;
  height: 2.7rem;
  margin-top: 0.87rem;
  position: relative;
  left: 0.1rem;
  z-index: 5;
`;

const Bubble = styled.div`
  width: 26.7rem;
  height: 10.2rem;
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
  color: ${(props) => (props.time ? props.theme.fontStyles.basic.body2Med : props.theme.fontStyles.basic.body2Bold)};
  color: ${(props) => (props.time ? props.theme.colors.gray60 : props.theme.colors.gray70)};
`;
