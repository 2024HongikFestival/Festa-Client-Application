import styled from 'styled-components';
import PieceImg from '@/assets/svgs/main/piece.svg';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const stageData = {
  9.25: {
    day: 'DAY 1',
    performances: [
      { title: 'main.performance1', time: '17:00 - 19:30' },
      { title: 'main.performance2', time: '20:00 - 22:00' },
    ],
  },
  9.26: {
    day: 'DAY 2',
    performances: [
      { title: 'main.performance3', time: '17:00 - 19:30' },
      { title: 'main.performance2', time: '20:00 - 22:00' },
    ],
  },
  9.27: {
    day: 'DAY 3',
    performances: [
      { title: 'main.performance3', time: '17:00 - 19:30' },
      { title: 'main.performance2', time: '20:00 - 22:00' },
    ],
  },
};

export default function StageInfo() {
  const today = new Date();
  const { t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(localStorage.getItem('language') === 'en');
  const formattedToday = `${today.getMonth() + 1}.${today.getDate()}`;
  // const formattedToday = '9.25'; // 글자색 변화 확인용

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const language = localStorage.getItem('language');
      setIsEnglish(language === 'en');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      {Object.entries(stageData).map(([date, stage], index) => (
        <Container key={date} data-aos="fade-up" data-aos-delay={index * 220} $isEnglish={isEnglish}>
          <DateWrapper $isToday={date === formattedToday}>
            <Day>{stage.day}</Day>
            <MonthAndDay>{date}</MonthAndDay>
          </DateWrapper>
          <BubbleWrapper $isEnglish={isEnglish}>
            <Piece src={PieceImg} alt="" />
            <Bubble $isEnglish={isEnglish}>
              <TextContainer>
                {stage.performances.map((performance, idx) => (
                  <TextWrapper key={idx}>
                    <Text $isEnglish={isEnglish}>{t(performance.title)}</Text>
                    <Text time="true" $isEnglish={isEnglish}>
                      {performance.time}
                    </Text>
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
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  ${(props) => (props.time ? props.theme.fontStyles.basic.body2Med : props.theme.fontStyles.basic.body2Bold)};
  color: ${(props) => (props.time ? props.theme.colors.gray60 : props.theme.colors.gray70)};
`;
