// 와디페 프로모션
// url: /flame/promotion

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import React from 'react';
import styled from 'styled-components';

const PromotionContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.wdfHeadline3};
`;
const Promotion = styled.div``;
const ImageContainer = styled.div`
  width: 33.5rem; /* 335px -> 33.5rem */
  height: 29.6rem;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 100%) 1;
  /* box-shadow: 0rem 0rem 0.5rem 0rem rgba(255, 255, 255, 0.25); */
`;

const FlamePromotionPage = () => {
  return (
    <>
      <Header></Header>
      <PromotionContainer>
        <Title>프로모션</Title>
        <Promotion>
          <ImageContainer>{/* <PromotionImage /> */}</ImageContainer>
          {/* <PromotionText>글이 추가될 수 있습니다.</PromotionText> */}
        </Promotion>
      </PromotionContainer>
      <Footer></Footer>
    </>
  );
};

export default FlamePromotionPage;
