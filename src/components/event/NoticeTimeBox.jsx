import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TimeCard = ({ time }) => {
  TimeCard.propTypes = {
    time: PropTypes.string.isRequired,
  };

  return (
    <Card>
      <CardText>{time}</CardText>
    </Card>
  );
};

const NoticeTimeBox = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const end = dayjs('2024-09-27 23:59:59');

  const handleDate = () => {
    const now = dayjs();
    const dayDuration = end.diff(now, 'day');
    const hourDuration = end.diff(now, 'hour') % 24;
    const minuteDuration = end.diff(now, 'minute') % 60;
    const secondDuration = end.diff(now, 'second') % 60;

    setDays(dayDuration.toString().padStart(2, '0'));
    setHours(hourDuration.toString().padStart(2, '0'));
    setMinutes(minuteDuration.toString().padStart(2, '0'));
    setSeconds(secondDuration.toString().padStart(2, '0'));
  };

  useEffect(() => {
    // 1초마다 시간 갱신
    const id = setInterval(() => {
      handleDate();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Wrapper>
      <NoticeTime>마감까지 남은 시간</NoticeTime>
      <CardBox>
        <Box>
          <Text>DAYS</Text>
          <TimeContainer>
            <Container>
              <TimeCard time={days[0]} />
              <TimeCard time={days[1]} />
            </Container>
            <span>:</span>
          </TimeContainer>
        </Box>
        <Box>
          <Text>HOURS</Text>
          <TimeContainer>
            <Container>
              <TimeCard time={hours[0]} />
              <TimeCard time={hours[1]} />
            </Container>
            <span>:</span>
          </TimeContainer>
        </Box>

        <Box>
          <Text>MINUTES</Text>
          <TimeContainer>
            <Container>
              <TimeCard time={minutes[0]} />
              <TimeCard time={minutes[1]} />
            </Container>
            <span>:</span>
          </TimeContainer>
        </Box>

        <Box>
          <Text>SECONDS</Text>
          <Container>
            <TimeCard time={seconds[0]} />
            <TimeCard time={seconds[1]} />
          </Container>
        </Box>
      </CardBox>
    </Wrapper>
  );
};

export default NoticeTimeBox;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 5.6rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray100};
`;

const CardText = styled.p`
  color: ${(props) => props.theme.colors.gray10};
  text-align: center;
  font-family: Pretendard;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
