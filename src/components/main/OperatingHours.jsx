import { useEffect } from 'react';
import { styled, css } from 'styled-components';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const aboutOperatingHours = [
  {
    title: 'main.operating1',
    time: 'main.operatinghours1',
    kind: '플리마켓',
  },
  {
    title: 'main.operating2',
    time: 'main.operatinghours2',
    kind: '주점',
  },
  {
    title: 'main.operating3',
    time: 'main.operatinghours3',
    kind: '와디페',
  },
];

export default function OperatingHours() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container data-aos="fade-up" data-aos-delay="400">
      <HoursTitle>{t('main.operatingHours')}</HoursTitle>
      <InfoWrapper>
        {aboutOperatingHours.map((item, index) => (
          <InfoComp key={index}>
            <Title kind={item.kind}>{t(item.title)}</Title>
            <InfoTextContainer kind={item.kind}>
              <Text>{t(item.time)}</Text>
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
  margin-top: 9.6rem;
  margin-bottom: 9.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HoursTitle = styled.div`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 4.2rem;
  letter-spacing: -0.001rem;
  text-align: center;
  font-family: 'SCoreDream', sans-serif;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0px 0px 20px ${(props) => props.theme.colors.hongikSkyBlue};
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
  background-color: ${(props) => props.theme.colors.white};
`;

const Title = styled.div`
  height: 6.5rem;
  margin-bottom: 1.9rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.main.headline6}
  line-height: 120%;
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
