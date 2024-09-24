import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import highlight_long from '@/assets/svgs/event/highlight_long.svg';
import highlight_short from '@/assets/svgs/event/highlight_short.svg';

// 홍대 내부 아닌 경우 팝업창
export const LocationErrorBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <Title>
        {t(`event.error.location.title1`)}
        <br />
        <HighlitedText>
          <LongHighlight src={highlight_long} alt="highlight_long" loading="lazy" />

          {t(`event.error.location.title2`)}
        </HighlitedText>
        {t(`event.error.location.title3`)}
      </Title>
      <Description>
        {t(`event.error.location.description1`)}
        <br />
        {t(`event.error.location.description2`)}
      </Description>
      <CloseButton
        onClick={() => {
          navigate('/event');
        }}
      >
        <p>{t(`event.error.close`)}</p>
      </CloseButton>
    </ErrorContainer>
  );
};

// 중복 응모 시 팝업창
export const DuplicationErrorBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <Title>
        <HighlitedText>
          {t(`event.error.duplicate.title1`)}
          <ShortHighlight src={highlight_short} alt="highlight_short" loading="lazy" />
        </HighlitedText>
        {t(`event.error.duplicate.title2`)}
      </Title>

      <Description>
        {t(`event.error.duplicate.description1`)}
        <br />
        {t(`event.error.duplicate.description2`)}
      </Description>
      <CloseButton
        onClick={() => {
          navigate('/event');
        }}
      >
        <p>{t(`event.error.close`)}</p>
      </CloseButton>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.3rem;
  padding: 2.4rem;
  border-radius: 1rem;
  border: 1px solid var(---on, #cdff3f);
  background: ${(props) => props.theme.colors.gray90};
  z-index: 1000;
`;

const Title = styled.div`
  ${(props) => props.theme.fontStyles.basic.headline5}
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const HighlitedText = styled.span`
  ${(props) => props.theme.fontStyles.basic.headline5}
  color: ${(props) => props.theme.colors.white};
  position: relative;
  z-index: 100;
`;

const LongHighlight = styled.img`
  width: 100%;
  height: 1.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const ShortHighlight = styled.img`
  width: 8rem;
  height: 1.2rem;
  position: absolute;
  bottom: 0;
  right: 0.2rem;
  z-index: 10;
`;

const EnHighlight = styled.img`
  width: 17rem;
  height: 1.2;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const Description = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Reg}
  color: ${(props) => props.theme.colors.gray30};
  text-align: center;
  padding: 1.6rem 0;
`;

const CloseButton = styled.button`
  display: flex;
  width: 27.5rem;
  padding: 1.2rem 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.gray100};

  p {
    ${(props) => props.theme.fontStyles.basic.body1Bold}
    color: ${(props) => props.theme.colors.white};
    text-align: center;
  }
`;
