import { styled, css } from 'styled-components';

// 내용이 적어서 따로 constants로 뺴지 않았습니다.
const aboutOperatingHours = [
  {
    title: '플리마켓',
    time: '18시 ~ 마켓별 상이',
  },
  {
    title: '주점',
    time: '10시 ~ 18시',
  },
  {
    title: '와디페',
    time: '10시 ~ 18시',
  },
];

export default function OperatingHours() {
  return (
    <Container>
      <HoursTitle>운영 시간</HoursTitle>
      <InfoWrapper>
        {aboutOperatingHours.map((item, index) => (
          <InfoComp key={index}>
            <Title kind={item.title}>{item.title}</Title>
            <InfoTextContainer kind={item.title}>
              <Text>{item.time}</Text>
            </InfoTextContainer>
          </InfoComp>
        ))}
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 33.5rem;
  height: 19.2rem;
  margin-top: 6.4rem;
  margin-bottom: 14rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HoursTitle = styled.div`
  ${({ theme }) => theme.fontStyles.main.headline3};

  /* color: white; 현재 배경화면 적용되지 않아 일단 주석처리 하였습니다. */
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 33.5rem;
  height: 13.4rem;
  gap: 0.4rem;
`;

const InfoComp = styled.div`
  width: 10.9rem;
  height: 13.4rem;
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
  border-radius: 1.8rem;
`;

const Title = styled.div`
  margin-top: 3.6rem;
  ${({ theme }) => theme.fontStyles.main.headline6}
  text-align: center;
  ${(props) =>
    props.kind === '플리마켓' &&
    css`
      color: rgba(131, 210, 2, 1);
    `}

  ${(props) =>
    props.kind === '주점' &&
    css`
      color: rgba(0, 194, 255, 1);
    `}

    ${(props) =>
    props.kind === '와디페' &&
    css`
      color: rgba(197, 111, 228, 1);
    `}
`;

const InfoTextContainer = styled.div`
  margin-top: 1.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid transparent;

  ${(props) =>
    props.kind === '플리마켓' &&
    css`
      border-image-source: linear-gradient(90deg, #ffffff 0%, #cdff3f 48.5%, #ffffff 100%);
      border-image-slice: 1 0 0 0;
      border-image-width: 0.1rem 0 0 0;
    `}

  ${(props) =>
    props.kind === '주점' &&
    css`
      border-image-source: linear-gradient(90deg, #ffffff 0%, #57c3ff 48.5%, #ffffff 100%);
      border-image-slice: 1 0 0 0;
      border-image-width: 0.1rem 0 0 0;
    `}

    ${(props) =>
    props.kind === '와디페' &&
    css`
      border-image-source: linear-gradient(90deg, #ffffff 0%, #ad83f1 48.5%, #ffffff 100%);
      border-image-slice: 1 0 0 0;
      border-image-width: 0.1rem 0 0 0;
    `}
`;

const Text = styled.div`
  ${({ theme }) => theme.fontStyles.basic.captionMed}
`;