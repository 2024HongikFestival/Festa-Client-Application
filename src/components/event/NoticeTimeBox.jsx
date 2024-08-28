import styled from 'styled-components';

const TimeCard = () => {
  return <Card></Card>;
};

const NoticeTimeBox = () => {
  return (
    <Wrapper>
      <NoticeTime>마감까지 남은 시간</NoticeTime>
      <CardBox>
        <Box>
          <Text>DAYS</Text>
          <Container>
            <TimeCard />
            <TimeCard />
          </Container>
        </Box>
        <span>:</span>
        <Box>
          <Text>HOURS</Text>
          <Container>
            <TimeCard />
            <TimeCard />
          </Container>
        </Box>
        <span>:</span>
        <Box>
          <Text>MINUTES</Text>
          <Container>
            <TimeCard />
            <TimeCard />
          </Container>
        </Box>
        <span>:</span>
        <Box>
          <Text>SECONDS</Text>
          <Container>
            <TimeCard />
            <TimeCard />
          </Container>
        </Box>
      </CardBox>
    </Wrapper>
  );
};

export default NoticeTimeBox;

const Card = styled.div`
  display: flex;
  width: 3.2rem;
  height: 5.6rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray100};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
  height: 13.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: linear-gradient(180deg, #ffff24 0%, #a9ff1e 100%);
`;

const NoticeTime = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Bold}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.9rem;

  span {
    color: ${(props) => props.theme.colors.flameBackgroundColor};
    text-align: center;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-right: 0.2rem;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed}
  color: ${(props) => props.theme.colors.flameBackgroundColor};
  margin-bottom: 0.5rem;
`;
