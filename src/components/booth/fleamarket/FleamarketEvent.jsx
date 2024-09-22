import styled from 'styled-components';
import React from 'react';
import ContentContainer from '@/components/common/ContentContainer';
import error from '@/assets/webps/booth/icon/error.webp';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FleamarketEvent() {
  const { marketId } = useParams();
  const { t } = useTranslation();

  if (marketId === 'kawaii') {
    return (
      <Container>
        <ContentContainer>
          <EventTextContainer>
            <EventTitle>Event 🎁</EventTitle>
            <EventText>
              <Span>
                {t('fleamarket.detail.4.event1')}
                <br />
                {t('fleamarket.detail.4.event2')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{t('fleamarket.detail.4.event3')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{t('fleamarket.detail.4.event4')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{t('fleamarket.detail.4.event5')}
              </Span>
            </EventText>
            <InfoText>
              <ErrorIcon src={error} alt="error" />
              {t('fleamarket.detail.4.event6')}
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
                {t('fleamarket.detail.5.event1')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; {t('fleamarket.detail.5.event2')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; {t('fleamarket.detail.5.event3')}
              </Span>
              <Span> {t('fleamarket.detail.5.event4')}</Span>
              <Span>
                {t('fleamarket.detail.5.event5')}
                <br />
                &nbsp;• &nbsp; {t('fleamarket.detail.5.event6')}
                <br />
                &nbsp;• &nbsp; {t('fleamarket.detail.5.event7')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; {t('fleamarket.detail.5.event8')}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; {t('fleamarket.detail.5.event9')}
              </Span>
            </EventText>
            <InfoText>
              <ErrorIcon src={error} alt="error" />
              {t('fleamarket.detail.5.event10')}
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
  height: 2rem;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  color: ${({ theme }) => theme.colors.gray40};
`;

const ErrorIcon = styled.img`
  width: 1.2rem;
  height: 1.232rem;
  margin-right: 0.8rem;
`;
