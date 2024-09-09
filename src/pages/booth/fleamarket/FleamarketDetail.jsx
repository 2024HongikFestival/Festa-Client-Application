// 대동제 플리마켓 상세 페이지
// url: /fleamarket/{market-id}

import React from 'react';
import styled, { css } from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';
import { useParams } from 'react-router-dom';
import { fleamarketDetailList } from '@/constants/booth/fleamarketDetailList';
import FleamarketEvent from '@/components/booth/FleamarketEvent';

const FleamarketDetail = () => {
  const { marketId } = useParams();
  const item = fleamarketDetailList[marketId];

  return (
    <Container>
      <PageTitle title={item.name} />
      {/* 마켓 소개 컴포넌트 */}
      <ContentContainer>
        <TextContainer>
          {item.intro.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </TextContainer>
      </ContentContainer>
      {/* 이벤트 소개 컴포넌트 */}
      <FleamarketEvent which={item.name} />
      {/* 판매 제품 사진 컴포넌트 */}
      <GoodsWrapper marketId={marketId}>
        {item.goods?.map((good, index) => (
          <Goods key={index}>
            <ExampleImg src={good.img} alt={good.name} />
            <GoodsInfo>
              <Name>{good.name}</Name>
              <Price>₩{good.price.toLocaleString()}</Price>
            </GoodsInfo>
          </Goods>
        ))}
      </GoodsWrapper>
    </Container>
  );
};

export default FleamarketDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 28.3rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${({ theme }) => theme.colors.gray90};
  text-align: center;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const GoodsWrapper = styled.div`
  margin-top: ${({ marketId }) => (marketId === 'kawaii' || marketId === 'henna' ? '1.6rem' : '2.8rem')};
  width: 33.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem; // 세로 간격 1.6rem, 가로 간격 1.2rem
  justify-content: space-between; // 아이템들을 양쪽 끝으로 정렬
`;

const Goods = styled.div`
  width: 16rem;
  height: 22.5rem;
  border-radius: 1.6rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

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
  height: 4.9rem;
  gap: 0.4rem;
`;

const Name = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
`;

const Price = styled.p`
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
