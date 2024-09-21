import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import { productsData } from '@/constants/wdfPromotion/data'; // js 파일에서 데이터 import

const FlamePromotionPage = () => {
  const { t } = useTranslation();

  return (
    <PromotionContainer>
      <Title>{t('flamePromotionPage.title')}</Title>
      <Promotion>
        {productsData.products.map((product, index) => {
          return (
            <Card key={product.id} data-aos={index === 0 ? '' : 'zoom-in-up'}>
              <ImageContainer>
                <Image
                  src={product.image} // 이미지 바로 사용
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  top={product.imageTop}
                />
              </ImageContainer>
              <Description>
                <Text>{t(`flamePromotionPage.products.${product.name}`)}</Text>
              </Description>
            </Card>
          );
        })}
      </Promotion>
    </PromotionContainer>
  );
};

export default FlamePromotionPage;

const FlamePromotionPage = () => {
  const { t } = useTranslation();

  const imageMap = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
  };

  return (
    <PromotionContainer>
      <Title>{t('flamePromotionPage.title')}</Title>
      <Promotion>
        {productsData.products.map((product, index) => {
          return (
            <Card key={product.id} data-aos={index === 0 ? '' : 'zoom-in-up'}>
              <ImageContainer>
                <Image
                  src={imageMap[product.image]}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  top={product.imageTop}
                />
              </ImageContainer>
              <Description>
                <Text>{t(`flamePromotionPage.products.${product.name}`)}</Text>
              </Description>
            </Card>
          );
        })}
      </Promotion>
    </PromotionContainer>
  );
};

export default FlamePromotionPage;

const PromotionContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 4.8rem;
  gap: 4.8rem;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.flame.headline3};
`;

const Promotion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 30.7rem;
  border: 0.1rem solid transparent;
  border-image: linear-gradient(to bottom, #df2121 0%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%) 1;
  align-self: stretch;
  flex-shrink: 0;
`;

const ImageContainer = styled.div`
  width: 33.3rem;
  height: 23.6rem;
  background: linear-gradient(180deg, rgba(242, 13, 13, 0.25) 0.07%, rgba(255, 255, 255, 0.02) 112.68%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Description = styled.div`
  height: 8.7rem;
  position: absolute;
  bottom: 0;
  left: 0.1rem;
  right: 0.1rem;
  background-color: ${(props) => props.theme.colors.flameSubBackgroundColor};
  backdrop-filter: blur(0.6rem);
  padding: 1.6rem 0;
  padding-left: 1.6rem;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
`;
