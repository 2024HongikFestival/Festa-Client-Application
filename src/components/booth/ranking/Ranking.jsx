import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';

import Kind123 from '@/components/booth/ranking/Kind123';
import Kind122 from '@/components/booth/ranking/Kind122';
import Kind111 from '@/components/booth/ranking/Kind111';
import Kind113 from '@/components/booth/ranking/Kind113';
import { useTranslation } from 'react-i18next';
import { axiosInstance } from '@/api/axios';

export default function Ranking() {
  const [rankData, setRankData] = useState([]);
  const { t } = useTranslation();

  const dummyResponse = {
    status: 200,
    message: '주점 랭킹 조회 성공',
    data: {
      data: [
        {
          boothId: 16,
          boothName: '자무;자전에서 음주가무',
          totalLike: 599,
        },
        {
          boothId: 17,
          boothName: '슬램덩크',
          totalLike: 59,
        },
        {
          boothId: 18,
          boothName: '운수 좋은 날',
          totalLike: 59,
        },
      ],
    },
  };

  const renderRankingComponent = () => {
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
      console.log('Unhandled ranking case:', { firstPlaceCount, secondPlaceCount, thirdPlaceCount });
      return null; // 처리되지 않은 케이스
    }
  };

  const getRankingInfo = async () => {
    try {
      const response = await axiosInstance.get(`/booths/ranking`);
      if (response.status === 200) {
        console.log('랭킹 정보', response.data);
        const sortedData = dummyResponse.data.data.sort((a, b) => b.totalLike - a.totalLike);
        console.log('정렬', sortedData);

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
        console.log(rankedData);
      }
    } catch (e) {
      console.log(e);
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
        {renderRankingComponent()}
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
