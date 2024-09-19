import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';
import error from '@/assets/webps/booth/icon/error.webp';
import ContentContainer from '@/components/common/ContentContainer';
import wow from '@/assets/webps/booth/ranking/wow.webp';
import first from '@/assets/svgs/booth/1st.svg';
import second from '@/assets/svgs/booth/2nd.svg';
import third from '@/assets/svgs/booth/3rd.svg';
import heart from '@/assets/webps/booth/icon/heartIcon.webp';
import Kind123 from '@/components/booth/ranking/Kind123';
import PropTypes from 'prop-types';
import Kind122 from '@/components/booth/ranking/Kind122';
import Kind111 from '@/components/booth/ranking/Kind111';
import Kind113 from '@/components/booth/ranking/Kind112';
import Kind112 from '@/components/booth/ranking/Kind122';
import { useTranslation } from 'react-i18next';
import { axiosInstance } from '@/api/axios';

Ranking.propTypes = {
  kind: PropTypes.string.isRequired,
};

export default function Ranking({ kind }) {
  const [rankData, setRankData] = useState([]);
  const { t } = useTranslation();

  const renderRankingComponent = () => {
    if (rankData.length === 0) return null;

    const firstPlaceCount = rankData.filter((item) => item.rank === 1).length;
    const secondPlaceCount = rankData.filter((item) => item.rank === 2).length;
    const thirdPlaceCount = rankData.filter((item) => item.rank === 3).length;

    if (firstPlaceCount === 1 && secondPlaceCount === 1 && thirdPlaceCount === 1) {
      // 1등 1명, 2등 1명, 3등 1명

      return <Kind111 data={rankData} />;
    } else if (firstPlaceCount === 1 && secondPlaceCount === 2) {
      // 1등 1명, 2등 2명
      return <Kind122 data={rankData} />;
    } else if (firstPlaceCount === 1 && secondPlaceCount === 1 && thirdPlaceCount === 2) {
      // 1등 1명, 2등 1명, 3등 2명
      return <Kind112 data={rankData} />;
    } else if (firstPlaceCount === 1 && secondPlaceCount === 3) {
      // 1등 1명, 2등 3명
      return <Kind123 data={rankData} />;
    } else {
      return null; // 처리되지 않은 케이스
    }
  };

  const response2 = {
    status: 200,
    message: '주점 랭킹 조회 성공',
    data: [
      {
        boothId: 37,
        boothName: '자무;자전에서 음주가무',
        totalLike: 765,
      },
      {
        boothId: 42,
        boothName: '슬램덩크',
        totalLike: 765,
      },
      {
        boothId: 51,
        boothName: '운수 좋은 날',
        totalLike: 59,
      },
    ],
  };

  const getRankingInfo = async () => {
    try {
      const response = await axiosInstance.get(`/booths/ranking`);
      if (response.status === 200) {
        console.log('랭킹 정보', response.data);
        const sortedData = response.data.data.sort((a, b) => b.totalLike - a.totalLike);
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
        {/* <Kind123 /> */}
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
