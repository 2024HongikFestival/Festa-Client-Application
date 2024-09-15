// 대동제 플리마켓 상세 페이지
// url: /fleamarket/{market-id}

import React from 'react';
import styled from 'styled-components';
// import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';
import { useParams } from 'react-router-dom';
import { FleamarketDetailList } from '@/constants/booth/fleamarketDetailList';
import FleamarketTop from '@/components/booth/FleamarketTop';
import FleamarketEvent from '@/components/booth/FleamarketEvent';
import FleamarketBottom from '@/components/booth/FleamarketBottom';
import PriceTable from '@/components/booth/PriceTable';
import RecordList from '@/components/booth/RecordList';
import { useTranslation } from 'react-i18next';

const FleamarketDetail = () => {
  const { t } = useTranslation();
  const { marketId } = useParams();
  const fleamarketDetailList = FleamarketDetailList(t);
  const item = fleamarketDetailList[`${marketId}`];
  // const item = fleamarketDetailList.${marketId};
  // const item = fleamarketDetailList[marketId];
  const isSpecialMarket = marketId === 'kawaii' || marketId === 'henna';

  return (
    <Container>
      <PageTitle>
        {item.name.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </PageTitle>
      {/* 마켓 소개 컴포넌트 */}
      <ContentContainer>
        <TextContainer>
          {item.intro.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </TextContainer>
      </ContentContainer>
      {/* 탑 이미지 컴포넌트 (상수좌판, 홍입 하입보이 마켓)) */}
      {(marketId === 'sangsu' || marketId === 'hypeBoy') && <FleamarketTop item={item.topImg} />}
      {/* 상수좌판 레코드 목록 컴포넌트 */}
      {marketId === 'sangsu' && <RecordList record={item.record} />}
      {/* 가격표 컴포넌트 */}
      {marketId === 'hypeBoy' && <PriceTable bottomImg={item.bottomImg} />}
      {/* 이벤트 소개 컴포넌트 */}
      <FleamarketEvent />
      {/* 판매 제품 사진 컴포넌트 */}
      {item.goods && item.goods.length > 0 && (
        <GoodsWrapper $isSpecialMarket={isSpecialMarket}>
          {item.goods.map((good, index) => (
            <Goods key={index}>
              <ExampleImg src={good.img} alt={good.name} />
              <GoodsInfo>
                <Name>{good.name}</Name>
                <Price>₩{good.price.toLocaleString()}</Price>
              </GoodsInfo>
            </Goods>
          ))}
        </GoodsWrapper>
      )}
      {/* 밑부분 추가 텍스트 컴포넌트 */}
      {(marketId === 'henna' || marketId === 'kawaii') && <FleamarketBottom item={item} />}
    </Container>
  );
};

export default FleamarketDetail;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.4rem;
  min-height: 100vh;
`;

const PageTitle = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2.8rem;
  ${(props) => props.theme.fontStyles.main.headline2};
  text-align: center;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${({ theme }) => theme.colors.gray90};
  text-align: center;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const GoodsWrapper = styled.div`
  margin-top: ${({ $isSpecialMarket }) => ($isSpecialMarket ? '1.6rem' : '2.8rem')};
  width: 33.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem; // 세로 간격 1.6rem, 가로 간격 1.2rem
  justify-content: space-between; // 아이템들을 양쪽 끝으로 정렬
`;

const Goods = styled.div`
  width: 16rem;
  /* height: 22.5rem; */
  height: auto;
  border-radius: 1.6rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  background-color: white;

  &:last-child:nth-child(odd) {
    margin-right: auto;
    margin-left: 0;
  }
`;

const ExampleImg = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 0.8rem;
`;

const GoodsInfo = styled.div`
  width: 13.6rem;
  /* height: 4.9rem; */
  height: auto;
  gap: 0.4rem;
`;

const Name = styled.div`
  width: 14rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  margin-bottom: 0.4rem;
`;

const Price = styled.div`
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
