// 대동제 플리마켓 상세 페이지
// url: /fleamarket/{market-id}

import React from 'react';
import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import ContentContainer from '@/components/common/ContentContainer';

const FleamarketDetail = () => {
  return (
    <Container>
      <PageTitle title="플리마켓명" />
      <ContentContainer>
        <TextContainer>텍스트영역텍스트영역텍스트영역텍스트영역텍스트영역텍스트영역텍스트영역텍스트영역</TextContainer>
      </ContentContainer>
      <GoodsWrapper>
        <Goods>
          <ExampleImg />
          <GoodsInfo>
            <Name>상품명</Name>
            <Price>₩9,900</Price>
          </GoodsInfo>
        </Goods>
        <Goods>
          <ExampleImg />
          <GoodsInfo>
            <Name>상품명</Name>
            <Price>₩9,900</Price>
          </GoodsInfo>
        </Goods>
        <Goods>
          <ExampleImg />
          <GoodsInfo>
            <Name>상품명</Name>
            <Price>₩9,900</Price>
          </GoodsInfo>
        </Goods>
        <Goods>
          <ExampleImg />
          <GoodsInfo>
            <Name>상품명</Name>
            <Price>₩9,900</Price>
          </GoodsInfo>
        </Goods>
        <Goods>
          <ExampleImg />
          <GoodsInfo>
            <Name>상품명</Name>
            <Price>₩9,900</Price>
          </GoodsInfo>
        </Goods>
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
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
`;

const GoodsWrapper = styled.div`
  margin-top: 3.2rem;
  width: 33.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem; // 세로 간격 1.6rem, 가로 간격 1.2rem
  justify-content: space-between; // 아이템들을 양쪽 끝으로 정렬
`;

const Goods = styled.div`
  width: 16rem;
  height: 22.5rem;
  border-radius: 1.2rem;
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
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

const ExampleImg = styled.div`
  width: 14rem;
  height: 14rem;
  background-color: rgba(217, 217, 217, 1);
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
