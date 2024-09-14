import React from 'react';
import styled, { css } from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';
import wow from '@/assets/webps/booth/ranking/wow.webp';
import first from '@/assets/svgs/booth/1st.svg';
import second from '@/assets/svgs/booth/2nd.svg';
import third from '@/assets/svgs/booth/3rd.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';
import Kind123 from '@/components/booth/Kind123';
import PropTypes from 'prop-types';
import Kind122 from '@/components/booth/Kind122';
import Kind111 from '@/components/booth/Kind111';
import Kind113 from '@/components/booth/Kind113';
import { useTranslation } from 'react-i18next';

Ranking.propTypes = {
  kind: PropTypes.string.isRequired,
};

export default function Ranking({ kind }) {
  const { t, i18n } = useTranslation();
  return (
    <ContentContainer>
      <RankingContainer>
        <InfoText>
          <Span>{t('booth.ranking.title1')}</Span>
          {t('booth.ranking.title2')}
        </InfoText>
        <GuideWrapper>
          <IconWrapper>
            <Icon src={error} alt="error" />
          </IconWrapper>
          <Caption>
            {t('booth.ranking.info')
              .split('\n')
              .map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </Caption>
        </GuideWrapper>
        {/* 주점별 랭킹 순위 부분 */}
        <Kind123 />
        {/* <Kind122 /> */}
        {/* <Kind111 /> */}
        {/* <Kind113 /> */}
      </RankingContainer>
    </ContentContainer>
  );
}

const RankingContainer = styled.div`
  width: 30.5rem;
  height: 43.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`;

const InfoText = styled.div`
  margin-bottom: 0.8rem;
  text-align: center;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.hongikBlue};
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const IconWrapper = styled.div`
  width: 1.536rem;
  height: 1.536rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0.4rem;
`;

const Icon = styled.img`
  width: 1.536rem;
  height: 1.536rem;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Caption = styled.div`
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray40};
  text-align: center;
`;
