import React, { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';

const Kind123 = React.lazy(() => import('@/components/booth/ranking/Kind123'));
const Kind122 = React.lazy(() => import('@/components/booth/ranking/Kind122'));
const Kind111 = React.lazy(() => import('@/components/booth/ranking/Kind111'));
const Kind113 = React.lazy(() => import('@/components/booth/ranking/Kind113'));

import { axiosInstance } from '@/api/axios';

export default function Ranking() {
  const [rankData, setRankData] = useState([]);
  const { t } = useTranslation();

  const renderRankingComponent = useMemo(() => {
    if (rankData.length === 0) return null;

    const firstPlaceCount = rankData.filter((item) => item.rank === 1).length;
    const secondPlaceCount = rankData.filter((item) => item.rank === 2).length;
    const thirdPlaceCount = rankData.filter((item) => item.rank === 3).length;

    if (firstPlaceCount === 1 && secondPlaceCount === 1 && thirdPlaceCount === 1) {
      return <Kind123 data={rankData} />;
    } else if (firstPlaceCount === 1 && secondPlaceCount === 2 && thirdPlaceCount === 0) {
      return <Kind122 data={rankData} />;
    } else if (firstPlaceCount === 2 && thirdPlaceCount === 1) {
      return <Kind113 data={rankData} />;
    } else if (firstPlaceCount === 3) {
      return <Kind111 data={rankData} />;
    } else {
      return null;
    }
  }, [rankData]);

  const getRankingInfo = async () => {
    try {
      const response = await axiosInstance.get(`/booths/ranking`);
      if (response.status === 200) {
        const sortedData = response.data.data.sort((a, b) => b.totalLike - a.totalLike);

        const rankedData = sortedData.map((item, index, array) => {
          if (index === 0) {
            // 첫 번째 아이템은 1등
            item.rank = 1;
          } else if (item.totalLike === array[index - 1].totalLike) {
            // 이전 아이템과 같은 totalLike 값을 가지고 있으면 동일한 랭킹
            item.rank = array[index - 1].rank;
          } else {
            // 그렇지 않으면 현재 인덱스에 1을 더해 랭크 부여
            item.rank = index + 1;
          }
          return item;
        });
        setRankData(rankedData);
      }
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    getRankingInfo();
  }, []);

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
        <Suspense fallback={<></>}>{renderRankingComponent}</Suspense> {/* 함수 호출 X */}
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
